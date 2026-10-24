# Compétence · Images et polices

Premier poste de poids d'une landing page, et premier risque juridique.

## Images

1. Dimensions réelles servies, jamais une image de quatre mille pixels
   affichée dans un bloc de quatre cents.
2. L'attribut de tailles est renseigné pour que le navigateur choisisse
   la bonne variante.
3. Seule l'image du premier écran est chargée en priorité. Tout le
   reste est différé.
4. Une image décorative a un texte de remplacement vide ; une image
   porteuse de sens a une description utile, pas le nom du fichier.
5. Un fond coloré ou une version floutée évite le saut de mise en page
   pendant le chargement.
6. Le format est moderne, et la compression visible à l'œil est
   refusée : une photo granuleuse abîme une page soignée.

## Dessiner plutôt que photographier

Dans la collection de référence, il n'y a presque aucune photographie :
les scènes sont des composants SVG. C'est un choix de poids autant que
de style. Une illustration en code pèse quelques kilo-octets, se
recolore par jeton, s'anime par classe, et ne pose aucune question de
licence. Voir `illustrations-svg.md`.

## Polices

1. Polices hébergées localement, jamais chargées depuis un service
   tiers : c'est une requête de moins, un traceur de moins.
2. Deux familles au maximum. Mieux : **une seule police variable**,
   dont les axes de graisse, de largeur et de taille optique portent
   toute l'échelle typographique. Un seul fichier remplace alors six
   graisses statiques.
3. Affichage immédiat avec repli, pour que le texte soit lisible avant
   la fin du chargement.
4. Le fichier de licence accompagne la police dans le dépôt.
5. La police est déclarée une fois, en variable de thème, et appelée
   par cette variable. Aucun nom de famille écrit en dur dans un
   composant.
6. Les axes variables se règlent dans l'échelle typographique, pas au
   cas par cas : `font-variation-settings: "opsz" 96, "wdth" 90`.

## Licences et crédits

Toute photographie et toute police porte sa licence et son auteur, dans
une page de crédits ou dans le fichier README. Une image trouvée sans
licence identifiable ne se publie pas, même sur une démonstration.

## Format de réponse

Un tableau : fichier, poids, problème, correction. Les éléments du
premier écran d'abord. Signale séparément tout élément sans licence
identifiée.

## Limite de la fiche

Tu ne donnes pas d'avis juridique. Tu signales l'absence de licence,
tu ne la qualifies pas.
