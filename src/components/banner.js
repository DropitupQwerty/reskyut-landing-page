import { Button } from '@mui/material';
import React from 'react';
import preview from '../assets/reskyut-sample-phone.png';
import './styles/myStyle.css';

export default function Banner() {
  return (
    <div className="hero-container">
      <div className="banner">
        <div className="hero-desc">
          <div className="hero-content">
            <div className="description-container">
              <h1 className="description-header">
                Reskyut Made Fun and Easy Adoption!
              </h1>
              <h2 className="description">
                Download na ang application like so fucking good! so bitches
                download good shit right now. This Application made for easy
                adoption and helps overpopulated animal shlter in the
                philippines
              </h2>
            </div>
            <div className="hero-content-button">
              <Button
                sx={{
                  margin: '0 5px',
                  background: '#ADFF00',
                  color: '#333',
                  padding: '10px',
                  borderRadius: '20px',
                  width: '200px',
                  height: '60px',
                  fontSize: '15px',
                  border: '1px solid #333',
                  fontWeight: 'bold',
                }}
              >
                Download now
              </Button>
            </div>
          </div>

          <div className="hero-prev-container">
            <img className="hero-prev-img" src={preview} alt="sample phone" />
          </div>
        </div>
      </div>
    </div>
  );
}
