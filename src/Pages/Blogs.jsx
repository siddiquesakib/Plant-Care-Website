import React from "react";
import Navbar from "../Component/Navbar";
import FooterComponent from "../Component/Footer";
import { useLoaderData } from "react-router";
import BlogCard from "../Component/BlogCard";

const Blogs = () => {
  const data = useLoaderData();

  return (
    <>
      <title>Plant Care | Blog </title> <Navbar />
      <div className="bg-linear-to-b from-green-50/50 via-white to-emerald-50/30 min-h-screen mb-16">
        <section className=" py-10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Plant Care Blog
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Discover expert tips, comprehensive guides, and the latest trends
              to help your houseplants thrive and transform your home into a
              lush green sanctuary.
            </p>
          </div>
        </section>

        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {data.map((review) => (
            <BlogCard key={review.id} review={review}></BlogCard>
          ))}
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Blogs;
