import { categories } from "../../data.js";

export const ProductResolvers = {
  category: (parent, args, context) => {
    const { categoryId } = parent;

    return categories.find((category) => category.id === categoryId);
  },
};
