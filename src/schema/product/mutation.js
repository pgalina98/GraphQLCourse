import { v4 as uuid } from "uuid";

export const ProductMutation = {
  productCreate: (parent, { data }, { products }) => {
    const newProduct = {
      id: uuid(),
      ...data,
    };

    products.push(newProduct);

    return newProduct;
  },

  productUpdate: (parent, args, context) => {},
};
