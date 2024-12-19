import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";

const ServicePage = ()=>{
    return(
        <div>
      <Navbar /> {/* Navbar component */}

      <div className="mt-8">
        <Services /> {/* Carousel component below navbar */}
      </div>

      <div className="mt-8">
        <Footer /> {/* Carousel component below navbar */}
      </div>

      {/* You can add additional content below the carousel */}
     
    </div>

    );
  
}
export default ServicePage;