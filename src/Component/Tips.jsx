import React from "react";

const Tips = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 max-w-11/12 mx-auto py-9 gap-1 shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-linear-to-br from-green-800 to-emerald-900 text-white p-12 hover:from-green-700 hover:to-emerald-800 transition-all duration-500 group">
          {" "}
          <h1 className="mb-20 text-3xl font-semibold group-hover:scale-105 transition-transform">
            💧 Watering
          </h1>{" "}
          <p className="font-light text-base leading-relaxed">
            Let the top 1-2 inches of soil dry out before watering again. Water
            deeply until excess drains from the bottom, then discard any
            leftover water to prevent root rot.
          </p>
        </div>

        <div className="bg-linear-to-br from-amber-50 to-yellow-100 text-gray-800 p-12 hover:from-amber-100 hover:to-yellow-200 transition-all duration-500 group">
          {" "}
          <h1 className="mb-20 text-3xl font-semibold group-hover:scale-105 transition-transform">
            ☀️ Light
          </h1>{" "}
          <p className="font-medium text-base leading-relaxed">
            Keep plants in bright, indirect sunlight—near an east or west-facing
            window works best. Yellow or burnt leaves mean they're getting too
            much direct light.
          </p>
        </div>

        <div className="bg-linear-to-br from-amber-50 to-yellow-100 text-gray-800 p-12 hover:from-amber-100 hover:to-yellow-200 transition-all duration-500 group">
          {" "}
          <h1 className="mb-20 text-3xl font-semibold group-hover:scale-105 transition-transform">
            🌱 Fertilizer
          </h1>{" "}
          <p className="font-medium text-base leading-relaxed">
            Feed your plants only during spring and summer with a balanced,
            water-soluble fertilizer at half strength. Pause fertilizing
            completely during winter dormancy.
          </p>
        </div>

        <div className="bg-linear-to-br from-green-800 to-emerald-900 text-white p-12 hover:from-green-700 hover:to-emerald-800 transition-all duration-500 group">
          {" "}
          <h1 className="mb-20 text-3xl font-semibold group-hover:scale-105 transition-transform">
            Pots
          </h1>{" "}
          <p className="font-light text-base leading-relaxed">
            Choose pots with proper drainage holes to avoid soggy roots. When
            repotting, go just 1-2 inches larger than the current pot to
            maintain healthy growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;
