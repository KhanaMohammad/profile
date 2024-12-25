

import React from 'react'
import "./Header.css"
import Typical  from 'react-typical'
import porfileImg from "../../assets/profile.png"


const Header = () => {
  return (
    <div className='header-container' id="home">
        <div className='header-content'>
            <h1>Hy! Am</h1>
            <h2 className='fullname'>Khan Mohammad Aslami</h2>
            <h2>I'm a 
                 <Typical
                steps={[" Full stack Develope 🚀", 1000,
                        " Front end Dveloper ✅", 1000,
                        " Back end Developer🎈", 1000,
                        " React Developer 💕", 1000,
                         ]  }
                loop={Infinity}
                wrapper='b'
                />
            </h2>
             <p>
            I am writing to express my interest in the full stack Web development and IT specialist position at work with companies.
             I am currently a 8th-semester Computer Science student with a strong background in web development,
              data entry, and IT services. My academic journey, coupled with hands-on experience, 
              has equipped me with the skills necessary to contribute effectively to work in teams.
             </p>
            <div className='header-payment'>
                <button>Hire Me</button>

                <i className='fa-brands fa-paypal'></i>
                <i className='fa-brands fa-cc-visa'></i>
                <i className='fa-brands fa-cc-mastercard'></i>
                <i className='fa-brands fa-cc-amex'></i>

            </div>
        </div>
        <div className='profileImg-container'>
            <img src={porfileImg}   alt='profile'  />
            <div className='circle-1'></div>
            <div className='circle-2'></div>
        </div>
    </div>
  )
}

export default Header