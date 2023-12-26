import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => {
  return (
    <div className="w-[50px]">
      <StaticImage src="../../images/icon.jpg" alt="logo" />
    </div>
  );
};

export default Logo;
