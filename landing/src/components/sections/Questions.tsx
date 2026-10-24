import { questions } from "../../lib/content";
import { Accordion } from "../ui/accordion";

export function Questions() {
  return (
    <section
      aria-labelledby="questions-titre"
      className="border-b border-encre/15"
    >
      <div className="mx-auto max-w-page px-6 py-16">
        <h2 id="questions-titre" className="font-titre text-4xl sm:text-5xl">
          Ce qu'on nous demande avant de venir
        </h2>
        <div className="mt-10 max-w-3xl">
          <Accordion elements={questions} />
        </div>
      </div>
    </section>
  );
}
