
import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'



const AllServices = () => {

  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.allActivities)

  console.log(allActivities);
  useEffect(() => {
    dispatch(getData())
  }, [])


  return (

    <div className="flex flex-col justify-center items-center">
    
      <div className="flex justify-center mt-10 w-1/2 items-center h-1/20">
        <input type="text" placeholder="type a service..." classname="p-2 rounded-10 border-none outline-none" />
        <button type="submit" className="py-1.5 px-4">SEARCH</button>
      </div>
    
      <div className="filters">
        <select>
          <option>by name</option>
          <option value="increase">A-Z</option>
          <option value="decrease">Z-A</option>
        </select>
    
        <select>
          <option>by price</option>
          <option value="major">Major</option>
          <option value="minor">Minor</option>
        </select>
    
        <button>show all services</button>
      </div>

    </div>
  );
};

export default AllServices;
