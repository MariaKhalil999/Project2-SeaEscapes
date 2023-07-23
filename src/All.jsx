import React, { useState } from 'react';
import './All.css';


import divingHome from './assets/ship-wreck.jpg';
import parasailing from './assets/parasailing.jpg';
import dolphins from './assets/dolphins.jpg';
import atv from './assets/atv.jpg';
import kangaroo from './assets/kangaroo.jpeg';
import oceanHike from './assets/ocean-hike.jpg';
import flinders from './assets/flinders.jpg';
import seaLions from './assets/sea-lions.jpg';
import whale from './assets/whale.jpg';
import zipline from './assets/zipline.jpg';
import wolfRock from './assets/wolf-rock.jpg';
import fullDayDive from './assets/full-day-dive.jpg';

const mockActivities = [
  { activityID: 1, name: 'Ship Wreck Dive', activityType: 'Diving Tour', price: 300, activityImage: divingHome, level: 'Moderate', recommendation: ['Small Groups (2-5 people)'], alt: 'Divers swimming around a ship wreck.' },
  { activityID: 2, name: 'Parasailing', activityType: 'Adrenaline', price: 120,  activityImage: parasailing, level: 'Active', recommendation: ['Small Groups (2-5 people)', 'Large Groups (6+ people)'], alt: 'Two people parasailing over the ocean.'},
  { activityID: 3, name: 'Dolphin Lagoon', activityType: 'Ocean Life', price: 70, activityImage: dolphins, level: 'Easy', recommendation: ['Family Friendly'], alt: 'Young boy playing with a dolphin in a pool.'},
  { activityID: 4, name: 'ATV Tour',  activityType: 'Adrenaline',price: 100, activityImage: atv, level: 'Easy', recommendation: ['Family Friendly', 'Small Groups (2-5 people)'], alt: 'People driving around greenery on ATVs.' },
  { activityID: 5, name: 'Kangaroo Island Hike',activityType: 'Hiking', price: 120, activityImage: kangaroo, level: 'Active', recommendation: ['Small Groups (2-5 people)', 'Large Groups (6+ people)'], alt: 'Two people walking on Kangaroo Island, near the ocean.' },
  { activityID: 6, name: 'Great Ocean Hike',  activityType: 'Hiking', price: 100, activityImage: oceanHike, level: 'Moderate', recommendation: ['Small Groups (2-5 people)', 'Large Groups (6+ people)'], alt: 'A person walking along a trail near the ocean.'},
  { activityID: 7, name: 'Flinders Ranges Hike', activityType: 'Hiking',price: 100,  activityImage: flinders, level: 'Moderate', recommendation: ['Small Groups (2-5 people)', 'Large Groups (6+ people)'], alt: 'Three people walking on a dry, mountainous landscape.' },
  { activityID: 8, name: 'Sea Lion Encounter', activityType: 'Ocean Life', price: 70, activityImage: seaLions, level: 'Easy', recommendation: ['Family Friendly','Small Groups (2-5 people)'], alt: 'Young girl hugging a sea lion.' },
  { activityID: 9, name: 'Whale Watching', activityType: 'Ocean Life', price: 60, activityImage: whale, level: 'Easy', recommendation: ['Family Friendly','Small Groups (2-5 people)', 'Large Groups (6+ people)'], alt: 'A group of people watching two whales swimming in the water.' },
  { activityID: 10, name: 'Zip Line', activityType: 'Adrenaline', price: 110, activityImage: zipline, level: 'Moderate', recommendation: ['Family Friendly','Small Groups (2-5 people)', 'Large Groups (6+ people)'], alt: 'A woman zip lining over greenery, near the ocean.' },
  { activityID: 11, name: 'Wolf Rock Dive Trip', activityType: 'Diving Tour', price: 300, activityImage: wolfRock, level: 'Active', recommendation: ['Small Groups (2-5 people)', 'Large Groups (6+ people)'], alt: 'Divers swimming along sharks in the ocean.' },
  { activityID: 12, name: 'Full Day Dive Trip', activityType: 'Diving Tour', price: 250, activityImage: fullDayDive, level: 'Active', recommendation: ['Small Groups (2-5 people)', 'Large Groups (6+ people)'], alt: 'Two divers swimming along coral reefs.' },
];

const Product = ({ activity }) => {
  const handleSeeMore = () => {
    seeMore(activity);
  };

  return (
    <div className="product-card">
      <img src={activity.activityImage} alt={activity.alt} />
      <h3>{activity.name}</h3>
      
      <p>{activity.activityType}</p>
      <p>Price: {activity.price} AUD</p>
      <p>Activity Level: {activity.level}</p>
     
    </div>
  );
};

