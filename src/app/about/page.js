// /pages/about.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutInfo from '../components/AboutInfo';

const AboutPage = () => {
  return (
     <div>
      <Navbar /> {/* Navbar component */}

      <div className="mt-8">
        <AboutInfo /> {/* Carousel component below navbar */}
      </div>

      <div className="mt-8">
        <Footer /> {/* Carousel component below navbar */}
      </div>

      {/* You can add additional content below the carousel */}
     
    </div>
  );
};

export default AboutPage;
