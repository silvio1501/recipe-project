import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const HeroAbout = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Text */}
      <article className="bg-yellow-400 h-[350px] md:w-[60%] md:h-[400px] flex ">
        <div className="w-[90%] m-auto flex flex-col gap-8 justify-center px-10 md:px-[80px] ">
          <h2 className="font-bold text-2xl">Chi siamo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
            accusamus recusandae accusantium enim minima officiis, eaque
            inventore omnis animi odio, non, sed molestias aliquid laboriosam
            reiciendis pariatur iste voluptatem autem. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Ea accusamus recusandae
            accusantium enim minima officiis, eaque inventore omnis animi odio,
            non, sed molestias aliquid laboriosam reiciendis pariatur iste
            voluptatem autem.
          </p>
          <div>
            <button className="px-10 py-1 bg-purple-400 rounded-xl text-white">
              Contattaci
            </button>
          </div>
        </div>
      </article>

      {/* Image */}
      <article className="h-[350px] md:w-[40%] md:h-[400px] flex justify-center items-center">
        <div className="w-[350px] md:h-[400px] flex items-center">
          <StaticImage src="./images/chef.jpg" alt="about hero image" />
        </div>
      </article>
    </section>
  );
};

export default HeroAbout;
