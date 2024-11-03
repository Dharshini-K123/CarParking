// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Car Parking App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/book">Book Parking</Link>
        <Link to="/history">Parking History</Link>
      </nav>
    </header>
  );
};

export default Header;
