import React, { use, useEffect, useState } from "react";
import FooterComponent from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { AuthContext } from "../Context/AuthProvider";
import icon from "../assets/4836e6ae7354af1f08bb47c1ac71675e.jpg";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUser, setUser } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (!formData.displayName.trim()) {
      toast.error("Name cannot be empty!");
      return;
    }

    updateUser({
      displayName: formData.displayName,
      photoURL: formData.photoURL,
    })
      .then(() => {
        setUser({
          ...user,
          displayName: formData.displayName,
          photoURL: formData.photoURL,
        });
        toast.success("Profile updated successfully!");
        setShowModal(false);
      })
      .catch((err) => {
        toast.error("Failed to update profile. Please try again.", err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <title>Plant-Care | Profile</title>
      <Navbar />
      <section className="bg-linear-to-br from-green-50 via-white to-emerald-50/50 py-20 px-4 sm:px-6 lg:px-8 min-h-screen mb-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-3">
              My Profile
            </h2>
            <p className="text-lg text-gray-600">
              Manage your account information
            </p>
          </div>

          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
            {/* Decorative Header */}
            <div className="h-40 bg-linear-to-r from-green-600 via-emerald-500 to-teal-500 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="relative px-6 md:px-12 -mt-20 pb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-end">
                <div className="relative">
                  <img
                    src={user?.photoURL || icon}
                    alt="Profile Avatar"
                    className="w-40 h-40 object-cover rounded-3xl border-6 border-white shadow-2xl ring-4 ring-green-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-3 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left pb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {user.displayName || "No Name Provided"}
                  </h3>
                  <p className="text-green-600 font-semibold text-lg mb-4">
                    🌿 Plant Enthusiast
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Info Cards */}
            <div className="px-6 md:px-12 pb-10">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-linear-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-2xl shadow-md">
                      📧
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-green-700 mb-1">
                        Email Address
                      </p>
                      <p className="text-gray-800 font-medium break-all">
                        {user.email || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-md">
                      👤
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-blue-700 mb-1">
                        Account Status
                      </p>
                      <p className="text-gray-800 font-medium">Active Member</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-linear-to-r from-green-600 to-emerald-500 text-white px-10 py-4 rounded-2xl hover:from-green-700 hover:to-emerald-600 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
            {/* Modal Header */}
            <div className="bg-linear-to-r from-green-600 to-emerald-500 p-8 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition-all"
              >
                ×
              </button>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Update Profile
                  </h3>
                  <p className="text-green-100 mt-1">
                    Make changes to your account
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleUpdateProfile} className="p-8 space-y-6">
              <div>
                <label className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <span className="text-green-600">👤</span>
                  Full Name
                </label>
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <span className="text-blue-600">📷</span>
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleInputChange}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                />
                {formData.photoURL && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                    <p className="text-xs text-gray-500 mb-2 font-semibold">
                      Preview:
                    </p>
                    <img
                      src={formData.photoURL}
                      alt="Preview"
                      className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-lg"
                      onError={(e) => {
                        e.target.src = icon;
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                className="flex-1 cursor-pointer px-6 py-3.5 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all font-bold text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                className="flex-1 cursor-pointer px-6 py-3.5 bg-linear-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white rounded-xl transition-all font-bold shadow-lg hover:shadow-xl"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <FooterComponent />
    </>
  );
};

export default Profile;
