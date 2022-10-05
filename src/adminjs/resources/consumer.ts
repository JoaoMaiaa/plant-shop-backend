import { ResourceOptions, FeatureType } from "adminjs";
import uploadFileFeature from "@adminjs/upload";
import path from "path";

export const consumerResourceOptions: ResourceOptions = {
  navigation: "Cosumidores",
  editProperties: ["name", "lastName", "uploadFile", "email", "password"],
  filterProperties: ["name", "lastName", "email", "createdAt", "updatedAt"],
  listProperties: ["name", "lastName", "email"],
  showProperties: [
    "name",
    "lastName",
    "email",
    "imgUrl",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    password: {
      type: "password",
    },    
  },
};

export const consumerResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, "../../../public"),
      },
    },
    properties: {
      file: "uploadFile",
      key: "imgUrl",
    },
    uploadPath: (record, filename) =>
      `images/consumers-${record.get("id")}/${filename}`,
  }),
];
