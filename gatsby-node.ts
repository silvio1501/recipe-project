import { GatsbyNode } from "gatsby";
import {
  allRecipesQuery,
  allRecipesQueryProps,
  categoryQuery,
  categoryQueryProps,
} from "./query";
import { createSlugFromTitle } from "./src/utils";
import { resolve } from "path";

const ITEM_PER_PAGE = 3;

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const allCategories = (await graphql(categoryQuery)) as categoryQueryProps;
  const allRecipes = (await graphql(allRecipesQuery)) as allRecipesQueryProps;

  allCategories.data.allSanityCategory.nodes.forEach((category) => {
    const slug = createSlugFromTitle(category.titolo);
    if (slug) {
      const recipes = category.ricettario
        .filter((x) => Boolean(x))
        .sort((a, b) => Date.parse(b._createdAt) - Date.parse(a._createdAt));

      const numOfPages = Math.ceil((recipes.length - 1) / ITEM_PER_PAGE);

      Array.from({ length: numOfPages }).forEach((_, index) => {
        const currentPage = index + 1;
        const start = index * ITEM_PER_PAGE + 1;
        createPage({
          path: currentPage === 1 ? slug : `/${slug}/${currentPage}`,
          component: resolve("./src/templates/Category.tsx"),
          context: {
            titolo: category.titolo,
            category_id: category._id,
            lastRecipes: recipes[0]._id,
            currentPage,
            start,
            numOfPages,
            ITEM_PER_PAGE,
            articles: recipes.map((item) => item._id),
          },
        });
      });
    }
  });

  allRecipes.data.allSanityRecipe.nodes.forEach((recipe) => {
    const slug = createSlugFromTitle(recipe?.category?.titolo);
    if (slug) {
      createPage({
        path: `/${slug}/${createSlugFromTitle(recipe.name)}`,
        component: resolve("./src/templates/Recipe.tsx"),
        context: {
          _id: recipe._id,
        },
      });
    }
  });
};
