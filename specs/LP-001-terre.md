# LP-001 · TERRE, atelier de poterie

- **Statut** : terminé
- **Nature** : démonstration fictive
- **Code** : `landing/`

## Le concept

> Une étiquette d'atelier : terre cuite sur papier kraft, chiffres en
> gros, filets fins, comme une fiche de cuisson posée sur un four.

## Direction artistique

| | |
| --- | --- |
| Dominante | `#B4512B` terre cuite |
| Accent | `#17120F` encre |
| Fond | `#F5EFE6` papier |
| Police d'affichage | Instrument Serif |
| Police de lecture | Space Grotesk |
| Métaphore de mise en page | la fiche de cuisson |
| Parti pris de mouvement | entrées en cascade au défilement, rien d'autre |

Décidées avant la première requête. Non déléguées.

## À qui ça s'adresse

Quelqu'un de Porto-Novo qui cherche une sortie à faire de ses mains, un
samedi, sans engagement et sans compétence préalable. Ce qui le fait
partir : l'impression qu'il faut déjà savoir, et l'idée de devoir
revenir trois semaines plus tard chercher sa pièce.

## L'action attendue

Demander une place pour une séance. Une seule, répétée en haut et en
bas de page.

## Sections

| Ordre | Section | Ce qu'elle prouve |
| --- | --- | --- |
| 1 | Héros | de quoi il s'agit, en trois secondes, avec trois repères chiffrés |
| 2 | Comment se passe une séance | que c'est faisable sans expérience |
| 3 | Les séances | combien, et ce qui est compris |
| 4 | Questions | lève les quatre objections réelles |
| 5 | Réserver | l'action, et l'aveu que la page est une démonstration |
| 6 | Pied | lieu, horaires, crédits de polices |

## Contraintes

- Pile : React 18, TypeScript strict, Tailwind, Vite
- Primitives dans `src/components/ui/`, aucune section ne redessine un
  élément interactif
- Polices locales, licences SIL OFL incluses
- Aucune photographie : la page tient par la typographie
- Aucune donnée envoyée ni conservée, et la confirmation le dit
- Trois couleurs, deux polices, pas une de plus

## Critères de recette

- [x] Le héros est lisible sur un téléphone, sans zoom et sans défiler
- [x] Un seul appel à l'action, présent au début et à la fin
- [x] Un seul titre de niveau un, vérifié par un test
- [x] L'accordéon s'ouvre et se ferme au clavier, panneau réellement
      masqué quand il est fermé
- [x] En mouvement réduit, rien ne disparaît et rien ne bouge
- [x] Sans JavaScript, tout le contenu reste visible
- [x] La page se déclare non indexable
- [x] `npm run verifier` passe : lint, 4 tests, types, build

## Critère d'arrêt

> « C'est terminé quand un visiteur comprend en trois secondes ce qu'il
> peut faire samedi, qu'il atteint le formulaire au clavier, que la
> page ne lui ment sur rien, et que je peux expliquer chaque section
> sans rouvrir un chat. »
