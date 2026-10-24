import { marque, reperes } from "../../lib/content";
import { ButtonLink } from "../ui/button";

export function Hero() {
  return (
    <section className="border-b border-encre/15">
      <div className="mx-auto max-w-page px-6 pb-14 pt-10 sm:pt-16">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-terre">
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 rounded-full bg-terre"
          />
          Atelier de poterie · {marque.lieu}
        </p>

        <h1 className="mt-7 font-titre text-[clamp(2.75rem,11vw,6.5rem)] leading-[0.95]">
          Deux heures,
          <br />
          une pièce,
          <span className="text-terre"> vos mains.</span>
        </h1>

        <div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-lg text-encre/75">{marque.description}</p>
          <ButtonLink href="#reserver">{marque.action}</ButtonLink>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-8 border-t border-encre/15 pt-8 sm:grid-cols-3">
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
