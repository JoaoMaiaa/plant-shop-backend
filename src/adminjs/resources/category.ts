import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
  navigation: "Categorias",
  editProperties: ["name"],
  filterProperties: ["name", "createdAt", "updatedAt"],
  listProperties: ["name", "createdAt", "updatedAt"],
  showProperties: ["name", "createdAt", "updatedAt"],
};
