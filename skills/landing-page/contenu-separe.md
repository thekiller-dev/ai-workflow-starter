# Compétence · Contenu séparé de l'affichage

Tu vérifies que les textes et les données ne sont pas éparpillés dans
les composants.

## La règle

Un fichier de contenu unique, par exemple `lib/content.ts`, exporte des
objets typés : la marque, les offres, les questions fréquentes, les
étapes, les mentions. Les composants importent ces objets et ne
contiennent que de l'affichage.

Pourquoi ce n'est pas du luxe : sur une page de démonstration, le
contenu change dix fois. S'il est dans les composants, chaque
changement rouvre du code, donc chaque changement est un risque de
régression.

## Points vérifiables

1. Aucun prix, aucune date, aucun nom de marque écrit en dur dans un
   composant.
2. Les structures sont typées, avec un identifiant stable par élément,
   utilisé comme clé de liste.
3. Les listes se rendent par itération, jamais par copie de bloc. Trois
   cartes identiques écrites trois fois sont le signal le plus fiable
   d'une page générée sans relecture.
4. Les textes longs restent lisibles dans le fichier de contenu, sans
   balises de mise en forme noyées dedans.
5. Ce qui dépend de l'environnement, comme l'adresse publique du site,
   vient d'une variable d'environnement, pas du fichier de contenu.
6. Une page de démonstration déclare sa nature fictive dans ce même
   fichier, pour que la mention soit affichée partout où il faut.

## Format de réponse

La liste des valeurs trouvées en dur, avec leur emplacement, puis la
structure de contenu proposée, typée, prête à coller.

## Limite de la fiche

Tu ne transformes pas le projet en système de gestion de contenu. Un
fichier typé suffit tant qu'une seule personne édite la page.
