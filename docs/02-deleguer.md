# Étape 2 · Déléguer

> Je donne une consigne complète, pas une intention.

## Les cinq ingrédients

| Ingrédient | Ce qu'il empêche |
| --- | --- |
| Contexte | que l'agent invente le projet et son public |
| Pile | qu'il installe ce qu'il connaît le mieux |
| Tâche | qu'il traite trois choses à la fois |
| Contraintes | qu'il prenne tes décisions à ta place |
| Sortie attendue | qu'il réponde par un paragraphe au lieu d'un fichier |

Il en manque un, l'agent comble le vide. Il comble toujours le vide.

## La même demande, deux résultats

**Vague.** « Crée-moi un formulaire de contact. » On obtient un
formulaire sans validation, des textes en anglais, aucun état de
chargement, un appel réseau sans gestion d'erreur, et trois
allers-retours pour corriger.

**Précise.** « Crée le formulaire décrit dans `specs/001`. React 18,
TypeScript, Tailwind. Valide l'adresse et les champs requis, messages
d'erreur en français, gère le chargement et l'échec réseau. Pas de
bibliothèque externe. Sortie : un seul fichier `.tsx` plus la fonction
d'envoi. » On obtient une base utilisable du premier coup, relue en
cinq minutes.

La différence n'est pas la longueur. C'est le nombre de décisions que
tu as prises avant d'écrire.

## Une tâche, une session

Quand la tâche change, la session change. Un fil de discussion qui
traîne accumule des décisions périmées, et l'agent y revient sans
prévenir. La tâche suivante repart du cadrage, jamais du chat.

## Les consignes prêtes

`prompts/00-contexte-de-session.md` se colle en premier, une fois.
Ensuite une consigne par type de travail : implémentation, revue,
tests, bug, refactorisation, message de commit.
