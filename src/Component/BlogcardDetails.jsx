import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BlogcardDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = data.find((item) => item.id === parseInt(id));
    setBlog(foundBlog);
  }, [data, id]);

  if (!blog) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-600">Loading blog...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const { title, content, author, date, image } = blog;
  // Format date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50/30 py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Hero Image */}
          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-8">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blog Content Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h1>

              {/* Meta Info */}
              <div className="flex items-center gap-4 pb-6 border-b-2 border-green-100">
                <div>
                  <p className="text-sm text-gray-500">Written by</p>
                  <p className="font-bold text-gray-900">{author}</p>
                </div>

                <div className="h-8 w-px bg-gray-300"></div>

                <div>
                  <p className="text-sm text-gray-500">Published on</p>
                  <p className="font-semibold text-gray-900">{formattedDate}</p>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
              {content}
            </div>

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => navigate("/blogs")}
                className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-3 rounded-xl hover:from-green-700 hover:to-emerald-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Blogs
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogcardDetails;
