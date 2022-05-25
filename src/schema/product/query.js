import { products } from "../../data.js";

export const ProductQuery = {
  product: (parent, args, context) => {
    const { id } = args;

    return products.find((product) => product.id === id);
  },

  products: () => {
    return [...products];
  },
};
