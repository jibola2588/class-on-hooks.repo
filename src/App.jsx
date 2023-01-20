// import './App.css'

import {useState,useEffect} from 'react'
import { ApiCalls } from './classes/ApiCall'
import Count from './classes/Count'


function App() {
  const [show,handleShow] = useState(true)

  return (
    <div className="App">
  {show &&  <Count />}
      <button 
      onClick={() => handleShow(false)}
      >unmount count</button>

    
    </div>
  )
}

export default App
