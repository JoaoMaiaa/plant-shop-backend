import { Request, Response } from "express";

import { consumerService } from "../services/consumerService";

export const consumerController = {
  show: async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
      const consumer = await consumerService.show(email);
      return res.status(200).json({ message: "ok", consumer });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ err: err.message });
      }
    }
  },

  create: async (req: Request, res: Response) => {
    const { name, lastName, email, password } = req.body;

    try {
      const consumer = await consumerService.create(
        name,
        lastName,
        email,
        password
      );
      return res
        .status(200)
        .json({ message: "Usuário criado com sucesso", consumer });
    } catch (error) {
      if (error instanceof Error) {
        return res.json({ error: error.message });
      }
    }
  },

  update: async (req: Request, res: Response) => {
    return;
  },

  delete: async (req: Request, res: Response) => {
    return;
  },
};
