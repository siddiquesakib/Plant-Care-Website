import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useLoaderData } from "react-router";
import PlantsCard from "../Component/PlantsCard";
import Loading from "./Loading";

const Plants = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-linear-to-b from-green-50/50 via-white to-green-50/30 min-h-screen mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent text-start container mx-auto pt-10">
          Total Plants ({data.length}){" "}
        </h1>
        <dir className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
          {" "}
          {data.map((plant) => (
            <PlantsCard key={plant.plantId} plant={plant}></PlantsCard>
          ))}
        </dir>
      </div>
      <Footer />
    </div>
  );
};

export default Plants;
