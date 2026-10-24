import { useState, type FormEvent } from "react";

import { marque } from "../../lib/content";
import { Button } from "../ui/button";
import { Field } from "../ui/field";

type Statut = "saisie" | "confirme";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Reserver() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [erreurs, setErreurs] = useState<{ nom?: string; email?: string }>({});
  const [statut, setStatut] = useState<Statut>("saisie");

  function soumettre(evenement: FormEvent) {
    evenement.preventDefault();
    const trouvees: { nom?: string; email?: string } = {};
    if (nom.trim().length < 2) trouvees.nom = "Indiquez votre nom.";
    if (!EMAIL.test(email.trim()))
      trouvees.email = "Cette adresse électronique n'est pas valide.";
    setErreurs(trouvees);
    if (Object.keys(trouvees).length > 0) return;
    // Demonstration : rien n'est envoye, rien n'est conserve, et on le dit.
    setStatut("confirme");
  }

  return (
    <section aria-labelledby="reserver-titre" id="reserver">
      <div className="mx-auto max-w-page px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 id="reserver-titre" className="font-titre text-4xl sm:text-5xl">
              {marque.action}
            </h2>
            <p className="mt-4 max-w-sm text-encre/75">{marque.promesse}</p>
            <p className="mt-8 max-w-sm border-l-2 border-terre pl-4 text-sm text-encre/60">
              {marque.fictif}
            </p>
          </div>

          <div aria-live="polite">
            {statut === "confirme" ? (
              <div className="rounded-2xl border border-encre/15 p-8">
                <p className="font-titre text-3xl">Merci, {nom}.</p>
                <p className="mt-3 text-encre/75">
                  Rien n'a été envoyé et rien n'a été enregistré : cette page
                  est une démonstration. Sur un vrai site, vous recevriez une
                  confirmation à l'adresse indiquée.
                </p>
              </div>
            ) : (
              <form onSubmit={soumettre} noValidate className="space-y-6">
                <Field
                  label="Nom"
                  name="nom"
                  value={nom}
                  erreur={erreurs.nom}
                  onChange={(e) => {
                    setNom(e.target.value);
                    setErreurs((p) => ({ ...p, nom: undefined }));
                  }}
                />
                <Field
                  label="Adresse électronique"
                  name="email"
                  type="email"
                  value={email}
                  erreur={erreurs.email}
                  aide="Utilisée uniquement pour l'exemple, jamais transmise."
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErreurs((p) => ({ ...p, email: undefined }));
                  }}
                />
                <Button type="submit">Demander une place</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
