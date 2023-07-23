import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Book from './Book';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './Activity.css';
import i18next from 'https://deno.land/x/i18next/index.js'

function Activity({ activityImage, activityTitle, activityGeneral, activityPrice, activityDuration, activityDesc, activityNotes }) {
  
  const [booking, setIsHandleTrue] = useState(false);

  const handleAdventure = () => {
    setIsHandleTrue(true);
  };
  
  return (
    <>
    {booking ? (
      <Book />
    ) : (
    <Card className="activity-card">
      <div className="activity-image">
        <Card.Img variant="top" src={activityImage} />
      </div>
      <Card.Body>
        <Card.Title className='card-title'>{activityTitle}</Card.Title>
        <Card.Text className='card-general'>{activityGeneral}</Card.Text>
        <Card.Text className='card-general'>{activityPrice}</Card.Text>
        <Card.Text className='card-general'>{activityDuration}</Card.Text>
        <Card.Text className='card-desc'>{activityDesc}</Card.Text>
        <Card.Text>{activityNotes}</Card.Text>
        <Button className='activity-book-btn' variant="primary" onClick={handleAdventure}>Book this Activity</Button>
      </Card.Body>
    </Card>
    )}
    </>
  );
}

Activity.propTypes = {
  activityImage: PropTypes.string.isRequired,
  activityTitle: PropTypes.string.isRequired,
  activityDesc: PropTypes.node.isRequired,
  activityNotes: PropTypes.node,
};

export default Activity;
