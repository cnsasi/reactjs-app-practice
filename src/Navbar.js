import React, { useState } from 'react';
import "./Navbar.css"
import HNavbar from './components/HNavbar';

const Navbar = () => {

  return (
    <nav className="navbar">
      <h1>Sasuvika Consultancy Inc</h1>
      <div className="links">
      <a href="/"  style={{ 
          color: 'white', 
          backgroundColor: '#1b245c',
          borderRadius: '100px', 
        }}>Contact Us</a>
        <a href="/"  style={{ 
          color: 'white', 
          backgroundColor: '#1b245c',
          borderRadius: '8px' 
        }}>Home</a>
        <a href="/" style={{ 
          color: 'white', 
          backgroundColor: '#1b245c',
          borderRadius: '8px' 
        }}>Services</a>
       <a href="/" style={{ 
          color: 'white', 
          backgroundColor: '#1b245c',
          borderRadius: '8px' 
        }}>About Us</a>
       
       
      </div>
    </nav>
  );
}

 
export default Navbar;