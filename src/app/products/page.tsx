import ProductList from "@/src/components/products/ProductsList";
import { stripe } from "@/src/lib/stripe";
import { MainContainer, Title } from "@/ui-framework";

export default async function ProductPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <MainContainer>
      <Title>All Products</Title>
      <ProductList products={products.data} />
    </MainContainer>
  );
}
