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

  productUpdate: (parent, { where: { id }, input }, { database }) => {
    const index = database.products.findIndex((product) => product.id === id);

    const updatedProduct = {
      ...database.products[index],
      ...input,
    };

    database.products[index] = updatedProduct;

    return updatedProduct;
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
};
