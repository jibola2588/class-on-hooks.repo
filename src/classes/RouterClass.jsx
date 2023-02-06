import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Users from '../components/Users';
import Details from '../components/details';
import {Routes,Route} from 'react-router-dom'

const RouterClass = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element ={  <Home />} />
            <Route path='/about' element ={ <About />} />
            <Route path='/contact' element ={ <Contact />} />
            <Route path='/users' element ={ <Users />} />
            <Route path='/users/:id' element ={ <Details />} />
          
        </Routes>      
    </div>
  );
}

export default RouterClass;
