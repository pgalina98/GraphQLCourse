import { categories } from "../../data.js";

export const CategoryQuery = {
  category: (parent, args, context) => {
    const { id } = args;

    return categories.find((category) => category.id === id);
  },

  categories: (parent, args, context) => {
    return [...categories];
  },
};
