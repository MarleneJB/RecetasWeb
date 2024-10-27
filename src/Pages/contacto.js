import React from 'react';
import './contacto.css'; // Crear un archivo CSS específico para Contacto

const Contacto = () => {
  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <p>Puedes contactarnos a través del siguiente formulario:</p>
      <form className="contact-form">
        <input type="text" placeholder="Tu Nombre" required />
        <input type="email" placeholder="Tu Email" required />
        <textarea placeholder="Tu Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
