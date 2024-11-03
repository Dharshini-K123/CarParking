// src/components/ParkingHistory.js
import React from 'react';

const ParkingHistory = ({ parkingData }) => {
  if (!parkingData || parkingData.length === 0) {
    return <p>No parking history available.</p>;
  }

  return (
    <div>
      <h2>Parking History</h2>
      <ul>
        {parkingData.map((entry, index) => (
          <li key={index}>
            <p>Location: {entry.location}</p>
            <p>Date: {entry.date}</p>
            <p>Time: {entry.time}</p>
            <p>Car Plate: {entry.carPlate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingHistory;
