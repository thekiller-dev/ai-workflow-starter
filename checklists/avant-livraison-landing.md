# Avant de livrer une landing page

## Lisibilité

- [ ] Le héros se comprend en trois secondes, sur un téléphone, sans
      zoom et sans défiler
- [ ] Un seul appel à l'action, présent en haut et en bas
- [ ] Aucun texte sous 4,5 de contraste sur son fond

## Mécanique

- [ ] Toute la page est atteignable au clavier, dans l'ordre visuel
- [ ] Le focus est visible partout
- [ ] En mouvement réduit, rien ne disparaît et rien ne se bloque
- [ ] La page reste lisible avant l'exécution du JavaScript
- [ ] Les formulaires annoncent leurs erreurs, et conservent la saisie

## Illustrations et mouvement

- [ ] Les `defs` SVG partagés ne sont rendus qu'une fois dans la page
- [ ] Aucune couleur en dur dans une scène : tout vient de la palette
- [ ] Les scènes décoratives sont masquées aux technologies
      d'assistance, les scènes porteuses de sens ont une légende
- [ ] Les états de départ d'animation ne s'appliquent que si le script
      est actif
- [ ] Un seul observateur d'intersection, qui cesse d'observer après
      la première entrée
- [ ] Un seul écouteur de défilement, passif, une image par cycle
- [ ] Le tracé du parcours est mesuré sur le DOM et remesuré au
      redimensionnement

## Poids

- [ ] Seule l'image du premier écran est prioritaire, le reste est
      différé
- [ ] Aucune image servie plus grande que son affichage
- [ ] Polices locales, deux familles au maximum, licences incluses
- [ ] Aucune requête vers un service tiers non voulu

## Partage et indexation

- [ ] Titre, description et image de partage vérifiés sur un vrai
      message
- [ ] Langue du document correcte
- [ ] Démonstration non indexable, aucune adresse inventée

## Honnêteté

- [ ] Aucun faux témoignage, aucun faux prix, aucun faux logo client
- [ ] La nature fictive est annoncée sur les écrans de confirmation
- [ ] Images et polices créditées

## Technique

- [ ] `typecheck` et `build` passent
- [ ] Vérifié sur un téléphone réel, pas seulement en mode responsive
- [ ] Je peux expliquer chaque section et chaque animation sans aide
