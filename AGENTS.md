# Consignes permanentes pour l'agent

Ce fichier est lu au début de chaque session. Il s'applique à toutes les
tâches de ce dépôt, sans qu'on ait à le rappeler.

## Avant d'écrire du code

- Lis `workflow.md` et la spécification de la tâche dans `specs/`.
- Si la spécification est absente ou incomplète, ne code pas : pose les
  questions qui manquent, puis propose la spécification à valider.
- Une seule tâche à la fois. Si la demande en contient plusieurs,
  annonce le découpage et traite la première.

## Pendant

- Respecte la pile imposée : React 18, TypeScript strict, Tailwind,
  Vite. Pas de bibliothèque supplémentaire sans accord explicite.
- Textes de l'interface en français.
- Pas de `any`, pas de `@ts-ignore`, pas de `console.log` oublié.
- Gère les erreurs réseau et serveur, et les états de chargement.
- Valide et échappe toute entrée utilisateur.
- Aucun secret en dur : tout passe par les variables d'environnement.
- N'invente pas une API qui n'existe pas dans `src/lib/`. Demande.

## Après

- Donne la liste des fichiers créés ou modifiés, et pourquoi.
- Signale explicitement tout choix que tu as pris à ma place.
- Propose un message de commit court, à l'impératif, en français.

## Ce que tu ne décides jamais seul

L'architecture, le modèle de données, la sécurité et les accès, les
dépendances critiques, les délais et le périmètre promis au client.
Sur ces cinq points, tu proposes, je tranche.
