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
        <div className="hero-desc">
          <div className="hero-content">
            <div className="description-container">
              <div className="description-header">
                <h1>Adopt,</h1>
                <h1>Don't Shop</h1>
              </div>
            </div>
            <section className="hero-content-button">
              <div id="download">
                <button
                  className="button-primary"
                  onClick={() =>
                    window.open(
                      'https://turtle-v2-artifacts.s3.amazonaws.com/android/2f500b68-12a0-4a56-beed-89a6701945a1-d78c4dc1d17b4d7d94500c2051cefd4e/application-archive.apk',
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
