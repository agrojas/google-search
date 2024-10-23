// src/mocks/script-results.ts
export type SearchResult = {
  title: string;
  url: string;
  displayUrl: string;
  description: string;
  type?: "medical" | "notes" | "general";
};

export type SearchResults = {
  [key: string]: {
    results: SearchResult[];
    total: number;
    searchTime: number;
  };
};

export const SCRIPT_RESULTS: SearchResults = {
  "Dr. Ortiz Clinica Galilea": {
    results: [
      {
        title: "Dr. Ortiz - Clínica Galilea | Medicina Funcional",
        url: "https://clinicagalilea.com/dr-ortiz",
        displayUrl: "clinicagalilea.com › especialistas",
        description:
          "Especialista en Medicina Funcional y Sistémica. Más de 15 años de experiencia en tratamientos integrativos...",
        type: "medical",
      },
    ],
    total: 1,
    searchTime: 0.42,
  },
  "NOTAS AUTOPUNTES": {
    results: [
      {
        title: "Notas Autopuntes - Repasitos y material de estudio",
        url: "https://autopuntes.com/notas",
        displayUrl: "autopuntes.com › notas",
        description:
          "Accede a miles de apuntes y notas de estudio. Comparte tus propios materiales...",
        type: "notes",
      },
      {
        title: "Venta Autopuntes - Material académico verificado",
        url: "https://autopuntes.com/venta",
        displayUrl: "autopuntes.com › venta",
        description:
          "Marketplace de apuntes y materiales de estudio revisados...",
        type: "notes",
      },
    ],
    total: 2,
    searchTime: 0.38,
  },
  "MEDICINA FUNCIONAL": {
    results: [
      {
        title: "¿Qué es la Medicina Funcional? - Definición y Beneficios",
        url: "https://medicinafuncional.org",
        displayUrl: "medicinafuncional.org › inicio",
        description:
          "La medicina funcional es un enfoque sistémico que se centra en identificar y abordar la causa raíz de la enfermedad...",
        type: "medical",
      },
    ],
    total: 1,
    searchTime: 0.45,
  },
};
