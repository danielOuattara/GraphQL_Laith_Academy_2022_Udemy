const Product = {
  category: (parent, args, ctx) => {
    return ctx.categories.find((category) => category.id === parent.categoryId);
  },
};

export default Product;
