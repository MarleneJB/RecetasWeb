import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Somos una pagina de Recetas de cocina. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/acerca-de">Acerca de</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
