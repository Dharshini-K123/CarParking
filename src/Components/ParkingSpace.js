import React from 'react';

const ParkingSpace = ({ space }) => {
  return (
    <div className={`parking-space ${space.isOccupied ? 'occupied' : 'available'}`}>
      <h2>{space.number}</h2>
      <p>{space.isOccupied ? 'Occupied' : 'Available'}</p>
    </div>
  );
};

export default ParkingSpace;