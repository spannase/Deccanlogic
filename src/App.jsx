import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Header } from './Components/Header/Header'
import { Artical } from './Components/Artical/Artical'
import { Service } from './Components/Service/Service'
import { Project } from './Components/Projects/Projects'
import { HireUs } from './Components/HireUs/HireUs' 

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Artical/>
      <Service/>
      <Project/>
      <HireUs/>


 
    </div>
  )
}

export default App
