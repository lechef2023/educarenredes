
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './Home';
import ConceptosBasicos from './ConceptosBasicos'
import IntroduccionaRedes from './IntroduccionaRedes';
import Funcionamiento from './components/Funcionamiento';
import Estructura from './components/Estructura';
import Recursos from './components/Recursos';
import Bibliografia from './Bibliografia';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ConceptosBasicos" element={<ConceptosBasicos />} />
          <Route path="/IntroduccionaRedes" element={<IntroduccionaRedes />} />
          <Route path="/Funcionamiento" element={<Funcionamiento />} />
          <Route path="/Estructura" element={<Estructura />} />
          <Route path="/Recursos" element={<Recursos />} />
          <Route path="/Bibliografia" element={<Bibliografia />} />

          {/* Define otras rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;