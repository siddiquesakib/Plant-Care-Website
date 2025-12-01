import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function FooterComponent() {
  const navlink = (
    <>
      <li className="hover:text-green-400 transition-colors">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="hover:text-green-400 transition-colors">
        <Link to={"/plants"}>Plants</Link>
      </li>
      <li className="hover:text-green-400 transition-colors">
        <Link to={"/about"}>About Us</Link>
      </li>
      <li className="hover:text-green-400 transition-colors">
        <Link to={"/auth/login"}>Login</Link>
      </li>
      <li className="hover:text-green-400 transition-colors">
        <Link to={"/auth/register"}>Register</Link>
      </li>
    </>
  );
  const social = (
    <>
      <li className="hover:text-green-400 transition-colors">
        <Link
          className="flex gap-1.5"
          target="_blank"
          to={"https://www.instagram.com/"}
        >
          <AiFillInstagram size={20} /> Instagram
        </Link>
      </li>
      <li className="hover:text-green-400 transition-colors">
        <Link
          className="flex gap-1.5"
          target="_blank"
          to={"https://www.facebook.com/"}
        >
          <FaFacebook size={18} /> Facebook
        </Link>
      </li>
      <li className="hover:text-green-400 transition-colors">
        <Link
          className="flex gap-1.5"
          target="_blank"
          to={"https://github.com/siddiquesakib/"}
        >
          <FaGithub size={18} /> Github
        </Link>
      </li>
      <li className="hover:text-green-400 transition-colors">
        <Link
          className="flex gap-1.5"
          target="_blank"
          to={"https://www.linkedin.com/in/mohammad-siddique-sakib/"}
        >
          <FaLinkedin size={18} /> Linkedin
        </Link>
      </li>
      <li className="hover:text-green-400 transition-colors">
        <Link className="flex gap-1.5" target="_blank" to={"https://x.com/"}>
          <FaXTwitter size={18} /> Twitter
        </Link>
      </li>
    </>
  );

  return (
    <footer className="text-sm font-sans bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col items-start gap-3">
          <Link
            to="/"
            className="text-3xl font-bold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
             Plant Care
          </Link>
          <p className="text-xs text-gray-400">
            © 2025 Plant Care. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 max-w-xs">
            Bringing nature home, one plant at a time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-start gap-10 md:gap-32 w-full md:w-auto">
          <div>
            <h4 className="text-lg font-bold mb-5 text-green-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">{navlink}</ul>
          </div>

          <div className="pr-0 md:pr-20">
            <h4 className="text-lg font-bold mb-5 text-green-400">Social</h4>
            <ul className="space-y-3 text-gray-400">{social}</ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
