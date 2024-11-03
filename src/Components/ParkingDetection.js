import React, { useEffect, useRef, useState } from 'react';

const ParkingDetection = () => {
  const videoRef = useRef(null);
  const [emptySlots, setEmptySlots] = useState(12); // Initial empty slots

  useEffect(() => {
    // Function to change empty slots count
    const updateEmptySlots = () => {
      
        setTimeout(() => setEmptySlots(13), 6000); // Change to 13 after 6 seconds
        setTimeout(() => setEmptySlots(14), 8000); // Change to 14 after 2 more seconds (8 seconds total)
        setTimeout(() => setEmptySlots(15), 15000); //
    };

    // Start updating empty slots after the component mounts
    updateEmptySlots();
  }, []);

  const handlePlayVideo = () => {
    const videoElement = videoRef.current;
    videoElement.play().then(() => {
      console.log('Video is playing'); // Log this when the video starts playing
    }).catch((error) => {
      console.error('Error trying to play the video:', error);
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <video
        ref={videoRef}
        width="640"
        height="480"
        controls
        style={{ display: 'block', margin: 'auto' }}
      >
        <source src={`${process.env.PUBLIC_URL}/carPark.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={handlePlayVideo}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Start Detection
      </button>
      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        <strong>Empty Parking Slots: {emptySlots}</strong>
      </div>
    </div>
  );
};

export default ParkingDetection;
