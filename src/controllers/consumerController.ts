import { Request, Response } from "express";

import { AuthenticationRequest } from "../middleware/auth";
import { consumerService } from "../services/consumerService";
import { paymentService, ProductTypes } from "../services/paymentService";

export const consumerController = {
  getPath: async (req: AuthenticationRequest, res: Response) => {
    const { id } = req.consumer!;
    try {
      const image = await consumerService.getPath(id);
      res.json({ image });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ err: err.message });
      }
    }
  },

  upload: async (req: AuthenticationRequest, res: Response) => {
    const { id } = req.consumer!;
    const path = req.file?.path;

    try {
      const upload = await consumerService.upload(id, path);
      if (upload) {
        res.json({ message: "Upload feito com sucesso" });
      } else {
        res.json({ message: "Erro: Não foi possível fazer o upload" });
      }
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ err: err.message });
      }
    }
  },

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

  update: async (req: AuthenticationRequest, res: Response) => {
    const consumer = req.consumer!;
    const { name, lastName, email } = req.body;

    try {
      if (!consumer) {
        return res.status(400).json({ message: "Não autorizado" });
      }

      const consumerUpdate = await consumerService.update(
        consumer.id,
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

  updatePassword: async (req: AuthenticationRequest, res: Response) => {
    const consumer = req.consumer;
    const { currentPassword, newPassword } = req.body;

    if (!consumer) {
      return res.status(401).json({ message: "Não autorizado!" });
    }

    try {
      consumer.checkPassword(currentPassword, async (err, isSame) => {
        if (err) {
          return res.status(400).json({ message: err.message });
        }

        if (!isSame) {
          return res.status(400).json({ message: "Senha incorreta" });
        }

        const consumerUpdate = await consumerService.updatePassword(
          consumer.id,
          newPassword
        );

        return res.status(200).json({
          message: "Usuário editado com sucesso",
          consumerUpdate,
        });
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.json({ err: err.message });
      }
    }
  },

  payment: async (req: AuthenticationRequest, res: Response) => {
    const productData = req.body;
    try {
      const product = await paymentService.payment(productData);
      res.json(product);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json(err.message);
      }
    }
  },

  delete: async (req: AuthenticationRequest, res: Response) => {
    const { id } = req.consumer!;
    try {
      const consumer = await consumerService.delete(id);
      if (consumer) {
        res.status(200).json({ message: "Usuário excluído com sucesso" });
      } else {
        res.status(400).json({ message: "Usuário inexistente" });
      }
    } catch (err) {
      if (err instanceof Error) {
        return res.json({ err: err.message });
      }
    }
  },
};
