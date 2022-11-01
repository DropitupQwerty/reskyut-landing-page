import React from 'react';
import preview from '../assets/reskyut-sample-phone.png';
import AndroidIcon from '@mui/icons-material/Android';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useNavigate } from 'react-router-dom';
import pawsbg from '../assets/reskyut-paws-bg.png';

export default function Banner() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="banner">
        <img className="paws-bg" src={pawsbg} alt="paws-bg" />
        <div className="hero-desc">
          <div className="hero-content">
            <div className="description-container">
              <h1 className="description-header">
                Reskyut Made Fun and Easy Adoption
              </h1>
              <h2 className="description">
                Download our app to search for rescued animals in animal
                shelters throughout the Philippines, and to help the rescue
                shelter in finding a suitable owner for their rescued animal
                while also making room for other stray animals.
              </h2>
            </div>
            <section className="hero-content-button">
              <div id="download">
                <button
                  className="button-primary"
                  onClick={() =>
                    window.open(
                      'https://turtle-v2-artifacts.s3.amazonaws.com/android/e4a81826-7487-43d6-bd2b-972a7e90e334-83e31df809c34ddcb0890ec679ab160f/application-archive.apk',
                      '_blank'
                    )
                  }
                >
                  <div className="icon-button">
                    <AndroidIcon />
                  </div>
                  <div>Download now</div>
                </button>
              </div>
              <div>
                <a className="button-link" href="#qr-code">
                  <div className="icon-button">
                    <QrCode2Icon />
                  </div>
                  <div>Scan Qr code</div>
                </a>
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
