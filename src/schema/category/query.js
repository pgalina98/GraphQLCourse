export const CategoryQuery = {
  category: (parent, { id }, { database }) => {
    return database.categories.find((category) => category.id === id);
  },

  categories: (parent, args, { database }) => {
    return [...database.categories];
  },
};
