// src/mocks/script-results.ts
export type SearchResult = {
  title: string;
  url: string;
  displayUrl: string;
  description: string;
  type?: "medical" | "notes" | "general";
};

export type SearchResults = {
  [key: string]: SearchResult[];
};

export const SCRIPT_RESULTS: SearchResults = {
  ORTIZ: [
      {
        title: "Dr. Ortiz - Clínica Galilea | Medicina Funcional",
        url: "https://clinicagalilea.com/dr-ortiz",
        displayUrl: "clinicagalilea.com › especialistas",
        description:
          "Especialista en Medicina Funcional y Sistémica. Más de 15 años de experiencia en tratamientos integrativos...",
        type: "medical",
      },
    ],
  BONAR:  [
      {
        title: "Bonar Autopartes",
        url: "/bonar",
        displayUrl: "www.bonar-autopartes.com › inicio",
        description: "Bonar autopartes, repuestos, venta mayoristas.",
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
 PENAS: [
      {
        title: "¿Qué es la Medicina Funcional? - Definición y Beneficios",
        url: "https://medicinafuncional.org",
        displayUrl: "medicinafuncional.org › inicio",
        description:
          "La medicina funcional es un enfoque sistémico que se centra en identificar y abordar la causa raíz de la enfermedad...",
        type: "medical",
      },
    ]
  };

