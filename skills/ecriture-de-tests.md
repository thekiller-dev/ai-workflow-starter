# Compétence · Écriture de tests

Vitest et Testing Library. Tu testes le comportement visible, jamais
l'implémentation.

## Règles

- Sélection par rôle et par libellé accessible. Jamais par classe CSS,
  jamais par identifiant de test si un rôle existe.
- Un test, un comportement, une assertion principale.
- Le nom du test est la phrase qu'il vérifie, en français :
  `il refuse une adresse sans arobase`.
- Les appels réseau sont simulés au niveau de la fonction d'envoi, pas
  du composant.
- Pas de délai arbitraire. On attend un élément, pas un temps.

## Ce qu'il faut couvrir avant de fermer une tâche

| Catégorie | Exemple |
| --- | --- |
| Cas nominal | du remplissage à la confirmation |
| Chaque règle de validation | un test par règle |
| Échec réseau | message affiché, saisie conservée |
| État d'attente | bouton désactivé pendant l'envoi |
| Cas limite | champ à la longueur maximale, double envoi |

## Ce qu'il ne faut pas tester

L'état interne, les fonctions privées, le nombre de rendus, le texte
exact d'un libellé décoratif. Ces tests cassent à chaque
refactorisation et finissent par être supprimés sans être remplacés.

## Limite de la fiche

Un test écrit par un agent est du code comme un autre : il se relit. Un
test qui passe du premier coup sur un code faux est un test faux.
