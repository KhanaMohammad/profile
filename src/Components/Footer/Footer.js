

import React from "react";
import logo from "../../assets/Asset 3.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="about">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* copyright */}
      <div className="footer-cpyright">
        <p>© 2022 I-Khan Academy. All Right reserved</p>
      </div>
      {/* social */}
      <ul className="footer-social-media">
        <li>
          <a href="https://www.facebook.com/khanmohamad.aslami">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/khanmohamadaslami/profilecard/?igsh=b3F6OHVmYXZibGtw">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/khanmohamadaslami/profilecard/?igsh=b3F6OHVmYXZibGtw">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/khanmohamadaslami/profilecard/?igsh=b3F6OHVmYXZibGtw">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://wa.me/qr/5OMZACC6GR2QL1">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
