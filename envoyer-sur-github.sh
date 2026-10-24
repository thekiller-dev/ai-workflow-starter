#!/usr/bin/env bash
# Envoi du kit sur le depot public.
#
# Usage : GH_TOKEN=xxxx bash envoyer-sur-github.sh "message de commit"
#
# Methode additive : on clone, on recopie l'etat local par dessus, on
# pousse. Les fichiers presents sur le depot et absents en local sont
# conserves.
set -euo pipefail

MESSAGE="${1:-mise a jour}"
: "${GH_TOKEN:?GH_TOKEN manquant}"

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPOT="https://${GH_TOKEN}@github.com/thekiller-dev/ai-workflow-starter.git"
TRAVAIL="$(mktemp -d "${TMPDIR:-/var/tmp}/envoi-starter-XXXX")"

git clone --quiet --depth 1 "$DEPOT" "$TRAVAIL/depot"
cd "$TRAVAIL/depot"

shopt -s dotglob
for f in *; do
  [ "$f" = ".git" ] || rm -rf "$f"
done
cp -a "$SRC/." "$TRAVAIL/depot/"
rm -rf "$TRAVAIL/depot/projet/node_modules" "$TRAVAIL/depot/projet/dist"

git add -A
for perdu in $(git diff --cached --name-only --diff-filter=D); do
  git restore --staged --worktree -- "$perdu" 2>/dev/null || true
  echo "conserve depuis le depot : $perdu"
done

git config user.email "bot@theinnerbuild.com"
git config user.name "InnerBuild Bot"
git add -A
if git diff --cached --quiet; then
  echo "rien a envoyer"
else
  git commit -qm "$MESSAGE"
  git push -q origin HEAD:main
  git log --oneline -1
fi

cd /
rm -rf "$TRAVAIL"
echo "envoye sur https://github.com/thekiller-dev/ai-workflow-starter"
