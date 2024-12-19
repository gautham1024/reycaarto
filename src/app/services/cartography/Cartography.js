"use client";
import { useState, useEffect } from "react";

const Cartography = () => {
  const images = [
    "/images/services/3d cartography/cartography-image1.jpg", // Replace with your actual image paths
    "/images/services/3d cartography/cartography-image2.jpg",
    "/images/services/3d cartography/cartography-image3.jpg",
    "/images/services/3d cartography/cartography-image4.jpg",
    "/images/services/3d cartography/cartography-image5.jpg",
    "/images/services/3d cartography/cartography-image6.jpg",
    "/images/services/3d cartography/cartography-image7.jpg",
    "/images/services/3d cartography/cartography-image8.jpg",
    "/images/services/3d cartography/cartography-image9.jpg",
    "/images/services/3d cartography/cartography-image10.jpg",
    "/images/services/3d cartography/cartography-image11.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous button click
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">3D Cartography</h2>
        <div className="text-gray-700 mb-8">
          <p className="text-justify">
            <strong>Reycaarto</strong> personnel are well acquainted with the mapping standards (ASPRS, NMAS, and NSSDA). Our dedicated team has been involved in delivering the client’s expected quality with on-time delivery.
            <br />
            <br />
            <strong>Reycaarto</strong> has produced planimetric data for Europe, US, Middle East, and Latin American countries with different projections (UTM WGS84, Sardinia local coordinate system, State plane coordinate system).
            <br />
            <br />
            <strong className="text-lg font-semibold">Large Scale mapping _ Aerial:</strong>
            We have delivered 20,000 hectares of large-scale cartographic data with 1:500 scale for the Lugo area in Spain and 1:1000 scale for Italia. The purpose of the project is to monitor the changes/obstacles around the airport and its surrounding area.
            <br />
            <br />
            <strong className="text-lg font-semibold">Medium Scale mapping _ Arial and ADS40:</strong>
            We delivered 75,000 hectares of Urban Planimetric data to our clients by using our own automation methods in photogrammetric discipline.
            <br />
            <br />
            <strong className="text-lg font-semibold">Small Scale mapping _ Aerial and Satellite:</strong>
            We have mapped 4.5 million hectares (1:5000) with Cartographic data from Satellite stereo pairs (GeoEye stereo, World View) and Aerial imagery. The purpose of the project is to monitor forest inventory for a Brazil oil company.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="relative overflow-hidden">
            {/* Image Slider */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`carousel-image-${index}`}
                    className="w-full object-cover h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto"
                  />
                </div>
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <button
              className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
              onClick={nextSlide}
            >
              &#10095;
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cartography;
