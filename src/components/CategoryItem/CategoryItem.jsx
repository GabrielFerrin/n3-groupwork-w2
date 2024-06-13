import React from 'react'

function CategoryItem({ item: { strCategory, strCategoryThumb } }) {
  return (
    <div className="category-item">
      <span>{strCategory}</span>
      <img src={strCategoryThumb} alt={strCategory + ' image'}
        height={20}/>
    </div>
  )
}

export default CategoryItem