import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-[#f5f5f5] py-10 px-5 border-t-3 border-[#333]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-5">
        <div className="w-full md:w-1/3 px-5">
          <h5 className="text-xl font-bold text-white uppercase pb-2.5 border-b-2 border-white mb-5">
            Our Offices
          </h5>
          <div className="flex flex-col gap-5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.9824069651605!2d78.49564394660607!3d17.389668859052843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb992f18b3284f%3A0xbe20ea11bd15ba3e!2sKachiguda%20signal!5e0!3m2!1sen!2sin!4v1734425274318!5m2!1sen!2sin"
              className="w-full h-[250px] border-3 border-[#333] rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2295944778097!2d78.47538311535474!3d17.414593981832605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98da18f1993d%3A0x80804ac30beec195!2sKondapur%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1734425390131!5m2!1sen!2sin"
              className="w-full h-[250px] border-3 border-[#333] rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 px-5">
          <h5 className="text-xl font-bold text-white uppercase pb-2.5 border-b-2 border-white mb-5">
            Quick Links
          </h5>
          <ul className="list-none">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/about", label: "About" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact" }
            ].map((link) => (
              <li key={link.href} className="mb-2.5 group relative">
                <Link 
                  href={link.href} 
                  className="footer-nav-link text-[#f5f5f5] text-base font-bold uppercase relative"
                >
                  {link.label}
                  <span className="footer-nav-underline absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full md:w-1/3 px-5">
          <h5 className="text-xl font-bold text-white uppercase pb-2.5 border-b-2 border-white mb-5">
            Contact Us
          </h5>
          <p className="mb-6 text-base">
            <Phone className="inline mr-2.5 text-white" size={20} />
            9999999999
          </p>
          <p className="mb-6 text-base">
            <Mail className="inline mr-2.5 text-white" size={20} />
            demo@gmail.com
          </p>
          <p className="mb-6 text-base">
            <MapPin className="inline mr-2.5 text-white" size={20} />
            Hyderabad Address: 3-2-850, 2nd floor, Flat no. 304, Stn Kachiguda, Hyderabad, Himayathnagar, Telangana, India, 500027.
          </p>
          <p className="mb-6 text-base">
            <MapPin className="inline mr-2.5 text-white" size={20} />
            Kavali Address: MIGH 35&36, IDSMT Plots, Bapuji Nagar;Kavali-524201, SPSR Nellore (dt); A.P., INDIA.
          </p>
        </div>
      </div>

      <div className="text-center mt-12 mb-0 text-[#bbb] text-sm">
        <p>&copy; {currentYear} Reycaarto Geomaatics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
