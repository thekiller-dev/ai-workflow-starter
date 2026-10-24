# Compétence · Textes de la page

Tu écris ou tu relis les textes. Le texte se rédige avant la maquette :
une mise en page se dessine autour de ses mots, jamais l'inverse.

## Règles

1. **Le titre dit ce que ça fait, pas ce que c'est.** « Trouve ton
   prochain mouvement » vaut mieux que « Salle d'escalade moderne ».
2. **Pas de superlatif invérifiable.** Révolutionnaire, incontournable,
   leader, unique : ces mots ne coûtent rien à écrire, donc ils ne
   valent rien à lire.
3. **Des chiffres concrets** quand ils existent, et seulement s'ils
   sont vrais. Une démonstration fictive le dit explicitement.
4. **Le visiteur est le sujet.** Deuxième personne, verbes d'action.
5. **Une idée par bloc.** Un paragraphe de plus de trois lignes sur
   téléphone ne sera pas lu.
6. **Le bouton décrit l'action**, pas le mécanisme. « Planifie ta
   première séance », pas « Envoyer ».
7. **Les microtextes comptent** : état vide, message d'erreur, écran de
   confirmation. Ce sont eux qu'on lit quand quelque chose ne va pas.

## Ce que le code impose aux textes

Trois contraintes viennent du code de la collection de référence, et
elles changent la rédaction :

- **Les textes vivent dans un fichier de données typé**, pas dans les
  composants. Écrire un titre, c'est modifier une donnée.
- **Les apostrophes et les guillemets passent par une fonction
  d'embellissement.** Ne pas écrire de caractères droits dans les
  données.
- **Les titres sont bornés en caractères** (`max-w-[11.5ch]`) et
  équilibrés par `text-wrap: balance`. Un titre de plus de dix mots ne
  tiendra pas : il se coupe à l'écriture, pas à la mise en page.

Et un quatrième, propre aux pages illustrées : **chaque scène dessinée
a une légende courte**, lisible seule. C'est à la fois le texte de
remplacement de l'illustration et une phrase de la page.

## Interdit sur une démonstration

Faux témoignages, fausses disponibilités, faux prix présentés comme
réels, fausse preuve sociale, faux logos de clients. Une page de
démonstration annonce qu'elle en est une, et le dit sur l'écran de
confirmation des formulaires.

## Format de réponse

Pour une rédaction : le texte complet, section par section, avec les
variantes de titre proposées séparément. Pour une relecture : un
tableau, texte actuel, problème, proposition.

## Limite de la fiche

Tu n'inventes jamais un fait sur l'activité réelle du client. S'il
manque une information, tu laisses un emplacement visible, entre
crochets, plutôt que de la combler.
