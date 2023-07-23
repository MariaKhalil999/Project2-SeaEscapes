import React from 'react';
import HeroSection from './HeroSection';
import Image1 from './assets/parasailing.jpg';
import Image2 from './assets/zipline.jpg';
import Image3 from './assets/atv.jpg';
import Image from './assets/zipline-back.jpg';
import "./Diving.css";
import Activity from './Activity';
import ChatBox from './ChatBox';
import "./Adrenaline.css";
import FAQ from './FAQ';

function Diving() {
  const adrenalineFAQs = [
    {
      question: 'What should I wear and bring for an adrenaline tour?',
      answer: "We recommend wearing comfortable, active clothing suitable for the weather conditions. Closed-toe shoes are essential for most adventures. Don't forget to bring sun protection, water, and any required personal items. Specific gear will be provided for certain activities.",
    },
    {
      question: "Can I participate in adrenaline tours if I'm pregnant?",
      answer: "For safety reasons, we advise against participating in adrenaline activities if you're pregnant. However, we offer a variety of other family-friendly experiences that you can enjoy.",
    },
    {
      question: "Can I bring my own equipment for certain activities?",
      answer: "We provide all necessary equipment for the adrenaline adventures. However, if you have specific gear you'd like to use, please check with our team to ensure its suitability and compatibility with our activities.",
    },
    
  ];
  return (
    <div className="adrenaline-container">

    <div>
      <ChatBox />
      <HeroSection image={Image} herotitle={"Adrenaline Tours"} />
      <div className='activity-intro'>
        <h1>Our Adrenaline Tours</h1>
        {/* <p>desc</p> */}
      </div>
      <Activity activityImage={Image1} activityTitle={"Parasailing"} activityGeneral={"Activity Level: Active"} activityPrice={"Price: 120 AUD"} activityDesc={"Soar to new heights with our parasailing adventure, where you'll experience the thrill of flying above South Australia's stunning coastlines. Our expert instructors will provide training, making sure you feel confident and safe during your adventure. You'll enjoy breathtaking panoramic views of the coastline and the open sea, creating an unforgettable experience for adventurers of all ages."} />
      <Activity activityImage={Image2} activityTitle={"Zip Line"} activityGeneral={"Activity Level: Moderate"} activityPrice={"Price 110 AUD"} activityDesc={"Experience the adrenaline rush of our ziplining adventure! You'll zipline through the treetops and with safety as our top priority, our trained guides will provide training on ziplining techniques and equipment usage, ensuring a secure and enjoyable adventure. Soar across landscapes and forests, and witness nature from a unique perspective, making this ziplining experience a must-try for adventure enthusiasts."} />
      <Activity activityImage={Image3} activityTitle={"ATV Tours"} activityGeneral={"Activity Level: Easy"} activityPrice={"Price: 100 AUD"}  activityDesc={"Embark on an action-packed ATV tour, where you can explore the coast of South Australia. Our experienced guides will provide training on how to operate an ATV and safety protocols, ensuring you feel confident and in control throughout the entire ride. Ride through scenic trails, and enjoy the natural beauty of the region, making this ATV adventure an adrenaline-fueled experience you won't want to miss."} />
    </div>

    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh', margin: '0' }}>Frequently Asked Questions</h1>
    </div>
    <FAQ faqs={adrenalineFAQs} />
    </div>
  );
}

export default Diving;
