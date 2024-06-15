import './App.css'
import { useState } from 'react'
import CategeryList from './components/CategoryList/CategoryList'
import MyRoutes from './MyRoutes'

function App() {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2127400292.
  const [theme, setTheme] = useState('light')
  return (
    <div className={'app ' + theme}>
      <CategeryList theme={theme} setTheme={setTheme} />
      <MyRoutes />
    </div>
  )
}

export default App
