import React from 'react';

import logo from '../assets/reskyut-logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const style = {
    listItem: {
      textDecoration: 'none',
      color: '#fff',
    },
  };

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
            <li className="nav-link">
              <Link>Home</Link>
            </li>
            <li className="nav-link">
              <a href="#download">Download</a>
            </li>

            <li className="nav-link">
              <Link>Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
