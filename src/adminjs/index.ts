import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import bcrypt from "bcrypt";
const dotenv = require("dotenv");
dotenv.config();

import { sequelize } from "../database";
import { adminJsResource } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
// import { Consumer } from "../models/Consumer";
import { Consumer, ConsumerInstance } from "../models/Consumer";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  locale: locale,
  dashboard: dashboardOptions,
  resources: adminJsResource,
  branding: brandingOptions,
});

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  {
    authenticate: async (email, password) => {
      const consumer = await Consumer.findOne({
        where: { email },
      });

      if (consumer) {
        const matched = await bcrypt.compare(password, consumer.password);

        if (matched) {
          return consumer;
        }
      }
      return false;
    },
    cookiePassword: `${process.env.COOKIE}`,
  },
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
);
