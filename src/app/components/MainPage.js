'use client'
import Navbar from './Navbar';  // Assuming Navbar is in the same directory
import HomeCarousel from './HomeCarousel';  // The Carousel component
import AboutText from './AboutText';
import Footer from './Footer';
import Statistics from './Statistics';
import Achievements from './Achievements';
import AboutText2 from './AboutText2';

const MainPage = () => {
  return (
    <div>
      <Navbar /> {/* Navbar component */}
      <AboutText2 />

      <div className="mt-8">
        <HomeCarousel /> {/* Carousel component below navbar */}
      </div>

      <div className="mt-8">
        <Statistics /> {/* Carousel component below navbar */}
      </div>

      <div className="mt-8">
        <Achievements /> {/* Carousel component below navbar */}
      </div>

      <div className="mt-8">
        <Footer /> {/* Carousel component below navbar */}
      </div>

      {/* You can add additional content below the carousel */}
     
    </div>
  
  );
};

export default MainPage;
