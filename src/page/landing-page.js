import React from 'react';
import Banner from '../components/banner';
import NavBar from '../components/navBar';
import PageContent from '../components/pagecontent';
import '../components/styles/myStyle.css';
import PageFooter from './../components/pagefooter';

export default function LandingPage() {
  return (
    <div className="container">
      {/* <DrawerAppBar> */}
      <NavBar />
      <Banner />
      <div>
        <PageContent />
      </div>
      <PageFooter />
    </div>
  );
}
