export interface ImageResult {
  id: number;
  title: string;
  thumbnail: string;
  link: string;
  source: string;
}

export const IMAGE_RESULTS: { [key: string]: ImageResult[] } = {
  ORTIZ: [
    {
      id: 1,
      title: "Clinica Galilea - Dr. Ortiz",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/search-54df5.appspot.com/o/clinica-galilea-1.jpeg?alt=media&token=6a1281bb-bfba-486d-82a8-d6dd5da495ea",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 2,
      title: "Clinica Galilea - Sucursal",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/search-54df5.appspot.com/o/clinica-galilea-2.jpeg?alt=media&token=6a1281bb-bfba-486d-82a8-d6dd5da495ea",
      source: "Clinica Galilea Factum",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 3,
      title: "Clinica Galilea - Turnos",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/search-54df5.appspot.com/o/clinica-galilea-3.jpeg?alt=media&token=6a1281bb-bfba-486d-82a8-d6dd5da495ea",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 4,
      title: "Clinica Galilea - Atencion",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/search-54df5.appspot.com/o/clinica-galilea-4.jpeg?alt=media&token=6a1281bb-bfba-486d-82a8-d6dd5da495ea",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 5,
      title: "Clinica Galilea - Consultas",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/search-54df5.appspot.com/o/clinica-galilea-5.jpeg?alt=media&token=6a1281bb-bfba-486d-82a8-d6dd5da495ea",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 6,
      title: "Clinica Galilea - Servicios",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/search-54df5.appspot.com/o/clinica-galilea-6.jpeg?alt=media&token=6a1281bb-bfba-486d-82a8-d6dd5da495ea",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 7,
      title: "Clinica Galilea - Ubicacion",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/search-54df5.appspot.com/o/clinica-galilea-7.jpeg?alt=media&token=6a1281bb-bfba-486d-82a8-d6dd5da495ea",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 8,
      title: "Clinica Galilea - Horarios",
      thumbnail:
        "https://firebasestorage.googleapis.com/v0/b/search-54df5.appspot.com/o/clinica-galilea-8.jpeg?alt=media&token=6a1281bb-bfba-486d-82a8-d6dd5da495ea",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 9,
      title: "Hospital San Juan - Emergencias",
      thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
      source: "Hospital San Juan",
      link: "https://www.hospitalsanjuan.org",
    },
    {
      id: 10,
      title: "Centro Médico Aurora - Pediatría",
      thumbnail: "https://images.unsplash.com/photo-1581056771107-24ca5f033842",
      source: "Centro Médico Aurora",
      link: "https://www.centroaurora.com",
    },
    {
      id: 11,
      title: "Instituto Cardiólogico Mendoza",
      thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      source: "Instituto Cardiólogico",
      link: "https://www.cardiomendoza.com.ar",
    },
    {
      id: 12,
      title: "Sanatorio del Valle - Maternidad",
      thumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc",
      source: "Sanatorio del Valle",
      link: "https://www.sanatoriodelvalle.com",
    },
    {
      id: 13,
      title: "Centro Oftalmológico Visual",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      source: "Centro Oftalmológico",
      link: "https://www.centrovisual.com.ar",
    },
    {
      id: 14,
      title: "Clínica Traumatológica Sport",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      source: "Clínica Sport",
      link: "https://www.clinicasport.com",
    },
    {
      id: 15,
      title: "Instituto de Diagnóstico Avanzado",
      thumbnail: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
      source: "IDA Diagnóstico",
      link: "https://www.idadiagnostico.com",
    },
    {
      id: 16,
      title: "Centro de Rehabilitación Física",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      source: "Rehabilitación Física",
      link: "https://www.rehabfisica.com.ar",
    },
    {
      id: 17,
      title: "Hospital Infantil - Pediatría Especializada",
      thumbnail: "https://images.unsplash.com/photo-1581056771234-5c7e2ca72409",
      source: "Hospital Infantil",
      link: "https://www.hospitalinfantil.org",
    },
    {
      id: 18,
      title: "Centro Odontológico Dental Care",
      thumbnail: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
      source: "Dental Care",
      link: "https://www.dentalcare.com.ar",
    },
    {
      id: 19,
      title: "Instituto de Salud Mental",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      source: "ISM",
      link: "https://www.saludmental.org",
    },
    {
      id: 20,
      title: "Centro de Estudios Neurológicos",
      thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      source: "Neuro Centro",
      link: "https://www.neurocentro.com.ar",
    },
  ],
  BONAR: [],
  PENAS: [],
  MATRICULA: [
    {
      id: 1,
      title: "Matrícula de Fumigador",
      thumbnail:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=300&fit=crop",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
  ],
};
