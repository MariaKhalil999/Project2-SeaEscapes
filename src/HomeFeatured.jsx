import React, { useState } from "react";

import "./SquareComponent.css";
import FeaturedActivity from "./FeaturedActivity";
import divingImage from "./assets/diving-home.jpg";
import parasailing from "./assets/parasailing.jpg";
import oceanLifeDolphins from "./assets/ocean-life-dolphins.jpg";
import hiking from "./assets/hiking.jpg";
import Diving from "./Diving";
import Adrenaline from "./Adrenaline";
import Hiking from "./Hiking";
import Ocean from "./OceanLife";
import "./HomeFeatured.css";

const HomeFeatured = () => {

  const [currentPage, setCurrentPage] = useState(null);

  const onNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    {
      {
        'Diving': <Diving />,
        'Adrenaline': <Adrenaline />,
        'Hiking': <Hiking />,
        'Ocean': <Ocean />,
        null: (
          <div className="square">
            <h3 className="discover-text">Discover what adventures await for you!</h3>

            <FeaturedActivity
              image={divingImage}
              title="Diving Tours"
              desc="Explore the vibrant underwater world of South Australia with our variety of diving tours, where you'll witness coral reefs, sharks, and shipwrecks alongside expert guides."
              onClick={() => onNavigate('Diving')}
            ></FeaturedActivity>

            <FeaturedActivity
              image={parasailing}
              title="Adrenaline Tours"
              desc="Embark on thrilling adrenaline tours we offer, where you can soar through the sky on exhilarating ziplines, and experience heart-pounding adventures like parachuting and off-road ATV tours."
              onClick={() => onNavigate('Adrenaline')}
            ></FeaturedActivity>

            <FeaturedActivity
              image={oceanLifeDolphins}
              title="Ocean Life"
              desc="Immerse your family in unforgettable marine life encounters, where children and families can swim alongside playful dolphins and sea lions, and marvel at migrating whales in their natural habitat."
              onClick={() => onNavigate('Ocean')}
            ></FeaturedActivity>

            <FeaturedActivity
              image={hiking}
              title="Hiking"
              desc="Embark on our offered hiking tours, where you can explore trails alongside the ocean, conquer breathtaking peaks, and immerse yourself in the pristine beauty of the region's diverse landscapes."
              onClick={() => onNavigate('Hiking')}
            ></FeaturedActivity>
          </div>
        )
      }[currentPage]
    }
    </>
  );
}

export default HomeFeatured;