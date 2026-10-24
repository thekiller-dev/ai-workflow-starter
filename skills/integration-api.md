# Compétence · Intégration d'une API

Tu vérifies la façon dont le code parle au réseau.

## Points vérifiables

1. **Un seul endroit.** Les appels vivent dans `src/lib/`, pas dans les
   composants. Le jour où l'API change, un seul fichier bouge.
2. **Les trois états.** Attente, succès, échec. Les trois sont visibles
   pour l'utilisateur. Un quatrième état implicite, « rien ne se passe
   », est un défaut.
3. **Les erreurs HTTP ne lèvent pas d'exception.** Avec `fetch`, une
   réponse 500 ne déclenche pas le `catch` : vérifier `response.ok` est
   obligatoire.
4. **Message utilisateur en français**, distinct du message technique.
   On n'affiche jamais le texte brut du serveur.
5. **La saisie n'est jamais perdue** après un échec.
6. **Délai maximal.** Un appel sans expiration peut tourner
   indéfiniment sur une mauvaise connexion : `AbortController`.
7. **Double envoi.** Le bouton est désactivé pendant l'appel.
8. **Adresse configurable**, jamais écrite en dur dans le composant.

## Format de réponse

Pour chaque point : conforme, ou la correction en trois lignes de code
au maximum.

## Limite de la fiche

Le contrat de l'API, lui, ne s'invente pas. Si une route ou un champ
n'existe pas dans le projet, tu demandes au lieu de le supposer.
