import { v4 as uuid } from "uuid";

export const ProductMutation = {
  productCreate: (parent, { input }, { database }) => {
    const newProduct = {
      id: uuid(),
      ...input,
    };

    database.products.push(newProduct);

    return newProduct;
  },

  productUpdate: (parent, args, context) => {},

  productDelete: (parent, { id }, { database }) => {
    database.products = database.products.filter(
      (product) => product.id !== id
    );

    database.reviews = database.reviews.filter(
      (review) => review.productId === id
    );

    return true;
  },
};
