export interface ImageResult {
  id: number;
  title: string;
  thumbnail: string;
  link: string;
  source: string;
}

export const IMAGE_RESULTS: { [key: string]: ImageResult[] } = {
  "Dr. Ortiz Clinica Galilea": [
    {
      id: 1,
      title: "Dr. Javier Ortiz - Ginecólogo",
      thumbnail:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=300&fit=crop",
      source: "CIM",
      link: "https://www.consultoriointegral.com.ar",
    },
    {
      id: 2,
      title: "Doctor Guillermo Ortiz",
      thumbnail:
        "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=300&fit=crop",
      source: "Revista Factum",
      link: "https://www.revistafactum.com",
    },
    {
      id: 3,
      title: "SAEGRE | El Prof. Dr. Daniel Ortiz",
      thumbnail:
        "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=400&h=300&fit=crop",
      source: "Instagram",
      link: "https://www.instagram.com/saegre",
    },
    {
      id: 4,
      title: "Mi equipo y yo siempre",
      thumbnail:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop",
      source: "Facebook",
      link: "https://www.facebook.com",
    },
    {
      id: 5,
      title: "Centro De Comercio",
      thumbnail:
        "https://images.unsplash.com/photo-1622253694242-0ce4896468c5?w=400&h=300&fit=crop",
      source: "Facebook",
      link: "https://www.facebook.com",
    },
    {
      id: 6,
      title: "Diario de Cuyo",
      thumbnail:
        "https://images.unsplash.com/photo-1651008376896-a5b5c7c8d311?w=400&h=300&fit=crop",
      source: "Instagram",
      link: "https://www.instagram.com",
    },
  ],
  "NOTAS AUTOPUNTES": [],
  "MEDICINA FUNCIONAL": [],
};
