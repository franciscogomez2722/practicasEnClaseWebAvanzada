import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MovieList } from './components/movieList'
import ApiDataComponent from './components/ApiDataComponent '


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApiDataComponent/>
    </>
  )
}

export default App
