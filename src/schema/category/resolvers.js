export const CategoryResolvers = {
  products: (parent, args, context) => {
    const { id: categoryId } = parent;
    const { products } = context;

    return products.filter((product) => product.categoryId === categoryId);
  },
};
