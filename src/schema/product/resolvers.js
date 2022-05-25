import { products } from "../../data.js";

export const ProductResolvers = {
  product: () => {
    return {};
  },
  products: () => {
    return [...products];
  },
};
