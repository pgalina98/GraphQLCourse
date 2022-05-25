export const ProductTypes = `
  type Query {
    product: Product
    products: [Product]
  } 

  input ProductCreateDataInput {
    name: String!
  }
  
  input ProductUpdateDataInput {
    name: String!
  }

  input ProductUpdateWhereInput {
    name: String!
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
  }
`;
