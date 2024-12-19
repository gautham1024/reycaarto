"use client";
import { useState, useEffect } from "react";

const Orthophoto= () => {
  const images = [
    "/images/services/orthophoto/orthophoto1.jpg", // Replace with your actual image paths
    "/images/services/orthophoto/orthophoto2.jpg",
    "/images/services/orthophoto/orthophoto3.jpg",
    "/images/services/orthophoto/orthophoto4.jpg",
    "/images/services/orthophoto/orthophoto5.jpg",
    "/images/services/orthophoto/orthophoto6.jpg",
    "/images/services/orthophoto/orthophoto7.jpg",
    "/images/services/orthophoto/orthophoto8.jpg",
    "/images/services/orthophoto/orthophoto9.jpg",
    "/images/services/orthophoto/orthophoto10.jpg",
    "/images/services/orthophoto/orthophoto11.jpg",
    "/images/services/orthophoto/orthophoto12.jpg",
    "/images/services/orthophoto/orthophoto13.jpg",
    "/images/services/orthophoto/orthophoto14.jpg",
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
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Orthophoto Mosaic</h2>
        <div className="text-gray-700 mb-8 text-justify">
          <p>
            In order to keep pace with ongoing competition, <strong>Reycaarto</strong> is constantly innovating to find newer solutions, technologies, and methodologies that can help our clients to ensure higher quality.
          </p><br></br>
          <p>
            <strong>Reycaarto</strong> has delivered orthophotos from aerial frames (30,000) and 1.5 million Sqkm from satellite data. Orthophotos with high accuracy and radiometrically enhanced from different sensors (aerial frame, digital camera, ADS40, and satellite) with various GSDs (0.08, 0.1, 0.25, 0.5, and 1.0 meters).
          </p><br></br>
          <p>
            By following all the standards of FGDC, we have generated orthophotos (from multiband images) by adopting the best practices in production and quality checking.
          </p><br></br>
          <p>
            Final output has been delivered as per the client's required projections and formats.
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

export default Orthophoto;
