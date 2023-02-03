const Category = {
  products: (parent, args, ctx) => {
    return ctx.products.filter((item) => item.categoryId === parent.id);
  },
};

export default Category;
