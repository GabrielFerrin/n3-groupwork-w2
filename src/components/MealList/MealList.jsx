import { useEffect, useState } from "react";
import React from "react";
import "./MealList.css";

export default function MealList() {
  const [data, setData] = useState([]);
  const [contador, setContador] = useState(1);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      const jsonResponse = await response.json();
      setData(jsonResponse.meals);
      console.log(jsonResponse.meals);
    }
    getData(); // Llama a la función cuando el componente se monte
  }, []);

  return (
    <div className="meal-list">
      {data.map((item) => (
        <div className="meal-contenedor">
          <img src={item.strMealThumb} alt="" />
          <p>{item.strMeal}</p>
        </div>
      ))}
    </div>
  );
}
