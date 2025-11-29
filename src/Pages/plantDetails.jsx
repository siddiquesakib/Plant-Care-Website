import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import PlantsDetailsCard from "../Component/PlantsDetailsCard";

const PlantDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const plantDetails = data.find((single) => single.plantId == id);
    setDetail(plantDetails);
  }, [data, id]);

  useEffect(() => {
    if (detail) {
      document.title = `${detail.plantName} | Plant Care`;
    }
  }, [detail]);

  return (
    <div>
      <Navbar />
      <div className="bg-linear-to-b from-green-50/50 via-white to-emerald-50/30 py-15 min-h-screen">
        {detail ? (
          <PlantsDetailsCard detail={detail} />
        ) : (
          <p>Loading plant details...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PlantDetails;
