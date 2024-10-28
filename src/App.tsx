import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage';  // Página de resultados
import HomePage from './HomePage';      // Página de predicciones
import Bonar from './Bonar';
import Poison from "./Poison";
import License from "./License";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/bonar" element={<Bonar />} />
        <Route path="/poison" element={<Poison />} />
        <Route path="/license" element={<License />} />
      </Routes>
    </Router>
  );
};

export default App;