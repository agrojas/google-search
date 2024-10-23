import React, { useState, useRef } from "react";
import { Search, Mic, Camera } from "lucide-react";
import { PREDICTION_RESULTS } from "./mocks/predictions";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPredictor, setShowPredictor] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate(); // Hook para navegar a otra ruta

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`); // Navegar a la página de resultados de búsqueda
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowPredictor(e.target.value.length > 0);
  };

  const handlePredictorClick = (prediction: string) => {
    console.log("Prediction clicked:", prediction);
    setSearchQuery(prediction);
    setShowPredictor(false);
    navigate(`/search?q=${prediction}`); // Navegar a la página de resultados de búsqueda
  };

  const filteredPredictions = PREDICTION_RESULTS["ORTIZ"].filter((prediction) =>
    prediction.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col items-center mt-28">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="w-72 mb-8"
        />

        <div className="w-full max-w-2xl px-5">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                className="w-full py-3 px-12 border border-gray-200 rounded-full hover:shadow-md focus:shadow-md focus:outline-none transition-shadow duration-200"
                autoComplete="off"
              />
              <div className="absolute right-4 flex items-center space-x-3">
                <button
                  type="button"
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <Mic className="h-5 w-5 text-blue-500" />
                </button>
                <button
                  type="button"
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <Camera className="h-5 w-5 text-blue-500" />
                </button>
              </div>
            </div>

            {showPredictor && searchQuery.length > 0 && (
              <>
                {console.log("Rendering predictions", filteredPredictions)}{" "}
                {/* Verifica que esto se muestre */}
                <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {filteredPredictions.map((prediction, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        console.log("Clicked on:", prediction); // Ver si el clic es capturado
                        handlePredictorClick(prediction);
                      }}
                    >
                      <Search className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="text-sm">{prediction}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </form>

          <div className="flex justify-center space-x-3 mt-8">
            <button className="px-4 py-2 bg-gray-50 text-sm text-gray-600 rounded hover:border hover:border-gray-200 hover:shadow-sm">
              Google Search
            </button>
            <button className="px-4 py-2 bg-gray-50 text-sm text-gray-600 rounded hover:border hover:border-gray-200 hover:shadow-sm">
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
