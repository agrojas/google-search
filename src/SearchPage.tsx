import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, Mic, Camera, Settings, Menu, ChevronDown } from "lucide-react";
import ImageResults from "./components/ImageResults";
import { getLegalContent } from "./mocks/predictions";
import { SCRIPT_RESULTS } from "./mocks/script-results";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [activeTab, setActiveTab] = useState("todo");
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const legalContent = getLegalContent(query);

  const getSearchResults = () => {
    if (legalContent) {
      return [
        {
          title: legalContent.title,
          url: legalContent.url,
          displayUrl: legalContent.source,
          description: legalContent.content,
        },
      ];
    }

    if (query.toLowerCase().includes("ortiz")) {
      return SCRIPT_RESULTS.ORTIZ;
    }
      if (query.toLowerCase().includes("bonar")) {
        return SCRIPT_RESULTS.BONAR;
      }

    return [];
  };

  const searchResults = getSearchResults();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b z-50">
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
          <div>
            {searchResults.map((result, index) => (
              <div key={index} className="mb-8">
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
            ))}

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
          </div>
        ) : (
          <ImageResults />
        )}
      </main>
    </div>
  );
};

export default SearchPage;
