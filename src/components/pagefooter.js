import React from 'react';
import QrCode from '../assets/reskyut-app-qrDownloader.png';
import ContactUs from './contact-us';

export default function PageFooter() {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="qr">
          <img src={QrCode} alt="Qr Code" id="qr-code" />
          <h2>DOWNLOAD THE APP!</h2>
        </div>
        <div className="footer-contacts-info">
          <div className="contact-container">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
}
