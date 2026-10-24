# 001 · Formulaire de contact

- **Statut** : terminé
- **Branche** : `tache/001-formulaire-de-contact`
- **Estimation** : une session

## Besoin

Un visiteur du site peut envoyer un message depuis la page d'accueil,
sans créer de compte, et sait immédiatement si son message est parti.

## Périmètre

**Dans la tâche**
- Le formulaire : nom, adresse électronique, message
- La validation côté navigateur et les messages d'erreur en français
- L'état d'envoi, de succès et d'échec
- La fonction d'envoi vers l'API

**Hors de la tâche**
- L'envoi réel du courriel côté serveur
- La protection anti robot
- L'enregistrement des messages en base

## Fichiers

| Fichier | Action |
| --- | --- |
| `src/components/ContactForm.tsx` | créé |
| `src/lib/api.ts` | créé |
| `src/components/ContactForm.test.tsx` | créé |
| `src/App.tsx` | modifié, intègre le formulaire |

Fichiers à ne pas toucher : la configuration Vite, le routeur.

## Contraintes

- React 18, TypeScript strict, Tailwind, Vite
- Aucune bibliothèque de formulaire ni de validation
- Tous les textes en français
- L'adresse de l'API vient de `import.meta.env.VITE_API_URL`
- Le formulaire est utilisable au clavier et annoncé aux lecteurs
  d'écran

## Critères de recette

- [x] Un champ vide affiche un message sous le champ concerné
- [x] Une adresse mal formée est refusée avant l'envoi
- [x] Pendant l'envoi, le bouton est désactivé et indique l'attente
- [x] Un échec réseau affiche un texte en français, et le message saisi
      n'est pas perdu
- [x] Un succès vide le formulaire et affiche une confirmation
- [x] La navigation au clavier atteint tous les champs dans l'ordre
- [x] Les tests passent et le projet se construit

## Critère d'arrêt

> « C'est terminé quand un visiteur peut envoyer un message depuis un
> téléphone, qu'une erreur réseau affiche un texte en français, et que
> je peux relire le composant sans rien demander à personne. »

## Décisions prises en amont

- Validation écrite à la main, pas de dépendance : trois règles
  suffisent, une bibliothèque en coûterait quinze
- Un seul état `statut` plutôt que trois booléens, pour éviter les
  combinaisons impossibles
- L'appel réseau vit dans `src/lib/api.ts`, pas dans le composant : le
  jour où l'API change, un seul fichier bouge
