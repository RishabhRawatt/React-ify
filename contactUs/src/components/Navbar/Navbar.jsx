// import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
    <img style={{cursor:"pointer"}} src="./images/logo.png" alt="" />
      
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar;
