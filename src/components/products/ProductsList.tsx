import { BlockContainer, FlexContainer, GridContainer, MainContainer } from "@/ui-framework";
import Stripe from "stripe";
import ProductCard from "./ProductCard";

interface Props {
  products: Stripe.Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <MainContainer width="full" gap="2xl">
      <FlexContainer flexDirection="column" width="full" alignItems="center">
        <BlockContainer bg="accent" width={400} padding="sm">
          <input
            type="text"
            placeholder="Search products..."
            className="text-gray-700"
          />
        </BlockContainer>
      </FlexContainer>
      <GridContainer placeItems="center" width="full">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </GridContainer>
    </MainContainer>
  );
}
