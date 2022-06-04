export const CategoryResolver = {
  products: (parent, args, context) => {
    const { id: categoryId } = parent;
    const { products } = context;

    return products.filter((product) => product.categoryId === categoryId);
  },
};
