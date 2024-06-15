import { Route, Routes } from "react-router-dom"
import MealDetails from "./components/MealDetails/MealDetails"
import MealList from "./components/MealList/MealList"
import Home from "./components/Home/Home"

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mealsList/:category" element={<MealList />} />
      <Route path="/meal/:mealId" element={<MealDetails />} />
    </Routes>
  )
}

export default MyRoutes