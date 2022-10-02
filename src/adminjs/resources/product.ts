import { ResourceOptions } from "adminjs";

export const productResourceOptions: ResourceOptions = {
  navigation: "Produtos",
  editProperties: ["name", "description", "categoryId", "price", "priceCard"],
  filterProperties: ["name", "price", "createdAt", "updatedAt"],
  listProperties: [
    "name",
    "price",
    "categoryId",
    "price",
    "priceCard",
    "creatdAt",
    "updatedAt",
  ],
  showProperties: [
    "name",
    "price",
    "description",
    "categoryId",
    "price",
    "priceCard",
    "creatdAt",
    "updatedAt",
  ],
};
