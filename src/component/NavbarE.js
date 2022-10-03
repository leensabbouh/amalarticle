import React from "react";
import logo from "../images/base-logo.png";
import { Link } from "react-router-dom";

function NavbarE() {
  return (
    <div className="flex justify-between items-center h-8 w-full">
                
        <Link to="/" className="text-white text-bold">Arabic</Link>
      <img src={logo} className="w-25 logo" alt="" />
      
     
    </div>
  );
}

export default NavbarE;
