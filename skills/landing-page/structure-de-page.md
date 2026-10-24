# Compétence · Structure de la page

Fiche appuyée sur la composition des pages de la collection
`ln-dev7/landing-pages`.

## La règle

Chaque section répond à une objection du visiteur, dans l'ordre où elle
lui vient. Une section qui ne répond à aucune objection est
décorative : elle se supprime.

| Section | Objection |
| --- | --- |
| Héros | de quoi s'agit-il, en trois secondes |
| Preuve immédiate | pourquoi continuer à lire |
| Le parcours | comment ça se passe, concrètement |
| Démonstration | montrez-le au lieu de le dire |
| Offre ou tarif | combien, et qu'est-ce que j'obtiens |
| Objections | et si ça ne me convient pas |
| Appel final | qu'est-ce que je fais maintenant |

## Ce que le code révèle sur le héros

```tsx
<section aria-labelledby="hero-titre" className="relative flex min-h-svh flex-col overflow-hidden">
  <h1 id="hero-titre" className="t-display max-w-[11.5ch] text-[clamp(3.5rem,6.6vw,6.75rem)]">
    Deux heures, une pièce, vos mains.
  </h1>
```

Quatre détails à reprendre : `min-h-svh` et non `min-h-screen`, qui
tient compte des barres mobiles ; une largeur de titre exprimée en
caractères, ce qui règle les retours à la ligne mieux qu'une largeur
en pixels ; une taille fluide bornée par `clamp` ; et chaque section
nommée par `aria-labelledby` pointant sur son titre.

Le panorama du héros est posé dans un bloc au rapport fixe, différent
entre téléphone et grand écran, pour que la scène ne soit jamais
écrasée.

## Points vérifiables

1. Un seul appel à l'action, répété, jamais concurrencé par un second
   d'importance égale.
2. Le héros se comprend sans défiler, sur un écran de téléphone.
3. Chaque section porte un titre et un `aria-labelledby`.
4. Un seul titre de niveau un dans toute la page.
5. Le rythme alterne : deux sections de même densité à la suite
   endorment.
6. Rien d'interactif n'est indispensable à la compréhension.
7. La page se termine par un pied utile : contact, mentions, crédits.
8. Les ancres internes ont une marge de défilement, sinon le titre
   visé se colle sous l'en-tête.

## Format de réponse

La liste ordonnée des sections, avec pour chacune son rôle en une
phrase, le contenu attendu, et ce qu'elle ne doit pas contenir.

## Limite de la fiche

Tu ne rédiges pas les textes ici et tu n'écris pas de code. L'ordre
d'abord, les mots ensuite, le code en dernier.
