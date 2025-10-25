import React, { use, useEffect, useState } from "react";
import FooterComponent from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { AuthContext } from "../Context/AuthProvider";
import icon from "../assets/4836e6ae7354af1f08bb47c1ac71675e.jpg";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUser, setUser } = use(AuthContext);
  console.log(user);
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
        // Update the local user state
        setUser({
          ...user,
          displayName: formData.displayName,
          photoURL: formData.photoURL,
        });
        toast.success("Profile updated successfully!");
        setShowModal(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update profile. Please try again.");
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

    
              <div className="flex-1 w-full ">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {user.displayName || "No Name Provided"}
                </h3>

                <div className=" gap-6 text-gray-700">
                  <div className="bg-green-50 p-4 rounded-xl shadow-inner">
                    <p className="font-semibold">Email</p>
                    <p className="mt-1 text-gray-800">{user.email || "N/A"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowModal(true)}
                className="cursor-pointer bg-[#2a7d2e] text-white px-4 py-2 rounded-lg hover:bg-[#222e1f] transition-colors duration-900 text-center"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Update Profile Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>

            {/* Modal Header */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Update Profile
            </h3>

            {/* Update Form */}
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Photo URL Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleInputChange}
                  placeholder="Enter photo URL"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  Update
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
