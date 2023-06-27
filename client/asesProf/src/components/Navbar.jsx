import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./cart/Cart";


const Navbar = () => {
 
  const item = useSelector((state) => state.items)
  const [menuOpen, setMenuOpen] = useState(false);
  const pageWrapper = useRef(null);

  const [cartOpen, setCartOpen] = useState(false)

  const handleOpenCart = () => {
    setCartOpen(true);
  }

  const handleCloseCart = () => {
    setCartOpen(false)
  }

  console.log(cartOpen);

  useEffect(() => {
    const handleClickOustside = (e) => {
        if(pageWrapper.current && !pageWrapper.current.contains(e.target)){
           setMenuOpen(false);
        }
     }
    document.addEventListener('mousedown',handleClickOustside);
     return () => {
    document.removeEventListener('mousedown',handleClickOustside);
    }
    },[pageWrapper]);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
      <div className="mx-auto flex items-center justify-between p-4 min-h-40 w-full fixed bg-white">
        <div className="flex items-center ml-[300px]">
          <span className="material-symbols-outlined">deployed_code</span>
        </div>
        <div className="flex items-center w-full justify-around">
          <ul className="flex gap-[100px] mr-4">
              <NavLink to='/home'>Home</NavLink>
              {location.pathname !== '/allServices' && (
                <>
                  <Link to='services' spy={true} smooth={true} offset={50} duration={500}>Services</Link>
                  <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                </>
              )}
          </ul>
          {location.pathname !== '/login' && (
          <div className="flex border rounded">
            <div className="flex items-center w-48 justify-around py-2 bg-white text-gray-950 rounded cursor-pointer">
              <button onClick={toggleMenu} className="ml-2">User</button>
              <span className="material-symbols-outlined" onClick={toggleMenu}>account_circle</span>
            </div>

              {menuOpen && (
                <div className="absolute mt-10 w-48  bg-white rounded-md shadow-lg" ref={pageWrapper}>
                      <NavLink to="/createServices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">Create Service</NavLink>
                      <NavLink to="/editProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">Edit Profile</NavLink>
                      <div className="flex items-center justify-between px-8 py-2 text-sm text-gray-700 gap-4 hover:bg-gray-300">
                        <span className="material-symbols-outlined">logout</span>
                      <NavLink to='/'>Logout</NavLink>
                    </div>
                </div>
              )}
            </div>            
          )}

            <div className="bg-white flex items-center w-[100px]">
              {(item.length > 0) ? <p className="w-[10px] h-[10px] bg-red-600 text-white rounded-full text-center mb-[20px] animate-bounce"></p> : null}
              <button onClick={handleOpenCart}>
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </div>
                {cartOpen ? <Cart handleCloseCart={handleCloseCart} /> : null}


        </div>
      </div>
  );
};


export default Navbar;