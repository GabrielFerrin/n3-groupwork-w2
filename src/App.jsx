import { useState } from 'react'
import './App.css'
import CategeryList from './components/CategoryList/CategoryList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CategeryList />
      
    </>
  )
}

export default App
