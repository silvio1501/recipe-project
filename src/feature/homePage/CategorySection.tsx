import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import Category from "./Category";
import { getImage } from "gatsby-plugin-image";
import { createSlugFromTitle } from "../../utils";

const CategorySection = () => {
  const data: Queries.CategoriesQuery = useStaticQuery(query);

  return (
    <section className="my-[50px] w-[90%] flex justify-center gap-10 mx-auto">
      {data.allSanityCategory.nodes.map((category) => {
        const image = category.image?.asset
          ? getImage(category.image.asset)
          : undefined;
        return category.titolo ? (
          <Link
            to={`/${createSlugFromTitle(category.titolo)}`}
            key={category.titolo}
          >
            <Category name={category.titolo} image={image} />
          </Link>
        ) : null;
      })}
    </section>
  );
};

const query = graphql`
  query Categories {
    allSanityCategory {
      nodes {
        titolo
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default CategorySection;
