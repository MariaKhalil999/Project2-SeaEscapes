import React from 'react';
import ReviewsCarousel from './ReviewsCarousel';
import "./Reviews.css";
import ChatBox from './ChatBox';

function Reviews() {
  return (
    
    <div className='reviews-page-container'>
      <ChatBox></ChatBox>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className='reviews-title'>Customer Reviews</h1>
        <ReviewsCarousel />
      </div>
    </div>
  );
}

export default Reviews;
