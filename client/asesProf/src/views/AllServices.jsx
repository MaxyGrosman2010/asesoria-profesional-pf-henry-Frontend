import React from "react";
import { useEffect, useState } from "react";
import "./allServices.css";
import Card from "./Card";

const AllServices = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center mt-10 w-1/2 items-center h-1/20">
        <input type="text" placeholder="type a service..." classname="p-2 rounded-10 border-none outline-none" />
        <button
          type="submit"
          class="py-1.5 px-4"
        >
          SEARCH
        </button>
      </div>
      <div className="filters">
        <select>
          <option>by name</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select>
          <option>by price</option>
          <option value="major">Major</option>
          <option value="minor">Minor</option>
        </select>
        <button>show all services</button>
      </div>
      <div  className="col-span-7 row-span-4 flex justify-around items-center ">
        <div className="div3 bg-white flex flex-col items-center justify-center m-5"  style={{ height: "500px", width: "350px" }}>
          <img src="" alt="" />
          <h2>SERVICE</h2>
          <p>Lorem ipsum Lorem ipsum</p>
          <button>More info</button>
        </div>
        <div className="div3 bg-white flex flex-col items-center justify-center m-5" style={{ height: "500px", width: "350px" }}>
          <img src="" alt="" />
          <h2>SERVICE</h2>
          <p>Lorem ipsum Lorem ipsum</p>
          <button>More info</button>
        </div>
        <div className="div3 bg-white flex flex-col items-center justify-center m-5" style={{ height: "500px", width: "350px" }}>
          <img src="" alt="" />
          <h2>SERVICE</h2>
          <p>Lorem ipsum Lorem ipsum</p>
          <button>More info</button>
        </div>
      </div>
      <div className="paginado">
       <ul>
        <li>
          <button>Prev</button>
        </li>
        <li>
          <button>Next</button>
        </li>
       </ul>
      </div>
    </div>
  );
};

export default AllServices;
