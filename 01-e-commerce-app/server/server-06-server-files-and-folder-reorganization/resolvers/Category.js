import { products } from "./../database.js";

const Category = {
  products: (parent, args, ctx) => {
    return products.filter((item) => item.categoryId === parent.id);
  },
};

export default Category;
