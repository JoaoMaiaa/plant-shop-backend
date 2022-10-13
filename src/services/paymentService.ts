import Stripe from "stripe";
const dotenv = require("dotenv");

dotenv.config();

export interface ProductTypes {
  productData: {
    id: number;
    name: string;
    img: string;
    price: number;
    priceCard: string;
    price_data: {};
    product_data: {};
    category: string;
    currency: string;
    description: string;
    formattedPrice: string;
    formattedValue: string;
    quantity: number;
    sku: string;
    star: number;
    value: number;
  };
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-08-01",
});

export const paymentService = {
  payment: async ({ productData }: ProductTypes) => {
    try {
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
    }
  },
};
