import { Link, graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import Recipe from "../../components/Recipe";
import { createSlugFromTitle } from "../../utils";

const LastRecipes = () => {
  const data: Queries.last8recipesQuery = useStaticQuery(query);

  return (
    <section className="w-[90%] mx-auto my-5">
      <h2 className="font-bold text-xl mb-5">Le ultime ricette</h2>
      <div className="flex flex-wrap gap-8 justify-center md:justify-start">
        {data.allSanityRecipe.nodes.map((recipe) => {
          const descrizione =
            recipe.descrizione && recipe.descrizione[1]?.children
              ? recipe.descrizione[1]?.children[0]?.text
              : null;
          const image = recipe.image?.asset
            ? getImage(recipe.image.asset)
            : null;
          return (
            <Link
              to={`/${createSlugFromTitle(
                recipe.category?.titolo
              )}/${createSlugFromTitle(recipe.name)}/`}
              key={recipe.name}
            >
              <Recipe
                titolo={recipe.name}
                image={image}
                descrizione={descrizione}
                chef={recipe.cookedby?.complete_name}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LastRecipes;

const query = graphql`
  query last8recipes {
    allSanityRecipe(limit: 8, sort: { _createdAt: DESC }) {
      nodes {
        name
        descrizione {
          children {
            text
          }
        }
        category {
          titolo
        }
        cookedby {
          complete_name
        }
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
