import { palette } from "./palette";

/**
 * Panorama de l'atelier : le manguier, la maison, l'auvent et ses
 * etageres, le four qui fume, le chemin de terre.
 *
 * Dessine en primitives : aucun fichier image a charger, aucune licence
 * a suivre. La composition se lit de gauche a droite, dans le sens du
 * parcours decrit plus bas dans la page.
 *
 * Decoratif, donc aria-hidden : aucune information n'existe uniquement
 * ici.
 */
export function Atelier({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 430"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMax meet"
    >
      <rect width="900" height="430" fill="url(#ciel)" />
      <circle cx="742" cy="250" r="150" fill="url(#halo)" />

      {/* deux oiseaux, pour que le ciel ne soit pas vide */}
      <path
        d="M128 86c7-7 12-7 18 0 6-7 11-7 18 0M196 60c5-5 9-5 13 0 4-5 8-5 13 0"
        stroke={palette.ombre}
        strokeWidth="2.5"
        fill="none"
        opacity="0.35"
        strokeLinecap="round"
      />

      {/* collines, deux plans */}
      <path
        d="M0 292c110-38 180 10 292-14 112-24 196-48 316-20 78 18 180 26 292 12v160H0z"
        fill={palette.sable}
        opacity="0.55"
      />
      <path
        d="M0 322c130-26 206 6 330-10 124-16 232-26 340-4 86 18 160 20 230 14v108H0z"
        fill={palette.sable}
        opacity="0.75"
      />

      {/* manguier : trois masses, pas une sucette */}
      <g filter="url(#grain)">
        <path
          d="M104 340c2-44-2-72 6-104"
          stroke={palette.ombre}
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M110 268c-14-10-26-12-38-8" stroke={palette.ombre} strokeWidth="6" strokeLinecap="round" fill="none" />
        <ellipse cx="78" cy="214" rx="54" ry="40" fill={palette.feuille} />
        <ellipse cx="136" cy="196" rx="46" ry="36" fill={palette.feuille} />
        <ellipse cx="108" cy="166" rx="40" ry="30" fill={palette.feuille} opacity="0.92" />
        <path
          d="M58 198c14-12 34-16 52-10M106 160c14-6 28-4 38 4"
          stroke={palette.papier}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />
      </g>

      {/* la maison */}
      <g filter="url(#grain)">
        <path d="M236 342V186h248v156z" fill={palette.kraft} />
        {/* toit, avec debord */}
        <path d="M214 192 360 108l146 84-10 18-136-78-136 78z" fill={palette.brique} />
        {/* porte, sous un petit auvent */}
        <rect x="286" y="236" width="68" height="106" rx="5" fill={palette.terre} />
        <rect x="298" y="252" width="44" height="90" rx="4" fill={palette.ombre} opacity="0.32" />
        <circle cx="344" cy="296" r="4" fill={palette.papier} opacity="0.8" />
        <path d="M276 232h88l-10-14h-68z" fill={palette.ombre} opacity="0.5" />
        {/* fenetre a volets */}
        <rect x="398" y="238" width="60" height="48" rx="4" fill={palette.papier} />
        <path d="M428 238v48M398 262h60" stroke={palette.brique} strokeWidth="3.5" />
        <rect x="392" y="286" width="72" height="7" rx="3" fill={palette.brique} />
        <rect x="386" y="234" width="9" height="56" rx="3" fill={palette.terre} />
        <rect x="461" y="234" width="9" height="56" rx="3" fill={palette.terre} />
        {/* enseigne, posee de travers */}
        <g transform="rotate(-3 360 152)">
          <rect x="296" y="132" width="128" height="36" rx="6" fill={palette.encre} />
          <text
            x="360"
            y="157"
            textAnchor="middle"
            fontFamily="Instrument Serif, Georgia, serif"
            fontSize="25"
            letterSpacing="3"
            fill={palette.papier}
          >
            TERRE
          </text>
        </g>
      </g>

      {/* auvent et etageres de sechage, adosses a la maison */}
      <g filter="url(#grain)">
        <path d="M484 222h150l-16 26H484z" fill={palette.brique} />
        <rect x="626" y="246" width="9" height="96" rx="4" fill={palette.ombre} />
        <rect x="500" y="276" width="124" height="8" rx="4" fill={palette.sable} />
        {[510, 552, 594].map((x, i) => (
          <path
            key={x}
            d={`M${x} 276c0-17 7-27 16-27s16 10 16 27z`}
            fill={i === 1 ? palette.argile : palette.terre}
          />
        ))}
        <rect x="500" y="318" width="124" height="8" rx="4" fill={palette.sable} />
        <ellipse cx="528" cy="310" rx="19" ry="10" fill={palette.sable} />
        <ellipse cx="580" cy="310" rx="19" ry="10" fill={palette.argile} />
      </g>

      {/* sacs d'argile, devant la maison */}
      <g filter="url(#grain)">
        <path d="M250 342v-30c0-8 6-12 14-12s14 4 14 12v30z" fill={palette.sable} />
        <path d="M250 312h28" stroke={palette.ombre} strokeWidth="2" opacity="0.35" />
      </g>

      {/* le four, degage de l'auvent */}
      <g filter="url(#grain)">
        <path d="M688 342v-56c0-32 26-56 58-56s58 24 58 56v56z" fill={palette.brique} />
        <path
          d="M702 290c12-11 26-16 44-16s32 5 44 16"
          stroke={palette.ombre}
          strokeWidth="4"
          fill="none"
          opacity="0.3"
        />
        <path d="M722 342v-30c0-13 11-22 24-22s24 9 24 22v30z" fill={palette.encre} />
        <path d="M722 342v-30c0-13 11-22 24-22s24 9 24 22v30z" fill={palette.braise} opacity="0.85" />
        <path
          d="M736 340c1-9 6-12 6-18 4 3 6 7 6 12 2-3 3-5 3-9 4 5 7 10 7 15z"
          fill={palette.papier}
          opacity="0.5"
        />
        <rect x="672" y="336" width="148" height="12" rx="6" fill={palette.ombre} />
        {/* la fumee */}
        <path
          d="M746 230c-12-16 8-22-2-38 18 8 22 24 14 36"
          stroke={palette.sable}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
      </g>

      {/* le sol, et le chemin en pointilles vers la porte */}
      <path d="M0 348h900v82H0z" fill={palette.argile} opacity="0.3" />
      <path d="M0 348h900" stroke={palette.ombre} strokeWidth="2.5" opacity="0.2" />
      <path
        d="M60 420c120-28 230-34 260-72"
        stroke={palette.ombre}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="0 16"
        fill="none"
        opacity="0.3"
      />
      {[160, 420, 600, 860].map((x, i) => (
        <ellipse
          key={x}
          cx={x}
          cy={382 + (i % 2) * 16}
          rx={26 - i * 2}
          ry="5"
          fill={palette.ombre}
          opacity="0.1"
        />
      ))}
    </svg>
  );
}
