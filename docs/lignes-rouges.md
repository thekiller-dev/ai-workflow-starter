# Les lignes rouges

Cinq domaines où l'agent propose et où tu tranches. Toujours.

## L'architecture

Le découpage en modules, les frontières entre eux, les noms. C'est ce
qui rend un projet modifiable dans six mois. Un agent optimise la tâche
du jour ; il n'a pas de mémoire du projet, et il n'en paiera pas la
dette.

## Le modèle de données

Ce qui est stocké, sous quelle forme, et pourquoi. Une table mal
pensée se paie en migrations, en bugs de cohérence et en requêtes
lentes, longtemps après que la session soit fermée.

## La sécurité et les accès

Qui a le droit de faire quoi. Les règles d'accès ne se devinent pas
depuis un composant d'interface, et un modèle choisit la variante
non sécurisée dans près d'un cas sur deux quand les deux lui sont
ouvertes.

## Les dépendances critiques

Ce dont on ne peut plus sortir : base de données, authentification,
paiement, hébergement. Chaque dépendance est un engagement de plusieurs
années pris en une ligne.

## La parole donnée au client

Les délais, le périmètre, ce qui est promis et ce qui ne l'est pas.
Aucun agent ne peut évaluer ce que tu peux tenir.

---

Règle pratique : si la décision est encore visible dans le projet dans
un an, elle n'est pas déléguable.
