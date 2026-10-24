# TERRE · landing page de démonstration

Page construite en suivant les fiches de `skills/landing-page/`, pour
qu'elles aient un exemple à montrer plutôt qu'une théorie à lire.
L'atelier, les tarifs, les horaires et le lieu sont **fictifs**.

Brief complet : `../specs/LP-001-terre.md`.

## Les illustrations

Tout est dessiné en SVG, dans `src/illustrations/` : le panorama de
l'atelier, les quatre scènes du parcours, et la pièce elle-même, qui
change de forme d'une étape à l'autre. Aucun fichier image, donc rien à
télécharger, rien à créditer, et un dessin qui reste net à toutes les
tailles.

| Fichier | Contenu |
| --- | --- |
| `palette.ts` | les teintes, toutes dérivées de la terre cuite, plus une seule teinte froide |
| `defs.tsx` | le grain et le halo de chaleur, déclarés une seule fois pour toute la page |
| `pot.tsx` | la pièce, à quatre états : boule, cylindre, bol, bol émaillé |
| `scenes.tsx` | les quatre scènes : l'établi, le tour, le four, l'étagère |
| `atelier.tsx` | le panorama du héros |

Le parcours (`src/components/Parcours.tsx`) relie les quatre scènes par
un chemin en pointillés que la pièce suit au défilement. Le tracé se
calcule à partir de la position réelle des jalons, mesurée puis
re-mesurée au redimensionnement ; le défilement ne déclenche qu'une
image par cycle ; en mouvement réduit le chemin est entièrement visible
et plus rien ne bouge.

## Direction artistique

Une étiquette d'atelier : terre cuite sur papier kraft, encre pour le
contraste. Instrument Serif pour les titres, Space Grotesk pour la
lecture. Métaphore de mise en page : la fiche de cuisson, filets fins
et chiffres en gros. Mouvement : entrées en cascade au défilement, rien
d'autre.

Trois couleurs, deux polices, une métaphore, un parti pris de
mouvement. Décidés avant la première ligne, comme le demande la fiche
`direction-artistique.md`.

## Lancer

```bash
npm install
npm run dev          # http://localhost:5173
npm run verifier     # lint, tests, types, build
```

## Ce que la page démontre, fiche par fiche

| Fiche | Où ça se voit |
| --- | --- |
| `structure-de-page` | six sections, chacune répond à une objection, un seul appel à l'action |
| `contenu-separe` | tout le texte et tous les prix dans `src/lib/content.ts`, aucune valeur en dur |
| `systeme-de-composants` | `src/components/ui/` : bouton, accordéon, champ. Aucune section ne redessine un élément interactif |
| `mouvement` | `src/lib/useReveal.ts` : un seul observateur, aucune écoute du défilement, mouvement réduit suivi en direct, observateurs nettoyés |
| `images-et-polices` | polices locales avec leurs licences SIL OFL dans `public/fonts/`, aucune requête tierce |
| `metadonnees-et-partage` | titre, description, image de partage, `noindex, follow` parce que c'est une démonstration |
| `copywriting` | aucun superlatif, aucun faux témoignage, la nature fictive annoncée sur l'écran de confirmation |

## Accessibilité

Lien d'évitement, un seul titre de niveau un, focus visible partout,
accordéon avec `aria-expanded` et panneau réellement masqué, erreurs de
formulaire reliées au champ et annoncées. Sans JavaScript, le contenu
reste visible : l'animation n'est activée que si le script tourne.

## Crédits

Polices Instrument Serif et Space Grotesk, licence SIL Open Font, texte
des licences dans `public/fonts/`. Aucune photographie : la page tient
par la typographie, c'est un choix, pas un oubli.
