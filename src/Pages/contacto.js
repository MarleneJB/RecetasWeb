import React, { useState } from 'react';
import './contacto.css'; 

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log('Formulario enviado:', formData); 

    try {
      const response = await fetch('http://localhost:5000/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Contacto enviado:', data); 
      
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: '',
        });
        alert('Contacto enviado con éxito'); 
      } else {
        const errorText = await response.text(); 
        console.error('Error al enviar el contacto:', errorText);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div className="contacto-container">
      <div className="contacto">
        <h2>Contacto</h2>
        <p>Puedes contactarnos a través del siguiente formulario:</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="nombre" 
            placeholder="Tu Nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Tu Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="telefono" 
            placeholder="Tu Teléfono" 
            value={formData.telefono} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="asunto" 
            placeholder="Asunto" 
            value={formData.asunto} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="mensaje" 
            placeholder="Tu Mensaje" 
            value={formData.mensaje} 
            onChange={handleChange} 
            required 
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      
      
      <div className="map-container">
        <iframe
          title="Ubicación de Monte Blanco, Fortín"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.816777115248!2d-96.92564048530857!3d18.862287184733168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d59dc8d9f2c1a5%3A0x2c579da3ed83a169!2sMonte%20Blanco%2C%20Fort%C3%ADn%2C%20Veracruz!5e0!3m2!1ses-419!2smx!4v1698530163021!5m2!1ses-419!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;
