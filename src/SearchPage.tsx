import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Search,
  Mic,
  Camera,
  Settings,
  Menu,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { getLegalContent } from "./mocks/predictions";
import { SCRIPT_RESULTS, SearchResult } from "./mocks/script-results";
import ImageResults from "./components/ImageResults";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [activeTab, setActiveTab] = useState("todo");
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [showSearchImages, setShowSearchImages] = useState(false);

  const legalContent = getLegalContent(query);

  const getSearchResults = () => {
    if (query.toLowerCase().includes("penas")) {
      return SCRIPT_RESULTS.PENAS;
    }
    if (query.toLowerCase().includes("ortiz")) {
      return SCRIPT_RESULTS.ORTIZ;
    }
    if (query.toLowerCase().includes("bonar")) {
      
      return SCRIPT_RESULTS.BONAR;
    }
    if (query.toLowerCase().includes("matricula")) {
      return SCRIPT_RESULTS.MATRICULA;
    }
    if (query.toLowerCase().includes("galilea")) {
      return SCRIPT_RESULTS.GALILEA;
    }
    return [];
  };

  useEffect(() => {

    setShowSearchImages(
      query.toLowerCase().includes("ortiz") ||
        query.toLowerCase().includes("galilea")
    );
  },[query]);

  const searchResults = getSearchResults();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="flex items-center justify-between px-6 py-3">
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
              Acceder
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
          Cerca de {Math.floor(Math.random() * 100000)} resultados (0.
          {Math.floor(Math.random() * 100)} segundos)
        </p>

        {activeTab === "todo" ? (
          <>
            {/* Link Results */}
            <div className="mb-8">
              {searchResults.map((result: SearchResult, index: number) => (
                <div key={index} className="mb-6">
                  <div className="flex flex-col">
                    <div className="flex items-start">
                      <div className="flex-grow">
                        <p className="text-sm text-gray-600 flex items-center">
                          {result.displayUrl}
                          {result.location && (
                            <span className="flex items-center ml-2">
                              <MapPin className="h-4 w-4 mr-1" />
                              {result.location}
                            </span>
                          )}
                        </p>
                        <h3 className="text-xl mb-1">
                          <a
                            href={result.url}
                            className="text-blue-800 hover:underline visited:text-purple-900"
                          >
                            {result.title}
                          </a>
                        </h3>
                        {result.address && (
                          <p className="text-sm text-gray-700 mb-2">
                            {result.address}
                          </p>
                        )}
                        <p className="text-sm text-gray-600 leading-6">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Images Section */}
            {searchResults.length > 0 && showSearchImages && (
              <div className="mb-8">
                <h2 className="text-lg mb-4">Imágenes</h2>
                <div className="grid grid-cols-3 gap-4">
                  {searchResults
                    .filter(
                      (result) => result.images && result.images.length > 0
                    )
                    .slice(0, 3)
                    .map((result, index) =>
                      result.images?.map((image, imgIndex) => (
                        <div
                          key={`${index}-${imgIndex}`}
                          className="relative group"
                        >
                          <a href={result.url} className="block">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-40 object-cover rounded-lg"
                            />
                            <div className="mt-2">
                              <p className="text-sm text-gray-800 truncate">
                                {result.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                {image.source}
                              </p>
                            </div>
                          </a>
                        </div>
                      ))
                    )}
                </div>
                <div className="mt-4">
                  <a onClick={() => setActiveTab("imagenes")} href="#" className="text-sm text-blue-600 hover:underline">
                    Más imágenes de {query}
                  </a>
                </div>
              </div>
            )}

            {/* Legal Content Section */}
            {legalContent && (
              <div className="mt-8">
                <h2 className="text-xl mb-4">Más preguntas</h2>
                {legalContent.questions.map((question, index) => (
                  <div key={index} className="border-b">
                    <button
                      className="w-full py-4 px-2 flex items-center justify-between hover:bg-gray-50"
                      onClick={() =>
                        setExpandedQuestion(
                          expandedQuestion === question ? null : question
                        )
                      }
                    >
                      <span>{question}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          expandedQuestion === question
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    {expandedQuestion === question && (
                      <div className="p-4 bg-gray-50">
                        <p>Respuesta simulada para: {question}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <ImageResults />
        )}
      </main>
    </div>
  );
};

export default SearchPage;
