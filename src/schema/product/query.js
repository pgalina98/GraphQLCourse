import { filterProductsByWhereObject } from "../../utils/ProductFilterUtil.js";

export const ProductQuery = {
  product: (parent, args, context) => {
    const { id } = args;
    const { products } = context;

    return products.find((product) => product.id === id);
  },

  products: (parent, { where }, context) => {
    const { products } = context;

    if (where) {
      return [...filterProductsByWhereObject(products, where)];
    }

    return [...products];
  },
};
