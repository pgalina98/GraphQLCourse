import { products } from "../../data.js";

export const CategoryResolvers = {
  products: (parent, args, context) => {
    const { id: categoryId } = parent;

    return products.filter((product) => product.categoryId === categoryId);
  },
};
