import { Etapes } from "./components/sections/Etapes";
import { Hero } from "./components/sections/Hero";
import { Pied } from "./components/sections/Pied";
import { Questions } from "./components/sections/Questions";
import { Reserver } from "./components/sections/Reserver";
import { Seances } from "./components/sections/Seances";
import { useReveal } from "./lib/useReveal";

export default function App() {
  useReveal();
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-encre focus:px-5 focus:py-3 focus:text-papier"
      >
        Aller au contenu
      </a>
      <main id="contenu">
        <Hero />
        <Etapes />
        <Seances />
        <Questions />
        <Reserver />
      </main>
      <Pied />
    </>
  );
}
