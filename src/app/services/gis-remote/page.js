"use client"
import React from "react"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GisRemote from "./GisRemote";

const FirstService = ()=>{
    return(
        <div>
      <Navbar /> {/* Navbar component */}

      <div className="mt-8">
        <GisRemote /> {/* Carousel component below navbar */}
      </div>

      <div className="mt-8">
        <Footer /> {/* Carousel component below navbar */}
      </div>

      {/* You can add additional content below the carousel */}
     
    </div>
    );

}
export default FirstService;