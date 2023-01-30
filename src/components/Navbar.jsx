import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const stylesForNav = {
        display:'flex',
        justifyContent:'space-between',
        padding:'10px',
        background:'green'
    }
    const stylesForUl = { 
        listStyle:'none',
        display:'flex',
        gap:'10px'
    }
  return (
    <div style={stylesForNav}>
      <p>Router</p>
      <ul style={stylesForUl}>
        <li>
            <Link to='/'>
                 Home
            </Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
        <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
