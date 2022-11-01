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
        <h1 className="content-header">Don't Shop. Adopt!</h1>
        <h2 className="content">
          Resyut application is an online platform wherein it will help on
          finding the best owner that will really care that can provide
          assurance for the welfare of the stray animals
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
