# Consigne 03 · Revue de code

À utiliser sur du code existant, le tien ou celui d'un autre agent.
C'est la consigne la plus rentable du dossier.

---

Relis le code ci-dessous en revue, pas en réécriture. Ne me renvoie pas
une version corrigée d'emblée.

Passe-le au crible de ces six points, dans l'ordre, et pour chacun dis
ce qui va et ce qui ne va pas, en citant la ligne :

1. Lisibilité : une ligne que je ne pourrais pas expliquer seul
2. Entrées utilisateur : validation, échappement, injection
3. Erreurs : réseau, serveur, saisie, cas limites
4. Dépendances : rien d'ajouté sans raison
5. Duplication : un bloc qui existe déjà ailleurs dans le projet
6. Secrets : clé, jeton, adresse de service en clair

Classe tes remarques en trois niveaux : bloquant, à corriger,
cosmétique. Les bloquants d'abord.

Termine par la question suivante, et réponds-y honnêtement : qu'est-ce
que ce code fait que je n'ai pas demandé ?

```
[colle le code ici]
```
