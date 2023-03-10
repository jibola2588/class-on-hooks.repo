// import './App.css'

import {useState,useEffect} from 'react'
import { ApiCalls } from './classes/ApiCall'
import ComponentA from './classes/context/ComponentA'
import Count from './classes/Count'
import FormHandling from './classes/FormHandling'
import RouterClass from './classes/RouterClass'
import UnControlledForm from './classes/UnControlledForm'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import {Routes,Route} from 'react-router-dom'


function App() {
  const [show,handleShow] = useState(true)

  return (
    <div className="App">
  {/* {show &&  <Count />}
      <button 
      onClick={() => handleShow(false)}
      >unmount count</button> */}

    {/* <FormHandling /> */}
    {/* <UnControlledForm /> */}
    {/* <Navbar />
    <RouterClass /> */}
    {/* <ComponentA /> */}
    <Routes>
      <Route path ='/login' element = {  <Login /> } />
      <Route path = '/register' element = {   <Register /> } />
 </Routes  >
       </div>
  )
}

export default App



