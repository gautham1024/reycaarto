import Image from 'next/image';
import React from 'react';
import Link from 'next/link';  // Make sure to import Link from next/link


const AboutText = () => {
  return (
    <section className="py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-800">
            Reycaarto Geomaatics
          </h2>
          <p
            className="text-lg text-justify leading-relaxed mb-6 text-gray-600"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            Reycaarto Geomaatics Private Limited is a pioneer in advanced
            geospatial solutions. We specialize in delivering innovative
            services tailored to meet the unique needs of industries like
            construction, mining, and urban planning. Our dedicated team ensures
            precision, efficiency, and excellence in all projects we undertake.
          </p>
          <Link
            href="/about"  // Correct the path here
            passHref
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg text-lg shadow-lg transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Learn More
          </Link>
        </div>

        {/* Image Section */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <Image
            src="/images/logo11.png"  // Ensure this path is correct
            alt="About Reycaarto Geomaatics"
            width={500}  // Adjust width as per your requirement
            height={300} // Adjust height as per your requirement
            className="transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutText;
