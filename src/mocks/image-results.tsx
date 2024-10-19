export interface ImageResult {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

const mockImageResults: ImageResult[] = [
  {
    id: 1,
    name: 'Dr. Ortiz',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Dr. Ortiz - Cardiólogo en Clínica Ganilea'
  },
  {
    id: 2,
    name: 'Dra. Rodríguez',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Dra. Rodríguez - Cirujana en Clínica Ganilea'
  },
  {
    id: 3,
    name: 'Dr. Gómez',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Dr. Gómez - Pediatra en Clínica Ganilea'
  },
  {
    id: 4,
    name: 'Clínica Ganilea',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Fachada de la Clínica Ganilea'
  },
  // Add 16 more mock image results here
  {
    id: 5,
    name: 'Sala de Consulta',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Sala de consulta del Dr. Ortiz en Clínica Ganilea'
  },
  {
    id: 6,
    name: 'Equipo Médico',
    imageUrl: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Equipo médico de Clínica Ganilea'
  },
  {
    id: 7,
    name: 'Tecnología Cardíaca',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Tecnología cardíaca avanzada en Clínica Ganilea'
  },
  {
    id: 8,
    name: 'Sala de Espera',
    imageUrl: 'https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Sala de espera confortable en Clínica Ganilea'
  },
  {
    id: 9,
    name: 'Dr. Ortiz en Cirugía',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Dr. Ortiz realizando una cirugía cardíaca'
  },
  {
    id: 10,
    name: 'Laboratorio',
    imageUrl: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Laboratorio de análisis en Clínica Ganilea'
  },
  {
    id: 11,
    name: 'Recepción',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Recepción de Clínica Ganilea'
  },
  {
    id: 12,
    name: 'Dr. Ortiz con Paciente',
    imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Dr. Ortiz atendiendo a un paciente'
  },
  {
    id: 13,
    name: 'Sala de Conferencias',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Sala de conferencias de Clínica Ganilea'
  },
  {
    id: 14,
    name: 'Equipo de Diagnóstico',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Equipo de diagnóstico cardíaco en Clínica Ganilea'
  },
  {
    id: 15,
    name: 'Dr. Ortiz en Consulta',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Dr. Ortiz durante una consulta médica'
  },
  {
    id: 16,
    name: 'Sala de Rehabilitación',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Sala de rehabilitación cardíaca en Clínica Ganilea'
  },
  {
    id: 17,
    name: 'Fachada Nocturna',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Vista nocturna de la Clínica Ganilea'
  },
  {
    id: 18,
    name: 'Dr. Ortiz en Investigación',
    imageUrl: 'https://images.unsplash.com/photo-1581093806997-23e413cf3324?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Dr. Ortiz realizando investigación médica'
  },
  {
    id: 19,
    name: 'Ambulancia',
    imageUrl: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Ambulancia de la Clínica Ganilea'
  },
  {
    id: 20,
    name: 'Equipo Médico Completo',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    description: 'Equipo médico completo de la Clínica Ganilea'
  }
];

  export const IMAGE_RESULTS: { [key: string]: ImageResult[]  } = {
    ORTIZ: mockImageResults
}