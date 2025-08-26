import React from "react";
import {Link, useNavigate} from "react-router-dom";
import git from "../assets/git.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-50 text-black py-6 mt-10">
      <div className="container mx-auto text-center flex flex-row justify-center gap-4">
        <p>Eyesome made with 💜 by Pankaj.</p>
        <p className="flex flex-row justify-center text-2xl">
          <Link
            to="https://github.com/pankajsalunke"
            target="_blank"
          >
            <img
              src={git}
              alt="github png"
              width={30}
            />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/pankaj-salunke-3342b7203"}
            target="_blank"
          >
            <img
              src={linkedin}
              alt="linkedin png"
              width={30}
            />
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
