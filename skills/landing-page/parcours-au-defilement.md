# Compétence · Parcours au défilement

Fiche écrite d'après `components/journey-track.tsx` de la collection
`ln-dev7/landing-pages`. C'est la pièce la plus délicate d'une landing
page illustrée, et celle qu'un agent écrit le plus mal.

## Le principe

Un chemin relie les étapes d'une section, et un objet le suit à mesure
qu'on défile. Le piège : coder le tracé en dur. Dès que la typographie
se replie sur deux lignes ou que l'écran change de largeur, le chemin
ne tombe plus sur les étapes.

**Le tracé se mesure, il ne se devine pas.**

## La recette, en quatre temps

### 1. Mesurer les bornes

Chaque étape porte un marqueur de données. On mesure leur centre par
rapport au conteneur, et on compose une courbe de Bézier entre eux.

```tsx
const boite = racine.getBoundingClientRect();
const centres = jalons.map((j) => {
  const r = j.getBoundingClientRect();
  return { x: r.left + r.width / 2 - boite.left, y: r.top + r.height / 2 - boite.top };
});
```

On recommence à chaque redimensionnement, avec un `ResizeObserver` sur
le conteneur. Pas un écouteur `resize` sur la fenêtre : le bloc peut
changer de taille sans que la fenêtre bouge.

### 2. Poser les pointillés une fois

Un trait en pointillés qui se dessine progressivement ne se redessine
pas : on crée des disques le long du chemin, et on les montre ou on les
cache.

```tsx
for (let at = 0; at <= total; at += PAS) {
  const pt = chemin.getPointAtLength(at);
  // un <circle> caché par visibility, montré quand l'objet l'a dépassé
}
```

Modifier l'attribut `visibility` de quelques disques coûte infiniment
moins cher que recalculer un `stroke-dashoffset` sur un chemin long à
chaque image.

### 3. Trouver la position de l'objet

La question posée est : à quelle longueur du chemin se trouve la
hauteur de lecture de l'écran ? La réponse s'obtient par recherche
dichotomique, une vingtaine d'itérations suffisent.

```tsx
let bas = 0, haut = total;
for (let i = 0; i < 20; i++) {
  const milieu = (bas + haut) / 2;
  if (chemin.getPointAtLength(milieu).y < vise) bas = milieu;
  else haut = milieu;
}
```

L'inclinaison s'obtient en lisant un second point deux pixels plus
loin : l'objet se penche dans le sens du trajet, ce qui suffit à le
rendre vivant.

### 4. Ne calculer qu'une fois par image

```tsx
const auDefilement = () => { if (!image) image = requestAnimationFrame(majour); };
window.addEventListener("scroll", auDefilement, { passive: true });
```

Un seul écouteur, passif, une seule image par cycle, et tout est retiré
au démontage.

## Points vérifiables

1. Le tracé vient de la position mesurée des jalons.
2. `ResizeObserver` sur le conteneur, pas `resize` sur la fenêtre.
3. Les pointillés sont montrés ou cachés, jamais redessinés.
4. Un seul écouteur de défilement, passif, une image par cycle.
5. `getTotalLength` est testé avant d'être appelé : il n'existe pas
   dans tous les environnements de rendu, et son absence ne doit pas
   casser la page.
6. En mouvement réduit, le chemin est complet et l'objet mobile est
   masqué.
7. Sans JavaScript, les étapes restent lisibles : le chemin est un
   décor, pas un contenu.
8. Les marqueurs de jalon sont des éléments vides en `aria-hidden`,
   jamais un titre ou un texte détourné.

## Anti-patrons

- Un chemin SVG en coordonnées fixes, « ajusté » à la main au pixel sur
  un seul écran.
- Une bibliothèque d'animation chargée en entier pour déplacer un
  objet sur une courbe.
- Un écouteur de défilement par étape.
- Un objet mobile qui reste au milieu de l'écran en mouvement réduit,
  posé sur du texte.

## Limite de la fiche

Cette mécanique ne vaut que pour une section de quatre à six étapes. Au
delà, le parcours devient un diagramme, et un diagramme se dessine.
