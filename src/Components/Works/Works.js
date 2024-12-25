

import React from 'react'
import loginPage from "../../assets/screen-Shot/loginpage.png"
import portfolio from "../../assets/screen-Shot/portfolio.png"
import students from "../../assets/screen-Shot/studentList.png"
import about from "../../assets/screen-Shot/about.png"
import profile from "../../assets/screen-Shot/profile.png"
import w1 from "../../assets/w1.jpg"
import "./Works.css";


const Works = () => {
  return (
    <div className="works-container" id="portfolio">
        <h1>My Recent Projects</h1>
        <div className="work-list-container">
            <div className="works-items">
                <img src={loginPage} alt=""/>
            </div>
            <div className="works-items">
                <img src={portfolio} alt=""/>
            </div>
            <div className="works-items">
                <img src={students} alt=""/>
            </div>
            <div className="works-items">
                <img src={profile} alt=""/>
            </div>
            <div className="works-items">
                <img src={about} alt=""/>
            </div>
            <div className="works-items">
                <img src={w1} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Works