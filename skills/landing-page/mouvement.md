# Compétence · Mouvement

Fiche écrite d'après le code de la collection `ln-dev7/landing-pages`,
fichiers `app/globals.css` et `components/site/motion-observer.tsx`.

## Le renversement à comprendre

La plupart du code généré écrit l'animation par défaut, puis l'annule
dans `prefers-reduced-motion: reduce`. La collection fait l'inverse :
**rien ne bouge tant que la requête `no-preference` n'est pas
satisfaite.**

```css
/* le mouvement est une option, pas un acquis */
@media (prefers-reduced-motion: no-preference) {
  .scene-sun { animation: lever 2.6s var(--ease-gentle) both; }
}
```

Conséquence directe : un navigateur qui ne répond pas à la requête, un
rendu serveur, un export statique, une capture, tout cela donne la
scène dans son état final. L'écriture inverse donne une page cassée
dans tous ces cas.

## La seconde requête, celle que personne ne connaît

Les **états de départ** d'une animation au défilement ne doivent
exister que si le script tourne. Sinon, un élément en `opacity: 0`
attendant une classe que personne ne posera reste invisible pour
toujours.

```css
@media (prefers-reduced-motion: no-preference) and (scripting: enabled) {
  [data-animate]:not([data-inview]) .lumieres { opacity: 0; }
  [data-animate]:not([data-inview]) .trait { clip-path: inset(0 0 100% 0); }
}
```

`scripting: enabled` est la garantie que la page reste lisible sans
JavaScript, sans avoir à dupliquer le balisage.

## L'observateur, une fois pour toute la page

```tsx
useEffect(() => {
  const observateur = new IntersectionObserver(
    (entrees) => {
      for (const entree of entrees) {
        if (!entree.isIntersecting) continue;
        entree.target.setAttribute("data-inview", "");
        observateur.unobserve(entree.target); // une entrée ne rejoue pas
      }
    },
    { threshold: 0.3 },
  );
  document
    .querySelectorAll("[data-animate]:not([data-inview])")
    .forEach((element) => observateur.observe(element));
  return () => observateur.disconnect();
}, [chemin]); // relancé à chaque navigation
```

Quatre choses s'y lisent : un seul observateur, le désabonnement après
la première entrée, le nettoyage au démontage, et la dépendance au
chemin de navigation, sans laquelle les sections de la page suivante ne
s'animent jamais.

## Les calques

Une illustration qui porte un filtre de grain coûte cher à redessiner.
Ce qui bouge est donc sorti du dessin et posé sur ses propres calques,
animés seulement en `transform` et `opacity`.

```css
.calque { position: absolute; display: block; pointer-events: none; }
@media (prefers-reduced-motion: no-preference) {
  .calque { will-change: transform; }
}
```

`will-change` est déclaré **sous la requête**, jamais globalement : un
`will-change` permanent réserve de la mémoire graphique pour rien.

## Points vérifiables

1. Toute animation vit sous `prefers-reduced-motion: no-preference`.
2. Tout état initial d'animation vit en plus sous `scripting: enabled`.
3. Un seul `IntersectionObserver`, désabonnement après la première
   entrée, `disconnect` au démontage, relance à la navigation.
4. Aucun écouteur `scroll` par élément. S'il en faut un, il est unique,
   passif, et ne déclenche qu'un `requestAnimationFrame` par cycle.
5. Ce qui bouge est séparé de ce qui porte un filtre.
6. `will-change` uniquement sous la requête de mouvement.
7. En mouvement réduit, les objets mobiles qui n'ont plus de sens sont
   masqués (`display: none`), le reste se fige dans son état final.
8. `scroll-behavior: smooth` repasse à `auto` en mouvement réduit.
9. Aucune animation infinie au centre du regard.

## Comment vérifier

Dans les outils de développement, forcer `prefers-reduced-motion:
reduce`, recharger, parcourir la page entière. Puis désactiver
JavaScript et recharger : tout le texte et toutes les scènes doivent
être là.

## Limite de la fiche

Le goût ne se tranche pas ici : on évalue la mécanique, le coût et
l'accessibilité, pas l'élégance du geste.
