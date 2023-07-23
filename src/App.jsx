import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import Diving from './Diving';
import All from './All';
import Book from './Book';
import Reviews from './Reviews';
import Adrenaline from './Adrenaline';
import OceanLife from './OceanLife';
import Hiking from './Hiking';
import logo from './assets/logo.jpg'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
      {
        {
          'Home': <Home />,
          'Diving': <Diving />,
          'All': <All />,
          'Book': <Book />,
          'Reviews': <Reviews />,
          'Adrenaline': <Adrenaline />,
          'OceanLife': <OceanLife />,
          'Hiking': <Hiking />,
        }[currentPage]
      }
      <Footer />
    </div>
  );
}

function Navbar({ onNavigate, currentPage }) {
  return (
    <nav>
      <div className="nav-left">
        <button className="logoButton" onClick={() => onNavigate('Home')}>
          <img src={logo} alt="Sea Escapes logo: sun and waves" className="logo" />
        </button>
      </div>
      
      <div className="nav-right">
      <button className={`navButton ${currentPage === 'Home' ? 'active' : ''}`} onClick={() => onNavigate('Home')}>
          Home
        </button>
        <div className="dropdown">
          <button className="navButton dropbtn">Adventures</button>
          <div className="dropdown-content">
            <button onClick={() => onNavigate('All')}>Browse All</button>
            <button onClick={() => onNavigate('Diving')}>Diving</button>
            <button onClick={() => onNavigate('Adrenaline')}>Adrenaline Tours</button>
            <button onClick={() => onNavigate('OceanLife')}>Ocean Life</button>
            <button onClick={() => onNavigate('Hiking')}>Hiking</button>
          </div>
        </div>
        
        <button className={`navButton ${currentPage === 'Reviews' ? 'active' : ''}`} onClick={() => onNavigate('Reviews')}>
          Reviews
        </button>
        <button className="booknavbtn" onClick={() => onNavigate('Book')}>
          Book your Adventure
        </button>
      </div>
    </nav>
  );
}

export default App;
