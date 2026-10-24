#!/usr/bin/env bash
# Le portail avant commit : types, lint, tests, build.
#
# Usage : bash scripts/verifier.sh
set -euo pipefail

RACINE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$RACINE/projet"

if [ ! -d node_modules ]; then
  echo "> installation des dependances"
  npm install --silent
fi

echo "> lint"
npm run --silent lint

echo "> tests"
npm run --silent test

echo "> types et build"
npm run --silent build

echo
echo "Tout passe. La machine a fait sa part : il reste les six controles"
echo "de checklists/avant-execution.md, que seule une lecture humaine"
echo "peut cocher."
