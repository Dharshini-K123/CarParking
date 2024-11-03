// src/components/BookingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage = ({ onSubmit }) => {
  const [carPlate, setCarPlate] = useState('');
  const [formData, setFormData] = useState({ location: '', date: '', time: '' });
  const navigate = useNavigate(); // Initialize useNavigate hook
  const apiKey = 'YOUR_API_KEY';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit({ ...formData, carPlate }); // Send data including carPlate
    }
    navigate('/parkdetect'); // Navigate to the /parkdetect route
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchGeocodeData(latitude, longitude);
        },
        (error) => alert('Unable to retrieve your location.')
      );
    } else {
      alert('Geolocation not supported.');
    }
  };

  const fetchGeocodeData = async (latitude, longitude) => {
    try {
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.results.length > 0) {
        setFormData({ ...formData, location: data.results[0].formatted });
      }
    } catch (error) {
      console.error('Error fetching geocode data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
        <button type="button" onClick={getCurrentLocation}>Use Current Location</button>
      </label>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </label>
      <label>
        Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} />
      </label>
      <label>
        Car Plate Number:
        <input
          type="text"
          value={carPlate}
          onChange={(e) => setCarPlate(e.target.value)}
          required
        />
      </label>
      <button type="submit">Book Parking</button>
    </form>
  );
};

export default BookingPage;
