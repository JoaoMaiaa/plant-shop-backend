import AdminJS, { PageHandler } from "adminjs";

import { Consumer, Product, Category } from "../models";

export const dashboardOptions: {
  handler?: PageHandler;
  component?: string;
} = {
  component: AdminJS.bundle("./components/Dashboard"),
  handler: async (req, res, ctx) => {
    const consumer = await Consumer.count();
    const product = await Product.count();
    const category = await Category.count();

    res.json({
      Consumidores: consumer,
      Produtos: product,
      Categorias: category,
    });
  },
};
