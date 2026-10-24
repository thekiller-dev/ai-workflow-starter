# Compétence · Illustrations SVG

Fiche écrite d'après `components/illustrations/` de la collection
`ln-dev7/landing-pages` : `defs.tsx`, `palette.ts`, `panorama.tsx`,
`step-scenes.tsx`, `person.tsx`.

C'est la compétence qui fait la différence entre une page correcte et
une page qu'on reconnaît. Une illustration dessinée en code n'a rien à
télécharger, aucune licence à suivre, reste nette à toutes les tailles,
et se recolore d'une variable.

## L'organisation

| Fichier | Rôle |
| --- | --- |
| `palette.ts` | les teintes nommées par usage, jamais par couleur |
| `defs.tsx` | les filtres et dégradés partagés, rendus **une seule fois** |
| un fichier par objet | la personne, le véhicule, le bâtiment, l'objet de marque |
| un fichier par décor | le panorama, les scènes d'étape |

Les définitions partagées sont montées en haut de page dans un `svg`
de taille nulle. Un filtre déclaré dans chaque illustration est
recalculé autant de fois qu'il est déclaré.

```tsx
export function Defs() {
  return (
    <svg aria-hidden="true" focusable="false" width="0" height="0">
      <defs>
        <filter id="grain">{/* feTurbulence + feComposite */}</filter>
        <radialGradient id="halo">{/* ... */}</radialGradient>
      </defs>
    </svg>
  );
}
```

## La palette nommée par usage

```ts
export type PaletteVille = {
  mur: string; murOmbre: string; fenetre: string; fenetreAllumee: string;
  partAllumee: number; pave: string; eau: string; reflet: string;
};
```

Nommer `fenetreAllumee` plutôt que `jaune` permet de décliner la même
scène au matin, au crépuscule et à la nuit en changeant un objet, sans
toucher à une seule forme. C'est ce qui donne l'impression d'une page
qui raconte une journée.

## Le cadrage d'un panorama

Une scène large doit rester calée en bas et au centre quelle que soit
la hauteur du bloc.

```tsx
<svg viewBox="0 0 1600 580" preserveAspectRatio="xMidYMax slice" />
```

Côté CSS, le conteneur passe en `container-type: size` et la scène est
dimensionnée en unités de conteneur, pas de fenêtre : une illustration
calée sur `vw` saute dès qu'une barre d'outils mobile apparaît.

## Accessibilité d'un dessin

- Décor : `aria-hidden="true"` et `focusable="false"`. C'est le cas par
  défaut.
- Dessin porteur d'information : `role="img"` et un `aria-label` qui
  décrit la scène en une phrase complète, comme on la raconterait au
  téléphone. La collection le fait sur son panorama, et la description
  est une vraie phrase, pas une liste de mots-clés.
- Aucune information ne doit exister uniquement dans le dessin.

## Points vérifiables

1. Filtres et dégradés déclarés une seule fois, identifiants uniques.
2. Teintes importées d'une palette typée, aucune couleur en dur dans
   une forme.
3. `viewBox` sur chaque `svg`, jamais de `width`/`height` figés pour un
   décor.
4. Pas de chemin de plus de quelques centaines de caractères sans
   commentaire : un `d` illisible est du code illisible.
5. Les éléments animés sont des calques séparés, hors du groupe filtré.
6. Un dessin répété (une foule, une rangée de fenêtres) est produit par
   itération sur des données, pas par copie de balises.
7. Le grain est posé sur les formes, pas sur le fond, sinon il
   grise toute la page.
8. Rien qui dépende d'une police installée : un texte dans un SVG se
   dessine ou se double d'un vrai texte HTML.

## Anti-patrons observés dans le code généré

- Une illustration collée en une seule balise `path` de dix mille
  caractères, impossible à modifier.
- Le même filtre dupliqué dans chaque composant.
- Des couleurs écrites à la main dans chaque forme : la page ne peut
  plus changer d'ambiance.
- Un `svg` sans `aria-hidden` qui fait lire « image » au lecteur
  d'écran à chaque section.

## Limite de la fiche

Tu ne juges pas la beauté du dessin. Tu vérifies qu'il est structuré,
recolorable, léger et accessible.
