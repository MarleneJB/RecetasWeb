import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import AcercaDe from "./Pages/AcercaDe";
import Contacto from "./Pages/contacto";
import Search from "./components/search";

function App() {
  return (
    <Router>
      <div id="root" className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} /> 
            <Route path="/acerca-de" element={<AcercaDe />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
