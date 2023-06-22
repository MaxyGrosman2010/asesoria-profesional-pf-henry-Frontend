import React, { useState } from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import bgi from "../assets/background.jpg";
import mercadoLogo from "../assets/Logo-MercadoPago.png";

const Payment = () => {
  const [hours, setHours] = useState(1); 

  const handleChange = () => {
    Swal.fire({
      title: 'Are you sure to cancel the payment?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Yes',
      cancelButtonColor: 'No',
      showCancelButton: true,
      showCloseButton: true
    });
  };

  const handleIncrement = () => {
    setHours(hours + 1);
  };

  const handleDecrement = () => {
    if (hours > 1) {
      setHours(hours - 1);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center" style={{ backgroundImage: `url(${bgi})` }}>
      <div className="bg-white h-4/5 w-full flex flex-col justify-between">
        <div className="mt-10 ml-40">
          <h1 className="text-2xl font-bold font-montserrat">PROCEED TO PAY</h1>
          <p className="font-bold font-montserrat text-gray-500">PAYMENTS BY</p>
          <img src={mercadoLogo} alt="MercadoLogo" className="w-20 h-auto pt-2" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center border-b border-gray-400 pb-2">
            <h2 className="mr-60 font-bold">SERVICES DR.LORENZ</h2>
            <button className="ml-3 bg-gray-700 text-white font-bold px-2 py-1 rounded-md" onClick={handleDecrement}>-</button>
            <p className="ml-3 font-bold font-montserrat text-gray-500">{hours}hs</p>
            <button className="ml-3 bg-gray-700 text-white font-bold px-2 py-1 rounded-md" onClick={handleIncrement}>+</button>
          </div>
          <div className="flex flex-row justify-between pt-2">
            <h3 className="font-bold mr-80">TOTAL :</h3>
            <p className="font-bold font-montserrat text-gray-500">$ {hours * 10}</p>
          </div>
          <br/>
          <div className="flex flex-row justify-between">
            <NavLink to="/confirmPay" className="bg-green-700 px-4 py-2 rounded text-white font-semibold hover:bg-green-800 transition-colors duration-300 ease-in-out mr-60 w-40 h-9 flex items-center justify-center">
              PAY
            </NavLink>
            <button onClick={handleChange} className="bg-red-700 px-4 py-2 rounded text-white font-semibold hover:bg-red-800 transition-colors duration-300 ease-in-out w-40 h-9 flex items-center justify-center">
              CANCEL
            </button>
          </div>
        </div>
        <div className="flex items-start mb-20 ml-40">
          <span className="material-symbols-outlined text-6xl">deployed_code</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
