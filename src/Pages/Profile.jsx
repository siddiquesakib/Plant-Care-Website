import React, { use, useEffect, useState } from "react";
import FooterComponent from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { AuthContext } from "../Context/AuthProvider";
import icon from "../assets/4836e6ae7354af1f08bb47c1ac71675e.jpg";
import Loading from "./Loading";

const Profile = () => {
  const { user } = use(AuthContext);
  console.log(user);
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
    <>
      <Navbar />
      <section className="bg-[#f7f6f1] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
              My Profile
            </h2>
            <p className="text-lg text-gray-600">
              View your personal information
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 hover:shadow-green-300 transition-shadow duration-500">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="">
                <img
                  src={user?.photoURL || icon}
                  alt="Profile Avatar"
                  className="w-40 h-40 object-cover rounded-2xl border-4 shadow-lg"
                />
              </div>

              {/* User Info */}
              <div className="flex-1 w-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {user.displayName || "No Name Provided"}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                  <div className="bg-green-50 p-4 rounded-xl shadow-inner">
                    <p className="font-semibold">Email</p>
                    <p className="mt-1 text-gray-800">{user.email || "N/A"}</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-xl shadow-inner">
                    <p className="font-semibold">User ID</p>
                    <p className="mt-1 text-gray-800">{user.uid}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="mt-12 text-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-md text-lg transition-all duration-300">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default Profile;
