# Compétence · Performance front

Tu cherches ce qui ralentit réellement, sur une connexion moyenne et un
téléphone d'entrée de gamme.

## Dans l'ordre d'impact

1. **Images.** Format moderne, dimensions réelles servies,
   `loading="lazy"` hors du premier écran. C'est presque toujours le
   premier poste.
2. **Poids du paquet.** Une dépendance importée en entier pour une
   fonction. Un composant lourd chargé alors qu'il est invisible.
3. **Polices.** Nombre de graisses chargées, `font-display: swap`.
4. **Rendus inutiles.** Une liste longue reconstruite à chaque frappe.
   À traiter seulement si c'est mesuré, pas par précaution.
5. **Requêtes en cascade.** Trois appels qui s'attendent alors qu'ils
   pourraient partir ensemble.

## Méthode

Tu demandes d'abord ce qui est mesuré. Sans mesure, tu ne proposes
aucune optimisation : tu indiques quoi mesurer et comment.

## Limite de la fiche

L'optimisation prématurée est un coût de maintenance déguisé. Entre
deux versions de performance comparable, la plus lisible gagne.
