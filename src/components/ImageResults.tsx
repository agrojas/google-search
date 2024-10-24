import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IMAGE_RESULTS, ImageResult } from "../mocks/image-results";

// Resultados por defecto cuando no hay coincidencia
const DEFAULT_IMAGE_RESULTS: ImageResult[] = [
  {
    id: 1,
    title: "Dr. Javier Ortiz - Foto de perfil profesional",
    thumbnail: "/api/placeholder/300/200",
    link: "https://example.com/image1",
    source: "consultoriointegral.com.ar",
  },
  {
    id: 2,
    title: "Dr. Ortiz realizando una consulta",
    thumbnail: "/api/placeholder/300/200",
    link: "https://example.com/image2",
    source: "doctoralia.com.ar",
  },
  {
    id: 3,
    title: "Equipo médico del Centro de Salud",
    thumbnail: "/api/placeholder/300/200",
    link: "https://example.com/image3",
    source: "centromedico.com.ar",
  },
  {
    id: 4,
    title: "Conferencia sobre Ginecología 2024",
    thumbnail: "/api/placeholder/300/200",
    link: "https://example.com/image4",
    source: "sogiba.org.ar",
  },
];

const ImageResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [currentImages, setCurrentImages] = useState<ImageResult[]>([]);
  const [searchMetrics, setSearchMetrics] = useState({ total: 0, time: 0 });

  useEffect(() => {
    // Buscar en los resultados del script primero
    let scriptResult = DEFAULT_IMAGE_RESULTS;
    const normalizedQuery = query.toLowerCase();
    if (normalizedQuery.includes("penas")) {
      scriptResult = IMAGE_RESULTS.PENAS;
    }
     if (normalizedQuery.includes("ortiz")) {
       scriptResult = IMAGE_RESULTS.ORTIZ;
     }
      if (normalizedQuery.includes("bonar")) {
        scriptResult = IMAGE_RESULTS.BONAR;
      }
       if (normalizedQuery.includes("matricula")) {
         scriptResult = IMAGE_RESULTS.MATRICULA;
       }
    if (scriptResult) {
      setCurrentImages(scriptResult);
      setSearchMetrics({
        total: scriptResult.length,
        time: Number((Math.random() * 0.5).toFixed(2)),
      });
    } else {
      // Usar los resultados por defecto como fallback
      setCurrentImages(DEFAULT_IMAGE_RESULTS);
      setSearchMetrics({
        total: Math.floor(Math.random() * 1000),
        time: Number((Math.random() * 0.5).toFixed(2)),
      });
    }
  }, [query]);

  return (
    <>
      <p className="text-sm text-gray-600 mb-5">
        Cerca de {searchMetrics.total.toLocaleString()} resultados (
        {searchMetrics.time} segundos)
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentImages.map((image) => (
          <div key={image.id} className="group relative">
            <a
              href={image.link}
              className="block overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
            >
              <img
                src={image.thumbnail}
                alt={image.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-2">
                <p className="text-sm text-gray-700 truncate">{image.title}</p>
                <p className="text-xs text-gray-500">{image.source}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageResults;
