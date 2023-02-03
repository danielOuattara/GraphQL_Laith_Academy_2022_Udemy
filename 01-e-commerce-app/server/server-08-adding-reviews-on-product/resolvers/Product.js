const Product = {
  category: (parent, args, ctx) => {
    return ctx.categories.find((category) => category.id === parent.categoryId);
  },

  reviews: (parent, args, ctx) => {
    return ctx.reviews.filter((review) => review.productId === parent.id);
  },
};

export default Product;
