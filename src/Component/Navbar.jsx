import React from "react";
import MyNavLink from "./MyNavLink";
import { Link } from "react-router";

const Navbar = () => {
  const navlink = (
    <>
      <li>
        <MyNavLink to="/">Home</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/plants">Plants</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/myprofile">My Profile</MyNavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto">
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
          <Link to="/auth/login" className="btn">
            Login
          </Link>
          <Link to="/auth/register" className="btn">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
