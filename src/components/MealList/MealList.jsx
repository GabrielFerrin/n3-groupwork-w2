import { useEffect, useState } from "react";
import React from "react";
import "./MealList.css";
import { Link, useParams } from "react-router-dom";

export default function MealList() {
  const { category } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setData(jsonResponse.meals);
    }
    getData(); // Llama a la función cuando el componente se monte
  }, [category]);

  return (
    <div className="meal-list">
      {data.map((item) => (
        <div className="meal-contenedor">
          <Link to={`/meal/${item.strMeal}`} key={item.strMeal}>
            <img src={item.strMealThumb} alt="" />
            <p>{item.strMeal}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
