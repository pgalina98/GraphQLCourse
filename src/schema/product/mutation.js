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

  productDelete: (parent, { id }, { database }) => {
    database.products = database.products.filter(
      (product) => product.id !== id
    );

    database.reviews = database.reviews.filter(
      (review) => review.productId === id
    );

    return true;
  },

  productUpdate: (parent, args, context) => {},
};
