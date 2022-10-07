import { Request, Response } from "express";

export const usersController = {
  index: async (req: Request, res: Response) => {
    res.json({ ok: "true" });
  },

  create: async (req: Request, res: Response) => {
    return;
  },

  update: async(req:Request, res: Response)=>{
    return;
  }

  delete:async (req: Request, res:Response)=>{
    return;
  }
};
