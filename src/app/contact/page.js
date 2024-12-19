// /pages/about.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';


const ContactInfo = () => {
  return (
     <div>
      <Navbar /> {/* Navbar component */}

      <div className="mt-8">
        <ContactUs /> {/* Carousel component below navbar */}
      </div>

      <div className="mt-8">
        <Footer /> {/* Carousel component below navbar */}
      </div>

      {/* You can add additional content below the carousel */}
     
    </div>
  );
};

export default ContactInfo;
