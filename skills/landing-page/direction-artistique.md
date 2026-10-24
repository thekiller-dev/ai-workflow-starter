# Compétence · Direction artistique

Fiche écrite d'après `app/globals.css` et `components/illustrations/`
de la collection `ln-dev7/landing-pages`.

Tu aides à fixer un parti pris et à l'inscrire dans le code. Tu ne le
choisis pas à la place de la personne.

## Ce qui se décide avant la première ligne

1. **Le concept en une phrase**, assez précis pour être refusé. Dans la
   collection : « le parcours d'un cadeau dans une petite ville, du
   matin au soir », « une affiche cinétique d'escalade ». Pas « une
   landing page moderne pour une salle d'escalade ».
2. **Les couleurs de marque**, quatre à six, puis les **teintes
   dérivées**, nommées par usage.
3. **Une police**, parfois deux. Variable de préférence.
4. **Une métaphore de mise en page** : le ticket, la fiche de cuisson,
   le plan de circuit, l'étiquette de cadeau.
5. **Une progression**, s'il y en a une : la page qui descend du matin
   vers la nuit est ce qui donne l'impression d'un récit, pas d'une
   suite de blocs.

## L'inscription dans le code

Les couleurs se déclarent une fois, en jetons, et rien n'écrit une
valeur hexadécimale ailleurs.

```css
@theme {
  /* marque */
  --color-encre: #0f2324;
  --color-creme: #f9f6ed;
  /* dérivées, nommées par usage et non par teinte */
  --color-ciel: #d3e9e3;
  --color-pierre: #efe2c2;
  --color-nuit: #0d2b29;
  --ease-doux: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Deux détails qui distinguent une page tenue d'une page générée :
une courbe d'accélération déclarée en jeton et réutilisée partout, et
une couleur de focus qui est une variable, pas un bleu de navigateur.

## L'échelle typographique

Avec une police variable, une échelle ne se limite pas à des tailles :
elle fixe la graisse, la largeur optique, l'interlettrage et le retour
à la ligne.

```css
.t-display {
  font-weight: 800;
  font-variation-settings: "opsz" 96, "wdth" 90;
  letter-spacing: -0.045em;
  line-height: 0.86;
  text-wrap: balance;
}
.t-lead { font-size: 1.1875rem; line-height: 1.5; text-wrap: pretty; }
```

Quatre ou cinq classes suffisent : titre d'affiche, titre de section,
sous-titre, texte d'introduction, chiffre. Les tailles au cas par cas
dans les composants sont le symptôme d'une page sans échelle.
`text-wrap: balance` sur les titres et `pretty` sur les paragraphes
coûtent une ligne et suppriment les veuves.

## Points vérifiables

1. Aucune valeur hexadécimale hors du fichier de jetons et de la
   palette d'illustration.
2. Les teintes dérivées portent un nom d'usage, pas un nom de couleur.
3. Une échelle typographique nommée, utilisée partout.
4. Une courbe d'accélération commune, déclarée en jeton.
5. Une couleur de focus explicite, visible sur tous les fonds.
6. Le nombre de familles de polices est de une ou deux, pas trois.
7. La page a une progression ou un parti pris repérable d'une section
   à l'autre, pas une alternance de blocs clairs et sombres sans
   raison.

## Ce que tu refuses

Le fond sombre à dégradé violet, le héros centré à deux boutons, les
trois cartes à ombre portée, les icônes génériques, les photos de
banque d'images sans rapport. Si la proposition pourrait convenir à
n'importe quelle marque, elle ne convient à aucune.

## Format de réponse

Trois concepts opposés, cinq lignes chacun : la phrase, les couleurs
en hexadécimal avec leur nom d'usage, la ou les polices, la métaphore,
la progression. Puis la question : lequel on garde. Aucun mélange.

## Limite de la fiche

Tu ne choisis pas. Un concept moyen appliqué avec rigueur bat un
assemblage de trois bons concepts.
