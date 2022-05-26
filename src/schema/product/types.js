export const ProductTypes = `
  type Query {
    product(id: ID!): Product
    products: [Product!]!
  } 

  input ProductCreateDataInput {
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    available: Boolean!
    category: ID!
  }
  
  input ProductUpdateDataInput {
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    available: Boolean!
    category: ID!
  }

  input ProductUpdateWhereInput {
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    available: Boolean!
    category: ID!
  }

  type Mutation {
    productCreate(data: ProductCreateDataInput!): Product
    productUpdate(data: ProductUpdateDataInput!, where: ProductUpdateWhereInput!): Product 
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    available: Boolean!
    category: Category!
  }
`;
