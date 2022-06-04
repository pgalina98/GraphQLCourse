import { v4 as uuid } from "uuid";

export const ReviewMutation = {
  reviewCreate: (parent, { data }, { reviews }) => {
    const newReview = { id: uuid(), ...data };

    reviews.push(newReview);

    return newReview;
  },

  reviewUpdate: (parent, args, context) => {},
};
