import database from "../data.js";

export const filterReviewsByProductId = (productId) => {
  return database.reviews.filter((review) => review.productId === productId);
};
