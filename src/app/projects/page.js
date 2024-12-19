import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectDomains from "../components/ProjectDomains";

const ServicePage = ()=>{
    return(
        <div>
      <Navbar /> {/* Navbar component */}

      <div className="mt-8">
        <ProjectDomains /> {/* Carousel component below navbar */}
      </div>

      <div className="mt-8">
        <Footer /> {/* Carousel component below navbar */}
      </div>

      {/* You can add additional content below the carousel */}
     
    </div>

    );
  
}
export default ServicePage;