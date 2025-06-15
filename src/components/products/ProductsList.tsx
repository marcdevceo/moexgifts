"use client";

import {
  BlockContainer,
  FlexContainer,
  GridContainer,
  MainContainer,
} from "@/ui-framework";
import Stripe from "stripe";
import ProductCard from "./ProductCard";
import { useState } from "react";

interface Props {
  products: Stripe.Product[];
}

export default function ProductList({ products }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProdcucts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;

      return nameMatch || descriptionMatch;
  });

  return (
    <MainContainer width="full" gap="2xl">
      <FlexContainer flexDirection="column" width="full" alignItems="center">
        <BlockContainer bg="accent" borderRadius="full">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products ..."
            className="text-gray-700 rounded-xl p-2 w-74"
          />
        </BlockContainer>
      </FlexContainer>
      <GridContainer placeItems="center" width="full">
        {filteredProdcucts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </GridContainer>
    </MainContainer>
  );
}
