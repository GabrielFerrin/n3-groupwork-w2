import { Route, Routes } from "react-router-dom"
import MealDetails from "./components/MealDetails/MealDetails"
import MealList from "./components/MealList/MealList"

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/mealsList/:category" element={<MealList />} />
      <Route path="/meal/:mealId" element={<MealDetails />} />
    </Routes>
  )
}

export default MyRoutes