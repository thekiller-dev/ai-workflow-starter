import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import * as api from "../lib/api";
import ContactForm from "./ContactForm";

async function remplir(valide = true) {
  const utilisateur = userEvent.setup();
  await utilisateur.type(screen.getByLabelText("Nom"), "Ronald Bill");
  await utilisateur.type(
    screen.getByLabelText("Adresse électronique"),
    valide ? "ronald@exemple.test" : "adresse-sans-arobase",
  );
  await utilisateur.type(
    screen.getByLabelText("Message"),
    "Bonjour, je souhaite un devis pour un site vitrine.",
  );
  return utilisateur;
}

describe("Formulaire de contact", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("refuse un formulaire vide et signale chaque champ", async () => {
    const utilisateur = userEvent.setup();
    render(<ContactForm />);
    await utilisateur.click(screen.getByRole("button", { name: /envoyer/i }));
    expect(await screen.findAllByRole("alert")).toHaveLength(3);
  });

  it("refuse une adresse sans arobase", async () => {
    render(<ContactForm />);
    const utilisateur = await remplir(false);
    await utilisateur.click(screen.getByRole("button", { name: /envoyer/i }));
    expect(
      await screen.findByText("Cette adresse électronique n'est pas valide."),
    ).toBeInTheDocument();
  });

  it("envoie le message puis affiche la confirmation", async () => {
    const envoi = vi.spyOn(api, "envoyerMessage").mockResolvedValue();
    render(<ContactForm />);
    const utilisateur = await remplir();
    await utilisateur.click(screen.getByRole("button", { name: /envoyer/i }));
    await waitFor(() => expect(envoi).toHaveBeenCalledOnce());
    expect(await screen.findByText(/votre message est parti/i)).toBeVisible();
    expect(screen.getByLabelText("Nom")).toHaveValue("");
  });

  it("affiche un texte en français et conserve la saisie après un échec réseau", async () => {
    vi.spyOn(api, "envoyerMessage").mockRejectedValue(
      new api.ErreurEnvoi(
        "L'envoi a échoué. Vérifiez votre connexion, votre message est conservé.",
      ),
    );
    render(<ContactForm />);
    const utilisateur = await remplir();
    await utilisateur.click(screen.getByRole("button", { name: /envoyer/i }));
    expect(await screen.findByText(/l'envoi a échoué/i)).toBeVisible();
    expect(screen.getByLabelText("Nom")).toHaveValue("Ronald Bill");
  });

  it("désactive le bouton pendant l'envoi", async () => {
    let debloquer: () => void = () => {};
    vi.spyOn(api, "envoyerMessage").mockImplementation(
      () => new Promise<void>((resoudre) => (debloquer = resoudre)),
    );
    render(<ContactForm />);
    const utilisateur = await remplir();
    const bouton = screen.getByRole("button", { name: /envoyer/i });
    await utilisateur.click(bouton);
    expect(await screen.findByRole("button", { name: /envoi en cours/i }))
      .toBeDisabled();
    // On debloque la promesse dans act : sinon React signale une mise a
    // jour d'etat survenue hors du rendu controle par le test.
    await act(async () => {
      debloquer();
    });
  });
});
