import { v4 as uuid } from "uuid";

export const ReviewMutation = {
  reviewCreate: (parent, { data }, { database }) => {
    const newReview = { id: uuid(), ...data };

    database.reviews.push(newReview);

    return newReview;
  },

  reviewDelete: (parent, { id }, { database }) => {
    database.reviews = database.reviews.filter((review) => review.id !== id);

    return true;
  },

  reviewUpdate: (parent, args, context) => {},
};
