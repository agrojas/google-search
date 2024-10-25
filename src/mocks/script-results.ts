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
        "Especialista en Medicina Funcional y Sistémica. Más de 15 años de experiencia en tratamientos integrativos. Consultas presenciales y virtuales disponibles. Horarios flexibles.",
      type: "medical",
    },
    {
      title: "Equipo Médico - Clínica Galilea | Dr. Ortiz",
      url: "https://clinicagalilea.com/equipo-medico",
      displayUrl: "clinicagalilea.com › equipo-medico",
      description:
        "El Dr. Ortiz lidera nuestro equipo de medicina funcional. Conoce su trayectoria, especialidades y enfoque terapéutico integrador. Formación internacional en medicina funcional.",
      type: "medical",
    },
    {
      title: "Turnos Online - Dr. Ortiz | Clínica Galilea",
      url: "https://clinicagalilea.com/turnos/dr-ortiz",
      displayUrl: "clinicagalilea.com › turnos",
      description:
        "Reserva tu consulta con el Dr. Ortiz. Sistema de turnos online 24/7. Primera consulta y seguimientos. Obras sociales y prepagas aceptadas.",
      type: "medical",
    },
    {
      title: "Clínica Galilea - Sede Central | Atención Personalizada",
      url: "https://clinicagalilea.com/sedes/central",
      displayUrl: "clinicagalilea.com › sedes",
      description:
        "Visita nuestra sede central donde atiende el Dr. Ortiz. Instalaciones modernas, tecnología de última generación. Estacionamiento propio y fácil acceso.",
      type: "medical",
    },
    {
      title: "Medicina Funcional - Tratamientos | Clínica Galilea",
      url: "https://clinicagalilea.com/tratamientos-funcionales",
      displayUrl: "clinicagalilea.com › tratamientos",
      description:
        "Descubre los tratamientos funcionales del Dr. Ortiz. Abordaje integral de patologías crónicas, trastornos metabólicos y enfermedades autoinmunes.",
      type: "medical",
    },
    {
      title: "Dr. Ortiz - Conferencias y Eventos | Clínica Galilea",
      url: "https://clinicagalilea.com/eventos/conferencias",
      displayUrl: "clinicagalilea.com › eventos",
      description:
        "Calendario de conferencias y talleres del Dr. Ortiz. Temas: medicina funcional, nutrición terapéutica y salud integrativa. Inscripciones abiertas.",
      type: "medical",
    },
    {
      title: "Blog Salud - Dr. Ortiz | Clínica Galilea",
      url: "https://clinicagalilea.com/blog/dr-ortiz",
      displayUrl: "clinicagalilea.com › blog",
      description:
        "Artículos y consejos de salud por el Dr. Ortiz. Últimas investigaciones en medicina funcional, casos clínicos y recomendaciones para pacientes.",
      type: "medical",
    },
    {
      title: "Opiniones - Dr. Ortiz | Clínica Galilea",
      url: "https://clinicagalilea.com/opiniones/dr-ortiz",
      displayUrl: "clinicagalilea.com › opiniones",
      description:
        "Testimonios de pacientes del Dr. Ortiz. Experiencias reales con tratamientos funcionales. Valoración promedio 4.8/5 basada en más de 200 opiniones.",
      type: "medical",
    },
    {
      title: "Clínica Galilea (@ClinicaGalilea) | Twitter",
      url: "https://twitter.com/ClinicaGalilea",
      displayUrl: "twitter.com › ClinicaGalilea",
      description:
        "Sigue las actualizaciones del Dr. Ortiz y Clínica Galilea. Noticias, eventos y consejos de salud. Mantente informado sobre nuevos tratamientos y servicios.",
      type: "medical",
    },
    {
      title: "Dr. Ortiz - Entrevistas | Clínica Galilea YouTube",
      url: "https://youtube.com/ClinicaGalilea",
      displayUrl: "youtube.com › ClinicaGalilea",
      description:
        "Canal oficial de Clínica Galilea. Entrevistas y charlas del Dr. Ortiz sobre medicina funcional. Videos educativos y casos de éxito.",
      type: "medical",
    },
    {
      title: "Clínica Galilea - Servicios Médicos | Dr. Ortiz",
      url: "https://clinicagalilea.com/servicios",
      displayUrl: "clinicagalilea.com › servicios",
      description:
        "Conoce todos nuestros servicios médicos. Consultas con el Dr. Ortiz, análisis funcionales, terapias complementarias y programas de seguimiento personalizados.",
      type: "medical",
    },
    {
      title: "Contacto - Dr. Ortiz | Clínica Galilea",
      url: "https://clinicagalilea.com/contacto",
      displayUrl: "clinicagalilea.com › contacto",
      description:
        "Información de contacto del Dr. Ortiz. Consultas, dudas y emergencias. Horarios de atención: Lunes a Viernes de 9:00 a 18:00hs.",
      type: "medical",
    },
  ],
  BONAR: [
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
  ],
  MATRICULA: [
    {
      title: "Matrícula de Fumigador - Requisitos y Trámites",
      url: "https://matriculafumigador.com",
      displayUrl: "matriculafumigador.com › inicio",
      description:
        "Requisitos y trámites para obtener la matrícula de fumigador en Argentina...",
      type: "general",
    },
  ],
};
