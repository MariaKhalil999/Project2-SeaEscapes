import React, { useState } from "react";

import Reviews from "./Reviews";
import ChatBox from "./ChatBox";
import FAQ from "./FAQ";
import "./Home.css"; 
import HomeFeatured from "./HomeFeatured";
import Footer from "./Footer";
import Book from "./Book"

function Home() {

  const [booking, setIsHandleTrue] = useState(false);

  const handleAdventure = () => {
    setIsHandleTrue(true);
  };

  return (
    <>
      {booking ? (
        <Book />
      ) : (
        <div className="home-container" aria-label="Background Image">
          <div>

            <ChatBox></ChatBox>

            <div className="welcome-section">
              <h1 className="welcome-message">Welcome to <span style={{ color: '#FFE066' }}>Sea Escapes</span></h1>
              <h3 className="welcome-desc">Tours and Activities in South Australia</h3>
              <button className='book-button-hero' onClick={handleAdventure}>Book your Adventure</button>
            </div>

            <HomeFeatured></HomeFeatured>

            
          </div>
        </div>
      )}
    </>
  );
};

export default Home;