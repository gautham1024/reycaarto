import React from 'react';

const AboutInfo = () => {
  return (
    <section className="py-16 px-8 md:px-20 ">
      <div className="max-w-7xl mx-auto">
        {/* Title Section with Fade-In Animation */}
        <div className="text-center mb-16 animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Reycaarto Geomaatics</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Reycaarto has been invincible in providing high-quality geospatial solutions with the latest
            technologies at unmatched reliability and client satisfaction across the globe.
          </p>
        </div>

        {/* Company Background with Slide-Up Animation */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center animate__animated animate__fadeIn animate__delay-2s">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company Background</h3>
            <p className="text-lg text-gray-600 text-justify leading-relaxed">
              Since its inception, we have been instrumental in spearheading the company from a single client to
              multiple clients across the globe (Italy, France, Japan, Spain, Portugal, Brazil, USA). Our commitment
              to innovation and excellence has driven our growth despite challenging market conditions.
            </p>
          </div>
          <div className="flex justify-center items-center animate__animated animate__fadeIn animate__delay-3s">
            <img
              src="/images/logo11.png"
              alt="Reycaarto Geomaatics"
              className="w-72 h-72 transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Company Values with Fade-In and Slide-In Animation */}
        <div className="bg-white p-12 rounded-lg shadow-lg mb-16 animate__animated animate__fadeIn animate__delay-1s">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate__animated animate__fadeIn animate__delay-2s">
              <p className="text-lg text-gray-600">
                <span className="font-bold">1.</span> Instilled with deep-rooted values, we endeavour to scale the heights
                of excellence in all pursuits.
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-bold">2.</span> We maintain a balance between work and off-work, boosting the
                efficiency of our services to perfection.
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-bold">3.</span> We preserve great respect and responsibility towards our customers in
                the marketplace.
              </p>
            </div>
            <div className="space-y-6 animate__animated animate__fadeIn animate__delay-3s">
              <p className="text-lg text-gray-600">
                <span className="font-bold">4.</span> We pursue tremendous potential for technical innovations and aspire
                for new markets to increase value.
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-bold">5.</span> Reycaarto embraces technological progress in all respective fields,
                delivering the best services.
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-bold">6.</span> We choose an innovative approach in manufacturing, infrastructure,
                and delivering services and support.
              </p>
            </div>
          </div>
        </div>

        {/* Fields of Service with Slide-Up Animation */}
        <div className="mb-16 animate__animated animate__fadeIn animate__delay-4s">
  <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Areas of Expertise</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-lg text-gray-600">
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-5s">
      <h4 className="font-semibold text-gray-800 mb-2">Agriculture</h4>
      <p>Geospatial solutions for precision farming and agricultural planning.</p>
    </div>
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-5s">
      <h4 className="font-semibold text-gray-800 mb-2">Telecommunications</h4>
      <p>Supporting telecom infrastructure and network optimization through geospatial data.</p>
    </div>
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-5s">
      <h4 className="font-semibold text-gray-800 mb-2">Oil & Gas</h4>
      <p>Providing mapping and monitoring solutions for oil and gas exploration and extraction.</p>
    </div>
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-5s">
      <h4 className="font-semibold text-gray-800 mb-2">Meteorology</h4>
      <p>Enhancing weather prediction accuracy with geospatial analytics.</p>
    </div>
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-5s">
      <h4 className="font-semibold text-gray-800 mb-2">Surveying</h4>
      <p>Offering cutting-edge surveying techniques with advanced technologies like LIDAR and photogrammetry.</p>
    </div>
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-5s">
      <h4 className="font-semibold text-gray-800 mb-2">Transportation</h4>
      <p>Providing mapping and route optimization solutions for transportation networks.</p>
    </div>
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-5s">
      <h4 className="font-semibold text-gray-800 mb-2">Environmental Engineering</h4>
      <p>Supporting sustainable development and environmental monitoring through geospatial data.</p>
    </div>
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:bg-blue-100 hover:shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-5s">
      <h4 className="font-semibold text-gray-800 mb-2">Water Resources</h4>
      <p>Optimizing water management and planning through geospatial analytics.</p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default AboutInfo;
