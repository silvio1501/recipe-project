import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { CreateStar } from "./utils/CreateStar";

type Props = {
  name: string | null;
  image?: IGatsbyImageData;
};

const Review = ({ name, image }: Props) => {
  return (
    <article className="border rounded-xl p-3">
      <div className="flex gap-3 items-center">
        {image ? (
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <GatsbyImage image={image} alt={name || "image"} />
          </div>
        ) : null}
        <div>
          <h2>{name}</h2>
          <div className="flex gap-1 mt-1">
            <CreateStar />
          </div>
        </div>
      </div>
      <p className="mt-3 text-gray-400 pr-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, debitis.
      </p>
    </article>
  );
};

export default Review;
