import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { products, categories } from "./data.js";

const typeDefs = `#graphql

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
  }

  type Category {
    id: ID!
    name: String!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product

    categories: [Category!]!
    category(id: ID!): Category
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    product: (parent, args, ctx) => {
      return products.find((item) => item.id === args.id);
    },

    categories: () => categories,
    category: (parent, args, ctx) => {
      return categories.find((item) => item.id === args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
