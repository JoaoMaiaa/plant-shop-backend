import { Product } from "../models/Product";

export const productService = {
  index: async () => {
    const products = await Product.findAll();
    return products;
  },

  getProductById: async (id: number) => {
    const product = await Product.findOne({ where: { id } });
    return product;
  },
};
