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
      title: "Dr Ortiz - Consultorio",
      thumbnail: "/assets/images/ortiz/dr-ortiz-1.jpeg",
      source: "Dr Ortiz",
      link: "/assets/images/ortiz/dr-ortiz-1.jpeg",
    },
    {
      id: 2,
      title: "Dr Ortiz - Consulta",
      thumbnail: "/assets/images/ortiz/dr-ortiz-2.jpeg",
      source: "Dr Ortiz",
      link: "/assets/images/ortiz/dr-ortiz-2.jpeg",
    },
    {
      id: 3,
      title: "Dr Ortiz - Turnos",
      thumbnail: "/assets/images/ortiz/dr-ortiz-3.jpeg",
      source: "Dr Ortiz",
      link: "/assets/images/ortiz/dr-ortiz-3.jpeg"
    },
    {
      id: 4,
      title: "Dr Ortiz - Atencion",
      thumbnail: "/assets/images/ortiz/dr-ortiz-4.jpeg",
      source: "Dr Ortiz",
      link: "/assets/images/ortiz/dr-ortiz-4.jpeg"
    },
    {
      id: 5,
      title: "Dr Ortiz - Consultas",
      thumbnail: "/assets/images/ortiz/dr-ortiz-5.jpeg",
      source: "Dr Ortiz",
      link: "/assets/images/ortiz/dr-ortiz-5.jpeg"
    },
    {
      id: 6,
      title: "Dr Ortiz - Servicios",
      thumbnail: "/assets/images/ortiz/dr-ortiz-6.jpeg",
      source: "Dr Ortiz",
      link: "/assets/images/ortiz/dr-ortiz-6.jpeg"
    }

  ],
  GALILEA: [
    {
      id: 1,
      title: "Clinica Galilea - Dr. Ortiz",
      thumbnail: "/assets/images/galilea/clinica-galilea-1.jpeg",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 2,
      title: "Clinica Galilea - Sucursal",
      thumbnail: "/assets/images/galilea/clinica-galilea-2.jpeg",
      source: "Clinica Galilea Factum",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 3,
      title: "Clinica Galilea - Turnos",
      thumbnail: "/assets/images/galilea/clinica-galilea-3.jpeg",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 4,
      title: "Clinica Galilea - Atencion",
      thumbnail: "/assets/images/galilea/clinica-galilea-4.jpeg",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 5,
      title: "Clinica Galilea - Consultas",
      thumbnail: "/assets/images/galilea/clinica-galilea-5.jpeg",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 6,
      title: "Clinica Galilea - Servicios",
      thumbnail: "/assets/images/galilea/clinica-galilea-6.jpeg",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 7,
      title: "Clinica Galilea - Ubicacion",
      thumbnail: "/assets/images/galilea/clinica-galilea-7.jpeg",
      source: "Clinica Galilea",
      link: "https://www.clinica-galilea.com.ar",
    },
    {
      id: 8,
      title: "Clinica Galilea - Horarios",
      thumbnail: "/assets/images/galilea/clinica-galilea-8.jpeg",
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
      thumbnail: "/assets/images/matricula/matricula.jpeg",
      source: "Camara de control de Fumigadores",
      link: "/assets/documents/matricula/site.pdf",
    },
    {
      id: 2,
      title: "Certificación Profesional de Control de Plagas",
      thumbnail: "/assets/images/matricula/fumigacion-1.jpg",
      source: "Asociación de Controladores de Plagas",
      link: "https://www.acp.org.ar",
    },
    {
      id: 3,
      title: "Curso de Manipulación de Productos Químicos",
      thumbnail: "/assets/images/matricula/fumigacion-2.jpg",
      source: "Instituto de Seguridad Química",
      link: "https://www.isq.edu.ar",
    },
    {
      id: 4,
      title: "Licencia Ambiental para Fumigadores",
      thumbnail: "/assets/images/matricula/fumigacion-3.jpg",
      source: "Ministerio de Ambiente",
      link: "https://www.ambiente.gob.ar",
    },
    {
      id: 5,
      title: "Certificado de Bioseguridad",
      thumbnail: "/assets/images/matricula/fumigacion-4.jpg",
      source: "Consejo de Bioseguridad",
      link: "https://www.bioseguridad.org.ar",
    },
    {
      id: 6,
      title: "Registro Nacional de Empresas Fumigadoras",
      thumbnail: "/assets/images/matricula/fumigacion-5.jpg",
      source: "Registro Nacional",
      link: "https://www.registrofumigadores.gob.ar",
    },
    {
      id: 7,
      title: "Curso de Control de Plagas Urbanas",
      thumbnail: "/assets/images/matricula/fumigacion-6.jpg",
      source: "Centro de Capacitación Técnica",
      link: "https://www.capacitacion-plagas.com",
    },
    {
      id: 8,
      title: "Certificación en Manejo Integrado de Plagas",
      thumbnail: "/assets/images/matricula/fumigacion-7.jpg",
      source: "Instituto MIP",
      link: "https://www.institutomip.org",
    },
    {
      id: 9,
      title: "Habilitación Municipal para Fumigadores",
      thumbnail: "/assets/images/matricula/fumigacion-8.jpg",
      source: "Municipalidad",
      link: "https://www.municipal-habilitaciones.gob.ar",
    },
    {
      id: 10,
      title: "Curso de Seguridad en Fumigaciones",
      thumbnail: "/assets/images/matricula/fumigacion-9.jpg",
      source: "Seguridad Laboral Argentina",
      link: "https://www.seguridadlaboral.org",
    },
    {
      id: 11,
      title: "Certificación Internacional de Control de Plagas",
      thumbnail: "/assets/images/matricula/fumigacion-10.jpg",
      source: "International Pest Control Association",
      link: "https://www.ipca.org",
    },
    {
      id: 12,
      title: "Registro de Aplicadores Certificados",
      thumbnail: "/assets/images/matricula/fumigacion-11.jpg",
      source: "Registro Nacional de Aplicadores",
      link: "https://www.rna.gob.ar",
    },
    {
      id: 13,
      title: "Curso de Control de Plagas en Industria Alimenticia",
      thumbnail: "/assets/images/matricula/fumigacion-12.jpg",
      source: "Instituto de Seguridad Alimentaria",
      link: "https://www.isa.edu.ar",
    },
    {
      id: 14,
      title: "Certificación en Control de Vectores",
      thumbnail: "/assets/images/matricula/fumigacion-13.jpg",
      source: "Dirección de Control de Vectores",
      link: "https://www.controlvectores.gob.ar",
    },
    {
      id: 15,
      title: "Matrícula Provincial de Fumigadores",
      thumbnail: "/assets/images/matricula/fumigacion-14.jpg",
      source: "Gobierno Provincial",
      link: "https://www.matriculas-prov.gob.ar",
    },
    {
      id: 16,
      title: "Curso de Actualización en Control de Plagas",
      thumbnail:
        "https://images.pexels.com/photos/5726787/pexels-photo-5726787.jpeg",
      source: "Centro de Estudios Técnicos",
      link: "https://www.cetec.edu.ar",
    },
    {
      id: 17,
      title: "Certificación en Manejo de Plaguicidas",
      thumbnail:
        "https://images.pexels.com/photos/5726787/pexels-photo-5726787.jpeg",
      source: "Instituto de Plaguicidas",
      link: "https://www.plaguicidas.org.ar",
    },
    {
      id: 18,
      title: "Registro de Empresas de Saneamiento",
      thumbnail:
        "https://images.pexels.com/photos/5726846/pexels-photo-5726846.jpeg",
      source: "Registro de Saneamiento",
      link: "https://www.saneamiento.gob.ar",
    },
    {
      id: 19,
      title: "Curso de Control de Plagas en Espacios Públicos",
      thumbnail:
        "https://images.pexels.com/photos/4482960/pexels-photo-4482960.jpeg",
      source: "Instituto Municipal",
      link: "https://www.instituto-municipal.edu.ar",
    },
    {
      id: 20,
      title: "Licencia de Operador de Control de Plagas",
      thumbnail:
        "https://images.pexels.com/photos/5726787/pexels-photo-5726787.jpeg",
      source: "Dirección de Licencias",
      link: "https://www.licencias-plagas.gob.ar",
    },
    {
      id: 21,
      title: "Certificación en Fumigación Industrial",
      thumbnail:
        "https://images.pexels.com/photos/4483578/pexels-photo-4483578.jpeg",
      source: "Asociación Industrial",
      link: "https://www.fumigacion-indutrial.org.ar",
    },
  ],
};
