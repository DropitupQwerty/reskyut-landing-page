import React from 'react';
import Banner from '../components/banner';
import NavBar from '../components/navBar';
import PageContent from '../components/pagecontent';
import '../components/styles/myStyle.css';

export default function LandingPage() {
  return (
    <div className="container">
      <NavBar />
      <Banner />
      <div>
        <PageContent />
      </div>
    </div>
  );
}
