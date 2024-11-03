// src/Components/ParkingLot.js
import React from 'react';

const ParkingLot = ({ spaces, spaceWidth, spaceHeight, onToggleOccupancy }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)', // 6 columns
        gridAutoRows: `${spaceHeight}px`, // Each row has a fixed height
        gap: '5px', // Space between the boxes
        justifyContent: 'center', // Centering the grid
      }}
    >
      {spaces.map((space) => (
        <div
          key={space.id}
          onClick={() => onToggleOccupancy(space.id)} // Add onClick event
          style={{
            width: spaceWidth,
            height: spaceHeight,
            border: '2px solid black', // Border for each parking space
            backgroundColor: space.isOccupied ? 'red' : 'green', // Color based on occupancy
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            boxSizing: 'border-box', // Ensures padding and borders are included in width/height
            cursor: 'pointer', // Change cursor to pointer
          }}
        >
          {space.number} {/* Display space number */}
        </div>
      ))}
    </div>
  );
};

export default ParkingLot;
