import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import logo from "./assets/logo.jpg";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contact</h3>
        <p>241 Fishery Beach Rd, Cape Jervis SA 5204, Australia</p>
        <p>info@seaescapes.com</p>
        <p>International: +61 4 123 456 789</p>
      </div>
      <div className="footer-opening-hours">
        <h3> Office Opening Hours</h3>
        <p>Mon - Sun: 8:00AM - 6:00PM </p>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Sea Escapes logo: sun and waves" />
      </div>
      <div className="footer-social-links">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
