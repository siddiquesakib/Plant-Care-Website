import React from "react";
import { Link } from "react-router";

const BlogCard = ({ review }) => {
  return (
    <div className="group relative bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-green-300 h-full">
      {/* Image with rounded corners inside */}
      <div className="p-4">
        <div className="w-full h-64 rounded-2xl overflow-hidden relative">
          <img
            src={review.image}
            alt={review.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Green overlay on hover */}
          <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-all duration-500"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 flex flex-col gap-4">
        {/* Category Badge */}
        <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide w-fit">
          Blog Post
        </span>

        {/* Title */}
        <h1 className="font-extrabold text-2xl text-gray-900 line-clamp-2 leading-tight group-hover:text-green-700 transition-colors">
          {review.title}
        </h1>

        {/* Author Info with different style */}
        <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-green-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
              {review.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                By
              </p>
              <p className="font-bold text-gray-800">{review.author}</p>
            </div>
          </div>

          {/* Arrow Button */}
          <Link
            to={`/blog-details/${review.id}`}
            className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
