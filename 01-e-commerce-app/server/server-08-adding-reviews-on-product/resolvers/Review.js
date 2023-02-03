const Review = {
  product: (parent, args, ctx) => {
    return ctx.products.find((product) => product.id === parent.productId);
  },
};

export default Review;
