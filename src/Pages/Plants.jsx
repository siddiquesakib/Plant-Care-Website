import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useLoaderData } from "react-router";
import PlantsCard from "../Component/PlantsCard";

const Plants = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="bg-[#f7f6f1]">
        <h1 className="text-4xl  text-start container mx-auto pt-10 ">
          Total Plants ({data.length}){" "}
        </h1>
        <dir className="container mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
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
