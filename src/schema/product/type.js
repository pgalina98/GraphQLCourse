export const ProductType = `
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    available: Boolean!
    category: Category!
    reviews: [Review!]
  }

  type Query {
    product(id: ID!): Product
    products(where: ProductFilterWhereInput): [Product!]!
  } 

  type Mutation {
    productCreate(data: ProductCreateDataInput!): Product
    productUpdate(data: ProductUpdateDataInput!, where: ProductUpdateWhereInput!): Product 
  }

  input ProductFilterWhereInput {
    available: Boolean
    averageReviewRating: Float
  }

  input ProductCreateDataInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    available: Boolean!
    categoryId: ID!
  }
  
  input ProductUpdateDataInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    available: Boolean!
    categoryId: ID!
  }

  input ProductUpdateWhereInput {
    id: ID!
  }
`;
