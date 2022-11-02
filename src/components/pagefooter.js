import React from 'react';
import QrCode from '../assets/reskyut-app-qrDownloader.png';
import ContactUs from './contact-us';
import { Link } from 'react-router-dom';

export default function PageFooter() {
  return (
    <div className="footer-container">
      <section className="rules">
        <Link className="rules-link" to="terms-of-use">
          Terms of Use
        </Link>
        <Link className="rules-link" to="community-guidelines">
          Community Guidelines
        </Link>
        <Link className="rules-link" to="privacy-policy">
          Privacy Policy
        </Link>
      </section>
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
