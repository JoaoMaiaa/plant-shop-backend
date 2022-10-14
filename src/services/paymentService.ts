import Stripe from "stripe";
const dotenv = require("dotenv");

dotenv.config();

//@ts-ignore
import { validateCartItems } from "use-shopping-cart/utilities";

export interface ProductTypes {
  productData: {
    id: number;
    name: string;
    img: string[];
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
    const product = await stripe.products.create({
      name: productData.name,
      description: productData.description,
      images: productData.img,
    });
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: productData.price,
      currency: productData.currency,
    });

    try {
      const session = await stripe.checkout.sessions.create({
        success_url: "http://localhost:3000",
        cancel_url: "http://localhost:3000",
        line_items: [{ price: `${price.id}`, quantity: productData.quantity }],
        mode: "payment",
      });
      return session;
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
    }
  },
};
