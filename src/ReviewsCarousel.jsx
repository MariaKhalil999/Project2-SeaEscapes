import React, { useState } from 'react';
import './ReviewsCarousel.css';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    description: 'We had an incredible time with the Dolphin Marine Encounter with our family! The guides were knowledgeable and made us feel safe and comfortable throughout the activity. We highly recommend this activity to anyone looking for a fun and educational adventure!',
    categories: {
      customerService: 4,
      qualityOfService: 5,
      valueForMoney: 5,
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    description: "I went parasailing for the first time and had a great experience overall. The activity was well-organized, and the team provided clear instructions, making me feel at ease. It was a unique way to see the coastline and enjoy the thrill of flying. I'd definitely consider doing it again in the future.",
    categories: {
      customerService: 5,
      qualityOfService: 4,
      valueForMoney: 5,
    },
  },
  {
    id: 3,
    name: 'David Williams',
    rating: 5,
    description: "I booked hiking and diving tours with my friends, and it was fantastic! The hiking tour offered stunning views, and the diving experience was breathtaking, discovering old shipwrecks together. It was a memorable trip, and we all had a blast! I would definitely recommend using Sea Escapes for your next trip!",
    categories: {
      customerService: 5,
      qualityOfService: 5,
      valueForMoney: 5,
    },
  },
];

function formatCategory(category) {
  const words = category.match(/[A-Za-z][a-z]*/g);
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function Carousel() {
  const [currentReview, setCurrentReview] = useState(0);

  const goToPreviousReview = () => {
    setCurrentReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1);
  };

  const goToNextReview = () => {
    setCurrentReview(currentReview === reviews.length - 1 ? 0 : currentReview + 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="carousel-arrow left" onClick={goToPreviousReview}>
          &larr;
        </button>
        <div className="review-box">
          <h3>{reviews[currentReview].name}</h3>
          <div className="rating">
            {Array.from({ length: reviews[currentReview].rating }, (_, index) => (
              <span key={index} className="star" style={{ color:'#FFD203' }}>&#9733;</span>
            ))}
          </div>
          <p>{reviews[currentReview].description}</p>
          <div className="review-bars">
            {Object.entries(reviews[currentReview].categories).map(([category, rating], index) => (
              <div key={index} className="review-item">
                <p className='category-label'>{formatCategory(category)}</p>
                <div className="review-bar">
                  <div className="bar-fill" style={{ width: `${(rating / 5) * 100}%` }}></div>
                  <p className="bar-percentage">{`${(rating / 5) * 100}%`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-arrow right" onClick={goToNextReview}>
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
