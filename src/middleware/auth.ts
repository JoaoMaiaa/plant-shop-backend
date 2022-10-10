import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { ConsumerInstance } from "../models/Consumer";
import { JwtPayload } from "jsonwebtoken";
import { consumerService } from "../services/consumerService";

const token = process.env.TOKEN_JWT;

export interface AuthenticationRequest extends Request {
  consumer?: ConsumerInstance | null;
}

export const ensureAuth = (
  req: AuthenticationRequest,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res
      .status(401)
      .json({ message: "Não autorizado: Nenhum token encontrado" });
  }

  jwt.verify(authorizationHeader, `${token}`, async (err, decoded) => {
    if (err || typeof decoded === undefined) {
      return res
        .status(401)
        .json({ message: "Não autorizado: Token inválido" });
    }

    const consumer = await consumerService.show((decoded as JwtPayload).email);
    req.consumer = consumer;
    next();
  });
};
