import React from 'react';
import preview from '../assets/reskyut-sample-phone.png';
import AndroidIcon from '@mui/icons-material/Android';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useNavigate } from 'react-router-dom';
import pawsbg from '../assets/reskyut-paws-bg.png';

export default function Banner() {
  const navigate = useNavigate();
  const downloadUrl =
    'https://github.com/LiwanagErickson/reskyut-release/releases/download/v1.0.4/reskyut_v1.0.4.apk';

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
                  onClick={() => window.open(downloadUrl, '_blank')}
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
            <div class="parent">
              <div class="my-element-to-clip"></div>
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
