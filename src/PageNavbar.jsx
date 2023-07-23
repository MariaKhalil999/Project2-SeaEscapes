import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './PageNavbar.css';
import { Link } from 'react-router-dom';

function PageNavbar() {
  return (

    
    
      <nav className='navbar'> 
        <h1>Sea Escapes</h1>
        <div className='links'> 
          <a href="/">Home</a>
          <div className="dropdown">
            <Link to="#">Dropdown</Link>
            <div className="dropdown-content">
              <ul>
                <li><Link to="/Diving">Dropdown Item 1</Link></li>
                <li><Link to="#">Dropdown Item 2</Link></li>
                <li><Link to="#">Dropdown Item 3</Link></li>
              </ul>
            </div>
          </div>
          <button className='book-button-nav'>Book your Adventure</button>
        </div>

      </nav>
   
  );
}

export default PageNavbar;
