import { v4 as uuid } from "uuid";

export const CategoryMutation = {
  categoryCreate: (parent, { input: { name } }, { database }) => {
    const newCategory = {
      id: uuid(),
      name,
    };

    database.categories.push(newCategory);

    return newCategory;
  },

  categoryDelete: (parent, { id }, { database }) => {
    database.categories = database.categories.filter(
      (category) => category.id !== id
    );

    database.products.map((product) => ({ ...product, categoryId: null }));

    return true;
  },

  categoryUpdate: (parent, { where: { id }, input }, { database }) => {
    const index = database.categories.findIndex(
      (category) => category.id === id
    );

    const updatedCategory = {
      ...database.categories[index],
      ...input,
    };

    database.categories[index] = updatedCategory;

    return updatedCategory;
  },
};
