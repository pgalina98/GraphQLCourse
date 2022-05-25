import { products } from "../../data.js";

export const ProductResolvers = {
  product: (parent, args, context) => {
    const { id } = args;

    return products.find((product) => product.id === id);
  },
  products: () => {
    return [...products];
  },
};
