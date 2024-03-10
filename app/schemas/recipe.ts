import { z } from "zod";

const Ingredient = z.object({ ingredient: z.string(), amount: z.number() });

export const Recipe = z.object({
  id: z.string(),
  title: z.string(),
  servings: z.number(),
  ingredients: z.array(Ingredient),
  instructions: z.string(),
});

// User.parse({ username: "Ludwig" });

// extract the inferred type
type Recipe = z.infer<typeof Recipe>;
// { username: string }
