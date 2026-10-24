import { useEffect } from "react";

/**
 * Apparitions en cascade.
 *
 * Un seul observateur pour toute la page, aucun ecouteur de defilement.
 * La classe .anime n'est posee que si le script tourne : sans lui, le
 * contenu est deja visible, ce qui evite la page blanche en cas
 * d'echec du JavaScript.
 *
 * Le reglage de mouvement reduit est ecoute en direct : si le visiteur
 * le change, la page s'y conforme sans rechargement.
 */
export function useReveal() {
  useEffect(() => {
    // Garde : environnement sans matchMedia ou sans observateur
    // d'intersection. Le contenu reste alors visible, sans animation.
    if (
      typeof window.matchMedia !== "function" ||
      typeof window.IntersectionObserver !== "function"
    ) {
      return;
    }

    const racine = document.documentElement;
    const requete = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cibles = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    function appliquer() {
      if (requete.matches) {
        racine.classList.remove("anime");
        cibles.forEach((c) => c.classList.add("vu"));
      } else {
        racine.classList.add("anime");
      }
    }

    appliquer();
    requete.addEventListener("change", appliquer);

    const observateur = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          if (!entree.isIntersecting) return;
          entree.target.classList.add("vu");
          // Une entree ne se rejoue pas : on cesse d'observer.
          observateur.unobserve(entree.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    cibles.forEach((cible) => observateur.observe(cible));

    return () => {
      observateur.disconnect();
      requete.removeEventListener("change", appliquer);
      racine.classList.remove("anime");
    };
  }, []);
}
