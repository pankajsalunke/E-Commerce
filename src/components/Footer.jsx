import React from "react";
import {Link} from "react-router-dom";
import git from "../assets/git.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-sm sm:text-base">
          Eyesome made with 💜 by <span className="font-semibold">Pankaj</span>.
        </p>

        <div className="flex gap-4">
          <Link
            to="https://github.com/pankajsalunke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={git}
              alt="GitHub"
              className="w-7 h-7 sm:w-8 sm:h-8 hover:opacity-80 transition"
            />
          </Link>

          <Link
            to="https://www.linkedin.com/in/pankaj-salunke-3342b7203"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-7 h-7 sm:w-8 sm:h-8 hover:opacity-80 transition"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
