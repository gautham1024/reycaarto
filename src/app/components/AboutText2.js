import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const AboutText2 = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  
  useEffect(() => {
    if (videoRef1.current && videoRef2.current) {
      // Start first video immediately
      videoRef1.current.play();
      
      // Set up the crossfade loop
      const handleTimeUpdate = () => {
        const video1 = videoRef1.current;
        const video2 = videoRef2.current;
        
        if (video1 && video2) {
          // When first video is near end, start fading in second video
          if (video1.currentTime >= video1.duration - 0.5) {
            video2.play();
            video1.style.opacity = '0';
            video2.style.opacity = '1';
          }
          
          // When second video is near end, start fading in first video
          if (video2.currentTime >= video2.duration - 0.5) {
            video1.currentTime = 0;
            video1.play();
            video1.style.opacity = '1';
            video2.style.opacity = '0';
            video2.currentTime = 0;
          }
        }
      };

      videoRef1.current.addEventListener('timeupdate', handleTimeUpdate);
      videoRef2.current.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        if (videoRef1.current) {
          videoRef1.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
        if (videoRef2.current) {
          videoRef2.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dual Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef1}
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover transition-opacity duration-500"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        <video
          ref={videoRef2}
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover opacity-0 transition-opacity duration-500"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Section */}
      <div className="relative py-16 px-8 md:px-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left md:max-w-2xl">
            <h2 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              Reycaarto Geomaatics
            </h2>
            
            <p
              className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200 text-justify"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Reycaarto Geomaatics Private Limited is a pioneer in advanced
              geospatial solutions. We specialize in delivering innovative
              services tailored to meet the unique needs of industries like
              construction, mining, and urban planning.
            </p>
            
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <Link
                href="/about"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white 
                          py-4 px-10 rounded-lg text-lg shadow-lg 
                          transition-all duration-300 
                          border-2 border-transparent hover:border-white
                          transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutText2;