import React from 'react';
import HeroSection from './HeroSection';
import Image1 from './assets/dolphins.jpg';
import Image2 from './assets/sea-lions.jpg';
import Image3 from './assets/whale.jpg';
import Image from './assets/dolphin-back.jpg';
import "./Diving.css";
import Activity from './Activity';
import ChatBox from './ChatBox';
import "./OceanLife.css";
import FAQ from './FAQ';


function Diving() {

  const oceanFAQs = [
    {
      question: 'Can I bring my camera or phone to capture the marine life moments?',
      answer: "Yes, you are encouraged to bring your camera or phone to capture these moments. However, we recommend securing them in waterproof cases or bags to protect them during water-based activities.",
    },
    {
      question: "Are the marine life encounters educational experiences?",
      answer: "Yes, our marine life encounters are designed to be educational and informative. Our knowledgeable guides will share insights about the marine ecosystem, conservation efforts, and the fascinating behaviors of the creatures you encounter.",
    },
    
  ];

  return (

    <div className="ocean-life-container">

    <div>

      <ChatBox></ChatBox>
        <HeroSection image={Image} herotitle={"Ocean Life"}/>


      <div className='activity-intro'>
        <h1>Our Marine Animal Encounters</h1>
        {/* <p>desc</p> */}
      </div>
      
      <Activity activityImage={Image1} activityTitle={"Dolphin Lagoon"} activityGeneral={"Activity Level: Easy"} activityPrice={"Price: 70 AUD"} activityDesc={"Participate in a dolphin encounter that comes highly recommended for families seeking an extraordinary marine adventure. This activity offers a chance to bond with these charismatic creatures in their natural environment. Led by our experienced guides, families can share in the joy of swimming alongside dolphins, creating cherished memories, and learning more about marine life."}/>
      <Activity activityImage={Image2} activityTitle={"Sea Lion Encounter"} activityGeneral={"Activity Level: Easy"} activityPrice={"Price: 70 AUD"} activityDesc={"Embark on an unforgettable sea lion encounter, a family-friendly activity that promises laughter as you interact with these playful marine mammals. Our recommended tour offers a safe and educational experience, allowing families to witness sea lions in their natural habitat. Led by our experienced guides, this adventure provides an opportunity for kids and parents alike to swim and connect with these sea lions."}/>
      <Activity activityImage={Image3} activityTitle={"Whale Watching"} activityGeneral={"Activity Level: Easy"} activityPrice={"Price: 60 AUD"} activityDesc={"Join us for a whale watching encounter, a highly recommended activity suitable for all ages, where you can witness migrating whales in their natural habitat. Our expert guides will lead you on an expedition to spot these majestic creatures swimming in the open waters. This family-friendly adventure promises to be an educational and unforgettable experience, leaving you with great memories."}/>

    </div>

    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh', margin: '0' }}>Frequently Asked Questions</h1>
    </div>
    <FAQ faqs={oceanFAQs} />
    </div>
  );
}

export default Diving;
