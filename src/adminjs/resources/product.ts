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
    "uploadFile",
  ],
  filterProperties: ["name", "price", "createdAt", "updatedAt"],
  listProperties: [
    "name",
    "price",
    "categoryId",
    "price",
    "priceCard",
    "createdAt",
    "updatedAt",
  ],
  showProperties: [
    "name",
    "price",
    "description",
    "categoryId",
    "price",
    "priceCard",
    "uploadImg",
    "createdAt",
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
      file: "uploadFile",
      key: "uploadImg",
    },
    uploadPath: (record, filename) =>
      `images/product-${record.get("id")}/${filename}`,
  }),
];
