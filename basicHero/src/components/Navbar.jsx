// import React from 'react'

import '../App.css'
const Navbar = () => {
  return (
    <div className='nav'>
      <div className="brand_logo">
          <img src="./public/images/brand_logo.png" alt="nike"/>
        </div>
        <ul>
          <li href="#"> Home</li>
          <li href="#"> Location</li>
          <li href="#"> About</li>
          <li href="#"> Contact Us</li>
        </ul>
        <button>login</button>
    </div>
  )
}

export default Navbar
