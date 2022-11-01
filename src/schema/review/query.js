export const ReviewQuery = {
  review: (parent, { id }, { database }) => {
    return database.reviews.find((review) => review.id === id);
  },

  reviews: (parent, args, { database }) => {
    return [...database.reviews];
  },
};
