import React from "react";

const PlantsDetailsCard = ({ detail }) => {
  if (!detail) return null;

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

  return (
    <div className="bg-gradient-to-b from-[#f8f9f6] to-[#ffffff] min-h-screen pb-16">
      {/* Plant Details Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row items-center md:items-start md:gap-10 p-6 md:p-12 mt-10">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={image}
            alt={plantName}
            className="rounded-2xl w-full object-cover h-80 md:h-[480px] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 space-y-4">
          <h1 className="text-4xl font-extrabold text-[#2a7d2e] mb-3 leading-tight">
            {plantName}
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-5">
            {description}
          </p>

          <div className="space-y-2 text-gray-800">
            <p>
              <span className="font-semibold text-gray-900">Category:</span>{" "}
              {category}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Price:</span>{" "}
              <span className="text-green-600 font-bold">${price}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-900">Rating:</span>{" "}
              <span className="text-yellow-500">⭐ {rating}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-900">Available Stock:</span>{" "}
              {availableStock}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Care Level:</span>{" "}
              {careLevel}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Provider:</span>{" "}
              {providerName}
            </p>
          </div>
        </div>
      </div>

      {/* Book Consultation Section */}
      <div className="mt-20 max-w-2xl mx-auto p-6 md:p-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-t-4 border-[#2a7d2e]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#2a7d2e] mb-2">
              Book a Consultation
            </h2>
            <p className="text-gray-600 text-sm">
              Get personalized advice on caring for your {plantName}.
            </p>
          </div>

          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#2a7d2e] text-white px-4 py-2 rounded-lg hover:bg-[#222e1f] transition-colors duration-900 text-center"
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
