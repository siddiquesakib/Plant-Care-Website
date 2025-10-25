import React from "react";
import { Link } from "react-router";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FooterComponent() {
  const navlink = (
    <>
      <li className="hover:text-white">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="hover:text-white">
        <Link to={"/plants"}>Plants</Link>
      </li>
      <li className="hover:text-white">
        <Link to={"/about"}>About Us</Link>
      </li>
      <li className="hover:text-white">
        <Link to={"/auth/login"}>Login</Link>
      </li>
      <li className="hover:text-white">
        <Link to={"/auth/register"}>Register</Link>
      </li>
    </>
  );
  const social = (
    <>
      <li className="hover:text-white">
        <Link
          className="flex gap-1.5"
          target="_blank"
          to={"https://www.instagram.com/"}
        >
          <FaInstagram size={18} /> Instagram
        </Link>
      </li>
      <li className="hover:text-white">
        <Link
          className="flex gap-1.5"
          target="_blank"
          to={"https://www.facebook.com/"}
        >
          <FaFacebook size={18} /> Facebook
        </Link>
      </li>
      <li className="hover:text-white">
        <Link
          className="flex gap-1.5"
          target="_blank"
          to={"https://www.pinterest.com/"}
        >
          <FaPinterest size={18} /> Pinterest
        </Link>
      </li>
      <li className="hover:text-white">
        <Link
          className="flex gap-1.5"
          target="_blank"
          to={"https://www.pinterest.com/"}
        >
          <FaYoutube size={18} /> Youtube
        </Link>
      </li>
      <li className="hover:text-white">
        <Link
          className="flex gap-1.5"
          target="_blank"
          to={"https://www.pinterest.com/"}
        >
          <FaXTwitter size={18} /> Twitter
        </Link>
      </li>
    </>
  );

  return (
    <footer className="text-sm font-sans bg-[#222e1f] text-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="text-gray-500 flex flex-col items-start gap-2">
          <Link to={"/"} className="text-3xl text-white font font-medium">
            Plant Care
          </Link>
          <p className="text-xs">© 2025 Plant Care. All rights reserved.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-start gap-10 md:gap-32 w-full md:w-auto">
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">{navlink}</ul>
          </div>

          <div className="pr-0 md:pr-20">
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <ul className="space-y-3 text-gray-400">{social}</ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
