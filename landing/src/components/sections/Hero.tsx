import { Atelier } from "../../illustrations/atelier";
import { marque, reperes } from "../../lib/content";
import { ButtonLink } from "../ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-encre/15">
      <div className="mx-auto max-w-page px-6 pb-0 pt-10 sm:pt-14">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-terre">
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 rounded-full bg-terre"
          />
          Atelier de poterie · {marque.lieu}
        </p>

        <div className="mt-6 grid items-end gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="font-titre text-[clamp(2.75rem,10vw,6rem)] leading-[0.92]">
              Deux heures,
              <br />
              une pièce,
              <span className="text-terre"> vos mains.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg text-encre/75">
              {marque.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <ButtonLink href="#reserver">{marque.action}</ButtonLink>
              {/* etiquette de cuisson, posee de travers comme sur un four */}
              <span className="-rotate-3 rounded-sm border border-dashed border-encre/35 bg-kraft px-3 py-1.5 text-xs uppercase tracking-widest">
                Four nº 2 · samedi 10 h
              </span>
            </div>
          </div>

          <Atelier className="w-full" />
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-8 border-t border-encre/15 py-8 sm:grid-cols-3">
          {reperes.map((repere) => (
            <div key={repere.valeur} className="reveal">
              <dt className="font-titre text-5xl text-terre">{repere.valeur}</dt>
              <dd className="mt-1 text-sm text-encre/70">{repere.texte}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
