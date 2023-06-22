import { Link, } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Services = () => {

  return (
    <div
      id="services"
      className="grid grid-cols-7 grid-rows-7 h-screen bg-slate-300">
      <div className="div1 col-span-7 row-span-1 flex items-center justify-center">
        <h1 className="font-montserrat font-bold text-5xl leading-10 text-white shadow-lg text-center">
          WHAT WE OFFER?
        </h1>
      </div>

      <div className="col-span-7 row-span-4 flex justify-around items-center">
        <div className="div3 bg-white flex flex-col items-center justify-center" style={{ height: "500px", width: "350px" }}>
          <img alt="Imagen" className="mb-4" />
          <h2 className="text-xl font-bold mb-2">Service</h2>
          <p className="text-gray-600">Descripción del Servicio</p>
        </div>
        <div className="div4 bg-white flex flex-col items-center justify-center" style={{ height: "500px", width: "350px" }}>
          <img alt="Imagen" className="mb-4" />
          <h2 className="text-xl font-bold mb-2">Service</h2>
          <p className="text-gray-600">Descripción del Servicio</p>
        </div>
        <div className="div5 bg-white flex flex-col items-center justify-center" style={{ height: "500px", width: "350px" }}>
          <img alt="Imagen" className="mb-4" />
          <h2 className="text-xl font-bold mb-2">Service</h2>
          <p className="text-gray-600">Descripción del Servicio</p>
        </div>
      </div>

      <div className="div2 col-span-7 row-span-1 flex items-center justify-center mt-10">
          <Link
            to="/allServices"
            className="text-blue-950 font-bold pb-5 bg-white rounded-md p-4 w-70 flex justify-center items-center"
          >
            MORE SERVICES
          </Link>
      </div>
    </div>
  );
};

export default Services;
