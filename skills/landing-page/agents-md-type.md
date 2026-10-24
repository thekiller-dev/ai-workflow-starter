# Compétence · Le fichier AGENTS.md du projet

Dans la collection `ln-dev7/landing-pages`, chaque page a son
`AGENTS.md` à la racine : huit à dix lignes que l'agent lit avant
toute chose. C'est le dispositif le plus rentable du dépôt, parce qu'il
transforme des rappels répétés en conventions permanentes.

## Gabarit à copier dans un projet de landing page

```markdown
# Conventions du projet

- Projet autonome. La marque, les textes et la direction artistique
  lui sont propres et ne se mélangent pas à un autre projet.
- Toutes les primitives d'interface viennent de `components/ui/`.
  Elles sont entièrement restylées, jamais remplacées par du HTML
  interactif écrit à la main dans un composant de section.
- HTML sémantique pour la mise en page, les liens, les titres et les
  formulaires. Un lien d'action reste un lien.
- Polices et images locales, licences et crédits conservés.
- Démonstration fictive explicite : aucune réservation, aucun envoi,
  aucune disponibilité, aucun prix ni témoignage présentés comme
  réels.
- Aucun traceur, aucune persistance, aucun envoi externe de données
  de formulaire sans service explicitement demandé.
- Navigation au clavier, mise en page mobile, focus visible et
  mouvement réduit pris en charge.
- Avant livraison : vérification des types, construction du projet, et
  essai des interactions modifiées dans un navigateur.
```

## Pourquoi ça tient en dix lignes

Un fichier de conventions long n'est pas lu, ni par un humain ni par un
agent. Chaque ligne ci-dessus interdit une dérive précise et
constatable. Une ligne qui n'interdit rien de vérifiable se supprime.

## Points vérifiables

1. Le fichier existe à la racine du projet, pas dans un dossier de
   documentation.
2. Chaque ligne est vérifiable dans le code.
3. Il nomme la commande de vérification avant livraison.
4. Il dit ce qui ne se délègue pas.
5. Il tient sur un écran.

## Limite de la fiche

Un `AGENTS.md` ne remplace pas la relecture. Il réduit le nombre de
choses à rattraper, il ne les supprime pas.
