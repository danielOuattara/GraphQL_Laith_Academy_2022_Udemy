import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const products = [
  {
    name: "product 1",
    description: "product 1 description",
    quantity: 12,
    price: 45.99,
    onSale: true,
  },
  {
    name: "product 2",
    description: "product 2 description",
    quantity: 19,
    price: 29.99,
    onSale: true,
  },
  {
    name: "product 3",
    description: "product 3 description",
    quantity: 5,
    price: 5.99,
    onSale: true,
  },
];

const typeDefs = `#graphql

  type Book {
    title: String
    author: String
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }

  type Query {
    sayHello: String
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
    userId: ID
    books: [Book]
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    sayHello: () => "Hello out there!",
    numberOfAnimals: () => 3,
    price: () => 3.124,
    isCool: () => true,
    userId: () => "6bc2y6ghg3rz7",
    books: () => books,
    products: () => products,
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
