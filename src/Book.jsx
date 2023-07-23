import React, { useState } from 'react';
import './Book.css';
import ChatBox from './ChatBox';

function Book() {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Input1, setStep1Input1] = useState('');
  const [step1Input2, setStep1Input2] = useState('');
  const [step1Input3, setStep1Input3] = useState('');
  const [step1Input4, setStep1Input4] = useState('');
  const [step2Input1, setStep2Input1] = useState('');
  const [step2Input2, setStep2Input2] = useState(0); 
  const [step2Input3, setStep2Input3] = useState(0);
  const [step3Input1, setStep3Input1] = useState('');
  const [step3Input2, setStep3Input2] = useState('');
  const [step3Input3, setStep3Input3] = useState('');
  const [step1Error, setStep1Error] = useState('');
  const [step2Error, setStep2Error] = useState('');
  const [step3InputCity, setStep3InputCity] = useState('');
  const [step3InputPostalCode, setStep3InputPostalCode] = useState('');
  const [step3InputProvince, setStep3InputProvince] = useState('');
  const [step3InputCountry, setStep3InputCountry] = useState('');
  const [step3InputExpiryDate, setStep3InputExpiryDate] = useState('');
  const [step3InputCVVCode, setStep3InputCVVCode] = useState('');
  const [step3InputCardHolderName, setStep3InputCardHolderName] = useState('');
  const [step3InputCardNumber, setStep3InputCardNumber] = useState('');
  const [step3Error, setStep3Error] = useState('');
  const [totalPrice, setTotalPrice] = useState(0); 

  const [selectedDate, setSelectedDate] = useState(''); 
  const [selectedTime, setSelectedTime] = useState(''); 
  

  const handleNextStep = () => {
    if (currentStep < 4) {
      if (currentStep === 1 && (step1Input1 === '' || step1Input2 === '' || step1Input3 === '' || step1Input4 === '')) {
        setStep1Error('Please fill in all the fields.');
        return;
      } else if (currentStep === 2 && (step2Input1 === '' || step2Input2 === '' || step2Input3 === '' || selectedDate === '' || selectedTime === '')) {
        setStep2Error('Please fill in all the fields.');
        return;
      } else if (
        currentStep === 3 &&
        (step3InputCity === '' ||
          step3InputPostalCode === '' ||
          step3InputProvince === '' ||
          step3InputCountry === '' ||
          step3InputExpiryDate === '' ||
          step3InputCVVCode === '' ||
          step3InputCardHolderName === '' ||
          step3InputCardNumber === ''
          )
      ) {
        setStep3Error('Please fill in all the fields.');
        return;
      } else if (currentStep === 3) {
        setStep3Error('');
      }
      

      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;

    if (value === '' || regex.test(value)) {
      setStep1Input4(value);
    }
  };

  const handleActivityChange = (e) => {
    const selectedActivity = e.target.value;
    setStep2Input1(selectedActivity);
    calculateTotalPrice(selectedActivity, step2Input2, step2Input3);
  };

  const handleAdultsChange = (e) => {
    const adults = parseInt(e.target.value);
    setStep2Input2(adults);
    calculateTotalPrice(step2Input1, adults, step2Input3);
  };

  const handleChildrenChange = (e) => {
    const children = parseInt(e.target.value);
    setStep2Input3(children);
    calculateTotalPrice(step2Input1, step2Input2, children);
  };

  const calculateTotalPrice = (activity, adults, children) => {
    const activityPrice = getActivityPrice(activity);
    const total = adults * activityPrice + children * (activityPrice * 0.75);
    setTotalPrice(total);
  };

  const getActivityPrice = (activity) => {
    
    const activityPrices = {
      'Full Day Dive': 250,
      'Wolf Rock Dive': 300,
      'Ship Wreck Dive': 300,
      'Parasailing': 120,
      'ATV Tour': 100,
      'Zip Line': 110,
      'Dolphin Lagoon': 70,
      'Sea Lion Encounter': 70,
      'Whale Watching': 60,
      'Kangaroo Island Hike': 120,
      'Great Ocean Hike': 100,
      'Flinders Ranges Hike': 100
    };
    return activityPrices[activity] || 0;
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); 
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value); 
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;

    if (value === '' || regex.test(value)) {
      setStep3InputCardNumber(value);
    }
  };

  const handleCVVCodeChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9\b]+$/;

    if (value === '' || regex.test(value)) {
      setStep3InputCVVCode(value);
    }
  };

  return (
    <div className='book-rectangle'>
      <ChatBox />
      <h1 className='book-title'>Book your Adventure</h1>
      <div className="timeline">
        <div className="timeline-step">
          <div
            className={`step-indicator ${
              currentStep >= 1 ? 'completed' : ''
            } ${currentStep === 1 ? 'current' : ''}`}
          >
            1. Personal Info
          </div>
        </div>
        <div className="timeline-step">
          <div
            className={`step-indicator ${
              currentStep >= 2 ? 'completed' : ''
            } ${currentStep === 2 ? 'current' : ''}`}
          >
            2. Activity Details
          </div>
        </div>
        <div className="timeline-step">
          <div
            className={`step-indicator ${
              currentStep >= 3 ? 'completed' : ''
            } ${currentStep === 3 ? 'current' : ''}`}
          >
            3. Payment
          </div>
        </div>
        <div className="timeline-step">
          <div
            className={`step-indicator ${
              currentStep >= 4 ? 'completed' : ''
            } ${currentStep === 4 ? 'current' : ''}`}
          >
            4. Confirmation
          </div>
        </div>
      </div>
      <div className="step-content">
        {currentStep === 1 && (
          <div className='stacked-content'>
            <div>
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                className='form-control'
                type="text"
                placeholder="First Name"
                id="firstName"
                value={step1Input1}
                onChange={(e) => setStep1Input1(e.target.value)}
                style={{ "--placeholder-color": "#d9d9d97d" }}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                className='form-control'
                type="text"
                placeholder="Last Name"
                value={step1Input2}
                onChange={(e) => setStep1Input2(e.target.value)}
                style={{ "--placeholder-color": "#d9d9d97d" }}
              />
            </div>
            <div className='user-contact'>
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  className='form-control'
                  type="text"
                  placeholder="johndoe@gmail.com"
                  value={step1Input3}
                  onChange={(e) => setStep1Input3(e.target.value)}
                  style={{ "--placeholder-color": "#d9d9d97d" }}
                />
              </div>
              <div>
                <label htmlFor="user-phone-number" className="form-label">Phone Number</label>
                <input
                  className='form-control'
                  type="text"
                  placeholder="+61 7 123 123 123"
                  value={step1Input4}
                  onChange={handlePhoneNumberChange}
                  style={{ "--placeholder-color": "#d9d9d97d" }}
                />
              </div>
            </div>
            <button onClick={handleNextStep} className='next-button'>Next</button>
            {step1Error && <p className='error-message'>{step1Error}</p>}
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <div className='dropdown-container'>
              <label htmlFor="activity-dropdown" className="form-label">Select an activity</label>
              <select
                id="activity-dropdown"
                className="activity-dropdown"
                style={{ border: "1px solid black", borderRadius: "5px", backgroundColor: "#3B3B3B", color: "white" }}
                value={step2Input1}
                onChange={handleActivityChange}
              >
                <option value="No Preference" style={{ fontFamily: "'Poppins', sans-serif" }}>Select an Activity</option>
                <option value="Full Day Dive" style={{ fontFamily: "'Poppins', sans-serif" }}>Full Day Dive</option>
                <option value="Wolf Rock Dive" style={{ fontFamily: "'Poppins', sans-serif" }}>Wolf Rock Dive</option>
                <option value="Ship Wreck Dive" style={{ fontFamily: "'Poppins', sans-serif" }}>Ship Wreck Dive</option>
                <option value="Parasailing" style={{ fontFamily: "'Poppins', sans-serif" }}>Parasailing</option>
                <option value="ATV Tour" style={{ fontFamily: "'Poppins', sans-serif" }}>ATV Tour</option>
                <option value="Zip Line" style={{ fontFamily: "'Poppins', sans-serif" }}>Zip Line</option>
                <option value="Dolphin Lagoon" style={{ fontFamily: "'Poppins', sans-serif" }}>Dolphin Lagoon</option>
                <option value="Sea Lion Encounter" style={{ fontFamily: "'Poppins', sans-serif" }}>Sea Lion Encounter</option>
                <option value="Whale Watching" style={{ fontFamily: "'Poppins', sans-serif" }}>Whale Watching</option>
                <option value="Kangaroo Island Hike" style={{ fontFamily: "'Poppins', sans-serif" }}>Kangaroo Island Hike</option>
                <option value="Great Ocean Hike" style={{ fontFamily: "'Poppins', sans-serif" }}>Great Ocean Hike</option>
                <option value="Flinders Ranges Hike" style={{ fontFamily: "'Poppins', sans-serif" }}>Flinders Ranges Hike</option>


              </select>
            </div>
            <div className='dropdown-container'>
              <label htmlFor="adults-dropdown" className="form-label">How many Adults?</label>
              <input
                id="adults-dropdown"
                className="activity-dropdown"
                type="number"
                min="0"
                max="20"
                style={{ border: "1px solid black", borderRadius: "5px", backgroundColor: "#3B3B3B", color: "white" }}
                value={step2Input2}
                onChange={handleAdultsChange} 
              />
            </div>
            <div className='dropdown-container'>
              <label htmlFor="children-dropdown" className="form-label">How many Children (12 & under)?</label>
              <input
                id="children-dropdown"
                className="activity-dropdown"
                type="number"
                min="0"
                max="20"
                style={{ border: "1px solid black", borderRadius: "5px", backgroundColor: "#3B3B3B", color: "white" }}
                value={step2Input3}
                onChange={handleChildrenChange} 
              />
            </div>
            <div className="date-container">
              <div>
                <label htmlFor="datePicker" className="form-label">Select a Date</label>
                <input
                  type="date"
                  id="datePicker"
                  className="activity-dropdown"
                  style={{ width: "150px", border: "1px solid black", borderRadius: "5px", backgroundColor: "#3B3B3B", color: "white" }}
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="time-picker">
                <label htmlFor="timePicker" className="form-label">Select a Time (Australian Central Standard Time):</label>
                <select
                  id="timePicker"
                  className="activity-dropdown"
                  style={{ border: "1px solid black", borderRadius: "5px", backgroundColor: "#3B3B3B", color: "white" }}
                  value={selectedTime} 
                  onChange={handleTimeChange}
                >
                  <option value="" selected disabled>Select a time</option>
                  <option value="08:30AM">7:30 AM</option>
                  <option value="08:30AM">8:30 AM</option>
                  <option value="09:30AM">9:30 AM</option>
                  <option value="10:30AM">10:30 AM</option>
                  <option value="11:30AM">11:30 AM</option>
                  <option value="12:30PM">12:30 PM</option>
                  <option value="1:30PM">1:30 PM</option>
                  <option value="2:30PM">2:30 PM</option>
                  <option value="3:30PM">3:30 PM</option>
                </select>
              </div>
            </div>
            <button onClick={handlePreviousStep} className='previous-button'>Previous</button>
            <button onClick={handleNextStep} className='next-button'>Next</button>
            {step2Error && <p className='error-message'>{step2Error}</p>}
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <p>Total Price: {totalPrice}</p>
            <div className="payment-container">
              <div className="payment-input">
                <label className="form-label" htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  placeholder="City"
                  value={step3InputCity}
                  onChange={(e) => setStep3InputCity(e.target.value)}
                  style={{ "--placeholder-color": "#d9d9d97d" }}
                />
              </div>
              <div className="payment-input">
                <label className="form-label" htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  className="form-control"
                  placeholder="K1A 1A1"
                  value={step3InputPostalCode}
                  onChange={(e) => setStep3InputPostalCode(e.target.value)}
                  style={{ "--placeholder-color": "#d9d9d97d" }}
                />
              </div>
              <div className="payment-input">
                <label className="form-label" htmlFor="province">Province</label>
                <input
                  type="text"
                  id="province"
                  className="form-control"
                  placeholder="Province"
                  value={step3InputProvince}
                  onChange={(e) => setStep3InputProvince(e.target.value)}
                  style={{ "--placeholder-color": "#d9d9d97d" }}
                />
              </div>
              <div className="payment-input">
                <label className="form-label" htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  className="form-control"
                  placeholder="Country"
                  value={step3InputCountry}
                  onChange={(e) => setStep3InputCountry(e.target.value)}
                  style={{ "--placeholder-color": "#d9d9d97d" }}
                />
              </div>
              <div className="payment-input">
                <label className="form-label" htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="date"
                  id="expiryDate"
                  className="form-control"
                  value={step3InputExpiryDate}
                  onChange={(e) => setStep3InputExpiryDate(e.target.value)}
                  style={{ "--placeholder-color": "#d9d9d97d" }}
                />
              </div>
              <div className="payment-input">
                <label className="form-label" htmlFor="cvvCode">CVV Code</label>
                <input
                  type="text"
                  id="cvvCode"
                  className="form-control"
                  placeholder="123"
                  value={step3InputCVVCode}
                  onChange={handleCVVCodeChange}
                  style={{ "--placeholder-color": "#d9d9d97d" }}
                  maxLength={3}
                />
              </div>
              <div className="payment-input">
              <label className="form-label" htmlFor="cardHolderName">Card Holder Name</label>
              <input
                type="text"
                id="cardHolderName"
                className="form-control"
                placeholder="John Doe"
                value={step3InputCardHolderName}
                onChange={(e) => setStep3InputCardHolderName(e.target.value)}
                style={{ "--placeholder-color": "#d9d9d97d" }}
              />
            </div>
            <div className="payment-input">
              <label className="form-label" htmlFor="cardNumber">Credit Card Number</label>
              <input
                type="text"
                id="cardNumber"
                className="form-control"
                placeholder="1234 5678 9012 3456"
                value={step3InputCardNumber}
                onChange={handleCardNumberChange}

                style={{ "--placeholder-color": "#d9d9d97d" }}
                maxLength={16}
              />
            </div>

            </div>
            <button onClick={handlePreviousStep} className='previous-button'>Previous</button>
            <button onClick={handleNextStep} className='next-button'>Next</button>
            {step3Error && <p className='error-message'>{step3Error}</p>}
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <div>
              <p className='confirmation-msg'>Congratulations! Your booking was successful, and you can expect an email shortly with all the details for your upcoming adventure.</p>
            </div>
            <button onClick={handlePreviousStep} className='previous-button'>Previous</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;
