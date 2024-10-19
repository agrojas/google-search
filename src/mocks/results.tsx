export interface SearchResult {
  id: number;
  name: string;
  description: string;
  link: string;
}


const mockSearchResults: SearchResult[] = [
  {
    id: 1,
    name: 'Dr. Ortiz - Perfil Profesional | Clínica Ganilea',
    description: 'Conozca al Dr. Ortiz, especialista en cardiología de la Clínica Ganilea. Más de 20 años de experiencia en el tratamiento de enfermedades cardiovasculares.',
    link: 'https://clinicaganilea.com/dr-ortiz'
  },
  {
    id: 2,
    name: 'Clínica Ganilea - Nuestro Equipo Médico',
    description: 'Descubra nuestro equipo de profesionales médicos, incluyendo al Dr. Ortiz y otros especialistas dedicados a brindar atención de calidad.',
    link: 'https://clinicaganilea.com/equipo'
  },
  {
    id: 3,
    name: 'Servicios de Cardiología - Dr. Ortiz | Clínica Ganilea',
    description: 'Explore los servicios de cardiología ofrecidos por el Dr. Ortiz en la Clínica Ganilea. Diagnóstico avanzado y tratamientos personalizados.',
    link: 'https://clinicaganilea.com/servicios/cardiologia'
  },
  // Add 17 more mock results here
  {
    id: 4,
    name: 'Citas Online - Dr. Ortiz en Clínica Ganilea',
    description: 'Reserve su cita con el Dr. Ortiz en la Clínica Ganilea. Atención personalizada y horarios flexibles para su conveniencia.',
    link: 'https://clinicaganilea.com/citas/dr-ortiz'
  },
  {
    id: 5,
    name: 'Testimonios de Pacientes - Dr. Ortiz | Clínica Ganilea',
    description: 'Lea las experiencias de pacientes atendidos por el Dr. Ortiz en la Clínica Ganilea. Historias de éxito y recuperación.',
    link: 'https://clinicaganilea.com/testimonios/dr-ortiz'
  },
  {
    id: 6,
    name: 'Investigaciones del Dr. Ortiz - Clínica Ganilea',
    description: 'Conozca las últimas investigaciones y publicaciones del Dr. Ortiz en el campo de la cardiología. Avances médicos en la Clínica Ganilea.',
    link: 'https://clinicaganilea.com/investigacion/dr-ortiz'
  },
  {
    id: 7,
    name: 'Tecnología Cardiovascular - Dr. Ortiz en Clínica Ganilea',
    description: 'Descubra la tecnología de vanguardia utilizada por el Dr. Ortiz en la Clínica Ganilea para diagnósticos y tratamientos cardiovasculares.',
    link: 'https://clinicaganilea.com/tecnologia/cardiologia'
  },
  {
    id: 8,
    name: 'Prevención Cardiovascular - Consejos del Dr. Ortiz',
    description: 'Lea los consejos del Dr. Ortiz de la Clínica Ganilea sobre cómo mantener un corazón saludable y prevenir enfermedades cardiovasculares.',
    link: 'https://clinicaganilea.com/blog/prevencion-cardiovascular'
  },
  {
    id: 9,
    name: 'Formación y Trayectoria - Dr. Ortiz | Clínica Ganilea',
    description: 'Explore la formación académica y trayectoria profesional del Dr. Ortiz, cardiólogo líder en la Clínica Ganilea.',
    link: 'https://clinicaganilea.com/dr-ortiz/trayectoria'
  },
  {
    id: 10,
    name: 'Tratamientos Innovadores - Dr. Ortiz en Clínica Ganilea',
    description: 'Conozca los tratamientos innovadores ofrecidos por el Dr. Ortiz en la Clínica Ganilea para diversas condiciones cardíacas.',
    link: 'https://clinicaganilea.com/tratamientos/cardiologia'
  },
  {
    id: 11,
    name: 'Conferencias y Seminarios - Dr. Ortiz | Clínica Ganilea',
    description: 'Información sobre próximas conferencias y seminarios impartidos por el Dr. Ortiz de la Clínica Ganilea.',
    link: 'https://clinicaganilea.com/eventos/dr-ortiz'
  },
  {
    id: 12,
    name: 'Programa de Rehabilitación Cardíaca - Clínica Ganilea',
    description: 'Detalles sobre el programa de rehabilitación cardíaca dirigido por el Dr. Ortiz en la Clínica Ganilea.',
    link: 'https://clinicaganilea.com/rehabilitacion/cardiaca'
  },
  {
    id: 13,
    name: 'Artículos Médicos - Dr. Ortiz | Clínica Ganilea',
    description: 'Lea artículos médicos escritos por el Dr. Ortiz de la Clínica Ganilea sobre diversos temas de salud cardiovascular.',
    link: 'https://clinicaganilea.com/articulos/dr-ortiz'
  },
  {
    id: 14,
    name: 'Equipo de Cardiología - Clínica Ganilea',
    description: 'Conozca al equipo de cardiología liderado por el Dr. Ortiz en la Clínica Ganilea. Especialistas dedicados a su salud cardíaca.',
    link: 'https://clinicaganilea.com/equipo/cardiologia'
  },
  {
    id: 15,
    name: 'Instalaciones de Vanguardia - Clínica Ganilea',
    description: 'Explore las modernas instalaciones donde el Dr. Ortiz y el equipo de la Clínica Ganilea brindan atención médica de excelencia.',
    link: 'https://clinicaganilea.com/instalaciones'
  },
  {
    id: 16,
    name: 'Preguntas Frecuentes - Dr. Ortiz | Clínica Ganilea',
    description: 'Respuestas a preguntas frecuentes sobre los servicios del Dr. Ortiz y la atención en la Clínica Ganilea.',
    link: 'https://clinicaganilea.com/faq/dr-ortiz'
  },
  {
    id: 17,
    name: 'Colaboraciones Internacionales - Dr. Ortiz',
    description: 'Información sobre las colaboraciones internacionales del Dr. Ortiz y su impacto en la Clínica Ganilea.',
    link: 'https://clinicaganilea.com/colaboraciones/dr-ortiz'
  },
  {
    id: 18,
    name: 'Programa de Prevención - Clínica Ganilea',
    description: 'Detalles sobre el programa de prevención cardiovascular desarrollado por el Dr. Ortiz en la Clínica Ganilea.',
    link: 'https://clinicaganilea.com/prevencion/cardiovascular'
  },
  {
    id: 19,
    name: 'Noticias y Actualizaciones - Dr. Ortiz | Clínica Ganilea',
    description: 'Últimas noticias y actualizaciones sobre el Dr. Ortiz y los avances en la Clínica Ganilea.',
    link: 'https://clinicaganilea.com/noticias/dr-ortiz'
  },
  {
    id: 20,
    name: 'Contacto - Dr. Ortiz en Clínica Ganilea',
    description: 'Información de contacto y horarios de consulta del Dr. Ortiz en la Clínica Ganilea.',
    link: 'https://clinicaganilea.com/contacto/dr-ortiz'
  }
];

export const RESULTS: { [key: string]: SearchResult[]  } = {
    ORTIZ: mockSearchResults,
}
