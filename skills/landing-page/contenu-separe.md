# Compétence · Contenu séparé de l'affichage

Fiche écrite d'après `lib/site.ts`, `lib/content.ts`, `lib/typo.ts` et
`app/sitemap.ts` de la collection `ln-dev7/landing-pages`.

## La règle

Un fichier de site et un fichier de contenu exportent des objets
**typés et figés**. Les composants importent, affichent, et ne
contiennent aucune donnée.

```ts
export const site = {
  nom: "TERRE",
  url: "https://terre.example",
  description: "...",
  email: "contact@terre.example",
  zone: "Porto-Novo et vingt kilomètres autour",
} as const;

export const navLegale = [
  { libelle: "Conditions", href: "/conditions" },
  { libelle: "Confidentialité", href: "/confidentialite" },
] as const;
```

Le `as const` n'est pas décoratif : il rend les valeurs littérales,
donc vérifiables par le compilateur partout où elles circulent.

## Le gain qu'on ne voit pas tout de suite

La même liste sert au pied de page, au plan du site et au menu légal.

```ts
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/tarifs", priority: 0.9 },
    ...navLegale.map((item) => ({ path: item.href, priority: 0.3 })),
  ];
  return pages.map((p) => ({ url: `${site.url}${p.path}`, priority: p.priority }));
}
```

Une page ajoutée apparaît partout, ou nulle part. Jamais à moitié.

## La typographie des chaînes

Les textes qui viennent d'un fichier de données passent par une
fonction d'embellissement : apostrophes et guillemets courbes.

```ts
export const typo = (texte: string) =>
  texte.replace(/'/g, "\u2019").replace(/"([^"]*)"/g, "\u00ab\u00a0$1\u00a0\u00bb");
```

Une apostrophe droite dans un titre d'affiche se voit immédiatement, et
c'est l'un des signes les plus fiables d'une page écrite à la hâte.

## Points vérifiables

1. Aucun prix, aucune date, aucun nom, aucune adresse, aucun libellé de
   bouton écrit en dur dans un composant.
2. Les structures sont typées, avec un identifiant stable par élément,
   utilisé comme clé de liste.
3. Les listes se rendent par itération. Trois cartes identiques écrites
   trois fois sont le signal le plus fiable d'une page non relue.
4. Les valeurs dépendant de l'environnement, à commencer par l'adresse
   publique, viennent de l'environnement, pas du fichier de contenu.
5. Les liens vers des services fictifs pointent vers quelque chose de
   réel, le dépôt par exemple, jamais vers une adresse inventée.
6. La nature fictive de la démonstration est une donnée du fichier de
   contenu, pour être affichée partout où il faut.
7. Les apostrophes sont courbes dans les textes de données.

## Limite de la fiche

Tu ne transformes pas le projet en système de gestion de contenu. Un
fichier typé suffit tant qu'une seule personne édite la page.
