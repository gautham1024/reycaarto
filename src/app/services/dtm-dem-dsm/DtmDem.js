"use client";
import { useState, useEffect } from "react";

const DtmDem = () => {
  const images = [
    "/images/services/dem-dtm/dtm-1.jpg", // Replace with your actual image paths
    "/images/services/dem-dtm/dtm-2.jpg",
    "/images/services/dem-dtm/dtm-3.jpg",
    "/images/services/dem-dtm/dtm-4.jpg",
    "/images/services/dem-dtm/dtm-5.jpg",
    "/images/services/dem-dtm/dtm-6.jpg",
    "/images/services/dem-dtm/dtm-7.jpg",
    "/images/services/dem-dtm/dtm-8.jpg",
    "/images/services/dem-dtm/dtm-9.jpg",
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
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Digital Terrain Models (DTM)</h2>
        <div className="text-gray-700 mb-8">
          <p className="text-justify">
            <strong>Reycaarto</strong> is capable of producing a wide array of high-resolution Digital Terrain Models. Our strong technical team is capable of producing accurate data with cost-efficient methods. AAM GST staff is skilled in positioning the break lines at the required places, and our team's skills have been upgraded according to the latest available technologies. We follow in-house developed quality check programs and procedures to exceed client requirements. Our photogrammetric team members are experts in manual contours. Final DTM data has been submitted in different formats like ASCII, TIN, ESRI ASCII grid, GeoTiff, and Img.
          </p><br></br>
          <p className="text-justify">
            <strong>Reycaarto</strong> has delivered Digital Terrain Models for multiple purposes, including initial mine designs, tailing layouts, monitoring of oilfields, and earth morphological changes.
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

export default DtmDem;
