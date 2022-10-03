import { FeatureType, ResourceOptions } from "adminjs";
import uploadFileFeature from "@adminjs/upload";
import path from "path";

export const productResourceOptions: ResourceOptions = {
  navigation: "Produtos",
  editProperties: [
    "name",
    "description",
    "categoryId",
    "price",
    "priceCard",
    "uploadImage",
  ],
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
    "imageUrl",
    "creatdAt",
    "updatedAt",
  ],
};

export const productResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, "../../../public"),
      },
    },
    properties: {
      key: "imageUrl",
      file: "uploadImage",
    },
    uploadPath: (record, filename) =>
      `images/product${record.get("id")}/${filename}`,
  }),
];
