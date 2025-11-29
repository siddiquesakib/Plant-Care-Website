import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { toast } from "react-toastify";

const PlantsDetailsCard = ({ detail }) => {
  const {
    plantName,
    category,
    price,
    rating,
    availableStock,
    careLevel,
    description,
    image,
    providerName,
  } = detail;

  const handleBookNow = (e) => {
    e.preventDefault();
    toast.success("Booking successful");
    e.target.reset();
  };

  return (
    <div className="bg-linear-to-b from-green-50/50 via-white to-emerald-50/30 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row items-center md:items-start md:gap-12 mx-2 p-8 md:p-14 mt-10 border border-gray-100 hover:shadow-green-100 transition-shadow duration-500">
        <div className="md:w-1/2 w-full">
          <img
            src={image}
            alt={plantName}
            className="rounded-3xl w-full object-cover h-80 md:h-[500px] transition-transform duration-700 hover:scale-105 shadow-2xl border-4 border-white"
          />
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0 space-y-5">
          <h1 className="text-5xl font-extrabold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-4 leading-tight">
            {plantName}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 bg-green-50/50 p-4 rounded-2xl">
            {description}
          </p>
          <div className="space-y-3 text-gray-800">
            <p className="bg-linear-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-500">
              <span className="font-bold text-green-700">🌿 Category:</span>{" "}
              {category}
            </p>
            <p className="bg-linear-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-500">
              <span className="font-bold text-green-700">💰 Price:</span>{" "}
              <span className="text-green-600 font-bold text-xl">${price}</span>
            </p>
            <p className="bg-linear-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-500">
              <span className="font-bold text-green-700">⭐ Rating:</span>{" "}
              <span className="text-amber-500 font-bold text-xl">{rating}</span>
            </p>
            <p className="bg-linear-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-500">
              <span className="font-bold text-green-700">
                📦 Available Stock:
              </span>{" "}
              {availableStock}
            </p>
            <p className="bg-linear-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-500">
              <span className="font-bold text-green-700">🌱 Care Level:</span>{" "}
              {careLevel}
            </p>
            <p className="bg-linear-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-500">
              <span className="font-bold text-green-700">👤 Provider:</span>{" "}
              {providerName}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 max-w-2xl mx-auto p-6 md:p-10">
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 border-t-4 border-green-500 hover:shadow-green-100 transition-shadow duration-500">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-3">
              Book a Consultation
            </h2>
            <p className="text-gray-600 text-base">
              Get personalized advice on caring for your {plantName}.
            </p>
          </div>
          <form onSubmit={handleBookNow} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-linear-to-r from-green-600 to-emerald-500 text-white px-6 py-4 rounded-xl hover:from-green-700 hover:to-emerald-600 transition-all duration-300 text-center font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlantsDetailsCard;
