import { HeadFC, Link } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { useCategoryContext } from "../../context";
import { createSlugFromTitle } from "../../utils";

type LastRecipeProps = Queries.CategoryPageQuery["sanityRecipe"];

const LastRecipe: React.FC<Partial<LastRecipeProps>> = (props) => {
  const { name, image, descrizione } = props || {};
  const text =
    descrizione &&
    descrizione[1] &&
    descrizione[1].children &&
    descrizione[1]?.children[0]
      ? descrizione[1]?.children[0].text
      : undefined;
  const gatsbyImage = React.useMemo(
    () => image && getImage(image.asset),
    [image, image?.asset]
  );

  const { slug } = useCategoryContext();
  console.log(slug);

  if (props)
    return (
      <section className="flex flex-col md:flex-row">
        {/* Text */}
        <article className="bg-yellow-400 h-[350px] md:w-[60%] md:h-[400px] flex ">
          <div className="w-[90%] m-auto flex flex-col gap-5 justify-center px-10 md:px-[80px] ">
            <h2 className="font-bold text-2xl">{name}</h2>
            {text && <p>{text.split(" ", 60).join(" ").concat(".....")}</p>}
            <div>
              <Link to={`/${slug}/${createSlugFromTitle(name ? name : null)}/`}>
                <button className="px-10 py-1 bg-orange-400 rounded-xl text-white">
                  Scopri di più
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Image */}
        {gatsbyImage ? (
          <article className="h-[350px] md:w-[40%] md:h-[400px] flex justify-center items-center">
            <div className="w-[400px] md:h-[400px] flex items-center">
              <GatsbyImage image={gatsbyImage} alt="Last Recipe Image" />
            </div>
          </article>
        ) : null}
      </section>
    );
  return null;
};

export default LastRecipe;

// export const Head: HeadFC = () => <title>{n}</title>;
