import { palette } from "./palette";
import { Pot, type Etape } from "./pot";

/**
 * Les scenes du parcours. Chacune raconte un geste : les mains sur la
 * terre, le tour qui tourne, le four, l'etagere. Le meme pot les
 * traverse, a quatre etats.
 *
 * Les mains sont dessinees en formes pleines, pas en arcs : deux arcs
 * de part et d'autre d'un pot lisent comme un pont, pas comme des
 * mains.
 */

function Ombre() {
  return <ellipse cx="110" cy="178" rx="72" ry="9" fill={palette.ombre} opacity="0.14" />;
}

function Potier() {
  // Silhouette de profil, assise au tour. Une silhouette pleine se lit
  // mieux que deux mains flottantes : la premiere version montrait deux
  // formes detachees qu'on prenait pour des feuilles.
  return (
    <g fill={palette.encre} opacity="0.9">
      <circle cx="176" cy="66" r="15" />
      <path d="M186 80c14 6 22 20 22 38v44h-44v-40c0-18 8-36 22-42z" />
      {/* le bras tendu vers la terre */}
      <path
        d="M168 96c-18 4-34 12-44 22"
        stroke={palette.encre}
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function Etabli() {
  return (
    <g filter="url(#grain)">
      <rect x="46" y="156" width="128" height="13" rx="6" fill={palette.sable} />
      <rect x="62" y="169" width="12" height="16" rx="3" fill={palette.ombre} />
      <rect x="146" y="169" width="12" height="16" rx="3" fill={palette.ombre} />
    </g>
  );
}

export function Scene({ etape }: { etape: Etape }) {
  return (
    <svg
      viewBox="0 0 220 200"
      className="h-44 w-full"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <Ombre />

      {etape === 0 && (
        <>
          <Etabli />
          <g transform="translate(52 72)">
            <Pot etape={0} taille={96} />
          </g>
          {/* pain d'argile en attente, et l'outil a fil */}
          <g filter="url(#grain)">
            <rect x="142" y="122" width="44" height="32" rx="6" fill={palette.argile} />
            <path d="M142 134h44" stroke={palette.ombre} strokeWidth="2" opacity="0.4" />
          </g>
          {/* fil a couper, pose sur l'etabli */}
          <g>
            <circle cx="150" cy="168" r="4" fill={palette.ombre} />
            <circle cx="186" cy="162" r="4" fill={palette.ombre} />
            <path d="M150 168q18 -1 36 -6" stroke={palette.ombre} strokeWidth="1.5" fill="none" />
          </g>

        </>
      )}

      {etape === 1 && (
        <>
          <g filter="url(#grain)">
            <ellipse cx="104" cy="158" rx="54" ry="13" fill={palette.sable} />
            <ellipse cx="104" cy="154" rx="54" ry="13" fill={palette.kraft} />
            <rect x="98" y="162" width="12" height="24" rx="4" fill={palette.ombre} />
          </g>
          {/* le tour tourne : trois arcs derriere la girelle */}
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M${50 - i * 9} ${150 - i * 5}a${60 + i * 9} ${14 + i * 2} 0 0 0 ${120 + i * 18} 0`}
              stroke={palette.argile}
              strokeWidth="2"
              fill="none"
              opacity={0.45 - i * 0.13}
            />
          ))}
          <g transform="translate(58 68)">
            <Pot etape={1} taille={96} />
          </g>
          <Potier />
        </>
      )}

      {etape === 2 && (
        <>
          <circle cx="110" cy="118" r="76" fill="url(#halo)" />
          <g filter="url(#grain)">
            <path d="M48 166v-42c0-26 28-46 62-46s62 20 62 46v42z" fill={palette.brique} />
            <path
              d="M62 124c12-9 28-14 48-14s36 5 48 14"
              stroke={palette.ombre}
              strokeWidth="3"
              fill="none"
              opacity="0.35"
            />
            {/* la gueule du four, ouverte */}
            <path d="M80 166v-30c0-14 13-24 30-24s30 10 30 24v30z" fill={palette.encre} />
            <path d="M80 166v-30c0-14 13-24 30-24s30 10 30 24v30z" fill={palette.braise} opacity="0.85" />
          </g>
          {/* la piece, dedans */}
          <g transform="translate(74 100) scale(0.78)">
            <Pot etape={2} taille={96} />
          </g>
          <rect x="38" y="166" width="144" height="11" rx="5" fill={palette.ombre} />
          {/* la flamme, trois langues */}
          <path
            d="M86 164c1-7 5-9 5-14 4 3 5 6 5 10 2-2 3-4 3-7 4 4 6 8 6 11z"
            fill={palette.papier}
            opacity="0.5"
          />
          <path
            d="M124 164c1-6 4-8 4-12 3 2 4 5 4 8 2-2 2-3 2-6 3 4 5 7 5 10z"
            fill={palette.papier}
            opacity="0.4"
          />
        </>
      )}

      {etape === 3 && (
        <>
          <g filter="url(#grain)">
            <rect x="34" y="92" width="152" height="9" rx="4" fill={palette.kraft} />
            <ellipse cx="58" cy="85" rx="15" ry="8" fill={palette.sable} />
            <ellipse cx="166" cy="85" rx="15" ry="8" fill={palette.argile} />
            <rect x="34" y="162" width="152" height="9" rx="4" fill={palette.ombre} />
          </g>
          <g transform="translate(62 66)">
            <Pot etape={3} taille={96} emaille />
          </g>
          {/* le paquet en papier kraft, ficelle comprise */}
          <g transform="translate(146 122) rotate(-6)">
            <rect x="0" y="4" width="46" height="36" rx="5" fill={palette.kraft} stroke={palette.ombre} strokeWidth="1.5" />
            <path d="M23 4v36M0 22h46" stroke={palette.terre} strokeWidth="2" />
            <path d="M23 4c-5-6-11-6-12-1 0 4 6 5 12 1zM23 4c5-6 11-6 12-1 0 4-6 5-12 1z" fill={palette.terre} />
          </g>
        </>
      )}
    </svg>
  );
}
