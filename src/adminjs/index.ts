import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResource } from "./resources";
import { locale } from "./locale";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  locale: locale,
  resources: adminJsResource,
  branding: {
    companyName: "Plant Shop",
    theme: {
      colors: {
        primary100: "#48BB78",
        primary80: "#68D391",
        primary60: "#9AE6B4",
        primary40: "#C6F6D5",
        primary20: "#F0FFF4",
        grey100: "#151515",
        grey80: "#333333",
        grey60: "#4d4d4d",
        grey40: "#666666",
        grey20: "#dddddd",
        filterBg: "#333333",
        accent: "#151515",
        hoverBg: "#68D391",
      },
    },
  },
});

export const adminJsRouter = AdminJSExpress.buildRouter(adminJs);
