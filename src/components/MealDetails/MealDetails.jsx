import './MealDetails.css';

const MealDetails = () => {

  const meal = {
    "idMeal": "52771",
    "strMeal": "Spicy Arrabiata Penne",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "strCategory": "Vegetarian",
    "strArea": "Italian",
    "strIngredients": "penne rigate, olive oil, garlic, chopped tomatoes, red chilli flakes, italian seasoning, basil, Parmigiano-Reggiano",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08"
  };
  const ingredientsList = meal.strIngredients.split(', ');
  return (
    <div className="meal-details">
      <div className="meal-photo-container">
        <div className="meal-photo">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>
      </div>
      <div className="meal-name">
        <h2>{meal.strMeal}</h2>
        <p>Category: {meal.strCategory}</p>

      </div>
      <div className='meal-grid'>
        <div className="meal-instruction">
          <h2>Instructions: </h2>
          <p>{meal.strInstructions}</p>
        </div>
        <div className='meal-ingredients-container'>
          <h2>Ingredients:</h2>
          {ingredientsList.map((ingredient, index) => (
            <p key={index}>{'- ' + ingredient}</p>
          ))}
        </div>
      </div>
      <iframe
        width="420"
        height="315"
        src={meal.strYoutube.replace("watch?v=", "embed/")}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default MealDetails
