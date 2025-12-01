import React, { use } from "react";
import MyNavLink from "./MyNavLink";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import defaultIcon from "../assets/4836e6ae7354af1f08bb47c1ac71675e.jpg";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navlink = (
    <>
      <li>
        <MyNavLink to="/">Home</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/plants">Plants</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/about">About Us</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/blogs">Blogs</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/faq">FAQ</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/profile">My Profile</MyNavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-green-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1000] p-3 shadow-2xl bg-white rounded-2xl w-56 border border-green-100"
            >
              {navlink}
            </ul>
          </div>
          <Link
            to="/"
            className="text-3xl font-bold bg-linear-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Plant Care
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navlink}</ul>
        </div>

        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring-2 ring-green-200 hover:ring-green-400 transition-all"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL || defaultIcon}
                    alt={user.displayName}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-1000 p-4 shadow-2xl menu menu-sm dropdown-content bg-white rounded-2xl w-64 border border-green-100"
              >
                <li className="mb-2">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-200">
                      <img
                        src={user.photoURL || defaultIcon}
                        alt={user.displayName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500">View Profile</p>
                    </div>
                  </Link>
                </li>
                <div className="divider my-2"></div>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="w-full bg-linear-to-r from-red-500 to-red-600 text-white px-4 py-2.5 rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="border-2 border-green-600 text-green-600 cursor-pointer px-5 py-2 rounded-xl hover:bg-green-600 hover:text-white text-center font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="bg-linear-to-r from-green-600 to-emerald-500 text-white cursor-pointer px-5 py-2 rounded-xl hover:from-green-700 hover:to-emerald-600 text-center font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
