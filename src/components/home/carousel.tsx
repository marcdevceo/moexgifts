"use client";

import { BlockContainer, BodyText, Card, FlexContainer } from "@/ui-framework";
import Image from "next/image";
import { useEffect, useState } from "react";
import Stripe from "stripe";

interface Props {
  products: Stripe.Product[];
}

export default function Carousel({ products }: Props) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="border-gray-300 overflow-hidden relative">
      {currentProduct.images && currentProduct.images[0] && (
        <BlockContainer height="7xl" width="full" className="relative">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            fill
            style={{ objectFit: "cover" }}
            className="transition-opacity duration-500 ease-in-out"
          />
        </BlockContainer>
      )}
      <FlexContainer
        mb="md"
        flexDirection="column"
        alignItems="center"
        justify="center"
        className="absolute inset-0"
      >
        <BodyText weight="bold" color="light">
          {currentProduct.name}
        </BodyText>
        {price && price.unit_amount && (
          <BodyText color="light">
            ${(price.unit_amount / 100).toFixed(2)}
          </BodyText>
        )}
      </FlexContainer>
    </Card>
  );
}
