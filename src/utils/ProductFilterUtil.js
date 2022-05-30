import { isPropertyNullOrUndefined } from "../helpers/ObjectPropertyCheckHelper.js";
import { filterReviewsByProductId } from "./ReviewFilterUtil.js";

export const filterProductsByWhereObject = (products, where) => {
  if (!isPropertyNullOrUndefined(where.available)) {
    products = products.filter(
      (product) => product.available === where.available
    );
  }

  if (!isPropertyNullOrUndefined(where.averageReviewRating)) {
    products = products.filter((product) =>
      isAverageReviewRatingGreaterThenOrEqualsToFilterWhereValue(product, where)
    );
  }

  return products;
};

const isAverageReviewRatingGreaterThenOrEqualsToFilterWhereValue = (
  { id: productId },
  { averageReviewRating }
) => {
  const productReviews = filterReviewsByProductId(productId);

  const totalReviewsRatingForProduct = productReviews.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.rating;
    },
    0
  );

  return (
    totalReviewsRatingForProduct / productReviews.length >= averageReviewRating
  );
};
