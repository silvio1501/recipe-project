export const categoryQuery = `
{
allSanityCategory {
    nodes {
      _id
      titolo
      ricettario {
        _createdAt
        _id
        descrizione {
          children {
            text
          }
        }
      }
    }
  }
}
`;

export type categoryQueryProps = {
  data: {
    allSanityCategory: {
      nodes: {
        _id: NonNullable<Queries.SanityCategory["_id"]>;
        titolo: NonNullable<Queries.SanityCategory["titolo"]>;
        ricettario: {
          _createdAt: NonNullable<Queries.SanityRecipe["_createdAt"]>;
          _id: NonNullable<Queries.SanityRecipe["_id"]>;
          descrizione: {
            children: {
              _text: NonNullable<Queries.SanityRecipe["descrizione"]>;
            }[];
          };
        }[];
      }[];
    };
  };
};

export const allRecipesQuery = `
{
  allSanityRecipe {
    nodes {
      _id
      name
      category {
        titolo
      }
    }
  }
}
`;

export type allRecipesQueryProps = {
  data: {
    allSanityRecipe: {
      nodes: {
        _id: NonNullable<Queries.SanityRecipe["_id"]>;
        name: NonNullable<Queries.SanityRecipe["name"]>;
        category: {
          titolo: NonNullable<Queries.SanityRecipe["category"]>["titolo"];
        };
      }[];
    };
  };
};
