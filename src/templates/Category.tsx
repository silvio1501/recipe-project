import React from "react";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";
import LastRecipe from "../feature/categoryPage/LastRecipe";
import RecipeCategorySection from "../feature/categoryPage/RecipeCategorySection";
import { CategoryProvider } from "../context";
import { createSlugFromTitle } from "../utils";
import Paginator from "../feature/categoryPage/Paginator";

type ContextProps = {
  titolo: string;
  currentPage: number;
  numOfPages: number;
};

const Category: React.FC<
  PageProps<Queries.CategoryPageQuery, ContextProps>
> = ({ data, pageContext }) => {
  const { titolo, currentPage, numOfPages } = pageContext;

  const ctx = React.useMemo(
    () => ({
      slug: createSlugFromTitle(titolo) || "",
      currentPage,
      numOfPages,
    }),
    [titolo]
  );

  return (
    <Layout>
      <CategoryProvider value={ctx}>
        <LastRecipe {...data.sanityRecipe} />
        {titolo ? (
          <div className="w-[90%] mx-auto my-[30px]">
            <h2 className="font-bold text-2xl">{titolo}</h2>
          </div>
        ) : null}
        {data.allSanityRecipe.nodes ? (
          <RecipeCategorySection ricettario={data.allSanityRecipe.nodes} />
        ) : null}
        <Paginator />
      </CategoryProvider>
    </Layout>
  );
};

export default Category;

export const query = graphql`
  query CategoryPage(
    $lastRecipes: String!
    $ITEM_PER_PAGE: Int!
    $start: Int!
    $articles: [String]
  ) {
    allSanityRecipe(
      sort: { _createdAt: DESC }
      limit: $ITEM_PER_PAGE
      skip: $start
      filter: { _id: { in: $articles } }
    ) {
      nodes {
        name
        descrizione {
          children {
            text
          }
        }
        ingredienti
        image {
          asset {
            gatsbyImageData
          }
        }
        cookedby {
          complete_name
        }
      }
    }
    sanityRecipe(_id: { eq: $lastRecipes }) {
      name
      image {
        asset {
          gatsbyImageData
        }
      }
      descrizione {
        children {
          text
        }
      }
    }
  }
`;
