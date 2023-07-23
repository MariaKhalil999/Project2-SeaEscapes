import React, { useState } from 'react';
import HeroSection from './HeroSection';
import divingImage1 from './assets/full-day-dive.jpg';
import divingImage2 from './assets/wolf-rock.jpg';
import divingImage3 from './assets/ship-wreck.jpg';
import divingImage from './assets/background.jpg';
import "./Diving.css";
import Activity from './Activity';
import ChatBox from './ChatBox';
import FAQ from './FAQ';

import translationsEN from './translation-en';
import translationsES from './translation-sr';

function Diving() {

  const [isSpanish, setIsSpanish] = useState(false);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  const translations = isSpanish ? translationsES : translationsEN;

  const divingFAQs = [
    {
      question: translations.faq1Question,
      answer: translations.faq1Answer,
    },
    {
      question: translations.faq2Question,
      answer: translations.faq2Answer,
    },
  ];

  return (
    <div className="diving-container">
      <div>
        <ChatBox></ChatBox>
        <HeroSection image={divingImage} herotitle={translations.herotitle} />

        
        <button className="language-btn" onClick={toggleLanguage}>Change Language</button>
        
        <div className='activity-intro'>
          
          <h1 className='acti-title'>{translations.actiTitle}</h1>
          {/* <p className='acti-desc'>{translations.actiDesc}</p> */}
        </div>
        
        <Activity
          activityImage={divingImage1}
          activityTitle={translations.fullDayTitle}
          activityGeneral={translations.fullDayGeneral}
          activityPrice={translations.fullDayPrice}
          activityDesc={translations.fullDayDesc}
          style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}
        />
        <Activity
          activityImage={divingImage2}
          activityTitle={translations.wolfRockTitle}
          activityGeneral={translations.wolfRockGeneral}
          activityPrice={translations.wolfRockPrice}
          activityDesc={translations.wolfRockDesc}
        />
        <Activity
          activityImage={divingImage3}
          activityTitle={translations.shipWreckTitle}
          activityGeneral={translations.shipWreckGeneral}
          activityPrice={translations.shipWreckPrice}
          activityDesc={translations.shipWreckDesc}
        />

        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh', margin: '0' }}>{translations.faqTitle}</h1>
        <FAQ faqs={divingFAQs} />
        
      </div>
    </div>
  );
}

export default Diving;
