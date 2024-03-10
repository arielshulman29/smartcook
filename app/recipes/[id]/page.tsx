import recipes from "../recipes.json";

const getRecipes = async (recipeId?: string) => {
  return Promise.resolve(recipes[0]);
};

export default async function Recipe({
  params,
}: {
  params: {
    id?: string;
  };
}) {
  console.log(recipes);
  return <div>{`${params?.id}`}</div>;
}
