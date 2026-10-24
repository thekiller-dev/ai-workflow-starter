# Compétences · Landing page

Onze fiches, à charger une par une.

Elles ne sont pas écrites à partir de principes généraux : elles sont
tirées de la lecture du code de la collection `ln-dev7/landing-pages`
(MIT), quatorze landing pages autonomes en Next.js 16, React 19,
Tailwind CSS 4 et shadcn/ui en variante Base UI. Chaque fiche donne un
patron de code observé, des points vérifiables numérotés, les
anti-patrons correspondants, et la façon de contrôler le résultat.

Les patrons restent valables sur une autre pile ; seuls les points qui
nomment un fichier précis sont à transposer.

| Fiche | Quand la charger |
| --- | --- |
| `direction-artistique.md` | au tout début, avant la moindre ligne de code |
| `structure-de-page.md` | pour décider de l'ordre des sections |
| `copywriting.md` | pour écrire ou relire les textes |
| `systeme-de-composants.md` | dès qu'un bouton, un champ ou un panneau apparaît |
| `contenu-separe.md` | pour sortir les données des composants |
| `illustrations-svg.md` | pour dessiner des scènes en code plutôt que poser des photos |
| `mouvement.md` | pour toute animation, apparition ou effet au défilement |
| `parcours-au-defilement.md` | pour un tracé qui relie des étapes et un objet qui le suit |
| `images-et-polices.md` | photos, typographies, poids, licences |
| `metadonnees-et-partage.md` | titre, description, image de partage, indexation |
| `honnetete-demo.md` | avant de livrer une page de démonstration |

À part : `agents-md-type.md` donne le gabarit de conventions à poser à
la racine du projet, une fois, au démarrage.

Pour la recette finale, voir `checklists/avant-livraison-landing.md`.

## L'exemple

`landing/` contient TERRE, une page de démonstration construite avec
ces fiches, et son brief est dans `specs/LP-001-terre.md`. Chaque fiche
y a un point d'application nommé dans le README du dossier.

## Rappel

Une compétence oriente le regard de l'agent sur un seul sujet. En
charger trois à la fois donne une réponse qui survole les trois.
