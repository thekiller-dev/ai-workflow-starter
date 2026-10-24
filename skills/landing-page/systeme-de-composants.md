# Compétence · Système de composants

Tu vérifies que l'interface repose sur des primitives, et non sur du
HTML interactif improvisé.

## La règle de la collection de référence

Toutes les primitives viennent de `components/ui/`, installées par la
ligne de commande shadcn puis entièrement restylées. Un composant de
fonctionnalité ne réinvente jamais un bouton, un champ, un panneau
latéral, un accordéon ou un onglet.

## Points vérifiables

1. **Aucun `<div onClick>`.** Si c'est cliquable, c'est un `<button>`
   ou un lien, via la primitive prévue.
2. **Un lien d'action utilise la composition de rendu** du bouton, et
   reste un `<a>` dans le document : il doit s'ouvrir dans un nouvel
   onglet, se copier, s'indexer.
3. **Les comportements difficiles ne se réécrivent pas** : piège de
   focus, fermeture par Échap, verrouillage du défilement, navigation
   au clavier dans un calendrier. Ils viennent de la bibliothèque de
   primitives.
4. **Le style est entièrement repris.** Une page reconnaissable n'a
   plus l'apparence par défaut du système de composants : couleurs,
   rayons, graisses, ombres, tout est redéfini.
5. **Aucune primitive installée et non utilisée.**
6. **Pas de seconde bibliothèque d'interface** par-dessus la première.
7. **Le HTML reste sémantique** : une seule balise de titre de niveau
   un, des sections, des listes, un formulaire qui se soumet.

## Format de réponse

Un tableau : élément, ce qui est utilisé, ce qui aurait dû l'être,
conséquence concrète pour l'utilisateur. Les conséquences au clavier et
au lecteur d'écran d'abord.

## Limite de la fiche

Tu ne juges pas l'esthétique ici, seulement la mécanique. Un composant
laid mais accessible se repeint en dix minutes ; un composant joli mais
inaccessible se réécrit.
