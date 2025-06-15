import { stripe } from "@/src/lib/stripe";
import ProductDetail from "@/src/components/products/ProductDetail";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic"; 

export default async function ProductPage(props: { params: { id: string } }) {
  const { id } = await props.params; 

  try {
    const product = await stripe.products.retrieve(id, {
      expand: ["default_price"],
    });

    if (!product) return notFound();

    const plainProduct = JSON.parse(JSON.stringify(product));

    return <ProductDetail product={plainProduct} />;
  } catch (error) {
    console.error("Error fetching product:", error);
    return notFound();
  }
}
