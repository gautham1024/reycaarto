"use client";
import { useState, useEffect } from "react";

const GisRemote = () => {
  const images = [
    "/images/services/gis_services/gis-image1.jpg", // Replace with your actual image paths
    "/images/services/gis_services/gis-image2.jpg",
    "/images/services/gis_services/gis-image3.jpg",
    "/images/services/gis_services/gis-image4.jpg",
    "/images/services/gis_services/gis-image5.jpg",
    "/images/services/gis_services/gis-image6.jpg",
    "/images/services/gis_services/gis-image7.jpg",
    "/images/services/gis_services/gis-image8.jpg",
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
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">GIS Services / Remote Sensing</h2>
        <div className="text-gray-700 mb-8">
          <p className="text-justify">
            <strong>Reycaarto</strong> has delivered 1.6 million hectares of 2D cartography to Europe, US, and Australian clients. Our dedicated team has executed large scale (1:1000), medium scale (1:2000), and small scale (1:5000, 1:10000, 1:30000) mapping for different geospatial applications.
          </p><br></br>
          <p className="text-justify">
            We provide comprehensive spatial engineering solutions with experienced GIS engineers. We specialize in understanding our client’s requirements for providing better solutions on time. <strong>Reycaarto</strong> has been providing services for land use planning, airport service area analysis, site selection, and airspace obstruction analysis.
          </p><br></br>
          <p className="text-justify">
            <strong className="head text-2xl">Geological Maps</strong>
            <br />
            <strong>Reycaarto</strong> personnel have expertise in high-quality geological map production and addition of attribute data from hard copy topographic maps. We have the capability in GIS, spatial data analysis, and cartography for geology, land use, land cover, urban planning, forestry for various scales.
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
                    className="w-full object-contain h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]" // Using object-contain to display the full image
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

export default GisRemote;
