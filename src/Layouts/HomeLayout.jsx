import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { Link, Outlet, useLoaderData } from "react-router";
import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";
import TopSixCard from "../Component/TopSixCard";
import { IoIosArrowRoundForward } from "react-icons/io";
import Tips from "../Component/Tips";
import Team from "../Component/Team";
import Review from "../Component/Review";
import Loading from "../Pages/Loading";

const HomeLayout = () => {
  const loadData = useLoaderData();

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
      <Navbar></Navbar>
      <HeroSection />
      <div className="bg-[#f7f6f1] ">
        <div className="max-w-11/12 mx-auto">
          <div className="flex justify-between pt-25">
            <h1 className="text-4xl  text-start ">Top Rated Indoor Plants</h1>
            <div className="relative flex hover:underline group">
              <Link to="/plants" className="text-gray-700">
                All Plants
              </Link>

              <span className="transform transition-transform duration-500 ease-out group-hover:translate-x-[4px] group-hover:-translate-y-[4px] group-hover:scale-105 preserve-3d">
                <IoIosArrowRoundForward
                  className="absolute -rotate-45"
                  size={22}
                />
              </span>
            </div>
          </div>
          <TopSixCard loadData={loadData} />
          <div className="flex justify-between pt-25">
            <h1 className="text-4xl  text-start ">
              Essential Tips for Thriving Plants
            </h1>
          </div>
          <Tips />
          <div className="flex justify-between pt-22">
            <h1 className="text-4xl  text-start ">Meet Our Team</h1>
          </div>
          <Team />
          <div className="flex justify-between pt-22">
            <h1 className="text-4xl  text-start ">What Our Customers Say</h1>
          </div>
          <Review />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
