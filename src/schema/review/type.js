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
    reviewUpdate(input: ReviewUpdateDataInput!, where: ReviewUpdateWhereInput!): Review
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
    date: String!
    title: String!
    comment: String!
    rating: Float!
    productId: ID!
  }

  input ReviewUpdateWhereInput {
    id: ID!
  }
`;
