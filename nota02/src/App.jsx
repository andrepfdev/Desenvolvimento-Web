import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Dicas from './pages/Dicas';
import Estatisticas from './pages/Estatisticas';

function App() {
  return (
    <Router basename="/Desenvolvimento-Web">
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/dicas" element={<Dicas />} />
            <Route path="/estatisticas" element={<Estatisticas />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
