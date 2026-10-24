import { bandeau } from "../../lib/content";

/**
 * Bandeau defilant. Decoratif, donc masque aux lecteurs d'ecran, et
 * immobile des que le visiteur reduit les animations : la classe
 * .anime n'est posee que dans ce cas.
 */
export function Bandeau() {
  const suite = [...bandeau, ...bandeau];
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-b border-encre/15 bg-terre py-3 text-papier"
    >
      <div className="defile flex w-max gap-10 whitespace-nowrap text-sm uppercase tracking-[0.3em]">
        {suite.map((mot, i) => (
          <span key={`${mot}-${i}`} className="flex items-center gap-10">
            {mot}
            <span aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
