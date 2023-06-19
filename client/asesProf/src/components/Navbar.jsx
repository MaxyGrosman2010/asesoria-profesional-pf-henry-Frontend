import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" alt="logo"/>
          </div>
          <div className="hidden md:flex ml-10 items-center space-x-4">
            <Link to="/home" >
              Home
            </Link>
            <div className="relative">
              <button >
                <Link to="/services" >
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
            <Link to="/contact" >
              Contact
            </Link>
            <Link to="/" >
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


export default Navbar

