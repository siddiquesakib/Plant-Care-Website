import React from "react";
import { Link } from "react-router";

const PlantsCard = ({ plant }) => {
  const { plantId, image, plantName, price, rating } = plant;
  console.log(plant);
  return (
    <div className="rounded-xl shadow-lg overflow-hidden bg-[#ffffff] hover:bg-[#f7edde] transition-colors duration-900">
      <img src={image} alt={plant.name} className="max-w-2xs bg-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-lg">{plantName}</h2>
        <p className="text-green-600 font-bold">${price}</p>
        <p className="text-yellow-500">⭐ {rating}</p>
        <Link
          to={`/plant-details/${plantId}`}
          className="mt-3 cursor-pointer bg-[#2a7d2e] text-white px-4 py-2 rounded-lg hover:bg-[#222e1f] transition-colors duration-900 text-center "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlantsCard;
