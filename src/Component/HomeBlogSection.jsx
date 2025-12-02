import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";

const HomeBlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 3)));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-3">
            Latest Plant Care Blogs
          </h1>
          <p className="text-gray-600 text-lg">
            Discover expert advice for your green companions
          </p>
        </div>
        <Link
          to="/blogs"
          className="hidden md:flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group"
        >
          View All Blogs
          <IoIosArrowRoundForward
            className="transform group-hover:translate-x-1 transition-transform"
            size={24}
          />
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog-details/${blog.id}`}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                {/* Date & Author */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>{blog.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 grow">
                  {blog.content1}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-green-600 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  Read More
                  <IoIosArrowRoundForward
                    className="transform group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="md:hidden mt-8 text-center">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 font-semibold transition-all"
        >
          View All Blogs
          <IoIosArrowRoundForward size={24} />
        </Link>
      </div>
    </div>
  );
};

export default HomeBlogSection;
