# Étape 3 · Relire

> Rien ne s'exécute avant d'avoir été lu.

Relire n'est pas une relecture de style. C'est la recherche de ce que
l'agent ne sait pas faire seul.

## Les six contrôles

1. **Je comprends chaque ligne, sans le chat ouvert.** Si une ligne
   demande une explication, demande-la maintenant, pas en production.
2. **Les entrées utilisateur sont validées et échappées.** Sur les
   tâches exposées aux failles XSS, Veracode mesure quatre-vingt-six
   pour cent de code généré non protégé.
3. **Les erreurs réseau et serveur sont traitées.** Le chemin qui
   marche est toujours écrit. L'autre, rarement.
4. **Aucune dépendance subie.** Une dépendance ajoutée est une décision
   d'architecture ; elle ne se prend pas dans un bloc de code.
5. **Rien n'a été dupliqué.** La duplication de blocs a augmenté de
   quatre-vingt-un pour cent dans les dépôts mesurés par GitClear.
   Chaque copie est un endroit de plus à corriger plus tard.
6. **Aucun secret en dur.** Clés, jetons, adresses de service : dans
   l'environnement, jamais dans le fichier.

Deux minutes. C'est le prix d'un code qu'on peut défendre devant un
client.

## Ensuite seulement, la machine

```bash
npm run verifier     # types, lint, tests, build
```

Un outil ne remplace pas la lecture : il vérifie ce qui est
automatisable, c'est-à-dire la plus petite partie du risque.

## Quand le code est faux

On corrige la consigne, pas le code. Un patch appliqué à la main sur
une mauvaise consigne reproduit le même défaut à la tâche suivante, et
cette fois tu ne le verras pas.
