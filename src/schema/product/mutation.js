import { v4 as uuid } from "uuid";

export const ProductMutation = {
  productCreate: (parent, { data }, { database }) => {
    const newProduct = {
      id: uuid(),
      ...data,
    };

    database.products.push(newProduct);

    return newProduct;
  },

  productUpdate: (parent, args, context) => {},
};
