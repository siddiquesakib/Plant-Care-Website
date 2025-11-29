import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router";

const PlantsCard = ({ plant }) => {
  const { plantId, image, plantName, price, rating } = plant;
  return (
    <div>
      <title>Plant-Care | All Plants</title>
      <div className="rounded-2xl shadow-xl overflow-hidden bg-white hover:shadow-2xl hover:shadow-green-100 transition-all transform duration-500 hover:-translate-y-2 border border-gray-100 group">
        <div className="w-full h-72 overflow-hidden">
          <img
            src={image}
            alt={plantName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="p-5 flex flex-col gap-3 bg-linear-to-b from-white to-green-50/30">
          <h2 className="font-bold text-xl text-gray-800 group-hover:text-green-700 transition-colors">
            {plantName}
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-green-600 font-bold text-lg">${price}</p>
            <p className="text-amber-500 flex justify-center items-center gap-1 font-semibold">
              <IoIosStarOutline className="text-amber-400" /> {rating}
            </p>
          </div>
          <Link
            to={`/plant-details/${plantId}`}
            className="mt-2 cursor-pointer bg-linear-to-r from-green-600 to-emerald-500 text-white px-5 py-3 rounded-xl hover:from-green-700 hover:to-emerald-600 transition-all duration-300 text-center font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantsCard;
