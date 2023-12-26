import React from "react";
import Recipe from "../../components/Recipe";
import { getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useCategoryContext } from "../../context";
import { createSlugFromTitle } from "../../utils";

type Props = Queries.CategoryPageQuery["allSanityRecipe"]["nodes"];
const RecipeCategorySection = ({ ricettario }: { ricettario: Props }) => {
  return (
    <section className="w-[90%] mx-auto my-5">
      <section className="flex flex-wrap gap-8 justify-center md:justify-between">
        {ricettario?.map((ricetta) => {
          const image = ricetta?.image?.asset
            ? getImage(ricetta.image.asset)
            : null;

          const titoloRicetta = ricetta?.name ? ricetta.name : null;

          const descrizione =
            ricetta?.descrizione && ricetta.descrizione[1]?.children
              ? ricetta.descrizione[1]?.children[0]?.text
              : null;

          const { slug } = useCategoryContext();

          return (
            <Link to={`/${slug}/${createSlugFromTitle(titoloRicetta)}/`}>
              <Recipe
                key={titoloRicetta}
                titolo={titoloRicetta}
                image={image}
                descrizione={descrizione}
                chef={ricetta?.cookedby?.complete_name}
              />
            </Link>
          );
        })}
      </section>
    </section>
  );
};

export default RecipeCategorySection;
