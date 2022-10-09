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

  login: async (req: Request, res: Response) => {
    const { password, email } = req.body;
    try {
      const consumer = await consumerService.login(email, password);
      if (!consumer) {
        return res
          .status(400)
          .json({ message: "Erro: Senha ou email inválido" });
      } else {
        return res.status(200).json(consumer);
      }
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
    const { name, lastName, email } = req.body;

    try {
      const consumer = await consumerService.show(email);
      if (!consumer) {
        return res.status(400).json({ message: "Usuário não encontrado" });
      }
      const consumerUpdate = await consumerService.update(
        name,
        lastName,
        email
      );

      return res.status(200).json({
        message: "Usuário editado com sucesso",
        consumerUpdate,
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.json({ err: err.message });
      }
    }
  },

  updatePassword: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { id } = req.params;

    try {
      const consumerUpdate = await consumerService.updatePassword(
        id,
        email,
        password
      );

      return res.status(200).json({
        message: "Usuário editado com sucesso",
        consumerUpdate,
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.json({ err: err.message });
      }
    }
  },

  delete: async (req: Request, res: Response) => {
    return;
  },
};
