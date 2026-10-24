import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-vert">
        Exemple du workflow
      </p>
      <h1 className="mt-2 text-3xl font-bold text-encre">
        Écrivez-nous
      </h1>
      <p className="mt-3 text-slate-600">
        Ce formulaire est la tâche 001 du dépôt. Sa spécification est
        dans specs/001-formulaire-de-contact.md.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
    </main>
  );
}
