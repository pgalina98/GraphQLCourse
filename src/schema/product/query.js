import { filterProductsByWhereObject } from "../../utils/ProductFilterUtil.js";

export const ProductQuery = {
  product: (parent, { id }, { database }) => {
    return database.products.find((product) => product.id === id);
  },

  products: (parent, { where }, { database }) => {
    if (where) {
      return [...filterProductsByWhereObject(database.products, where)];
    }

    return [...database.products];
  },
};
