import { BlockContainer, BodyText, Card } from "@/ui-framework";
import Link from "next/link";
import Image from "next/image";
import Stripe from "stripe";

interface Props {
  product: Stripe.Product;
}

export default function ProductCard({ product }: Props) {
  const price = product.default_price as Stripe.Price;
  return (
    <Link href="#">
      <Card className="aspect-[3/4] h-full">
        {product.images && product.images[0] && (
          <BlockContainer height="7xl" width="full" className="relative aspect-square">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="transition-opacity duration-500 ease-in-out"
            />
          </BlockContainer>
        )}
        <BlockContainer padding="md">
          <BodyText size="md" weight="bold">{product.name}</BodyText>
          {/* <Caption italic>{product.description}</Caption> */}
          {price && price.unit_amount && (
            <BodyText size="base">${(price.unit_amount / 100).toFixed(2)}</BodyText>
          )}
        </BlockContainer>
      </Card>
    </Link>
  );
}
