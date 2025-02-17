import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Usuario } from './components/users/user'
import Componente1 from './components/users/user2'
import Component1 from './components/users/component1'
import { Card } from './components/card/card'
import ListaTareas from './components/map'
import Component2 from './components/users/Component2'
import InfoUser from './components/users/infoUser'


function App() {
  const [count, setCount] = useState(0)
  const infoUser = {
    nombre: "Juan Pérez",
    edad: 30,
    tipo: "Super Admin"
  };
  return (
    <>
      

      < Usuario nombre="User1" edad={27} tipo="Admin" />
      
      {//< Componente1 />
      }
      {//<Component1 nombre="User2" edad={20} tipo="Mortal" />
      }
      {//<Card />
      }
      {//<ListaTareas />
      }
      
      <Component2 infoUser={infoUser} />
      
      
     


    </>
  )
}

export default App
