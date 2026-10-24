# Compétences

Une compétence est une fiche courte que l'agent charge au moment où il
en a besoin, et pas avant. On ne colle pas les six : on colle celle qui
correspond au travail en cours.

| Fiche | Quand la charger |
| --- | --- |
| `relecture-securite.md` | formulaire, authentification, appel réseau, stockage |
| `ecriture-de-tests.md` | avant de fermer une tâche |
| `revue-architecture.md` | nouveau module, découpage, décision structurante |
| `accessibilite.md` | tout ce qui est cliquable, saisissable, ou affiché |
| `integration-api.md` | appel réseau, erreurs, états de chargement |
| `performance-frontend.md` | page lente, liste longue, image lourde |

## Comment s'en servir

```
Charge la compétence ci-dessous et applique-la au code que je te donne
ensuite. Ne commente que ce qui relève de cette compétence.

[contenu de la fiche]
[le code]
```

## Comment en écrire une

Une fiche tient sur un écran. Elle contient ce que l'agent doit
chercher, pas ce qu'il doit penser : une liste de points vérifiables,
des exemples de ce qui est accepté et de ce qui est refusé, et la
limite de la fiche. Une fiche qui dit « sois rigoureux » ne sert à
rien.
