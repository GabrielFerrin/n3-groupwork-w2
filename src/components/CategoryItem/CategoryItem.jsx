import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem({ item: { strCategory, strCategoryThumb } }) {
  return (
    <div className="category-item">
      <Link to={`/mealsList/${strCategory}`}>
        <span>{strCategory}</span>
        <img src={strCategoryThumb} alt={strCategory + ' image'}
          height={20} />
      </Link>
    </div>
  )
}

export default CategoryItem