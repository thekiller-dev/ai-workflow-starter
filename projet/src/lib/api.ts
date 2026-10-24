/**
 * Appels reseau du site.
 *
 * Tout passe par ce fichier : le jour ou l'API change, un seul fichier
 * bouge. Un composant n'appelle jamais fetch directement.
 */

export type Message = {
  nom: string;
  email: string;
  message: string;
};

/** Erreur destinee a l'utilisateur, deja traduite. */
export class ErreurEnvoi extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ErreurEnvoi";
  }
}

const BASE = import.meta.env.VITE_API_URL ?? "";
const DELAI_MAX = 10_000;

export async function envoyerMessage(donnees: Message): Promise<void> {
  const controleur = new AbortController();
  const minuterie = setTimeout(() => controleur.abort(), DELAI_MAX);

  let reponse: Response;
  try {
    reponse = await fetch(`${BASE}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(donnees),
      signal: controleur.signal,
    });
  } catch {
    // Panne reseau, DNS, ou delai depasse : fetch leve ici.
    throw new ErreurEnvoi(
      "L'envoi a échoué. Vérifiez votre connexion, votre message est conservé.",
    );
  } finally {
    clearTimeout(minuterie);
  }

  // Une reponse 500 ne leve pas d'exception avec fetch : il faut la tester.
  if (!reponse.ok) {
    throw new ErreurEnvoi(
      "Le serveur n'a pas accepté le message. Réessayez dans un instant.",
    );
  }
}
