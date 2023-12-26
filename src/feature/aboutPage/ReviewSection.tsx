import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Review from "./Review";
import { getImage } from "gatsby-plugin-image";

const ReviewSection = () => {
  const data: Queries.ChefsQuery = useStaticQuery(query);

  return (
    <section className="my-[50px] w-[90%] mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-2xl">I Nostri Chef</h2>
      </div>
      <div className="w-[80%] mx-auto justify-between my-[30px] flex flex-col items-center md:flex-row gap-10">
        {data.allSanityChef.nodes.map((chef) => {
          const image = chef.image?.asset
            ? getImage(chef.image.asset)
            : undefined;
          return (
            <Review
              key={chef.complete_name}
              name={chef.complete_name}
              image={image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ReviewSection;

const query = graphql`
  query Chefs {
    allSanityChef {
      nodes {
        complete_name
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
