import { reviews } from "../data.js";

export const filterReviewsByProductId = (productId) => {
  return reviews.filter((review) => review.productId === productId);
};
