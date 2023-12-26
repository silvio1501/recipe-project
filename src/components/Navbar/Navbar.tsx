import React from "react";
import Logo from "./Logo";
import Links from "./Links";

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 p-2">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <Logo />
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
