export const CategoryQuery = {
  category: (parent, args, context) => {
    const { id } = args;
    const { categories } = context;

    return categories.find((category) => category.id === id);
  },

  categories: (parent, args, context) => {
    const { categories } = context;

    return [...categories];
  },
};
