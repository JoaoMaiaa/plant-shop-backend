import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { Consumer } from "../models/Consumer";

const secret = process.env.TOKEN_JWT;

export const consumerService = {
  create: async (
    name: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    const consumer = await Consumer.create({ name, lastName, email, password });

    return consumer;
  },

  show: async (email: string) => {
    const consumer = await Consumer.findOne({ where: { email } });
    return consumer;
  },

  upload: async (id: string | number, path: string | undefined) => {
    //  const consumer =  await Consumer.findOne({where:{id}})
    await Consumer.update({ imgUrl: path }, { where: { id } });
    return true;
  },

  getPath: async (id: string | number) => {
    const consumer = await Consumer.findOne({ where: { id } });
    return consumer?.imgUrl;
  },

  login: async (email: string, password: string) => {
    const consumer = await Consumer.findOne({ where: { email } });

    if (consumer) {
      const consumerPassword = await bcrypt.compare(
        password,
        consumer.password
      );
      if (consumerPassword) {
        const token = jwt.sign({ email }, `${secret}`, { expiresIn: "1d" });
        return { token, consumer };
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  update: async (
    id: string | number,
    name: string,
    lastName: string,
    email: string
  ) => {
    const consumerUpdated = await Consumer.update(
      { name, lastName, email },
      { where: { id }, returning: true }
    );

    return consumerUpdated;
  },

  updatePassword: async (id: string | number, password: string) => {
    const consumerUpdatedPassword = await Consumer.update(
      { password },
      { where: { id }, individualHooks: true, returning: true }
    );
    return consumerUpdatedPassword;
  },

  delete: async (id: string | number) => {
    const consumer = await Consumer.destroy({ where: { id } });

    return consumer;
  },
};
