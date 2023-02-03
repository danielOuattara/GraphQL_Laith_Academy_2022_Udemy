const Query = {
  products: (parent, args, ctx) => ctx.products,
  product: (parent, args, ctx) => {
    return ctx.products.find((item) => item.id === args.id);
  },

  categories: (parent, args, ctx) => ctx.categories,
  category: (parent, args, ctx) => {
    return ctx.categories.find((item) => item.id === args.id);
  },
};

export default Query;
