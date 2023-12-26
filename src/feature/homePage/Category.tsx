import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

type Props = {
  image?: IGatsbyImageData;
  name: string | null;
};

const Category = ({ name, image }: Props) => {
  return (
    <article className="p-3 py-6 border bg-yellow-300 text-center w-[150px] flex gap-3 flex-col items-center hover:bg-yellow-400">
      {image ? (
        <div className="w-[100px] h-[70px]r">
          <GatsbyImage image={image} alt="category image" />
        </div>
      ) : null}
      <h2>{name}</h2>
    </article>
  );
};

export default Category;
