import { Request, Response } from "express";

import { productService } from "../services/productService";

export const productController = {
  index: async (req: Request, res: Response) => {
    try {
      const products = await productService.index();
      res.json(products);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json(err.message);
      }
    }
  },

  getProductById: async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const products = await productService.getProductById(id);
      res.json(products);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json(err.message);
      }
    }
  },
};
