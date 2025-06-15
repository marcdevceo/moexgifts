"use client";

import { useCartStore } from "@/ui-framework/store/cart-store";
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
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  function onAddItem() {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  }

  return (
    <MainContainer padding="2xl">
      <FlexContainer flexDirection="primary" gap="lg">
        {product.images && product.images[0] && (
          <BlockContainer className="relative aspect-square w-full">
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
            <Button
              onClick={() => removeItem(product.id)}
              variant="outlineMiniLight"
              radius="sm"
            >
              -
            </Button>
            <Caption>{quantity}</Caption>
            <Button onClick={onAddItem} variant="outlineMiniDark" radius="sm">
              +
            </Button>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </MainContainer>
  );
}
