# Étape 1 · Cadrer

> J'écris ce que je veux, avant d'ouvrir le chat.

Cadrer prend cinq minutes. Ne pas cadrer coûte trois jours.

## Ce qu'on écrit

Une spécification par tâche, dans `specs/`, à partir de
`specs/_gabarit.md`. Elle tient sur une page et répond à quatre
questions.

1. **Quoi** : la fonctionnalité en une phrase, du point de vue de la
   personne qui l'utilise. Pas « créer un composant », mais « un
   visiteur peut envoyer un message ».
2. **Où** : les fichiers concernés, et ceux qu'il ne faut pas toucher.
3. **Comment on saura que c'est fait** : des critères vérifiables, un
   par ligne, formulés de façon à pouvoir répondre oui ou non.
4. **Ce qui est hors périmètre** : la liste de ce qu'on ne fait pas
   maintenant. C'est elle qui empêche la tâche de grossir.

## Les décisions qui se prennent ici, pas plus tard

Le découpage des fichiers, les noms, la forme des données échangées, la
bibliothèque qu'on s'autorise ou non. Une fois la session ouverte, ces
décisions se prennent par défaut, c'est-à-dire mal.

## Le piège

Écrire une spécification qui décrit la solution au lieu du besoin.
« Un `useEffect` qui appelle l'API au montage » n'est pas un critère,
c'est déjà du code. Le critère, c'est « les messages s'affichent sans
que l'utilisateur ait à recharger ».

## Sortie de l'étape

Un fichier `specs/0XX-nom-de-la-tache.md` validé, et une branche créée :

```bash
bash scripts/nouvelle-tache.sh 002 "liste des témoignages"
```
