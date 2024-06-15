import { useEffect, useState } from "react"
import CategoryItem from "../CategoryItem/CategoryItem";
import './CategoryList.css';

function CategeryList({ theme, setTheme }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const rawItems = await
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      const items = await rawItems.json();
      setData(items.categories);
      setFilteredData(items.categories);
    }
    fetchData();
  }, []);
  const toggleTheme = (e) => {
    e.target.tagName === "INPUT" &&
      setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <div className="category-list">
      <div className="main-title">
        <h1>
          <img src="/food-icon.svg" alt="Food icon" height={22} />
          Meals
        </h1>
        <div className="theme-switch-wrapper"
          onClick={(e) => toggleTheme(e)}>
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="checkbox-label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <span className="ball"></span>
          </label>
        </div>
      </div>
      <label htmlFor="search">
        <input id="search" type="text" placeholder="Search Category"
          onChange={(e) => setFilteredData(data.filter((item) =>
            item.strCategory.toLowerCase()
              .includes(e.target.value.toLowerCase())))} />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth="1.5"
          stroke="currentColor" className="search-icon" height={20} >
          <path strokeLinecap="round" strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

      </label>
      <div className="categories-container">
        {filteredData && filteredData.map((item) => (
          <CategoryItem key={'cat-tiem-' + item.idCategory}
            item={item} />
        ))}
      </div>
    </div>
  )
}

export default CategeryList
