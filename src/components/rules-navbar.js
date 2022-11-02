import React, { useEffect } from 'react';
import logo from '../assets/reskyut-logo.png';
import { Link, useParams } from 'react-router-dom';

export default function RulesNavbar({ page }) {
  return (
    <div>
      <nav className="rules-nav-container">
        <h1>
          <Link to="/">HOME</Link>
        </h1>
        <div className="rules-page-name">
          <h1>{page}</h1>
          <div className="underline"></div>
        </div>
      </nav>
    </div>
  );
}
