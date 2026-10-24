# Compétence · Système de composants

Fiche écrite d'après `components/ui/` de la collection
`ln-dev7/landing-pages` : primitives shadcn en variante Base UI,
entièrement restylées.

## La règle

Toutes les primitives vivent dans `components/ui/`. Un composant de
section ne réinvente jamais un bouton, un champ, un panneau, un
accordéon, un onglet ou un curseur.

## Le patron d'une primitive

```tsx
const variantesBouton = cva(
  "inline-flex items-center justify-center gap-2.5 rounded-full font-[650] " +
    "transition-[transform,box-shadow,background-color] duration-150 " +
    "ease-(--ease-doux) select-none active:translate-y-[3px] " +
    "disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-encre text-creme shadow-[0_4px_0_#0a2523] active:shadow-[0_1px_0_#0a2523]",
        contour: "bg-transparent shadow-[inset_0_0_0_2px_currentColor]",
      },
      size: { default: "h-11 px-5", lg: "h-14 px-7", icon: "size-11" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
```

Trois enseignements concrets :

- **Les variantes sont énumérées**, donc typées, donc impossibles à
  inventer dans une section.
- **Le relief se fait à l'ombre portée**, pas au dégradé : `0 4px 0`
  au repos, `0 1px 0` à l'appui, avec un décalage de trois pixels.
  C'est ce qui donne l'impression d'un objet découpé.
- **La transition est limitée à des propriétés nommées.** Un
  `transition: all` anime aussi ce qu'on ne voulait pas.

## Le lien qui a l'air d'un bouton

Un appel à l'action qui mène ailleurs **reste un lien**. Deux manières
propres, selon la primitive :

```tsx
// 1. on applique les classes de la variante à une vraie balise <a>
<a href={site.lienApp} className={variantesBouton({ size: "lg" })}>Obtenir l'application</a>

// 2. ou on compose le rendu de la primitive
<Button nativeButton={false} render={<Link href="/visite" />}>Planifier</Button>
```

Un `<button onClick={() => router.push(...)}>` casse l'ouverture dans
un nouvel onglet, la copie du lien, l'indexation et le clic du milieu.

## Points vérifiables

1. Aucun `<div onClick>`, aucun `<span role="button">` fait main.
2. Les comportements difficiles viennent de la primitive : piège de
   focus, fermeture par Échap, verrouillage du défilement, navigation
   dans un calendrier, groupe de boutons radio.
3. Les primitives sont **entièrement restylées** : la page ne
   ressemble plus au thème par défaut.
4. Les variantes sont énumérées dans la primitive, jamais passées en
   classes depuis une section.
5. `cursor: pointer` est rétabli sur les boutons actifs, et le focus
   visible utilise le jeton commun.
6. Aucune seconde bibliothèque d'interface par-dessus la première.
7. Aucune primitive installée et non utilisée.
8. Les icônes sont dimensionnées par la primitive, pas à la main dans
   chaque appel.

## Anti-patrons observés

- Un bouton redessiné dans chaque section, avec trois rayons
  différents sur la même page.
- Un panneau latéral écrit à la main : il s'ouvre, mais le focus reste
  derrière, Échap ne fait rien, et le fond continue de défiler.
- Des classes de style empilées dans les sections jusqu'à rendre toute
  modification globale impossible.

## Limite de la fiche

Tu ne juges pas l'esthétique ici, seulement la mécanique. Un composant
laid mais accessible se repeint en dix minutes ; un composant joli mais
inaccessible se réécrit.
