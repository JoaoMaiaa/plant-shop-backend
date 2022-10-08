import { Consumer } from "../models/Consumer";

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
};
