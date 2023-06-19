import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyles = {
    base: 'text-white hover:text-blue-200 px-3 py-2 text-sm font-medium',
  };

  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              
              alt="logo"
            />
          </div>
          <div className="hidden md:flex ml-10 items-center space-x-4">
            <Link to="/home" className={linkStyles.base}>
              Home
            </Link>
            <div className="relative">
              <button className={linkStyles.base}>
              <Link to="/services" className={linkStyles.base}>
              Services
            </Link>
                <svg
                  className="ml-1 h-4 w-4 inline-block"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <Link to="/contact" className={linkStyles.base}>
              Contact
            </Link>
            <Link to="/" className={linkStyles.base}>
            <span className="material-symbols-outlined">
            logout
            </span>
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

