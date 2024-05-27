import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.bar.css';
import { ReactComponent as PawnLogo } from '../../logo.svg'; // Adjust the path according to your project structure

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">
        <PawnLogo />  {/* Render the SVG component here */}
      </div>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/gallery' ? 'active' : ''}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className={location.pathname === '/board' ? 'active' : ''}>
            <Link to="/board">Board</Link>
          </li>
          <li className="auth">
            <Link to="/auth">Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
