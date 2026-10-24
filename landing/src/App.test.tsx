import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("Landing TERRE", () => {
  it("n'a qu'un seul titre de niveau un", () => {
    render(<App />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("affiche les quatre étapes du parcours", () => {
    render(<App />);
    const parcours = screen.getByRole("region", {
      name: /parcours d'une séance/i,
    });
    expect(within(parcours).getAllByRole("listitem")).toHaveLength(4);
    expect(screen.getByText("Centrer la terre")).toBeVisible();
    expect(screen.getByText("Repartir avec")).toBeVisible();
  });

  it("ouvre et ferme une question au clavier", async () => {
    const utilisateur = userEvent.setup();
    render(<App />);
    const entete = screen.getByRole("button", {
      name: /jamais touché d'argile/i,
    });
    expect(entete).toHaveAttribute("aria-expanded", "true");
    await utilisateur.click(entete);
    expect(entete).toHaveAttribute("aria-expanded", "false");
    await utilisateur.click(entete);
    expect(entete).toHaveAttribute("aria-expanded", "true");
  });

  it("refuse une adresse mal formée avant d'afficher la confirmation", async () => {
    const utilisateur = userEvent.setup();
    render(<App />);
    await utilisateur.type(screen.getByLabelText("Nom"), "Ronald");
    await utilisateur.type(
      screen.getByLabelText("Adresse électronique"),
      "pas-une-adresse",
    );
    await utilisateur.click(
      screen.getByRole("button", { name: /demander une place/i }),
    );
    expect(await screen.findByRole("alert")).toHaveTextContent(
      /n'est pas valide/i,
    );
  });

  it("annonce que rien n'est envoyé après une demande valide", async () => {
    const utilisateur = userEvent.setup();
    render(<App />);
    await utilisateur.type(screen.getByLabelText("Nom"), "Ronald");
    await utilisateur.type(
      screen.getByLabelText("Adresse électronique"),
      "ronald@exemple.test",
    );
    await utilisateur.click(
      screen.getByRole("button", { name: /demander une place/i }),
    );
    expect(
      await screen.findByText(/rien n'a été envoyé et rien n'a été enregistré/i),
    ).toBeVisible();
  });
});
