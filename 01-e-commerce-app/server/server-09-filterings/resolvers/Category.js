const Category = {
  products: (parent, args, ctx) => {
    console.log(args);
    const categoryProducts = ctx.products.filter(
      (product) => product.categoryId === parent.id,
    );
    if (args.filter) {
      if (args.filter.onSale) {
        return categoryProducts.filter((product) => product.onSale === true);
      }
      if (args.filter.averg) {
        console.log("TODO");
      }
    } else {
      return products;
    }
  },
  // products: (parent, args, ctx) => {
  // if (args.filter) {
  //   if (args.filter.onSale) {
  //     return ctx.products.filter((product) => product.onSale === true);
  //   }
  // } else {
  //   return ctx.products;
  // }
};

export default Category;
