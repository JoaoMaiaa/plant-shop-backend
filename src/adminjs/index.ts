import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";

import { sequelize } from "../database";
import { adminJsResource } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  locale: locale,
  dashboard: dashboardOptions,
  resources: adminJsResource,
  branding: brandingOptions,
});

export const adminJsRouter = AdminJSExpress.buildRouter(adminJs);
