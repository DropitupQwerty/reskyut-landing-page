import React from 'react';
import preview from '../assets/reskyut-sample-phone.png';
import AndroidIcon from '@mui/icons-material/Android';
import QrCode2Icon from '@mui/icons-material/QrCode2';

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
                Download our app to search for rescued animals in animal
                shelters throughout the Philippines, and to help the rescue
                shelter in finding a suitable owner for their rescued animal
                while also making room for other stray animals.
              </h2>
            </div>
            <section className="hero-content-button">
              <div>
                <button className="button-primary">
                  <div className="icon-button">
                    <AndroidIcon />
                  </div>
                  <div>Download now</div>
                </button>
              </div>
              <div>
                <button className="button-secondary">
                  <div className="icon-button">
                    <QrCode2Icon />
                  </div>
                  <div>Scan Qr code</div>
                </button>
              </div>
            </section>
          </div>

          <div className="hero-prev-container">
            <img className="hero-prev-img" src={preview} alt="sample phone" />
          </div>
        </div>
      </div>
    </div>
  );
}
