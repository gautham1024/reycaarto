import { useEffect } from 'react';

const Statistics = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.value');
    const speed = 100;

    const countUp = (counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 40);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    };

    const countObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    counters.forEach(counter => {
      countObserver.observe(counter);
    });

    // Scroll-triggered visibility
    const infoText = document.getElementById('infoText');
    if (infoText) {
      window.addEventListener('scroll', () => {
        const rect = infoText.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          infoText.classList.add('visible');
        }
      });
    }

    // Clean up event listener on component unmount
    return () => {
      if (infoText) {
        window.removeEventListener('scroll', () => {
          const rect = infoText.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            infoText.classList.add('visible');
          }
        });
      }
    };

  }, []);

  return (
    <div className="statistics bg-gray-900 w-full h-auto text-white flex flex-wrap justify-around items-center gap-8 p-5">
      <div className="stat-item flex flex-col items-center w-full md:w-auto">
        <div className="value text-6xl font-extrabold mb-2" data-target="16">0</div>
        <div className="description text-2xl font-extrabold">Years Experience</div>
      </div>
      <div className="stat-item flex flex-col items-center w-full md:w-auto">
        <div className="value text-6xl font-extrabold mb-2" data-target="300">0</div>
        <div className="description text-2xl font-extrabold">Projects Done</div>
      </div>
      <div className="stat-item flex flex-col items-center w-full md:w-auto">
        <div className="value text-6xl font-extrabold mb-2" data-target="100">0</div>
        <div className="description text-2xl font-extrabold">Happy Customers</div>
      </div>
    </div>
  );
};

export default Statistics;
