import React from 'react';
import './HeroSection.css';

const HeroSection = ({ image, herotitle, herodesc }) => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <h1 className="hero-heading">{herotitle}</h1>
      <h3 className="hero-subheading">{herodesc}</h3>
      {/* <button className="hero-button">Book Now</button> */}
    </div>
  );
};

export default HeroSection;
