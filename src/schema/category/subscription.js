export const CategorySubscription = {
  categoryCreated: {
    subscribe: (parent, args, { pubSub }) =>
      pubSub.asyncIterator(["CATEGORY_CREATED"]),
  },
};
