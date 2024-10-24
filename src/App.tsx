import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage';  // Página de resultados
import HomePage from './HomePage';      // Página de predicciones
import Bonar from './Bonar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/bonar" element={<Bonar />} />
      </Routes>
    </Router>
  );
};

export default App;