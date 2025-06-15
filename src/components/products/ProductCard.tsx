import { BlockContainer, BodyText, Button, Card } from "@/ui-framework";
import Link from "next/link";
import Image from "next/image";
import Stripe from "stripe";

interface Props {
  product: Stripe.Product;
}

export default function ProductCard({ product }: Props) {
  const price = product.default_price as Stripe.Price;

  return (
    <Card className="aspect-[3/4] h-full transition-transform duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-500">
      {product.images && product.images[0] && (
        <BlockContainer
          height="7xl"
          width="full"
          className="relative aspect-square"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="transition-opacity duration-500 ease-in-out"
          />
        </BlockContainer>
      )}
      <BlockContainer padding="sm">
        <BodyText size="sm" weight="bold">
          {product.name}
        </BodyText>
        {/* <Caption italic>{product.description}</Caption> */}
        {price && price.unit_amount && (
          <BodyText size="sm">${(price.unit_amount / 100).toFixed(2)}</BodyText>
        )}
      </BlockContainer>
      <BlockContainer px="sm">
        <Link href={`/products/${product.id}`}>
          <Button variant="thin" className="w-full">
            View Details
          </Button>
        </Link>
      </BlockContainer>
    </Card>
  );
}
