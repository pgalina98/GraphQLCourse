export const CategoryTypes = `
  type Query {
    category(id: ID!): Category
    categories: [Category!]!
  } 

  input CategoryCreateDataInput {
    name: String!
  }
  
  input CategoryUpdateDataInput {
    name: String!
  }

  input CategoryUpdateWhereInput {
    name: String!
  }

  type Mutation {
    categoryCreate(data: CategoryCreateDataInput!): Category
    categoryUpdate(data: CategoryUpdateDataInput!, where: CategoryUpdateWhereInput!): Category 
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;
