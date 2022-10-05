import { ResourceOptions } from "adminjs";

export const consumerResourceOptions: ResourceOptions = {
  navigation: "Cosumidores",
  editProperties: ["name", "lastName", "imgUrl", "email", "password"],
  filterProperties: ["name", "lastName", "email", "createdAt", "updatedAt"],
  listProperties: ["name", "lastName", "email"],
  showProperties: [
    "name",
    "lastName",
    "imgUrl",
    "email",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    password: {
      type: "password",
    },
  },
};
