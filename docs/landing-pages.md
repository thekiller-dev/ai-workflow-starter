# Le workflow appliqué aux landing pages

Une landing page n'est pas une application : elle a peu d'états, peu de
logique, et presque tout son poids repose sur la direction artistique,
le texte et le mouvement. C'est précisément pour ça qu'elle se délègue
mal sans méthode. Un agent produit en quelques secondes une page qui
ressemble à toutes les autres : dégradé violet, trois cartes, un bouton
« Get Started ». Techniquement correcte, commercialement nulle.

## La référence étudiée

La collection **[ln-dev7/landing-pages](https://github.com/ln-dev7/landing-pages)**
de LN, quatorze pages ouvertes sous licence MIT, sert de référence à ces
fiches. Chaque page y est un projet autonome, avec sa propre identité :
Next.js 16, React 19, Tailwind CSS 4, shadcn/ui en variante Base UI,
polices locales sous licence OFL, photographies créditées.

Ce qui mérite d'être copié n'est pas le code, c'est la discipline :

- un `AGENTS.md` par projet, qui fixe les conventions avant la première
  requête ;
- les primitives d'interface toutes issues de `components/ui/`, jamais
  remplacées par du HTML interactif improvisé dans un composant de
  fonctionnalité ;
- le contenu rassemblé dans `lib/content.ts`, séparé de l'affichage ;
- la nature fictive de la démonstration déclarée explicitement, aucun
  faux témoignage, aucune disponibilité ni aucun prix présentés comme
  réels ;
- la navigation au clavier, le focus visible et le mouvement réduit
  traités comme des obligations, pas comme des options ;
- `typecheck` et `build` avant toute livraison.

## Ce qui change par rapport au workflow général

| Étape | Particularité landing page |
| --- | --- |
| Cadrer | le concept et la direction artistique se décident avant tout code, et ne se délèguent pas |
| Déléguer | une section par consigne, jamais la page entière d'un coup |
| Relire | on relit aussi le texte et le mouvement, pas seulement le code |
| Assumer | la recette se fait sur un téléphone réel, mouvement réduit activé |

## L'ordre de travail

1. Le brief, dans `specs/`, à partir de `_gabarit-landing.md`.
2. Le concept et la direction artistique, décidés par toi, écrits dans
   le brief : trois couleurs, deux polices, un parti pris de mouvement,
   une métaphore.
3. Le contenu, rédigé avant la maquette. Une page se dessine autour de
   son texte, jamais l'inverse.
4. Les primitives d'interface, installées et restylées une fois.
5. Les sections, une par une, chacune relue avant la suivante.
6. La recette, avec `checklists/avant-livraison-landing.md`.

## Les compétences

Elles sont dans `skills/landing-page/` : onze fiches, plus un gabarit
d'`AGENTS.md`. On en charge une à la fois, celle qui correspond au
travail en cours.

Elles ont été réécrites à partir du code réellement lu dans la
collection de référence : chacune donne un patron de code observé, des
points vérifiables numérotés, les anti-patrons correspondants et la
façon de contrôler le résultat. Une fiche qui n'énonce que des
principes ne change pas la sortie d'un agent ; une fiche qui montre le
patron et la règle vérifiable, oui.

Les trois fiches à charger en premier sur une page illustrée :
`direction-artistique.md`, `illustrations-svg.md`, `mouvement.md`.
