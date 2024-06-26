import { useEffect, useState } from "react";
import React from "react";
import "./MealList.css";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function MealList({ toggleMenu }) {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const jsonResponse = await response.json();
      setData(jsonResponse.meals);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
    getData();
  }, [category]);

  return (loading ? (<Loading />) :
    (<div className={"meal-list" + (toggleMenu ? ' padding' : '')}>
      {data.map((item) => (
        <div className="meal-contenedor" key={item.idMeal}>
          <Link to={`/meal/${item.strMeal}`} key={item.strMeal}>
            <img src={item.strMealThumb} alt="" />
            <p>{item.strMeal}</p>
          </Link>
        </div>
      ))}
    </div>)
  );
}
