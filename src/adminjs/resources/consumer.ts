import { ResourceOptions } from "adminjs";

export const ConsumerResourceOptions: ResourceOptions = {
  navigation: "Cosumidores",
  editProperties: ["name", "lastName", "uploadImg", "email", "password"],
  filterProperties: ["name", "lastName", "email", "createdAt", "updatedAt"],
  listProperties: ["name", "lastName", "email"],
  showProperties: [
    "name",
    "lastName",
    "uploadImg",
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
