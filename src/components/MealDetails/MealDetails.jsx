import './MealDetails.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MealDetails = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchMeal = async () => {
      const rawResponse = await
        fetch('https://www.themealdb.com/api/json/v1/1/' +
          'search.php?s=' + mealId);
      const response = await rawResponse.json();
      console.log(response);
      console.log(response.meals[0].strYoutube);
      let items = [];
      for (let i = 0; i <= 20; i++) {
        response.meals[0][`strIngredient${i}`] &&
          items.push(response.meals[0][`strIngredient${i}`])
      }
      setMeal(response.meals[0]);
      setIngredients(items);
    }
    fetchMeal();
  }, []);
  return (meal &&
    (<div className="meal-details">
      <div className="meal-photo-container">
        <div className="meal-photo">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
        <div className="meal-name">
          <h3>{meal.strMeal}</h3>
          <p>Category: {meal.strCategory}</p>
        </div>
      </div>
      <div className='meal-grid'>
        <div className="meal-instruction">
          <h3>Instructions: </h3>
          <p>{meal.strInstructions}</p>
        </div>
        <div className='meal-ingredients-container'>
          <h3>Ingredients:</h3>
          {ingredients.map((ingredient, index) => (
            <p key={'ing-' + index}>{'- ' + ingredient}</p>
          ))}
        </div>
      </div>
      <iframe
        width="420"
        height="315"
        src={meal.strYoutube && meal.strYoutube.replace("watch?v=", "embed/")}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>)
  )
}

export default MealDetails
