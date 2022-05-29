export const ReviewResolvers = {
  product: (parent, args, context) => {
    const { productId } = parent;
    const { products } = context;

    return products.find((product) => product.id === productId);
  },
};
