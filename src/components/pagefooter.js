import React from 'react';
import QrCode from '../assets/reskyut-app-qrDownloader.png';
import pawsbg from '../assets/reskyut-paws-bg.png';

export default function PageFooter() {
  return (
    <div className="footer-container">
      <img className="footer-paws-bg" src={pawsbg} alt="paws-bg" />
      <div className="footer-content-container">
        <div className="qr">
          <img src={QrCode} alt="Qr Code" id="qr-code" />
          <h2>DOWNLOAD THE APP!</h2>
        </div>
        <div className="footer-contacts-info">
          <div className="about-container ">
            <div>
              <h2 className="contact-header">About Us</h2>
            </div>
            <h2 className="about">
              Resyut application is an online platform wherein it will help on
              finding the best owner that will really care that can provide
              assurance for the welfare of the stray animals
            </h2>
          </div>
          <div className="contact-container">
            <div>
              <h2 className="contact-header">Contact Us</h2>
            </div>

            <ul className="contact-lists">
              <li>
                <h2 className="about">Facebook</h2>
              </li>
              <li>
                <h2 className="about">Instagram</h2>
              </li>
              <li>
                <h2 className="about">Email </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
