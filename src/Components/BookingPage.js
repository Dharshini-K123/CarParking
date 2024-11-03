// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import ParkingLot from '../Components/ParkingLot';

const Homepage = () => {
  const totalSpaces = 69; // Total spaces set to 69
  const spaceWidth = 107; // Width of each parking space
  const spaceHeight = 48; // Height of each parking space

  const [spaces, setSpaces] = useState(
    Array.from({ length: totalSpaces }, (_, index) => ({
      id: index + 1,
      number: `Space ${index + 1}`, // Each space is labeled with its number
      isOccupied: false,
    }))
  );

  const [emptySlots, setEmptySlots] = useState(12); // Start with 12 empty slots

  const updateEmptySlots = () => {
    switch (emptySlots) {
      case 12:
        setEmptySlots(13);
        break;
      case 13:
        setEmptySlots(14);
        break;
      case 14:
        setEmptySlots(15);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateEmptySlots();
    }, 6000);

    return () => clearInterval(interval);
  }, [emptySlots]);

  useEffect(() => {
    const updatedSpaces = spaces.map((space, index) => {
      const isOccupied = index < totalSpaces - emptySlots;
      return { ...space, isOccupied };
    });
    setSpaces(updatedSpaces);
  }, [emptySlots]);

  // Function to handle clicking on a parking slot
  const toggleOccupancy = (id) => {
    setSpaces((prevSpaces) =>
      prevSpaces.map((space) =>
        space.id === id
          ? { ...space, isOccupied: !space.isOccupied }
          : space
      )
    );

    setEmptySlots((prevEmptySlots) =>
      spaces.find((space) => space.id === id).isOccupied
        ? prevEmptySlots + 1
        : prevEmptySlots - 1
    );
  };

  return (
    <div>
      <ParkingLot
        spaces={spaces}
        spaceWidth={spaceWidth}
        spaceHeight={spaceHeight}
        onToggleOccupancy={toggleOccupancy}
      />
      <div style={{ marginTop: '20px', fontSize: '20px', textAlign: 'center' }}>
        <strong>Empty Parking Slots: {emptySlots}</strong>
      </div>
    </div>
  );
};

export default Homepage;
