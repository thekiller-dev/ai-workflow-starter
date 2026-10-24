import { marque, pied } from "../../lib/content";

export function Pied() {
  return (
    <footer className="border-t border-encre/15">
      <div className="mx-auto grid max-w-page gap-6 px-6 py-12 sm:grid-cols-3">
        <p className="font-titre text-3xl">{marque.nom}</p>
        <div className="text-sm text-encre/70">
          <p>{pied.adresse}</p>
          <p className="mt-1">{pied.horaires}</p>
        </div>
        <p className="text-sm text-encre/60">{pied.credits}</p>
      </div>
    </footer>
  );
}
