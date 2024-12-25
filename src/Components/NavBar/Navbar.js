

import React from 'react'
import logo from  "../../assets/Asset 3.svg";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
        <div className='nav-logo'>
            <img src={logo} alt='logo' />
        </div>
        <div className='nav-links'>
            <ul>
                <li>
                    <a href='#home'>Home</a>
                </li>
                
                <li>
                    <a href='#services'>Services</a>
                </li>
                <li>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>

                
            </ul>
        </div>


    </nav>
  )
}

export default Navbar