import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

/**
 * Primitive de bouton. Aucun composant de section ne redessine un
 * bouton a la main : tout passe par ici.
 *
 * Un bouton qui mene quelque part reste un lien dans le document, pour
 * qu'il s'ouvre dans un nouvel onglet et se copie normalement.
 */
const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 " +
  "font-medium transition-colors disabled:opacity-60";

const variantes = {
  pleine: "bg-terre text-papier hover:bg-encre",
  ligne: "border border-encre/25 text-encre hover:border-encre",
} as const;

type Variante = keyof typeof variantes;

export function Button({
  variante = "pleine",
  className = "",
  ...reste
}: ButtonHTMLAttributes<HTMLButtonElement> & { variante?: Variante }) {
  return (
    <button className={`${base} ${variantes[variante]} ${className}`} {...reste} />
  );
}

export function ButtonLink({
  variante = "pleine",
  className = "",
  ...reste
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variante?: Variante }) {
  return <a className={`${base} ${variantes[variante]} ${className}`} {...reste} />;
}
