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
    category: Category!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product!

    categories: [Category!]!
    category(id: ID!): Category
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    product: (parent, args, ctx) => {
      return products.find((product) => product.id === args.id);
    },

    categories: () => categories,
    category: (parent, args, ctx) => {
      return categories.find((category) => category.id === args.id);
    },
  },

  Category: {
    products: (parent, args, ctx) => {
      return products.filter((product) => product.categoryId === parent.id);
    },
  },

  Product: {
    category: (parent, args, ctx) => {
      return categories.find((category) => category.id === parent.categoryId);
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
