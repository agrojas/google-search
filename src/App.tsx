import React, { useState } from 'react';
import { Search, Image, Video, Newspaper } from 'lucide-react';

interface SearchResult {
  id: number;
  name: string;
  description: string;
  link: string;
}

interface ImageResult {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
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

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.toLowerCase() === 'dr. ortiz clínica ganilea') {
      setIsSearched(true);
    } else {
      setIsSearched(false);
    }
  };

  const renderSearchResults = () => (
    <div className="grid grid-cols-1 gap-6">
      {mockSearchResults.map((result) => (
        <div key={result.id} className="bg-white shadow overflow-hidden sm:rounded-lg hover:shadow-md transition-shadow duration-300">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-blue-600">
              <a href={result.link} className="hover:underline">{result.name}</a>
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{result.description}</p>
            <a href={result.link} className="text-sm text-green-600 hover:underline">{result.link}</a>
          </div>
        </div>
      ))}
    </div>
  );

  const renderImageResults = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {mockImageResults.map((result) => (
        <div key={result.id} className="bg-white shadow overflow-hidden sm:rounded-lg hover:shadow-md transition-shadow duration-300">
          <img src={result.imageUrl} alt={result.name} className="w-full h-48 object-cover" />
          <div className="px-4 py-2">
            <p className="text-sm text-gray-600">{result.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <form onSubmit={handleSearch} className="flex items-center justify-between">
            <div className="flex items-center flex-grow mr-4">
              {!isSearched && (
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" className="h-8 mr-4" />
              )}
              {isSearched && (
                <Search className="h-8 w-8 text-blue-500 mr-4" />
              )}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar en Google"
                className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Buscar
            </button>
          </form>
        </div>
      </header>
      {isSearched && (
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`py-4 text-sm font-medium ${activeTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Todo
              </button>
              <button
                onClick={() => setActiveTab('images')}
                className={`flex items-center py-4 text-sm font-medium ${activeTab === 'images' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Image className="h-5 w-5 mr-1" />
                Imágenes
              </button>
              <button className="flex items-center py-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                <Video className="h-5 w-5 mr-1" />
                Videos
              </button>
              <button className="flex items-center py-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                <Newspaper className="h-5 w-5 mr-1" />
                Noticias
              </button>
            </div>
          </div>
        </nav>
      )}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isSearched ? (
          activeTab === 'all' ? renderSearchResults() : renderImageResults()
        ) : (
          <div className="text-center">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" className="mx-auto mb-8" />
            <p className="text-gray-600">Ingrese su búsqueda y presione el botón "Buscar" o la tecla Enter.</p>
            {searchQuery && searchQuery.toLowerCase() !== 'dr. ortiz clínica ganilea' && (
              <p className="text-red-500 mt-4">No se encontraron resultados para "{searchQuery}". Intente buscar "Dr. Ortiz Clínica Ganilea".</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;