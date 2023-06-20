import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-red border-gray-900">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img className="h-8 w-auto" alt="logo" />
        </div>

        <div className="flex items-center justify-start">
          <ul className="flex gap-5">
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <div className="flex">
              <div className="flex items-center bg-white w-48 justify-around py-2">
                <span className="material-symbols-outlined"onClick={toggleMenu}>account_circle</span>
                <button onClick={toggleMenu} className="ml-2">User</button>
              </div>
             
              {menuOpen && (
                <div className="absolute mt-10 w-48 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">
                  <ul className="py-2">
                    <li>
                      <Link to="/createServices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Create Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/editProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Edit Profile
                      </Link>
                    </li>
                    <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <span className="material-symbols-outlined">logout</span>
                    <Link to='/'>logout</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

