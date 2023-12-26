import React from "react";
import Layout from "../components/Layout";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Recipe: React.FC<PageProps<Queries.RecipeQueryQuery>> = ({ data }) => {
  const image = data.sanityRecipe?.image?.asset
    ? getImage(data.sanityRecipe?.image?.asset)
    : null;

  return (
    <Layout>
      <main className="w-[90%] mx-auto">
        <div className="my-5">
          <h1 className="font-bold text-4xl">{data.sanityRecipe?.name}</h1>
        </div>
        {image ? (
          <div className="my-5">
            <div
              className="border rounded-xl overflow-hidden"
              style={{
                width: "600px",
                height: "400px",
              }}
            >
              <GatsbyImage
                image={image}
                alt="recipe image"
                style={{
                  width: "600px",
                  height: "400px",
                }}
              />
            </div>
          </div>
        ) : null}

        {data.sanityRecipe?.ingredienti ? (
          <ul className="list-disc my-10">
            <h2 className="text-2xl font-semibold uppercase my-2">
              Ingredienti
            </h2>
            {data.sanityRecipe.ingredienti.map((ingrediente) => {
              return (
                <li className="text-lg" key={ingrediente}>
                  {ingrediente}
                </li>
              );
            })}
          </ul>
        ) : null}

        {data.sanityRecipe?.descrizione ? (
          <div>
            {data.sanityRecipe.descrizione.map((child) => {
              if (child?.children) {
                return (
                  <div className="my-3 first:font-bold first:text-xl">
                    <p>{child.children[0]?.text}</p>
                  </div>
                );
              }
            })}
          </div>
        ) : null}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query RecipeQuery($_id: String!) {
    sanityRecipe(_id: { eq: $_id }) {
      name
      category {
        titolo
      }
      image {
        asset {
          gatsbyImageData
        }
      }
      ingredienti
      descrizione {
        children {
          text
          _key
        }
      }
    }
  }
`;

export default Recipe;
