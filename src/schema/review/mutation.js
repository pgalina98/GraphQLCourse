import { v4 as uuid } from "uuid";

export const ReviewMutation = {
  reviewCreate: (parent, { input }, { database }) => {
    const newReview = { id: uuid(), ...input };

    database.reviews.push(newReview);

    return newReview;
  },

  reviewUpdate: (parent, args, context) => {},

  reviewDelete: (parent, { id }, { database }) => {
    database.reviews = database.reviews.filter((review) => review.id !== id);

    return true;
  },
};
