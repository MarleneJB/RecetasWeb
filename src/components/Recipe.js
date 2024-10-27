import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  const toggleIngredients = () => {
    setShow(prev => !prev);
  };

  return (
    <div className="recipe">
      <h2>{label}</h2>
      {}
      <img 
        src={image || "default-image-url.jpg"} 
        alt={label} 
        onError={(e) => e.target.src = "default-image-url.jpg"} 
      />
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          URL
        </a>
      ) : (
        <p>No URL available</p>
      )}
      <button onClick={toggleIngredients}>
        {show ? "Hide Ingredients" : "Show Ingredients"}
      </button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
