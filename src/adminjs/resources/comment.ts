import { ResourceOptions } from "adminjs";

export const commentResourceOptions: ResourceOptions = {
  navigation: "Comentarios",
  editProperties: ["comment"],
  filterProperties: ["productId", "consumerId", "createdAt", "updatedAt"],
  listProperties: ["productId", "consumerId", "comment"],
  showProperties: [
    "comment",
    "consumerId",
    "productId",
    "createdAt",
    "updatedAt",
  ],
};
