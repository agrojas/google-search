import React, { useState } from 'react';
import { Search, Image, Video, Newspaper } from 'lucide-react';
import { RESULTS } from './mocks/results';
import { IMAGE_RESULTS } from './mocks/image-results';
import { SearchResult } from './mocks/results';
import { ImageResult } from './mocks/image-results';

// Definir el Enum con las variantes permitidas
enum ValidSearchTerms {
  ORTIZ_1 = 'dr ortiz',
  ORTIZ_2 = 'Dr Ortiz',
  ORTIZ_3 = 'DR ORTIZ'
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [filter, setFilter] = useState('');
  const [error, setError] = useState(false); // Estado para manejar el error

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (Object.values(ValidSearchTerms).includes(normalizedQuery)) {
      setIsSearched(true);
      setFilter('ORTIZ');
      setError(false); // Resetear el error solo si la búsqueda es válida
    } else {
      setIsSearched(false);
      setError(true); // Mostrar error si no coincide
    }
  };

  const renderSearchResults = (filter: string) => (
    <div className="grid grid-cols-1 gap-6">
      {RESULTS[filter].map((result: SearchResult) => (
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

  const renderImageResults = (filter: string) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {IMAGE_RESULTS[filter].map((result: ImageResult) => (
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
          activeTab === 'all' ? renderSearchResults(filter) : renderImageResults(filter)
        ) : (
          <div className="text-center">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" className="mx-auto mb-8" />
            <p className="text-gray-600">Ingrese su búsqueda y presione el botón "Buscar" o la tecla Enter.</p>
            {error && (
              <p className="text-red-500 mt-4">No se encontraron resultados para "{searchQuery}".</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
