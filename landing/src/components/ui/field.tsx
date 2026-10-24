import type { InputHTMLAttributes, ReactNode } from "react";
import { useId } from "react";

/**
 * Champ de formulaire : libelle lie, erreur annoncee, aide optionnelle.
 * Un placeholder n'est pas un libelle, donc il n'y en a pas ici.
 */
export function Field({
  label,
  erreur,
  aide,
  ...reste
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  erreur?: string;
  aide?: ReactNode;
}) {
  const id = useId();
  const idErreur = `${id}-erreur`;
  const idAide = `${id}-aide`;
  const decrit = [erreur ? idErreur : null, aide ? idAide : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(erreur)}
        aria-describedby={decrit || undefined}
        className={
          "mt-2 w-full rounded-xl border bg-papier px-4 py-3 outline-none " +
          (erreur ? "border-terre" : "border-encre/25")
        }
        {...reste}
      />
      {aide && (
        <p id={idAide} className="mt-1.5 text-sm text-encre/60">
          {aide}
        </p>
      )}
      {erreur && (
        <p id={idErreur} role="alert" className="mt-1.5 text-sm text-terre">
          {erreur}
        </p>
      )}
    </div>
  );
}
