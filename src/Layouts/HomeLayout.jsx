import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { Link, Outlet, useLoaderData } from "react-router";
import Footer from "../Component/Footer";
import HeroSection from "../Component/HeroSection";
import TopCard from "../Component/TopCard";
import { IoIosArrowRoundForward } from "react-icons/io";
import Tips from "../Component/Tips";
import Team from "../Component/Team";
import Review from "../Component/Review";
import Loading from "../Pages/Loading";
import FAQ from "../Component/FAQ";
import Video from "../Component/Video";
import HomeBlogSection from "../Component/HomeBlogSection";

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
      <title>Plant-Care | Home</title>
      <Navbar></Navbar>
      <HeroSection />
      <div className="bg-linear-to-b from-green-50/50 via-white to-green-50/30">
        <div className="max-w-11/12 mx-auto">
          <div className="flex justify-between pt-25">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-8">
              Top Rated Indoor Plants
            </h1>
            <div className="relative flex  group">
              <Link
                to="/plants"
                className="hidden md:flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group"
              >
                View All Plants
                <IoIosArrowRoundForward
                  className="transform group-hover:translate-x-1 transition-transform"
                  size={24}
                />
              </Link>
            </div>
          </div>
          <TopCard loadData={loadData} />
          <div className="flex justify-between pt-25">
            <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-8 ">
              Essential Tips for Thriving Plants
            </h1>
          </div>
          <Tips />
          <div className="flex justify-between pt-22">
            <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-8">
              Meet Our Team
            </h1>
          </div>
          <Team />

          <Video />

          <HomeBlogSection />

          <div className="flex justify-between pt-25">
            <div className=" ">
              <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-gray-600 mx-auto">
                Find answers to common questions about our plant care services,
                authentication, and more
              </p>
            </div>
          </div>
          <FAQ />

          <div className="flex justify-between pt-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              What Our Customers Say
            </h1>
          </div>
          <Review />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
