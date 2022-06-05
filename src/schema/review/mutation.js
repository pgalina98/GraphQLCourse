import { v4 as uuid } from "uuid";

export const ReviewMutation = {
  reviewCreate: (parent, { input }, { database }) => {
    const newReview = { id: uuid(), ...input };

    database.reviews.push(newReview);

    return newReview;
  },

  reviewUpdate: (parent, { where: { id }, input }, { database }) => {
    const index = database.reviews.findIndex((review) => review.id === id);

    const updatedReview = {
      ...database.reviews[index],
      ...input,
    };

    database.reviews[index] = updatedReview;

    return updatedReview;
  },

  reviewDelete: (parent, { id }, { database }) => {
    database.reviews = database.reviews.filter((review) => review.id !== id);

    return true;
  },
};
