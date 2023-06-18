import React from "react";
import { useEffect, useState } from "react";
import "./allServices.css";
import Card from "./Card";

const AllServices = () => {
  return (
    <div class="flex flex-col justify-center items-center">
      <div class="flex justify-center mt-10 w-1/2 items-center h-1/20">
        <input type="text" placeholder="type a service..." class="p-2 rounded-10 border-none outline-none" />
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
      <div className="card"><Card/></div>
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
