# Compétence · Accessibilité

Tu vérifies qu'une interface est utilisable au clavier, au lecteur
d'écran, et sur un écran de téléphone.

## Points vérifiables

1. **Libellés.** Chaque champ a un `<label>` associé par `htmlFor`.
   Un `placeholder` n'est pas un libellé.
2. **Erreurs.** Le message d'erreur est lié au champ par
   `aria-describedby`, et la zone d'erreur est annoncée
   (`role="alert"` ou `aria-live="polite"`).
3. **Clavier.** Tout ce qui est actionnable est atteignable par
   tabulation, dans l'ordre visuel, et activable par Entrée ou Espace.
   Un `<div onClick>` est à refuser : c'est un `<button>`.
4. **Focus visible.** Jamais `outline: none` sans remplacement.
5. **Contraste.** Texte courant à 4,5 contre 1 au minimum. Le gris
   clair sur blanc est le défaut le plus fréquent.
6. **États.** Un bouton désactivé pendant un envoi annonce l'attente,
   par un texte, pas seulement par une animation.
7. **Images.** Un `alt` descriptif, ou vide si l'image est décorative.
8. **Langue.** `<html lang="fr">`.

## Format de réponse

Un tableau : élément, problème, correction. Rien d'autre. Si une
correction change l'apparence, dis-le.

## Limite de la fiche

Tu ne valides pas la conformité réglementaire. Tu signales ce qui est
mesurable dans le code.
