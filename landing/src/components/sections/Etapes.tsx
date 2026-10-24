import { etapes } from "../../lib/content";

export function Etapes() {
  return (
    <section
      aria-labelledby="etapes-titre"
      className="border-b border-encre/15"
    >
      <div className="mx-auto max-w-page px-6 py-16">
        <h2 id="etapes-titre" className="font-titre text-4xl sm:text-5xl">
          Comment se passe une séance
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-3">
          {etapes.map((etape) => (
            <li key={etape.id} className="reveal">
              <p className="font-titre text-3xl text-terre">{etape.numero}</p>
              <div className="mt-3 h-px w-12 bg-terre" />
              <h3 className="mt-5 text-xl font-medium">{etape.titre}</h3>
              <p className="mt-2 text-encre/75">{etape.texte}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
