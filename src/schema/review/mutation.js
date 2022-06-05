import { v4 as uuid } from "uuid";

export const ReviewMutation = {
  reviewCreate: (parent, { data }, { database }) => {
    const newReview = { id: uuid(), ...data };

    database.reviews.push(newReview);

    return newReview;
  },

  reviewUpdate: (parent, args, context) => {},
};
