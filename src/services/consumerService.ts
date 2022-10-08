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

  update: async (name: string, lastName: string, email: string) => {
    const consumerUpdated = await Consumer.update(
      { name, lastName, email },
      { where: { email }, returning: true }
    );

    return consumerUpdated;
  },

  updatePassword: async (
    id: string | number,
    email: string,
    password: string
  ) => {
    const consumerUpdatedPassword = await Consumer.update(
      { password },
      { where: { id }, individualHooks: true, returning: true }
    );
    return consumerUpdatedPassword;
  },
};
