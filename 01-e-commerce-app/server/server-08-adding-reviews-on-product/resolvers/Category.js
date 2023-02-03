const Category = {
  products: (parent, args, ctx) => {
    return ctx.products.filter((product) => product.categoryId === parent.id);
  },
};

export default Category;
