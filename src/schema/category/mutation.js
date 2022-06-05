import { v4 as uuid } from "uuid";

export const CategoryMutation = {
  categoryCreate: (parent, { data: { name } }, { database }) => {
    const newCategory = {
      id: uuid(),
      name,
    };

    database.categories.push(newCategory);

    return newCategory;
  },

  categoryUpdate: (parent, args, context) => {},

  categoryDelete: (parent, { id }, { database }) => {
    database.categories = database.categories.filter(
      (category) => category.id !== id
    );

    database.products.map((product) => ({ ...product, categoryId: null }));

    return true;
  },
};
