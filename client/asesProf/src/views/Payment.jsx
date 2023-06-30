import React, { useState } from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import bgi from "../assets/background.jpg";
import mercadoLogo from "../assets/Logo-MercadoPago.png";
import { useSelector } from "react-redux";

const Payment = () => {
 
  const items = useSelector((state) => state.items)

  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0)

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



  return (
    <div className="h-screen w-full flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bgi})` }}>

      <div className="bg-white mx-auto w-full p-10 flex flex-col h-[800px] mt-40">
        <div className="b">
          <h1 className="text-2xl font-bold font-montserrat">Proceed to pay</h1>
          <p className="font-bold font-montserrat text-gray-500">Payment by</p>
          <img src={mercadoLogo} alt="MercadoLogo" className="w-20 h-auto pt-2" />
        </div>
        <div>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-center">
              <div className="flex items-center m-20 gap-4">
                <span class="material-symbols-outlined">task_alt</span>
                <span className="font-medium">{item.name}</span>
                <span className="italic">{item.description}</span>
              </div>
              <div className="flex">
              <span>$ {item.price}</span> 
              </div>
            </div>
          ))}
        </div>            
        <div className="flex w-1/2 mx-auto items-center justify-center py-2 my-10">
          <p className="font-medium mr-80">Total to pay:</p>
          <div className="flex gap-4">
            <span class="material-symbols-outlined">paid</span>
            <p>{totalPrice}</p>
          </div>
        </div>
          <div className="flex items-center justify-center w-1/2 mx-auto gap-4">
            <NavLink to="/confirmPay" className="bg-green-700 px-4 py-2 rounded text-white w-[120px] text-center">Pay</NavLink>
            <NavLink onClick={handleChange} className="bg-red-700 px-4 py-2 rounded text-white w-[120px] text-center">Cancel</NavLink>
          </div>
        </div>

          <div className="flex items-start mb-20 ml-40">
            <span className="material-symbols-outlined text-6xl">deployed_code</span>
          </div>
        </div>
   
  );
};

export default Payment;
