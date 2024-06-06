import { useState } from 'react'
import Carro from './components/Carro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carro/>
    </>
  )
}

export default App
