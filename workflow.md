# workflow.md

Quatre étapes. Écrites une fois, relues au début de chaque tâche.

---

## 1. Avant de demander, j'écris

- Fonctionnalité, en une phrase :
- Fichiers concernés :
- Ce que ça ne doit surtout pas casser :

La spécification complète va dans `specs/`, numérotée. Une tâche, un
fichier.

## 2. Je demande en donnant

Cinq ingrédients. Il en manque un, l'agent invente à ma place.

- **Contexte** : le projet, et pour qui
- **Pile** : versions et outils imposés
- **Tâche** : une seule chose, et son périmètre
- **Contraintes** : interdits, obligatoires
- **Sortie attendue** : fichier, composant, diff

Les consignes prêtes à coller sont dans `prompts/`.

## 3. Avant d'exécuter, je vérifie

- [ ] Je comprends chaque ligne, sans le chat ouvert à côté
- [ ] Les entrées utilisateur sont validées et échappées
- [ ] Les erreurs réseau et serveur sont traitées
- [ ] Aucune dépendance n'a été ajoutée sans que je l'aie décidé
- [ ] Rien n'a été dupliqué d'un bloc qui existe déjà
- [ ] Aucun secret, aucune clé, aucune adresse de service en dur

Puis `npm run verifier` : types, lint, tests, build.

## 4. C'est fini quand

Une phrase, écrite avant de commencer, jamais décidée à chaud.

> « C'est terminé quand ... »

Pour la tâche 001 de ce dépôt :

> « C'est terminé quand un visiteur peut envoyer un message depuis un
> téléphone, qu'une erreur réseau affiche un texte en français, et que
> je peux relire le composant sans rien demander à personne. »

---

## Ce que je ne délègue jamais

| | |
| --- | --- |
| L'architecture | le découpage, les frontières, les noms |
| Le modèle de données | ce qui est stocké, et pourquoi |
| La sécurité et les accès | qui a le droit de faire quoi |
| Les dépendances critiques | ce dont on ne peut plus sortir |
| La parole donnée au client | les délais et le périmètre promis |
