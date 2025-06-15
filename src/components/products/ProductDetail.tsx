import {
  BlockContainer,
  BodyText,
  Button,
  Caption,
  FlexContainer,
  MainContainer,
  Subtitle,
} from "@/ui-framework";
import Image from "next/image";
import Stripe from "stripe";

interface Props {
  product: Stripe.Product;
}

export default function ProductDetail({ product }: Props) {
  const price = product.default_price as Stripe.Price;

  return (
    <MainContainer padding="2xl">
      <FlexContainer flexDirection="primary" gap="lg">
        {product.images && product.images[0] && (
          <BlockContainer
            className="relative aspect-square w-full"
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="transition-opacity duration-500 ease-in-out object-cover rounded-lg"
            />
          </BlockContainer>
        )}
        <FlexContainer flexDirection="column" padding="sm" gap="xl">
          <Subtitle weight="bold" align="left">
            {product.name}
          </Subtitle>
          <BodyText italic>{product.description}</BodyText>
          {price && price.unit_amount && (
            <BodyText weight="semibold">
              ${(price.unit_amount / 100).toFixed(2)}
            </BodyText>
          )}
          <FlexContainer gap="xs" alignItems="center">
            <Button variant="outlineMiniLight" radius="sm">
              {" "}
              -
            </Button>
            <Caption> 0</Caption>
            <Button variant="outlineMiniDark" radius="sm">
              {" "}
              +
            </Button>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </MainContainer>
  );
}
