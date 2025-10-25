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
        <MyNavLink to="/profile">My Profile</MyNavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="font lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <Link to="/" className="text-3xl font font-medium">
            Plant Care
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>

        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
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
                className="mt-3 z-[1000] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <Link to={"/profile"}>
                  <p className="btn btn-sm w-full font-semibold text-gray-700 text-center hover:text-gray-900 transition ">
                    {user.displayName || "User"}
                  </p>
                </Link>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-700 mt-2"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="border border-black cursor-pointer px-4 py-1 rounded-lg hover:bg-[#2a7d2e] hover:text-white hover:border-[#2a7d2e] text-center font-semibold transition-colors duration-500 "
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="border border-black cursor-pointer px-4 py-1 rounded-lg hover:bg-[#2a7d2e] hover:text-white hover:border-[#2a7d2e] text-center font-semibold transition-colors duration-500 "
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
