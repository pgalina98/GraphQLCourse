export const ReviewType = `
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Float!
  }

  type Query {
    review(id: ID!): Review
    reviews: [Review!]!
  } 

  type Mutation {
    reviewCreate(input: ReviewCreateDataInput!): Review
    reviewUpdate(where: ReviewUpdateWhereInput!, input: ReviewUpdateDataInput!): Review
    reviewDelete(id: ID!): Boolean
  }

  input ReviewCreateDataInput {
    date: String!
    title: String!
    comment: String!
    rating: Float!
    productId: ID!
  }
  
  input ReviewUpdateDataInput {
    date: String
    title: String
    comment: String
    rating: Float!
  }

  input ReviewUpdateWhereInput {
    id: ID!
  }
`;
