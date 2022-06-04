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
    categoryCreate(data: CategoryCreateDataInput!): Category
    categoryUpdate(data: CategoryUpdateDataInput!, where: CategoryUpdateWhereInput!): Category
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
