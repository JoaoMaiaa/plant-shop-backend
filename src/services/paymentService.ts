const Stripe = require("stripe");
const dotenv = require("dotenv");

import { validationCartItems } from "use-shopping-cart/utilities";

import { Product } from "../models/Product";

const getProduct = async () => {
  return await Product.findAll();
};

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2020-08-27",
});

const paymentService = {
  payment: async (productData) => {
    const lineItem = validationCartItems(getProduct, productData);
    return;
  },
};
