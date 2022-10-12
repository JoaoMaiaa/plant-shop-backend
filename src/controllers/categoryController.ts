import { Request, Response } from "express";

import { categoryService } from "../services/categoryService";

export const categoryController = {
  findCategoryByName: async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
      const category = await categoryService.findCategoryByName(name);
      res.json(category);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json(err.message);
      }
    }
  },
};
