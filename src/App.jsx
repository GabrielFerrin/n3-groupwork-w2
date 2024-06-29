import './App.css'
import { useState } from 'react'
import CategoryList from './components/CategoryList/CategoryList'
import MyRoutes from "./MyRoutes"

function App() {
  const [theme, setTheme] = useState('light')
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className={'app ' + theme}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
        className={"hide-menu" + (toggleMenu ? " toggled" : "")}
        height={23} onClick={() => setToggleMenu(!toggleMenu)}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      <CategoryList theme={theme} setTheme={setTheme}
        toggleMenu={toggleMenu} />
      <MyRoutes toggleMenu={toggleMenu} />
    </div>
  )
}

export default App