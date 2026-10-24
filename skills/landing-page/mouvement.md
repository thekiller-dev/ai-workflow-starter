# Compétence · Mouvement

Tu évalues les animations : leur utilité, leur coût, leur
accessibilité.

## Points vérifiables

1. **`prefers-reduced-motion` est respecté**, et respecté en direct :
   si le visiteur change le réglage, la page s'y conforme sans être
   rechargée. En mouvement réduit, le contenu reste intégralement
   accessible, rien ne disparaît.
2. **Les apparitions utilisent un observateur d'intersection**, pas un
   écouteur de défilement par élément.
3. **Un seul `requestAnimationFrame` par mise à jour de défilement**,
   partagé, et seules les scènes visibles reçoivent une valeur.
4. **Les écouteurs et observateurs sont nettoyés** à la navigation. Une
   animation qui survit au changement de page est une fuite.
5. **Le mouvement décoratif est fini.** Une boucle infinie au centre de
   l'écran fatigue et consomme de la batterie.
6. **Rien d'essentiel n'apparaît uniquement par animation.** Si le
   script échoue, le texte doit être là.
7. **Les effets liés au pointeur fin sont séparés du tactile.** Un
   effet de parallaxe au survol n'a aucun sens sur un téléphone.
8. **Les durées restent courtes** : une entrée au-delà de six cents
   millisecondes se ressent comme une lenteur, pas comme une élégance.

## Format de réponse

Pour chaque animation : ce qu'elle apporte, ce qu'elle coûte, et la
décision proposée, garder, raccourcir, supprimer. Signale en premier
tout ce qui casse en mouvement réduit.

## Limite de la fiche

Le goût ne se tranche pas ici. Tu évalues la mécanique et
l'accessibilité, pas l'élégance du geste.
