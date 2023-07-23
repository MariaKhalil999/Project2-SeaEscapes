import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './FeaturedActivity.css';

function FeaturedActivity({ image, title, desc, onClick }) {
  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Card className="featured-card">
      <div className="featured-image">
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body className='card-body'>
        <Card.Title className='featured-card-title'>{title}</Card.Title>
        <Card.Text className='featured-card-desc'>{desc}</Card.Text>
      </Card.Body>
      <Button className='featured-book-btn' variant="primary" onClick={handleButtonClick}>
        View All
      </Button>
    </Card>
  );
}

FeaturedActivity.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FeaturedActivity;