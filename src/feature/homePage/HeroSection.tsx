import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = () => {
  return (
    <section className="bg-yellow-400 py-6">
      <div className="w-[90%] mx-auto text-center relative">
        <div className="w-[250px] h-[250px] mx-auto">
          <StaticImage src="./images/cookbook.png" alt="hero images" />
        </div>
        <div>
          <h2 className="center font-bold tracking-[0.3em] text-purple-400 uppercase text-[64px] md:text-[102px]">
            CookBook
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
