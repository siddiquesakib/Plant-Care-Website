import React, { useEffect, useState } from "react";

const Team = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setExperts(data))
      .catch((err) => console.error("Error loading experts:", err));
  }, []);

  return (
    <section className=" py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-[#ffffff] hover:bg-[#f7edde]  rounded-lg shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105"
            >
              <img
                className="w-32 h-32 rounded-full object-cover mb-4 "
                src={expert.image}
                alt={expert.name}
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {expert.name}
              </h3>
              <p className="text-green-700 font-medium mb-3">
                {expert.specialization}
              </p>
              <p className="text-gray-500 text-center text-sm">{expert.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
