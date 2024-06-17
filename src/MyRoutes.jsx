import { Route, Routes } from "react-router-dom"
import MealDetails from "./components/MealDetails/MealDetails"
import MealList from "./components/MealList/MealList"
import Home from "./components/Home/Home"

function MyRoutes({ toggleMenu }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mealsList/:category"
        element={<MealList toggleMenu={toggleMenu} />} />
      <Route path="/meal/:mealId" element={<MealDetails
        toggleMenu={toggleMenu} />} />
    </Routes>
  )
}

export default MyRoutes