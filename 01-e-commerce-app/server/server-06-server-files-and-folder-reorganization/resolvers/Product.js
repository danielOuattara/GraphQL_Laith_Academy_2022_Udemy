import { categories } from "./../database.js";

const Product = {
  category: (parent, args, ctx) => {
    return categories.find((category) => category.id === parent.categoryId);
  },
};

export default Product;
