import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { query } = useParams();

  // Simular resultados de búsqueda
  const searchResults = [
    {
      title: "Dr. Javier E. Ortiz opiniones",
      url: "https://www.doctoralia.com",
      description: "Consultorio privado en Capital Federal.",
    },
    {
      title: "Dra. Ortiz Margarita Mercedes",
      url: "https://www.sitio-doctora.com",
      description: "Consultorio en Villa Urquiza.",
    },
    {
      title: "Dr. Ortiz Consultorio",
      url: "https://www.consultorio-ortiz.com",
      description: "Consultorio médico en Chacarita.",
    },
    {
      title: "Opiniones sobre Dr. Ortiz",
      url: "https://www.opiniones.com",
      description: "Opiniones de pacientes sobre el Dr. Ortiz.",
    },
    {
      title: "Especialistas en Ortiz",
      url: "https://www.especialistas-ortiz.com",
      description: "Médicos y especialistas cerca de tu ubicación.",
    },
  ];

  return (
    <div>
      <h1>Resultados para: {query}</h1>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <a href={result.url} target="_blank" rel="noopener noreferrer">
              <h3>{result.title}</h3>
            </a>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
