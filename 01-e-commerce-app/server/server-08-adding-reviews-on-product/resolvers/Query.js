const Query = {
  products: (parent, args, ctx) => ctx.products,
  product: (parent, args, ctx) => {
    return ctx.products.find((product) => product.id === args.id);
  },

  categories: (parent, args, ctx) => ctx.categories,
  category: (parent, args, ctx) => {
    return ctx.categories.find((category) => category.id === args.id);
  },

  reviews: (parent, args, ctx) => ctx.reviews,
  review: (parent, args, ctx) => {
    return ctx.reviews.find((review) => review.id === args.id);
  },
};

export default Query;
