import { useState } from 'react'
import './App.css'
import MealDetails from './components/MealDetails/MealDetails'
import MealList from './components/MealList/MealList'
import CategoryList from './components/CatogoryList/CategoryList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MealDetails />
      <MealList/>
      <CategoryList/>
    </>
  )
}

export default App
