export const ProductQuery = {
  product: (parent, args, context) => {
    const { id } = args;
    const { products } = context;

    return products.find((product) => product.id === id);
  },

  products: (parent, args, context) => {
    const { products } = context;

    return [...products];
  },
};
