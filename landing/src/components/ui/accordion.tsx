import { useId, useState } from "react";

type Element = { id: string; q: string; r: string };

/**
 * Accordeon accessible : un bouton par entete, aria-expanded,
 * aria-controls, et le panneau masque par hidden plutot que par du CSS,
 * pour qu'il sorte aussi de l'ordre de tabulation.
 *
 * Les comportements de ce genre ne se reecrivent pas dans une section :
 * ils vivent ici, une fois.
 */
export function Accordion({ elements }: { elements: Element[] }) {
  const prefixe = useId();
  const [ouvert, setOuvert] = useState<string | null>(elements[0]?.id ?? null);

  return (
    <div className="divide-y divide-encre/15 border-y border-encre/15">
      {elements.map((element) => {
        const estOuvert = ouvert === element.id;
        const idEntete = `${prefixe}-${element.id}-entete`;
        const idPanneau = `${prefixe}-${element.id}-panneau`;
        return (
          <div key={element.id}>
            <h3>
              <button
                type="button"
                id={idEntete}
                aria-expanded={estOuvert}
                aria-controls={idPanneau}
                onClick={() => setOuvert(estOuvert ? null : element.id)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg"
              >
                <span>{element.q}</span>
                <span aria-hidden="true" className="text-terre">
                  {estOuvert ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={idPanneau}
              role="region"
              aria-labelledby={idEntete}
              hidden={!estOuvert}
              className="pb-6 pr-10 text-encre/75"
            >
              {element.r}
            </div>
          </div>
        );
      })}
    </div>
  );
}
