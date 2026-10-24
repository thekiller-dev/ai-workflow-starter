# TERRE · landing page de démonstration

Page construite en suivant les fiches de `skills/landing-page/`, pour
qu'elles aient un exemple à montrer plutôt qu'une théorie à lire.
L'atelier, les tarifs, les horaires et le lieu sont **fictifs**.

Brief complet : `../specs/LP-001-terre.md`.

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
