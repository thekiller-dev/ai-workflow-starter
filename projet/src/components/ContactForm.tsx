import { useId, useState, type FormEvent } from "react";

import { ErreurEnvoi, envoyerMessage, type Message } from "../lib/api";

type Champs = keyof Message;
type Erreurs = Partial<Record<Champs, string>>;

/** Un seul etat, pour eviter les combinaisons impossibles. */
type Statut = "saisie" | "envoi" | "succes" | "echec";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function valider(donnees: Message): Erreurs {
  const erreurs: Erreurs = {};
  if (donnees.nom.trim().length < 2) {
    erreurs.nom = "Indiquez votre nom.";
  }
  if (!EMAIL.test(donnees.email.trim())) {
    erreurs.email = "Cette adresse électronique n'est pas valide.";
  }
  if (donnees.message.trim().length < 10) {
    erreurs.message = "Votre message doit faire au moins dix caractères.";
  }
  return erreurs;
}

const VIDE: Message = { nom: "", email: "", message: "" };

export default function ContactForm() {
  const id = useId();
  const [donnees, setDonnees] = useState<Message>(VIDE);
  const [erreurs, setErreurs] = useState<Erreurs>({});
  const [statut, setStatut] = useState<Statut>("saisie");
  const [erreurEnvoi, setErreurEnvoi] = useState("");

  function changer(champ: Champs, valeur: string) {
    setDonnees((prec) => ({ ...prec, [champ]: valeur }));
    setErreurs((prec) => ({ ...prec, [champ]: undefined }));
  }

  async function soumettre(evenement: FormEvent) {
    evenement.preventDefault();
    const trouvees = valider(donnees);
    setErreurs(trouvees);
    if (Object.keys(trouvees).length > 0) return;

    setStatut("envoi");
    setErreurEnvoi("");
    try {
      await envoyerMessage(donnees);
      // La saisie n'est videe qu'apres un succes confirme.
      setDonnees(VIDE);
      setStatut("succes");
    } catch (erreur) {
      setErreurEnvoi(
        erreur instanceof ErreurEnvoi
          ? erreur.message
          : "Une erreur inattendue est survenue.",
      );
      setStatut("echec");
    }
  }

  const champs: Array<{ nom: Champs; label: string; zone?: boolean }> = [
    { nom: "nom", label: "Nom" },
    { nom: "email", label: "Adresse électronique" },
    { nom: "message", label: "Message", zone: true },
  ];

  return (
    <form onSubmit={soumettre} noValidate className="space-y-6">
      {champs.map(({ nom, label, zone }) => {
        const champId = `${id}-${nom}`;
        const erreurId = `${champId}-erreur`;
        const enErreur = Boolean(erreurs[nom]);
        const commun = {
          id: champId,
          name: nom,
          value: donnees[nom],
          "aria-invalid": enErreur,
          "aria-describedby": enErreur ? erreurId : undefined,
          onChange: (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => changer(nom, e.target.value),
          className:
            "mt-2 w-full rounded-lg border px-4 py-3 text-encre outline-none focus:border-vert focus:ring-2 focus:ring-vert/30 " +
            (enErreur ? "border-red-600" : "border-slate-300"),
        };
        return (
          <div key={nom}>
            <label htmlFor={champId} className="font-medium text-encre">
              {label}
            </label>
            {zone ? (
              <textarea {...commun} rows={5} />
            ) : (
              <input {...commun} type={nom === "email" ? "email" : "text"} />
            )}
            {enErreur && (
              <p id={erreurId} role="alert" className="mt-2 text-sm text-red-700">
                {erreurs[nom]}
              </p>
            )}
          </div>
        );
      })}

      <button
        type="submit"
        disabled={statut === "envoi"}
        className="rounded-lg bg-vert px-6 py-3 font-semibold text-white disabled:opacity-60"
      >
        {statut === "envoi" ? "Envoi en cours…" : "Envoyer le message"}
      </button>

      <div aria-live="polite">
        {statut === "succes" && (
          <p className="text-vert">
            Merci, votre message est parti. Nous répondons sous deux jours.
          </p>
        )}
        {statut === "echec" && <p className="text-red-700">{erreurEnvoi}</p>}
      </div>
    </form>
  );
}
