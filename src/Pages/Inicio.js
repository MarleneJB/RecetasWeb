import React from "react";
import Search from "../components/search"; 
import './Inicio.css';

const Inicio = () => {
  return (
    <>
      <div className="descripInicio">
        <h2>Recetas de cocina</h2>
        <h3>
          En Recetas de cocina encontrarás las mejores recetas de cocina tradicionales, técnicas innovadoras,
          mucho amor por la cocina e ideas increíbles para preparar tu comida día a día con los mejores trucos.
          Desde la cocina mexicana hasta la gastronomía internacional, nuestro objetivo es brindarte las mejores
          herramientas para que disfrutes del arte culinario desde la comodidad de tu hogar.
          <br/><br/>
          Aquí no solo descubrirás recetas, también aprenderás sobre los ingredientes más importantes en la cocina
          y cómo aprovechar cada uno de ellos para realzar el sabor de tus platillos. 
          Ya seas un cocinero principiante o un experto, tenemos algo para ti: desde las recetas más sencillas 
          y rápidas hasta platillos complejos y llenos de técnicas avanzadas. 
          <br/><br/>
          Nos apasiona la cocina, y eso se refleja en cada receta que compartimos. Sabemos que preparar comida
          no es solo una tarea diaria, sino una forma de compartir momentos inolvidables con los que más quieres.
          Es por eso que te ofrecemos consejos útiles, variaciones de las recetas, y alternativas saludables
          para que puedas adaptar tus platillos a cualquier ocasión y estilo de vida.
          <br/><br/>
          ¡Explora, aprende y disfruta cocinando con nosotros en Recetas de cocina! 
        </h3>
      </div>
      <Search />
    </>
  );
};

export default Inicio;
