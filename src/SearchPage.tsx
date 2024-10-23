import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, Mic, Camera, Settings, Menu } from "lucide-react";
import ImageResults from "./components/ImageResults";
import { SCRIPT_RESULTS, SearchResult } from "./mocks/script-results";

// Resultados por defecto cuando no hay coincidencia en el guion
const DEFAULT_SEARCH_RESULTS: SearchResult[] = [
  {
    title: "Dr. Javier Ortiz - Ginecólogo - CIM",
    url: "https://www.consultoriointegral.com.ar",
    displayUrl: "consultoriointegral.com.ar › equipo-médico",
    description:
      "Prof. Adjunto de Ginecología. Jefe de Ginecología del Hospital de Clínicas. Especialista en cirugía laparoscópica e histeroscopia. Prof. Dr. José María Méndez...",
    type: "medical",
  },
  {
    title: "Dr. Javier E. Ortiz opiniones - Doctoralia",
    url: "https://www.doctoralia.com.ar",
    displayUrl: "doctoralia.com.ar › doctor-ortiz",
    description:
      "Consultorio privado. PACHECO DE MELO 3026 PISO PB (DPTO 2), Capital Federal · (mapa) · Ampliar. Este especialista no ofrece reserva online en esta dirección. ⭐⭐⭐⭐⭐ Calificación: 5 · 2 opiniones",
    type: "medical",
  },
  {
    title: "Entrevista al Dr. Javier Ortiz sobre Miomas Uterinos",
    url: "https://www.sogiba.org.ar",
    displayUrl: "sogiba.org.ar › index.php › notas-cientificas",
    description:
      "Entrevista al Dr. Javier Ortiz sobre Miomas Uterinos. Fuente: Revista Salud Interactiva. Acceder a la nota. Publicaciones.",
    type: "medical",
  },
  {
    title: "Dr. Ortiz - Centro Médico Especializado",
    url: "https://www.centromedico.com.ar",
    displayUrl: "centromedico.com.ar › profesionales",
    description:
      "Médico especialista en Ginecología y Obstetricia. Más de 20 años de experiencia. Atención personalizada y seguimiento integral de pacientes.",
    type: "medical",
  },
];

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [activeTab, setActiveTab] = useState("todo");
  const [currentResults, setCurrentResults] = useState<SearchResult[]>([]);
  const [searchMetrics, setSearchMetrics] = useState({ total: 0, time: 0 });

  useEffect(() => {
    // Buscar en los resultados del guion primero
    const scriptResult = SCRIPT_RESULTS[query];
    if (scriptResult) {
      setCurrentResults(scriptResult.results);
      setSearchMetrics({
        total: scriptResult.total,
        time: scriptResult.searchTime,
      });
    } else {
      // Usar los resultados por defecto como fallback
      setCurrentResults(DEFAULT_SEARCH_RESULTS);
      setSearchMetrics({
        total: Math.floor(Math.random() * 100000),
        time: Number((Math.random() * 0.5).toFixed(2)),
      });
    }
  }, [query]);

  const renderResultCard = (result: SearchResult) => {
    const cardClasses = {
      medical: "border-l-4 border-blue-500 pl-4",
      notes: "border-l-4 border-green-500 pl-4",
      general: "",
    };

    return (
      <div
        className={`mb-8 ${
          result.type
            ? cardClasses[result.type as keyof typeof cardClasses]
            : ""
        }`}
      >
        <div className="flex items-start">
          <div>
            <p className="text-sm text-gray-600">{result.displayUrl}</p>
            <h3 className="text-xl mb-1">
              <a
                href={result.url}
                className="text-blue-800 hover:underline visited:text-purple-900"
              >
                {result.title}
              </a>
            </h3>
            <p className="text-sm text-gray-600 leading-6">
              {result.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b">
        <div className="flex items-center px-6 py-3">
          <Link to="/">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-7 mr-8"
            />
          </Link>

          <div className="flex-grow max-w-2xl">
            <div className="relative flex items-center">
              <input
                type="text"
                defaultValue={query}
                className="w-full px-4 py-2 rounded-full border hover:shadow-md focus:shadow-md focus:outline-none"
              />
              <div className="absolute right-3 flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Mic className="h-5 w-5 text-blue-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Camera className="h-5 w-5 text-blue-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Search className="h-5 w-5 text-blue-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center ml-4 space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
            <button className="ml-2 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Iniciar sesión
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex px-6 text-sm">
          <button
            onClick={() => setActiveTab("todo")}
            className={`px-3 py-2 ${
              activeTab === "todo"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Todo
          </button>
          <button
            onClick={() => setActiveTab("imagenes")}
            className={`px-3 py-2 ${
              activeTab === "imagenes"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Imágenes
          </button>
          <button className="px-3 py-2 text-gray-600 hover:text-blue-600">
            Videos
          </button>
          <button className="px-3 py-2 text-gray-600 hover:text-blue-600">
            Noticias
          </button>
          <button className="px-3 py-2 text-gray-600 hover:text-blue-600">
            Maps
          </button>
          <button className="px-3 py-2 text-gray-600 hover:text-blue-600">
            Más
          </button>
        </nav>
      </header>

      {/* Search Results */}
      <main
        className={`px-6 ${
          activeTab === "todo" ? "max-w-[652px]" : "max-w-full"
        }`}
      >
        <p className="text-sm text-gray-600 mb-5 py-4">
          Cerca de {searchMetrics.total.toLocaleString()} resultados (
          {searchMetrics.time} segundos)
        </p>

        {activeTab === "todo" ? (
          currentResults.map((result) => renderResultCard(result))
        ) : (
          <ImageResults />
        )}
      </main>
    </div>
  );
};

export default SearchPage;
