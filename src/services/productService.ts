import { Product } from "../models/Product";

export const productService = {
  index: async () => {
    const products = await Product.findAll();
    return products;
  },
};