const Filter = ({ categories, activityTypes, recommendationTypes, priceRange, handleFilterChange, handleLevelChange, handleRecommendationChange, handlePriceRangeChange }) => (
  <div className="apply-filters-text">
    <h2>Browse Activities</h2>
    <hr />

    <h3>Activities</h3>
    {categories.map((activityType, activityIndex) => (
      <div key={activityIndex}>
        <input type="checkbox" activityID={activityType} onChange={() => handleFilterChange(activityType)} />
        <label htmlFor={activityType}>{activityType}</label>
      </div>
    ))}
    <hr />

    <h3>Activity Type</h3>
    {activityTypes.map((level, activityIndex) => (
      <div key={activityIndex}>
        <input type="checkbox"
         activityID={level}
         onChange={() => handleLevelChange(level)} />
        <label htmlFor={level}>{level}</label>
      </div>
    ))}
    <hr />

    <h3>Recommendations</h3>
    {recommendationTypes.map((recommendation, activityIndex) => (
      <div key={activityIndex}>
        <input type="checkbox" 
        activityID={recommendation} 
        onChange={() => handleRecommendationChange(recommendation)} />

        <label htmlFor={recommendation}>{recommendation}</label>
      </div>
    ))}
    <hr />

    <h3>Price Range</h3>
    {priceRange.map((range, activityIndex) => (
      <div key={activityIndex}>
        <input
        type="checkbox" 
        activityID={range} 
        onChange={() => handlePriceRangeChange(range)} />
        <label htmlFor={range}>{range}</label>
      </div>
    ))}
  </div>
);

const Activities = ({ seeMore }) => {
  const [filters, setFilters] = useState([]);
  const [levelFilters, setLevelFilters] = useState([]);
  const [recFilters, setRecFilters] = useState([]);
  const [priceRangeFilters, setPriceRangeFilters] = useState([]);

  const selectCategories = Array.from(new Set(mockActivities.map(activity => activity.activityType)));
  const selectLevelTypes = Array.from(new Set(mockActivities.map(activity => activity.level)));
  const selectRecommendationTypes = Array.from(new Set(mockActivities.flatMap(activity => activity.recommendation)));
  const selectPriceRanges = ['Less than 100', 'Less than 150', 'Less than 200'];

  const handleFilterChange = (activityType) => {
    if (filters.includes(activityType)) {
      setFilters(filters.filter(cat => cat !== activityType));
    } else {
      setFilters([...filters, activityType]);
    }
  };

  const handleLevelChange = (level) => {
    if (levelFilters.includes(level)) {
      setLevelFilters(levelFilters.filter(slv => slv !== level));
    } else {
      setLevelFilters([...levelFilters, level]);
    }
  };

  const handleRecommendationChange = (recommendation) => {
    if (recFilters.includes(recommendation)) {
      setRecFilters(recFilters.filter(rec => rec !== recommendation));
    } else {
      setRecFilters([...recFilters, recommendation]);
    }
  };

  const handlePriceRangeChange = (range) => {
    if (priceRangeFilters.includes(range)) {
      setPriceRangeFilters(priceRangeFilters.filter(pr => pr !== range));
    } else {
      setPriceRangeFilters([...priceRangeFilters, range]);
    }
  };

  let filteredActivities = filters.length ? mockActivities.filter(activity => filters.includes(activity.activityType)) : mockActivities;
  filteredActivities = levelFilters.length ? filteredActivities.filter(activity => levelFilters.includes(activity.level)) : filteredActivities;
  filteredActivities = recFilters.length ? filteredActivities.filter(activity => activity.recommendation.some(rec => recFilters.includes(rec))) : filteredActivities;
  filteredActivities = priceRangeFilters.length ? filteredActivities.filter(activity => {
    if (priceRangeFilters.includes('Less than 100')) {
      return activity.price < 100;
    } else if (priceRangeFilters.includes('Less than 150')) {
      return activity.price < 150;
    } else if (priceRangeFilters.includes('Less than 200')) {
      return activity.price < 200;
    }
    return true;
  }) : filteredActivities;

  return (
    <div className="activity-list">
      <Filter
        categories={selectCategories}
        activityTypes={selectLevelTypes}
        recommendationTypes={selectRecommendationTypes}
        priceRange={selectPriceRanges}
        handleFilterChange={handleFilterChange}
        handleLevelChange={handleLevelChange}
        handleRecommendationChange={handleRecommendationChange}
        handlePriceRangeChange={handlePriceRangeChange}
      />
      <div className="activities">
        {filteredActivities.map(activity => (
          <Product activity={activity} key={activity.activityID} />
        ))}
      </div>
    </div>
  );
};

const All = ({ onSeeMore }) => (
  <div>
    
    <Activities/>
  </div>
);

export default All;