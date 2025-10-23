import React from "react";

// {
//     "tip_id": 1,
//     "topic": "Watering",
//         "rule": "Let the top 1–2 inches of soil dry out before watering again. Water deeply until excess drains from the bottom, then discard any leftover water to prevent root rot."

// //   },
// //    {
//     "tip_id": 2,
//     "topic": "Light",
//     "rule": "Keep plants in bright, indirect sunlight—near an east or west-facing window works best. Yellow or burnt leaves mean they’re getting too much direct light."
//   },
//   {
//     "tip_id": 3,
//     "topic": "Fertilizer",
//     "rule": "Feed your plants only during spring and summer with a balanced, water-soluble fertilizer at half strength. Pause fertilizing completely during winter dormancy."
//   },
//   {
//     "tip_id": 4,
//     "topic": "Pots",
//     "rule": "Choose pots with proper drainage holes to avoid soggy roots. When repotting, go just 1–2 inches larger than the current pot to maintain healthy growth."
//   }

const Tips = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 max-w-11/12 mx-auto py-9 ">
        <div className="bg-[#2c4a28] text-white p-10 ">
          {" "}
          <h1 className="mb-20 text-2xl font-light">Watering</h1>{" "}
          <p className="font-light text-[15px]">
            Let the top 1–2 inches of soil dry out before watering again. Water
            deeply until excess drains from the bottom, then discard any
            leftover water to prevent root rot.
          </p>
        </div>

        <div className="bg-[#f7edde] text-black p-10">
          {" "}
          <h1 className="mb-20 text-2xl font-light">Light</h1>{" "}
          <p className="font-normal text-[15px]">
            Keep plants in bright, indirect sunlight—near an east or west-facing
            window works best. Yellow or burnt leaves mean they’re getting too
            much direct light.
          </p>
        </div>

        <div className="bg-[#f7edde] text-black p-10">
          {" "}
          <h1 className="mb-20 text-2xl font-light">Fertilizer</h1>{" "}
          <p className="font-normal text-[15px]">
            Feed your plants only during spring and summer with a balanced,
            water-soluble fertilizer at half strength. Pause fertilizing
            completely during winter dormancy.
          </p>
        </div>

        <div className="bg-[#2c4a28] text-white p-10 ">
          {" "}
          <h1 className="mb-20 text-2xl font-light">Pots</h1>{" "}
          <p className="font-light text-[15px]">
            Choose pots with proper drainage holes to avoid soggy roots. When
            repotting, go just 1–2 inches larger than the current pot to
            maintain healthy growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;
