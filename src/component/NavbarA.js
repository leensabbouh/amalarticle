import React from "react";
import logo from "../images/base-logo.png";
import { Link } from "react-router-dom";

function NavbarA() {
  return (
    <div className="flex justify-between items-center h-8 w-full">
      <img src={logo} className="w-25 logo" alt="" />
      <Link to="/amalarticle/en" className="text-white text-bold">
        English
      </Link>
    </div>
  );
}

export default NavbarA;
