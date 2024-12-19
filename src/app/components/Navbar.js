'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
const currentYear = new Date().getFullYear();

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 z-50 text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/no background logo.png" alt="Company Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className="text-[#f5f5f5] text-base font-bold uppercase relative group hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            Home
            <span className="footer-nav-underline absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link 
            href="/about" 
            className="text-[#f5f5f5] text-base font-bold uppercase relative group hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            About
            <span className="footer-nav-underline absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link 
            href="/services" 
            className="text-[#f5f5f5] text-base font-bold uppercase relative group hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            Services
            <span className="footer-nav-underline absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link 
            href="/projects" 
            className="text-[#f5f5f5] text-base font-bold uppercase relative group hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            Projects
            <span className="footer-nav-underline absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link 
            href="/contact" 
            className="text-[#f5f5f5] text-base font-bold uppercase relative group hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            Contact
            <span className="footer-nav-underline absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link 
            href="/careers" 
            className="text-[#f5f5f5] text-base font-bold uppercase relative group hover:text-blue-300 transition-colors duration-300 ease-in-out"
          >
            Careers
            <span className="footer-nav-underline absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`
        fixed inset-0 bg-gray-900 z-50 md:hidden
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <img src="/images/no background logo.png" alt="Company Logo" className="h-16 w-auto" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="flex flex-col space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
                { href: '/careers', label: 'Careers' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-lg font-medium text-white hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="border-t border-gray-700 p-4">
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <p>© {currentYear} Reycaarto Geomaatics</p>
            
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;