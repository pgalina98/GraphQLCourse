import { isPropertyNullOrUndefined } from "../helpers/ObjectPropertyCheckHelper.js";

export const filterProductsByWhereObject = (products, where) => {
  if (!isPropertyNullOrUndefined(where.available)) {
    products = products.filter(
      (product) => product.available === where.available
    );
  }

  return products;
};
