import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useLoaderData } from "react-router";
import PlantsCard from "../Component/PlantsCard";
import Loading from "./Loading";

const Plants = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredData = data
    .filter((plant) =>
      plant.plantName.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "price") return a.price - b.price;
      if (sort === "rating") return b.rating - a.rating;
      
      return 0;
    });

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
    <title>Plant Care | Plants </title>   <Navbar />
      <div className="bg-linear-to-b from-green-50/50 via-white to-green-50/30 min-h-screen mb-16">
        <div className="container mx-auto pt-10 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            Total Plants ({filteredData.length})
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search plants..."
              className="input input-bordered w-full sm:w-64 border-green-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="select select-bordered w-full sm:w-48 border-green-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
              onChange={(e) => setSort(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Sort By
              </option>
              <option value="price">Price (Low to High)</option>
              <option value="rating">Rating (High to Low)</option>
            </select>
          </div>
        </div>

        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
          {filteredData.map((plant) => (
            <PlantsCard key={plant.plantId} plant={plant}></PlantsCard>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plants;
