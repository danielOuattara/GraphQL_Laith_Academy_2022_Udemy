import { products, categories } from "./../database.js";

const Query = {
  products: (parent, args, ctx) => products,
  product: (parent, args, ctx) => {
    return products.find((item) => item.id === args.id);
  },

  categories: (parent, args, ctx) => categories,
  category: (parent, args, ctx) => {
    return categories.find((item) => item.id === args.id);
  },
};

export default Query;
