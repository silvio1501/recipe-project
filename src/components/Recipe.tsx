import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

type Props = {
  titolo: string | null;
  descrizione?: string | null;
  image?: IGatsbyImageData | null;
  chef?: string | null;
};

const Recipe = ({ titolo, descrizione, image, chef }: Props) => {
  return (
    <article className="p-2 w-[315px] h-[320px] border flex flex-col items-center gap-3 hover:bg-yellow-400">
      <div className="w-[200px] flex justify-center">
        {image ? <GatsbyImage image={image} alt="recipe image" /> : null}
      </div>
      <div className="px-3">
        <h2 className="font-bold text-center">{titolo}</h2>
        <p className="mt-3 italic">
          {descrizione?.split(" ", 15).join(" ").concat(".....")}
        </p>
      </div>
      <div className="w-[100%]">
        <h2 className="text-right font-medium text-sm">{chef}</h2>
      </div>
    </article>
  );
};

export default Recipe;
