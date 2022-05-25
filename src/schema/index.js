import { gql } from "apollo-server-express";
import { ProductTypes, ProductQuery } from "./product/index.js";
import { CategoryTypes, CategoryQuery } from "./category/index.js";

export const typeDefs = gql`
  ${ProductTypes}
  ${CategoryTypes}
`;

export const resolvers = {
  Query: {
    ...ProductQuery,
    ...CategoryQuery,
  },
};
