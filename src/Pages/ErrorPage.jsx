import React from "react";
import { Link } from "react-router";
import Navbar from "../Component/Navbar";
import FooterComponent from "../Component/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-320px)] bg-gray-100 text-center px-4">
        <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800 transition"
        >
          Go Home
        </Link>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ErrorPage;
