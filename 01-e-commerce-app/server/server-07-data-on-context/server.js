import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schemas/schema.js";
import Query from "./resolvers/Query.js";
import Category from "./resolvers/Category.js";
import Product from "./resolvers/Product.js";
import { products, categories } from "./database.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Category, Product },
});

const { url } = await startStandaloneServer(server, {
  context: () => ({
    products,
    categories,
  }),
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
