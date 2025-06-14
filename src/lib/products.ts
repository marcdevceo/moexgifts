import { stripe } from "./stripe";

export default async function Products() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
}