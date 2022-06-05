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
    categoryUpdate(input: CategoryUpdateDataInput!, where: CategoryUpdateWhereInput!): Category
    categoryDelete(id: ID!): Boolean
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
