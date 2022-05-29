export const ReviewQuery = {
  review: (parent, args, context) => {
    const { id } = args;
    const { reviews } = context;

    return reviews.find((review) => review.id === id);
  },

  reviews: (parent, args, context) => {
    const { reviews } = context;

    return [...reviews];
  },
};
