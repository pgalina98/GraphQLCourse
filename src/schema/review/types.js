export const ReviewTypes = `
  type Query {
    review(id: ID!): Review
    reviews: [Review!]!
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
    date: String!
    title: String!
    comment: String!
    rating: Float!
    productId: ID!
  }

  type Mutation {
    reviewCreate(data: ReviewCreateDataInput!): Review
    reviewUpdate(data: ReviewUpdateDataInput!, where: ReviewUpdateWhereInput!): Review 
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Float!
    product: Product!
  }
`;
