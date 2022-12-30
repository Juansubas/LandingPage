import React from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/*Logo LOgo*/}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold relative p-1 bg-footer text-white"
          >
            Power<span className="text-primary text-5xl">.</span>
          </a>
        </div>
        {/* Social Media */}
        <nav>

        </nav>
      </div>
      <div></div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © jotredev 2022 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
