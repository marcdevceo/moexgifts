import ProductList from "@/src/components/products/ProductsList";
import { stripe } from "@/src/lib/stripe";
import { MainContainer, MarqueeBanner, Title } from "@/ui-framework";

export default async function ProductPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 12,
  });

  return (
    <MainContainer>
      <MarqueeBanner
            message="🚨🚨🚨 This is a DEMOE SITE ... Add Products to test out the checkout 🚨🚨🚨"
            speed={15}
            color="dark"
            py="md"
            fontSize="xl"
            className="mt-3"
          />
      <Title size="subtitle">All Products</Title>
      <ProductList products={products.data} />
    </MainContainer>
  );
}
