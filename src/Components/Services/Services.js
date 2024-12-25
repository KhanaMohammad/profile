

import React from 'react'
import "./Services.css"
const Services = () => {
  return (
    <div className="service-container" id ="services">
        <div className = "service-list-container">

            {/* description */}
            <div className="service-desc-container" >
                <h1>My Awesome <span>Services</span></h1>
                <p>
                    I am writing to express my interest in the full stack Web development and IT specialist position at work with companies.
                    I am currently a 8th-semester Computer Science student with a strong background in web development,
                    data entry, and IT services.I am a passionate Full-Stack Developer (MERN Stack) and IT Specialist with a strong background in building dynamic, user-friendly websites and web applications. As an 8th-semester Computer Science student, I specialize in using MongoDB, Express.js, React.js, and Node.js to create scalable, interactive solutions for businesses and individuals. With a focus on both front-end and back-end development,
                     I deliver complete web applications tailored to meet your specific needs. Additionally, as a freelancer, I offer flexible IT consulting and support, ensuring your systems run smoothly and securely. Whether you need a custom website, e-commerce platform, or IT infrastructure advice, I am committed to providing high-quality, timely solutions that help your business succeed online.
                </p>
                <button>Hire Me</button>
            </div>

            {/* Items */}
            <div className="service-item-container">

                <div className="service-item">
                         <i className="fa-solid fa-code"></i>
                        <div className="item-desc">
                            <h3>Web Development</h3>
                            <p>
                            I am a passionate and experienced Web Developer specializing in creating dynamic, user-friendly websites and web applications. With expertise in both front-end and back-end technologies, I offer complete web development solutions tailored to meet your business needs. From building responsive, interactive websites to developing complex full-stack applications, I ensure your online presence is functional, secure, and visually appealing.
                            </p>
                        </div>
                </div>
                <div className="service-item">
                         <i className="fa-solid fa-desktop"></i>
                        <div className="item-desc">
                            <h3>Desktop Development</h3>
                            <p>I specialize in Desktop Application Development, creating powerful,
                                 user-friendly applications for Windows, macOS, and Linux. Using modern programming languages and frameworks like  Java, 
                                 I build cross-platform desktop apps that are reliable, responsive, and optimized for performance. Whether you need a standalone software solution for business operations, a tool to streamline workflows, or a custom desktop application to meet specific requirements, I ensure that each app is intuitive, easy to use, and packed with the features you need. My goal is to deliver high-quality desktop applications that enhance productivity and provide seamless user experiences.
                            </p>
                        </div>
                </div>
                <div className="service-item">
                         <i className="fa-solid fa-tablet-alt"></i>
                        <div className="item-desc">
                            <h3>U/X Design</h3>
                            <p>
                            As a UI/UX Designer for mobile applications, 
                            I focus on creating intuitive, engaging, 
                            and visually appealing user interfaces that provide a 
                            seamless experience across devices. I design mobile apps with a user-centered approach, ensuring that every interaction is simple, enjoyable, and efficient. By leveraging industry best practices and design tools like Sketch, Figma, and Adobe XD, I craft wireframes, prototypes, and high-fidelity designs that are not only aesthetically pleasing but also highly functional. My goal is to design mobile experiences that captivate users, drive engagement, and enhance usability, ensuring your app stands out in the competitive mobile marketplace. 
                            </p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services