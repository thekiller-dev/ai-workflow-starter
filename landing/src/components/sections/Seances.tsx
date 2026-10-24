import { seances } from "../../lib/content";

const prix = new Intl.NumberFormat("fr-FR");

export function Seances() {
  return (
    <section
      aria-labelledby="seances-titre"
      className="border-b border-encre/15 bg-encre text-papier"
    >
      <div className="mx-auto max-w-page px-6 py-16">
        <h2 id="seances-titre" className="font-titre text-4xl sm:text-5xl">
          Les séances
        </h2>
        <p className="mt-3 max-w-xl text-papier/70">
          Tarifs fictifs, donnés pour l'exemple. Aucune réservation n'est
          enregistrée sur cette page.
        </p>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-papier/20 sm:grid-cols-3">
          {seances.map((seance) => (
            <li key={seance.id} className="reveal bg-encre p-8">
              <h3 className="font-titre text-3xl">{seance.nom}</h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-papier/60">
                {seance.duree}
              </p>
              <p className="mt-6 font-titre text-4xl text-papier">
                {prix.format(seance.prix)}
                <span className="ml-1 text-base text-papier/70">F CFA</span>
              </p>
              <p className="mt-5 text-papier/80">{seance.texte}</p>
              <p className="mt-5 border-t border-papier/20 pt-4 text-sm text-papier/60">
                {seance.inclus}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
