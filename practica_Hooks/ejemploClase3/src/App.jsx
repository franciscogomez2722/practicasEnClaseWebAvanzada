import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/counter'
import { MiText1 } from './components/MiText1'
import { CounterSinEstado } from './components/CounterSinEstado'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/*<Counter/>*/}
      < MiText1 />
      {/*<CounterSinEstado/>*/}
    </div>
  )
}

export default App
