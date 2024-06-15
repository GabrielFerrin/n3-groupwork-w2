import { useEffect } from 'react';
import { Link } from 'react-router-dom'

function CategoryItem({ selected, setSelected,
  item: { strCategory, strCategoryThumb } }) {
  const handleClick = (e) => {
    
  }
  return (
    <div onClick={() => setSelected(strCategory)}
      className={"category-item" + (selected === strCategory ?
        ' selected' : '')}>
      <Link to={`/mealsList/${strCategory}`}>
        <span>{strCategory}</span>
        <img src={strCategoryThumb} alt={strCategory + ' image'}
          height={20} />
      </Link>
    </div>
  )
}

export default CategoryItem