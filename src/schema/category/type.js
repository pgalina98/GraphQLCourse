export const CategoryType = `
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Query {
    category(id: ID!): Category
    categories: [Category!]!
  } 

  type Mutation {
    categoryCreate(input: CategoryCreateDataInput!): Category
    categoryUpdate(where: CategoryUpdateWhereInput!, input: CategoryUpdateDataInput!): Category
    categoryDelete(id: ID!): Boolean
  }

  type Subscription {
    categoryCreated: Category!
  }

  input CategoryCreateDataInput {
    name: String!
  }
  
  input CategoryUpdateDataInput {
    name: String!
  }

  input CategoryUpdateWhereInput {
    id: ID!
  }
`;
