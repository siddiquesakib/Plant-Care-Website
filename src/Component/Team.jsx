import React, { useEffect, useState } from "react";

const Team = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setExperts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className=" py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white hover:bg-linear-to-br hover:from-green-50 hover:to-emerald-50 rounded-2xl shadow-xl p-8 flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-100 border border-gray-100 group"
            >
              <img
                className="w-32 h-32 rounded-full object-cover mb-5 ring-4 ring-green-100 group-hover:ring-green-300 transition-all shadow-lg"
                src={expert.image}
                alt={expert.name}
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                {expert.name}
              </h3>
              <p className="text-green-600 font-semibold mb-4 text-sm uppercase tracking-wider">
                {expert.specialization}
              </p>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {expert.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
