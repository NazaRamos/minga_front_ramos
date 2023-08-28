import { useState } from 'react'
import './App.css'
import DivBody from './components/DivBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DivBody/>
  )
}

export default App