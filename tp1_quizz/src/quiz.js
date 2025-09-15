// Données du quiz : tableau d'objets question.

export const QUESTIONS = [
  {
    id: "q1",
    prompt: "Quel est le résultat de 2 + 2 ?",
    choices: [
      { id: "a", label: "3" },
      { id: "b", label: "4" },
      { id: "c", label: "5" },
      { id: "d", label: "22" },
    ],
    answerId: "b",
    explanation: "2 + 2 = 4.",
  },
  {
    id: "q2",
    prompt: "La capitale de la France est…",
    choices: [
      { id: "a", label: "Lyon" },
      { id: "b", label: "Paris" },
      { id: "c", label: "Marseille" },
      { id: "d", label: "Toulouse" },
    ],
    answerId: "b",
  },
  {
    id: "q3",
    prompt: "Quelle balise HTML sémantique pour un en-tête principal ?",
    choices: [
      { id: "a", label: "<section>" },
      { id: "b", label: "<article>" },
      { id: "c", label: "<header>" },
      { id: "d", label: "<footer>" },
    ],
    answerId: "c",
  },
  {
    id: "q4",
    prompt: "Quelle méthode Array renvoie un nouveau tableau filtré ?",
    choices: [
      { id: "a", label: "forEach" },
      { id: "b", label: "map" },
      { id: "c", label: "filter" },
      { id: "d", label: "reduce" },
    ],
    answerId: "c",
  },
  {
    id: "q5",
    prompt: "Quel hook React gère l’état local ?",
    choices: [
      { id: "a", label: "useEffect" },
      { id: "b", label: "useMemo" },
      { id: "c", label: "useState" },
      { id: "d", label: "useRef" },
    ],
    answerId: "c",
  },
  {
    id: "q6",
    prompt: "TypeScript : quel type pour une valeur ou null ?",
    choices: [
      { id: "a", label: "string | null" },
      { id: "b", label: "nullable<string>" },
      { id: "c", label: "optional<string>" },
      { id: "d", label: "string?" },
    ],
    answerId: "a",
  },
  {
    id: "q7",
    prompt: "HTTP: quel code pour ressource non trouvée ?",
    choices: [
      { id: "a", label: "200" },
      { id: "b", label: "301" },
      { id: "c", label: "404" },
      { id: "d", label: "500" },
    ],
    answerId: "c",
  },
  {
    id: "q8",
    prompt: "CSS: quelle unité relative à la taille de police de l’élément ?",
    choices: [
      { id: "a", label: "px" },
      { id: "b", label: "em" },
      { id: "c", label: "vh" },
      { id: "d", label: "%" },
    ],
    answerId: "b",
  },
  {
    id: "q9",
    prompt: "Git: quelle commande crée une nouvelle branche et s’y place ?",
    choices: [
      { id: "a", label: "git branch new && git checkout new" },
      { id: "b", label: "git checkout -b new" },
      { id: "c", label: "git switch" },
      { id: "d", label: "git commit -b new" },
    ],
    answerId: "b",
  },
  {
    id: "q10",
    prompt: "Dans React, les listes doivent avoir…",
    choices: [
      { id: "a", label: "des ids uniques côté CSS" },
      { id: "b", label: "des keys uniques et stables" },
      { id: "c", label: "un index comme key obligatoirement" },
      { id: "d", label: "une ref sur chaque item" },
    ],
    answerId: "b",
  },
];
export default QUESTIONS;