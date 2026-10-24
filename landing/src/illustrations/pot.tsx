import { palette } from "./palette";

/**
 * La piece, aux quatre moments de la seance. Un seul composant, un
 * parametre : c'est la meme terre qui change de forme, pas quatre
 * dessins sans rapport.
 *
 * Chaque etat est dessine en trois temps : le corps, l'ombre portee a
 * l'interieur, la levre. Sans la levre, un pot vu de trois quarts
 * ressemble a un seau.
 */
export type Etape = 0 | 1 | 2 | 3;

type Forme = {
  corps: string;
  levre?: { cx: number; cy: number; rx: number; ry: number };
  lumiere: string;
};

const formes: Record<Etape, Forme> = {
  // boule de terre, encore fermee
  0: {
    corps: "M18 52c0-13 10-22 22-22s22 9 22 22-10 20-22 20-22-7-22-20z",
    lumiere: "M27 44c2-7 8-11 14-11",
  },
  // cylindre monte, parois droites
  1: {
    corps: "M26 66V34c0-4 6-7 14-7s14 3 14 7v32c0 5-6 7-14 7s-14-2-14-7z",
    levre: { cx: 40, cy: 34, rx: 14, ry: 4.5 },
    lumiere: "M32 40v24",
  },
  // bol ouvert, parois evasees
  2: {
    corps:
      "M16 38c0-5 11-9 24-9s24 4 24 9c0 7-4 20-10 26-3 4-8 6-14 6s-11-2-14-6c-6-6-10-19-10-26z",
    levre: { cx: 40, cy: 38, rx: 24, ry: 7 },
    lumiere: "M25 46c1 8 4 15 7 19",
  },
  // bol fini, emaille
  3: {
    corps:
      "M12 36c0-6 13-10 28-10s28 4 28 10c0 8-5 22-12 28-4 4-9 6-16 6s-12-2-16-6c-7-6-12-20-12-28z",
    levre: { cx: 40, cy: 36, rx: 28, ry: 8 },
    lumiere: "M22 46c1 9 4 16 8 21",
  },
};

export function Pot({
  etape = 0,
  taille = 96,
  emaille = false,
}: {
  etape?: Etape;
  taille?: number;
  emaille?: boolean;
}) {
  const forme = formes[etape];
  return (
    <svg
      viewBox="0 0 80 84"
      width={taille}
      height={taille}
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="40" cy="76" rx="22" ry="4" fill={palette.ombre} opacity="0.18" />
      <path d={forme.corps} fill={palette.terre} filter="url(#grain)" />
      {forme.levre && (
        <>
          <ellipse {...forme.levre} fill={palette.brique} />
          <ellipse
            cx={forme.levre.cx}
            cy={forme.levre.cy + 1}
            rx={forme.levre.rx - 4}
            ry={Math.max(2, forme.levre.ry - 2.5)}
            fill={palette.ombre}
            opacity="0.55"
          />
        </>
      )}
      <path
        d={forme.lumiere}
        stroke={palette.argile}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.65"
      />
      {emaille && (
        <path
          d="M24 52c6 3 12 4 18 3s10-3 13-5"
          stroke={palette.papier}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
      )}
    </svg>
  );
}
