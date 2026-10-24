#!/usr/bin/env bash
# Cree une tache : une specification a partir du gabarit, et une branche.
#
# Usage : bash scripts/nouvelle-tache.sh 002 "liste des temoignages"
set -euo pipefail

NUMERO="${1:?numero de tache manquant, exemple : 002}"
TITRE="${2:?titre manquant, exemple : \"liste des temoignages\"}"

RACINE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PENTE="$(printf '%s' "$TITRE" \
  | tr '[:upper:]' '[:lower:]' \
  | tr -cs '[:alnum:]' '-' \
  | sed 's/^-//; s/-$//')"
FICHIER="$RACINE/specs/${NUMERO}-${PENTE}.md"

if [ -e "$FICHIER" ]; then
  echo "existe deja : $FICHIER" >&2
  exit 1
fi

sed -e "s/^# 0XX · Titre de la tâche/# ${NUMERO} · ${TITRE}/" \
    -e "s#tache/0XX-titre-court#tache/${NUMERO}-${PENTE}#" \
    "$RACINE/specs/_gabarit.md" > "$FICHIER"

echo "specification creee : specs/${NUMERO}-${PENTE}.md"

if git -C "$RACINE" rev-parse --git-dir >/dev/null 2>&1; then
  git -C "$RACINE" checkout -q -b "tache/${NUMERO}-${PENTE}"
  echo "branche creee : tache/${NUMERO}-${PENTE}"
fi

echo
echo "Etape suivante : remplir la specification, y compris le critere"
echo "d'arret, AVANT d'ouvrir une session avec un agent."
