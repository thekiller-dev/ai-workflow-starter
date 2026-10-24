# Le projet d'exemple

Site vitrine React 18, TypeScript strict, Tailwind, Vite. Il ne sert
qu'à une chose : donner un terrain réel au workflow du dépôt.

```bash
npm install
cp .env.example .env
npm run dev          # http://localhost:5173
npm run verifier     # lint, tests, types et build : le portail avant commit
```

La seule fonctionnalité est le formulaire de contact, spécifié dans
`../specs/001-formulaire-de-contact.md`. Lis la spécification d'abord,
le code ensuite : c'est l'ordre dans lequel il a été écrit.

Points à remarquer dans le code, parce qu'un agent les oublie presque
toujours sans consigne explicite :

- un seul état `statut`, plutôt que trois booléens qui permettent des
  combinaisons impossibles ;
- `response.ok` testé, car une réponse 500 ne déclenche pas le `catch`
  de `fetch` ;
- un `AbortController`, pour qu'un appel ne tourne pas indéfiniment sur
  une mauvaise connexion ;
- la saisie conservée après un échec ;
- les erreurs reliées aux champs par `aria-describedby`, et la zone de
  réponse en `aria-live`.
