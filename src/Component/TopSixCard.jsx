import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router";

const TopSixCard = ({ loadData }) => {
  const firstSix = loadData.filter((plant) => plant.rating >= 4.5).slice(0, 6);

  return (
    <div className="container mx-auto grid  md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
      {firstSix.map((plant) => (
        <div
          key={plant.plantId}
          className="rounded-xl shadow-lg overflow-hidden bg-[#ffffff] hover:bg-[#f7edde] transition transform duration-300 hover:scale-105"
        >
          <div className="w-full h-72 overflow-hidden">
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h2 className="font-semibold text-lg">{plant.plantName}</h2>
            <div className="flex justify-between items-center">
              <p className="text-black font-semibold">${plant.price}</p>
              <p className="text-black flex justify-center items-center gap-1">
                <IoIosStarOutline /> {plant.rating}
              </p>
            </div>
            <Link
              to={`/plant-details/${plant.plantId}`}
              className="mt-3 cursor-pointer bg-[#2a7d2e] text-white px-4 py-2 rounded-lg hover:bg-[#222e1f] transition-colors duration-900 text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSixCard;
