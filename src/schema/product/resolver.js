export const ProductResolver = {
  category: ({ categoryId }, args, { database }) => {
    return database.categories.find((category) => category.id === categoryId);
  },

  reviews: ({ id: productId }, args, { database }) => {
    return database.reviews.filter((review) => review.productId === productId);
  },
};
