// Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.bar.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/gallery' ? 'active' : ''}>
            <Link to="/gallery">Gallery</Link>
          </li>
            <li className={location.pathname === '/board' ? 'active' : ''}>
            <Link to="/board"> Board</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
