import { useEffect, useRef, useState } from "react";

import { Pot } from "../illustrations/pot";
import { Scene } from "../illustrations/scenes";
import { etapes } from "../lib/content";
import { palette } from "../illustrations/palette";

const PAS = 16; // espacement des pointilles, en pixels

/**
 * Le parcours de la seance : les quatre etapes reliees par un chemin en
 * pointilles, que la piece suit au fil du defilement.
 *
 * Trois precautions, parce qu'un effet de ce genre est le plus simple
 * moyen de rendre une page lente ou inutilisable :
 *
 *   - le trace se calcule a partir de la position reelle des jalons,
 *     mesuree une fois puis a chaque redimensionnement, jamais devinee ;
 *   - le defilement ne declenche qu'une seule image par cycle, via
 *     requestAnimationFrame, et chaque pointille est simplement montre
 *     ou cache plutot que de redessiner le chemin ;
 *   - en mouvement reduit, le chemin est entierement visible, la piece
 *     se pose a la fin, et plus rien ne bouge.
 *
 * Sans JavaScript, les quatre etapes restent lisibles : le chemin est
 * un decor, pas un contenu.
 */
export function Parcours() {
  const racine = useRef<HTMLDivElement>(null);
  const chemin = useRef<SVGPathElement>(null);
  const points = useRef<SVGGElement>(null);
  const voyageur = useRef<HTMLDivElement>(null);
  const [trace, setTrace] = useState<{ d: string; w: number; h: number } | null>(
    null,
  );

  // 1. Le trace, d'apres la position reelle des jalons.
  useEffect(() => {
    const el = racine.current;
    if (!el) return;

    const mesurer = () => {
      const boite = el.getBoundingClientRect();
      if (boite.width === 0) return;
      const jalons = Array.from(el.querySelectorAll<HTMLElement>("[data-jalon]"));
      if (jalons.length < 2) return;
      const centres = jalons.map((jalon) => {
        const r = jalon.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - boite.left,
          y: r.top + r.height / 2 - boite.top,
        };
      });
      const large = boite.width >= 768;
      const amplitude = large ? 70 : 14;
      let d = `M${centres[0].x.toFixed(1)} ${centres[0].y.toFixed(1)}`;
      for (let i = 1; i < centres.length; i++) {
        const a = centres[i - 1];
        const b = centres[i];
        const dy = b.y - a.y;
        const cote = i % 2 === 0 ? 1 : -1;
        const courbe = Math.min(amplitude, Math.abs(dy) * 0.32);
        d +=
          ` C${(a.x + cote * courbe).toFixed(1)} ${(a.y + dy * 0.45).toFixed(1)}` +
          ` ${(b.x + cote * courbe).toFixed(1)} ${(b.y - dy * 0.45).toFixed(1)}` +
          ` ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
      }
      setTrace({ d, w: boite.width, h: boite.height });
    };

    mesurer();
    if (typeof ResizeObserver !== "function") return;
    const observateur = new ResizeObserver(mesurer);
    observateur.observe(el);
    return () => observateur.disconnect();
  }, []);

  // 2. La piece avance sur le chemin.
  useEffect(() => {
    const el = racine.current;
    const p = chemin.current;
    const g = points.current;
    const v = voyageur.current;
    if (!el || !p || !g || !v || !trace) return;
    // jsdom et les vieux navigateurs n'ont pas la geometrie SVG.
    if (typeof p.getTotalLength !== "function") return;

    const total = p.getTotalLength();
    if (!total) return;
    const anime =
      typeof window.matchMedia === "function" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const disques: SVGCircleElement[] = [];
    for (let at = 0; at <= total; at += PAS) {
      const pt = p.getPointAtLength(at);
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", pt.x.toFixed(2));
      c.setAttribute("cy", pt.y.toFixed(2));
      c.setAttribute("r", "3");
      if (anime) c.setAttribute("visibility", "hidden");
      disques.push(c);
    }
    g.replaceChildren(...disques);

    if (!anime) {
      const fin = p.getPointAtLength(total);
      v.style.transform = `translate3d(${fin.x}px, ${fin.y}px, 0)`;
      return () => g.replaceChildren();
    }

    let montres = 0;
    let image = 0;
    const debutY = p.getPointAtLength(0).y;
    const finY = p.getPointAtLength(total).y;

    const majour = () => {
      image = 0;
      const boite = el.getBoundingClientRect();
      const vise = Math.min(
        finY,
        Math.max(debutY, window.innerHeight * 0.6 - boite.top),
      );
      // Recherche dichotomique de la longueur qui atteint cette hauteur.
      let bas = 0;
      let haut = total;
      for (let i = 0; i < 20; i++) {
        const milieu = (bas + haut) / 2;
        if (p.getPointAtLength(milieu).y < vise) bas = milieu;
        else haut = milieu;
      }
      const at = p.getPointAtLength(bas);
      const devant = p.getPointAtLength(Math.min(total, bas + 2));
      const angle =
        (Math.atan2(devant.y - at.y, devant.x - at.x) * 180) / Math.PI;
      const balance = Math.max(-14, Math.min(14, (angle - 90) * 0.35));
      v.style.transform =
        `translate3d(${at.x.toFixed(1)}px, ${at.y.toFixed(1)}px, 0)` +
        ` rotate(${balance.toFixed(1)}deg)`;

      const atteint = Math.min(disques.length, Math.floor(bas / PAS) + 1);
      for (let i = montres; i < atteint; i++) disques[i].removeAttribute("visibility");
      for (let i = atteint; i < montres; i++) disques[i].setAttribute("visibility", "hidden");
      montres = atteint;
    };

    const auDefilement = () => {
      if (!image) image = requestAnimationFrame(majour);
    };

    majour();
    window.addEventListener("scroll", auDefilement, { passive: true });
    window.addEventListener("resize", auDefilement);
    return () => {
      window.removeEventListener("scroll", auDefilement);
      window.removeEventListener("resize", auDefilement);
      if (image) cancelAnimationFrame(image);
      g.replaceChildren();
    };
  }, [trace]);

  return (
    <section aria-labelledby="parcours-titre" className="border-b border-encre/15">
      <div className="mx-auto max-w-page px-6 py-20">
        <h2 id="parcours-titre" className="font-titre text-4xl sm:text-5xl">
          Le parcours d'une séance
        </h2>
        <p className="mt-3 max-w-md text-encre/70">
          De la boule de terre au bol emballé dans son papier, en deux heures.
        </p>

        <div ref={racine} className="relative mt-14">
          <svg
            aria-hidden="true"
            focusable="false"
            className="pointer-events-none absolute left-0 top-0 overflow-visible"
            width={trace?.w ?? 0}
            height={trace?.h ?? 0}
          >
            {trace && (
              <g fill="none">
                <path ref={chemin} d={trace.d} />
                <g ref={points} fill={palette.argile} />
              </g>
            )}
          </svg>

          <div
            ref={voyageur}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 -ml-7 -mt-7 hidden md:block"
          >
            <Pot etape={3} taille={56} emaille />
          </div>

          <ol className="grid gap-14 md:grid-cols-4">
            {etapes.map((etape, i) => (
              <li key={etape.id} data-jalon className="reveal">
                <Scene etape={i as 0 | 1 | 2 | 3} />
                <p className="mt-4 font-titre text-3xl text-terre">{etape.numero}</p>
                <h3 className="mt-1 text-xl font-medium">{etape.titre}</h3>
                <p className="mt-2 text-encre/75">{etape.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
