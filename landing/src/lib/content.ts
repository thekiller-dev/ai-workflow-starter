/**
 * Contenu de la page. Aucun texte, aucun prix, aucune date n'est ecrit
 * dans un composant : ici, et seulement ici.
 *
 * Demonstration fictive. La marque, les tarifs, les horaires et le lieu
 * sont inventes pour l'exemple.
 */

export const marque = {
  nom: "TERRE",
  promesse: "Deux heures, une pièce, vos mains.",
  description:
    "Un atelier de poterie où l'on repart avec sa pièce, modelée puis cuite, sans jamais avoir touché un tour auparavant.",
  lieu: "Quartier Houinmè, Porto-Novo",
  action: "Réserver une séance",
  fictif:
    "Page de démonstration. L'atelier, les tarifs et les horaires sont fictifs : aucune réservation n'est enregistrée.",
};

export const reperes = [
  { valeur: "2 h", texte: "la durée d'une séance, cuisson comprise" },
  { valeur: "6", texte: "participants au maximum, une table chacun" },
  { valeur: "0", texte: "expérience nécessaire, vraiment" },
];

export const etapes = [
  {
    id: "centrer",
    numero: "01",
    titre: "Centrer la terre",
    texte:
      "Quinze minutes, les mains dans l'argile, à comprendre où elle veut aller. C'est la seule partie qui résiste.",
  },
  {
    id: "monter",
    numero: "02",
    titre: "Monter la pièce",
    texte:
      "Un bol, une tasse, un vase bas. On choisit en arrivant, on change d'avis en route, personne ne s'en formalise.",
  },
  {
    id: "cuire",
    numero: "03",
    titre: "Passer au four",
    texte:
      "La pièce cuit pendant qu'on boit un thé, à l'ombre, sous le manguier de la cour.",
  },
  {
    id: "repartir",
    numero: "04",
    titre: "Repartir avec",
    texte:
      "Emballée dans son papier kraft, encore tiède. Rien à venir rechercher trois semaines plus tard.",
  },
];

export const bandeau = [
  "tour de potier",
  "argile locale",
  "six places",
  "cuisson le jour même",
  "aucune expérience",
];

export const seances = [
  {
    id: "decouverte",
    nom: "Découverte",
    prix: 6000,
    duree: "2 heures",
    texte: "Une séance, une pièce, tout le matériel fourni.",
    inclus: "Argile, cuisson et tablier compris",
  },
  {
    id: "duo",
    nom: "À deux",
    prix: 11000,
    duree: "2 heures",
    texte: "Deux tours côte à côte. On repart avec deux pièces.",
    inclus: "Pour deux personnes",
  },
  {
    id: "serie",
    nom: "La série",
    prix: 20000,
    duree: "4 séances",
    texte:
      "Quatre rendez-vous pour passer du bol qui penche au bol qui tient.",
    inclus: "Une séance par semaine, au rythme choisi",
  },
];

export const questions = [
  {
    id: "jamais",
    q: "Je n'ai jamais touché d'argile de ma vie.",
    r: "C'est le cas de presque tout le monde ici. La séance Découverte est construite pour une première fois, et la table est à six personnes au maximum pour qu'on passe derrière chacun.",
  },
  {
    id: "rate",
    q: "Et si ma pièce est ratée ?",
    r: "Elle le sera un peu, et c'est très bien. On la cuit quand même : un premier bol de travers se garde plus longtemps qu'un bol parfait acheté.",
  },
  {
    id: "enfant",
    q: "Je peux venir avec un enfant ?",
    r: "À partir de huit ans, accompagné. La terre pardonne tout, le four non : les enfants ne s'en approchent pas.",
  },
  {
    id: "repartir",
    q: "Je repars vraiment avec ma pièce le jour même ?",
    r: "Oui, cuite. C'est tout l'intérêt du format : rien à venir rechercher trois semaines plus tard.",
  },
];

export const pied = {
  adresse: "Quartier Houinmè, Porto-Novo",
  horaires: "Du mardi au samedi, 9 h à 18 h",
  credits:
    "Polices Instrument Serif et Space Grotesk, licence SIL Open Font, fichiers dans public/fonts/.",
};
