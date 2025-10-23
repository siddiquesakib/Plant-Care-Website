import React from "react";
import { Rss, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";

function FooterComponent() {
  const navlink = (
    <>
      <li className="hover:text-white">
        {" "}
        <Link to={"/"}>Home</Link>{" "}
      </li>
      <li className="hover:text-white">
        {" "}
        <Link to={"/plants"}>Plants</Link>{" "}
      </li>
      <li className="hover:text-white">
        <Link to={"./myprofile"}>My Profile</Link>
      </li>
    </>
  );
  const social = (
    <>
      <li className="hover:text-white">
        {" "}
        <Link className="flex gap-1.5" to={"/"}>
          {" "}
          <Instagram size={20} /> Instagram
        </Link>{" "}
      </li>
      <li className="hover:text-white">
        {" "}
        <Link className="flex gap-1.5" to={"/plants"}>
          {" "}
          <Facebook size={20} /> Facebook
        </Link>{" "}
      </li>
      <li className="hover:text-white">
        {" "}
        <Link className="flex gap-1.5" to={"./myprofile"}>
          <Rss size={20} /> Pinterest
        </Link>
      </li>
    </>
  );

  return (
    <footer className="text-sm font-sans bg-[#222e1f] text-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4  py-10 flex justify-between items-end gap-8">
        <div className="text-gray-500 flex flex-col items-start gap-21">
          <Link to={"/"} className="text-3xl text-white font font-medium">
            Plant Care
          </Link>{" "}
          <p className="text-xs">© 2025 GreenNest. All rights reserved.</p>
        </div>

        <div className="flex justify-start gap-32  ">
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 ">{navlink}</ul>
          </div>

          <div className="pr-20">
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <ul className="space-y-3 text-gray-400">{social} </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
