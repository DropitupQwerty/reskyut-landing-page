import React from 'react';
import './styles/myStyle.css';
import logo from '../assets/reskyut-logo.png';
import { Link } from '@mui/material';

export default function NavBar() {
  return (
    <div>
      <nav className="nav-container">
        <div>
          <ul className="nav-links">
            <li>
              <img className="nav-logo" src={logo} alt="App logo" />
            </li>
            <li className="nav-link nav-header">RESKYUT</li>
          </ul>
        </div>
        <div>
          <ul className="nav-links">
            <li className="nav-link">Home</li>
            <li className="nav-link">Download</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Contact us</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
