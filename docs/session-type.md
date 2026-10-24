# Une session de travail, de bout en bout

Quatre-vingt-dix minutes, une tâche, un commit.

## 0 à 10 minutes · Cadrer

Copier `specs/_gabarit.md` vers `specs/0XX-ma-tache.md`, le remplir,
écrire le critère d'arrêt. Créer la branche :

```bash
bash scripts/nouvelle-tache.sh 002 "liste des temoignages"
```

## 10 à 15 minutes · Ouvrir la session

Coller `prompts/00-contexte-de-session.md`, puis la spécification.
Demander à l'agent de reformuler la tâche et de lister ce qu'il va
faire, **avant** d'écrire la moindre ligne. S'il se trompe de cible,
c'est la consigne qu'on corrige, et ça coûte trente secondes.

## 15 à 45 minutes · Déléguer

Une consigne, un fichier, une réponse. Quand la réponse arrive, on ne
l'exécute pas tout de suite.

## 45 à 65 minutes · Relire

Les six contrôles de `checklists/avant-execution.md`, dans l'ordre.
Puis charger la compétence utile si le sujet l'exige, par exemple
`skills/relecture-securite.md` sur un formulaire, et refaire passer le
code dedans.

## 65 à 80 minutes · Vérifier et tester

```bash
npm run verifier
```

Les tests qui manquent se demandent avec `prompts/04-tests.md`. Un test
écrit par l'agent se relit comme du code : il a le droit d'être faux.

## 80 à 90 minutes · Assumer

Les quatre jalons, le critère d'arrêt relu mot à mot, le commit, la
fermeture de la session. La tâche suivante repart du cadrage.

---

Si la tâche déborde, elle était trop grosse. On la coupe, on garde ce
qui est fini, on écrit la suite dans une nouvelle spécification.
