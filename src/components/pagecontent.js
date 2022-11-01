import React from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import PetsIcon from '@mui/icons-material/Pets';
import SwipeIcon from '@mui/icons-material/Swipe';

export default function PageContent() {
  return (
    <div className="page-content-container">
      <div className="page-content">
        <h1 className="content-header">Reskyut</h1>
        <h2 className="description">
          "Reskyut". The name is derived from the combination of the words
          "rescue" and "cute" (Kyut) in Filipino, A single platform that would
          support animal shelters and pet lovers in the adoption process in a
          fun and easy way via a mobile application. Developing the Reskyut
          application makes it easy to find pets that are available for adoption
          in various rescue shelters.
        </h2>
      </div>
      <div className="cards-container">
        <div className="cards cards__swipe">
          <span className="cards-icon">
            <SwipeIcon sx={{ fontSize: '150px' }} color="primary" />
          </span>
          <h2 className="cards cards-title">Swipe</h2>
        </div>

        <div className="cards cards__locate">
          <span className="cards-icon">
            <FmdGoodIcon sx={{ fontSize: '150px' }} color="primary" />
          </span>
          <h2 className="cards cards-title">Locate</h2>
        </div>

        <div className="cards cards__message">
          <span className="cards-icon">
            <PetsIcon sx={{ fontSize: '150px' }} color="primary" />
          </span>
          <h2 className="cards cards-title">Adopt</h2>
        </div>
      </div>
    </div>
  );
}
