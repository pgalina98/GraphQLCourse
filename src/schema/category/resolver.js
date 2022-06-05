export const CategoryResolver = {
  products: ({ id: categoryId }, args, { database }) => {
    return database.products.filter(
      (product) => product.categoryId === categoryId
    );
  },
};
