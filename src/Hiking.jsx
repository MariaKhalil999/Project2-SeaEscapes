import React from 'react';
import HeroSection from './HeroSection';
import Image1 from './assets/ocean-hike.jpg';
import Image2 from './assets/kangaroo.jpeg';
import Image3 from './assets/flinders.jpg';
import Image from './assets/hiking-back.jpg';
import "./Diving.css";
import Activity from './Activity';
import ChatBox from './ChatBox';
import VideoComponent from './VideoComponent';
import "./Hiking.css";
import FAQ from './FAQ';

function Diving() {

  const hikingFAQs = [
    {
      question: 'Are there restrooms and facilities available along the hiking trails?',
      answer: "Some hiking trails have restroom facilities and rest areas, while others may not have these amenities. Our guides will provide information about restroom stops before and during the hike.",
    },
    {
      question: "Is there a risk of encountering wildlife during the hikes?",
      answer: "South Australia's natural landscapes are home to diverse wildlife. While encounters are possible, our guides are well-trained in wilderness safety and will ensure you have a safe and enjoyable experience.",
    },
    {
      question: "Are hiking tours suitable for solo travelers?",
      answer: "Many of our hiking tours are perfect for solo travelers looking to explore nature and meet like-minded adventurers. Joining a group tour is a fantastic way to make new friends and share memorable experiences.",
    },
    
  ];

  return (

    <div className="hiking-container">

    <div>

      <ChatBox></ChatBox>
        <HeroSection image={Image} herotitle={"Hiking"}/>


      <div className='activity-intro'>
        <h1>Our Hikes</h1>
        {/* <p>desc</p> */}
      </div>
      
      <Activity activityImage={Image1} activityTitle={"Great Ocean Hike"} activityGeneral={"Activity Level: Moderate"} activityPrice={"Price: 100 AUD"} activityDesc={"Embark on the Great Ocean hike, a breathtaking hiking tour that takes you on a long and scenic journey along the stunning coastline. This hike offers mesmerizing views of the ocean, cliffs, and picturesque landscapes, making it a paradise for nature enthusiasts. Immerse yourself in the tranquility of this remarkable trail, as you discover the trails and natural wonders of South Australia." }/>
      <Activity
        activityImage={Image2}
        activityTitle={"Kangaroo Island Hike"}
        activityGeneral={"Activity Level: Active"}
        activityPrice={"Price: 120 AUD"}
        activityDesc={
          <>
            <p>Join us on our Kangaroo Island hike, an adventure we offer that lets you explore rugged terrains and scenic areas. This physically demanding, long-distance hike allows you to experience the island's beauty, from forests to coastlines. While more challenging than our other hikes, the rewards are immeasurable as you encounter wildlife, landscapes, and a connection with nature throughout this unforgettable hike.</p>
            <p>
              Learn what to expect on a full day hike: </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aIa9u3ZE6y0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
          </>
        }
      />
      <Activity activityImage={Image3} activityTitle={"Flinders Ranges Hike"} activityGeneral={"Activity Level: Moderate"} activityPrice={"Price: 100 AUD"} activityDesc={"Discover Flinders Ranges with our extraordinary hiking adventure. Traverse gorges, witness peaks, and immerse yourself in the timeless beauty of this landscape. Led by experienced guides, this remarkable journey offers a deep connection with the region's indigenous history, flora, and fauna, creating an unforgettable experience."}/>

    </div>
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh', margin: '0' }}>Frequently Asked Questions</h1>
    </div>
    <FAQ faqs={hikingFAQs} />
    </div>
  );
}

export default Diving;
