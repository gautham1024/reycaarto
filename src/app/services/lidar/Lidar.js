"use client";
import { useState, useEffect } from "react";

const Lidar = () => {
  const images = [
    "/images/services/lidar_classification/img30.jpg", // Replace with your actual image paths
    "/images/services/lidar_classification/img31.jpg",
    "/images/services/lidar_classification/img32.jpg",
    "/images/services/lidar_classification/img33.jpg",
    "/images/services/lidar_classification/img34.jpg",
    "/images/services/lidar_classification/img35.jpg",
    "/images/services/lidar_classification/img36.jpg",
    "/images/services/lidar_classification/img37.jpg",
    "/images/services/lidar_classification/img38.jpg",
    "/images/services/lidar_classification/img39.jpg",
    "/images/services/lidar_classification/img40.jpg",
    "/images/services/lidar_classification/img41.jpg",
    "/images/services/lidar_classification/img42.jpg",
    "/images/services/lidar_classification/img43.jpg",
    "/images/services/lidar_classification/img44.jpg",
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
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">LiDAR Classification</h2>
        <div className="text-gray-700 text-justify mb-8">
          <p>
            <strong>Reycaarto</strong> has a strong comprehensive hold on LiDAR processing of Airborne, Terrestrial, and Mobile data. LiDAR data has been classified and vectorized from various Scanners (Leica, RIEGL, and Optech) for different applications.
          </p><br />
          <p>
            We have delivered one million hectares with high quality and reliable data to our Poland and US clients. We have technically exceptional and challenging LiDAR technicians to meet project deadlines. Our quality-driven LiDAR processing methodologies assure you high quality and fast turnaround.
          </p><br></br>
          <p>
            <strong className="head">Airborne LiDAR Classification</strong>
            <br />
            Airborne LiDAR data for urban areas with point density 20 has been classified into their respective classes. Final output of DTM and DSM were generated and submitted to the client in ESRI grid format.
          </p><br></br>
          <p>
            <strong className="head">Terrestrial LiDAR</strong>
            <br />
            3D Topographic Mapping from Riegl VZ 400 scanner, Automatic classification carried out to classify different features as per the specification like buildings, trees, utilities and further classified manually.
          </p><br></br>
          <p>
            <strong className="head">Mobile LiDAR</strong>
            <br />
            Powerline Corridor Mapping from Electrical utilities has been vectorized, poles, pole features, guy wires, power lines, and secondary lines were manually classified into their respective classes.
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

export default Lidar;
