/**
 * Definitions partagees par toutes les illustrations : le grain, pose
 * uniquement sur les formes, et le halo de chaleur du four.
 *
 * Rendu une seule fois, en haut de la page : un filtre duplique dans
 * chaque illustration se recalcule autant de fois qu'il est declare.
 */
export function IllustrationDefs() {
  return (
    <svg aria-hidden="true" focusable="false" width="0" height="0" className="absolute">
      <defs>
        <filter id="grain" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves={2}
            seed={7}
            result="bruit"
          />
          <feColorMatrix in="bruit" type="saturate" values="0" result="gris" />
          <feComponentTransfer in="gris" result="doux">
            <feFuncA type="linear" slope="0.14" />
          </feComponentTransfer>
          <feComposite in="doux" in2="SourceGraphic" operator="in" result="grain" />
          <feBlend in="SourceGraphic" in2="grain" mode="multiply" />
        </filter>

        <radialGradient id="halo" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#E0893F" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E0893F" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="ciel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5EFE6" />
          <stop offset="100%" stopColor="#E7D7C1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
