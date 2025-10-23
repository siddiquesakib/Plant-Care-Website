import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import PlantsDetailsCard from "../Component/PlantsDetailsCard";

const PlantDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  //   console.log(data);

  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const plantDetails = data.find((single) => single.plantId == id);
    setDetail(plantDetails);
  }, [data, id]);

  return (
    <div>
      <Navbar />
      <div className="bg-[#f7f6f1] py-15 ">
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
