import { v4 as uuid } from "uuid";

export const CategoryMutation = {
  categoryCreate: (parent, { data: { name } }, { categories }) => {
    const newCategory = {
      id: uuid(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },

  categoryUpdate: (parent, args, context) => {},
};
