# ai-workflow-starter

Un workflow complet pour travailler avec des agents IA sur un vrai
projet, et le code d'exemple qui va avec.

Ce dépôt n'est pas une collection d'astuces. C'est une méthode de
travail outillée : des fichiers que tu copies dans ton projet, des
consignes prêtes à coller, des compétences que l'agent charge quand il
en a besoin, et un projet React qui sert de terrain d'essai.

Méthode : **cadrer, déléguer, relire, assumer.**

---

## Pourquoi

Neuf professionnels de la tech sur dix utilisent l'IA au travail, et
trois sur dix n'ont que peu ou pas confiance dans le code qu'elle
produit (DORA, *State of AI-assisted Software Development*, 2025).
Veracode a fait écrire du code à plus de cent modèles sur quatre-vingts
tâches : quarante-cinq pour cent des échantillons introduisent une
faille de l'OWASP Top 10, et le taux ne s'améliore pas d'une génération
de modèles à l'autre. GitClear, sur six cent vingt-trois millions de
changements de code, mesure la refactorisation en baisse de soixante-dix
pour cent et la duplication de blocs en hausse de quatre-vingt-un pour
cent.

L'outil n'est pas en cause. Ce qui manque, c'est un point de départ
écrit et un critère d'arrêt. Ce dépôt fournit les deux.

---

## Démarrer en dix minutes

```bash
git clone https://github.com/thekiller-dev/ai-workflow-starter.git
cd ai-workflow-starter
cp workflow.md AGENTS.md ../mon-projet/     # dans ton projet à toi
```

Pour essayer sur le projet d'exemple :

```bash
cd projet           # ou cd landing, pour la page de démonstration
npm install
npm run dev         # http://localhost:5173
npm run verifier    # types, lint, tests, build
```

Puis ouvre une session avec ton agent et colle
`prompts/00-contexte-de-session.md`. Tout part de là.

---

## Ce qu'il y a dedans

| Dossier | Contenu |
| --- | --- |
| `workflow.md` | le fichier central, quatre étapes, à copier à la racine de ton projet |
| `AGENTS.md` | ce que l'agent lit en premier dans une session |
| `docs/` | une page par étape, les lignes rouges, le déroulé d'une session, les landing pages |
| `specs/` | le gabarit de spécification et une spécification réelle, remplie |
| `prompts/` | onze consignes prêtes à coller, du cadrage au message de commit |
| `skills/` | six fiches de compétence que l'agent charge à la demande |
| `skills/landing-page/` | onze fiches de plus, spécifiques aux landing pages |
| `checklists/` | avant d'exécuter, avant de commiter, avant de livrer |
| `scripts/` | créer une tâche, vérifier le projet |
| `projet/` | un site vitrine React, TypeScript, Tailwind, Vite, avec un formulaire de contact |
| `landing/` | TERRE, une landing page de démonstration construite avec les fiches ci-dessus |

---

## Le cycle, en une image

```
   spécification écrite
            │
            ▼
   consigne complète  ──►  agent  ──►  code proposé
            ▲                               │
            │                               ▼
            └────── la consigne se corrige ── relecture, six contrôles
                                                   │
                                                   ▼
                                       critère d'arrêt atteint ? ──► commit
```

Quand le résultat dévie, on corrige la consigne, pas le code. Un code
rattrapé à la main sur une mauvaise consigne reproduira le même défaut à
la tâche suivante.

---

## Travailler sur une landing page

Une landing page se délègue mal sans méthode : un agent y produit en
quelques secondes une page correcte et anonyme. Le dossier
`skills/landing-page/`, le gabarit `specs/_gabarit-landing.md`, les
consignes 10 à 12 et la liste `checklists/avant-livraison-landing.md`
traitent ce cas. La méthode est expliquée dans `docs/landing-pages.md`.

Une page de démonstration complète, **TERRE**, est dans `landing/` :
elle applique ces fiches et sert de référence à copier. Son brief
est dans `specs/LP-001-terre.md`.

Ces fiches s'appuient sur l'étude de la collection ouverte
[ln-dev7/landing-pages](https://github.com/ln-dev7/landing-pages) de LN,
quatorze pages sous licence MIT, Next.js, Tailwind CSS et shadcn/ui.
Rien n'en est copié : ce qui est repris, c'est la discipline.

## Les règles courtes

1. Une tâche, une consigne. On ferme avant d'ouvrir la suivante.
2. Rien ne s'exécute avant d'avoir été lu.
3. L'architecture, le modèle de données, la sécurité, les dépendances
   critiques et la parole donnée au client ne se délèguent jamais.
4. Le critère d'arrêt s'écrit avant la première requête.

---

## Licence

MIT. Utilise-le, modifie-le, enseigne-le.

Construit pour le Live Talk AI Factory de The InnerBuild.
`theinnerbuild.com` · `eltonhounnou.me` · `github.com/thekiller-dev`
