'use client';
import { useState, useEffect } from 'react';

const HomeCarousel = () => {
  const images = [
    '/images/homepage_carousel/new10.jpg', // Replace with your actual image paths
    '/images/homepage_carousel/new9.jpg',
    '/images/homepage_carousel/new8.jpg',
    '/images/homepage_carousel/new7.jpg',
    '/images/homepage_carousel/new6.jpg',
    '/images/homepage_carousel/new5.jpg',
    '/images/homepage_carousel/new4.jpg',
    '/images/homepage_carousel/new3.jpg',
    '/images/homepage_carousel/new2.jpg',
    '/images/homepage_carousel/new1.jpg',
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
    <div className="relative w-full max-w-screen-xl mx-auto">
      {/* Image container */}
      <div className="relative overflow-hidden">
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
                className="w-full object-cover 
                h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto" // Increased height in responsive views
              />
            </div>
          ))}
        </div>

        {/* Next and Previous Buttons */}
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

      {/* Dot navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
