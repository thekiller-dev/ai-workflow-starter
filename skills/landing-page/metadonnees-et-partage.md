# Compétence · Métadonnées et partage

Fiche écrite d'après `lib/metadata.ts`, `app/layout.tsx`,
`app/robots.ts` et `app/sitemap.ts` de la collection
`ln-dev7/landing-pages`.

Ce qui décide de l'aspect du lien quand il est collé dans WhatsApp, et
de ce que les moteurs font de la page.

## Une fabrique, pas du copier-coller

```ts
export function metadonneesPage({ titre, description, chemin }: Entree): Metadata {
  return {
    title: titre,
    description,
    alternates: { canonical: chemin },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: site.nom,
      url: chemin,
      title: `${titre} | ${site.nom}`,
      description,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630,
                 alt: "Une phrase qui décrit vraiment l'image." }],
    },
  };
}
```

Chaque page appelle cette fabrique. Sans elle, la moitié des pages
finit sans canonique et l'autre avec le titre de la page d'accueil.

Le texte de remplacement de l'image de partage est une phrase, pas le
nom du fichier : c'est ce que lira une personne qui ne voit pas
l'aperçu.

## L'adresse publique vient de l'environnement

```ts
const origine = process.env.SITE_URL;
export const metadata = {
  metadataBase: origine ? new URL(origine) : undefined,
  robots: { index: false, follow: true }, // démonstration
};
```

Pas d'adresse canonique inventée, pas d'adresse de déploiement écrite
en dur. Le plan du site et le fichier des robots ne sont produits que
si l'adresse est connue.

## Le fichier des robots sert aussi à cacher les impasses

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/boutique", "/rejoindre/"] },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
```

Les pages de passage, les redirections vers une application fictive,
les routes attrape-tout : rien de tout cela n'a à être indexé.

## Points vérifiables

1. Titre et description uniques par page, lisibles par un humain.
2. Canonique renseignée, dérivée du chemin.
3. Image de partage en 1200 × 630, avec un texte de remplacement qui
   est une phrase.
4. Langue du document déclarée et conforme au contenu.
5. Une démonstration ne s'indexe pas, mais laisse suivre les liens.
6. Plan du site dérivé d'une liste typée, pas écrit à la main.
7. Icône de site fournie, pas celle du modèle de départ.
8. Couleur de thème déclarée, cohérente avec le fond du haut de page.
9. Aucun traceur ajouté sans demande explicite.

## Comment vérifier

Coller le lien dans une conversation réelle et regarder l'aperçu.
C'est le seul test qui compte, et il prend dix secondes.

## Limite de la fiche

Tu ne fais pas de référencement éditorial. Tu vérifies ce qui est
technique et vérifiable dans le code.
