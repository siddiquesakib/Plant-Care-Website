import React from "react";
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
    plantHeight,
    petBabySafe,
    nurseryPotSize,
    likes,
  } = detail;

  const handleBookNow = (e) => {
    e.preventDefault();
    toast.success("Booking successful");
    e.target.reset();
  };

  return (
    <div className="bg-gradient-to-b from-green-50 via-emerald-50/40 to-teal-50/60 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Image Section */}
            <div className="lg:w-5/12">
              <img
                src={image}
                alt={plantName}
                className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
              />
            </div>

            {/* Details Section */}
            <div className="lg:w-7/12 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-3">
                  {plantName}
                </h1>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                    🌿 {category}
                  </span>
                  <span className="bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                    ⭐ {rating}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                    🌱 {careLevel}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 text-base leading-relaxed bg-green-50/50 p-5 rounded-xl">
                {description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl text-center border border-green-200">
                  <p className="text-gray-600 text-sm mb-1">Price</p>
                  <p className="text-2xl font-bold text-green-600">${price}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl text-center border border-green-200">
                  <p className="text-gray-600 text-sm mb-1">Stock</p>
                  <p className="text-2xl font-bold text-gray-900">{availableStock}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl text-center border border-green-200">
                  <p className="text-gray-600 text-sm mb-1">Height</p>
                  <p className="text-lg font-bold text-gray-900">{plantHeight}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border-l-4 border-green-500 shadow-sm">
                  <p className="text-gray-600 text-sm mb-1">🪴 Pot Size</p>
                  <p className="text-gray-900 font-semibold">{nurseryPotSize}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border-l-4 border-purple-500 shadow-sm">
                  <p className="text-gray-600 text-sm mb-1">👤 Provider</p>
                  <p className="text-gray-900 font-semibold">{providerName}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
                <p className="text-gray-600 text-sm mb-2">🐾 Pet & Baby Safe</p>
                <p className="text-gray-800 text-sm leading-relaxed">{petBabySafe}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Care Guide Section */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-green-500">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-8 text-center">
            🌱 Care Guide
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">☀️</span>
                <h3 className="text-xl font-bold text-green-700">Light</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{likes.Light}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">💧</span>
                <h3 className="text-xl font-bold text-blue-700">Watering</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{likes.Watering}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">💨</span>
                <h3 className="text-xl font-bold text-purple-700">Humidity</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{likes.Humidity}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="mt-16 max-w-2xl mx-auto p-6 md:p-10">
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 border-t-4 border-green-500 hover:shadow-green-100 transition-shadow duration-500">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-3">
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
              className="w-full cursor-pointer bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-4 rounded-xl hover:from-green-700 hover:to-emerald-600 transition-all duration-300 text-center font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
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