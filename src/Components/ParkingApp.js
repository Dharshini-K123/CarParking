// src/components/ParkingApp.js
import React, { useState } from 'react';
import BookingPage from './Components/BookingPage';
import ParkingHistory from './Components/ParkingHistory';

const ParkingApp = () => {
  const [parkingHistory, setParkingHistory] = useState([]);

  // Handle booking submission and update the parking history
  const handleBookingSubmit = (bookingData) => {
    setParkingHistory([...parkingHistory, bookingData]); // Append new booking to the history
  };

  return (
    <div>
      <h1>Parking Booking</h1>
      <BookingPage onSubmit={handleBookingSubmit} />
      <ParkingHistory parkingData={parkingHistory} />
    </div>
  );
};

export default ParkingApp;
