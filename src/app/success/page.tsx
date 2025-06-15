"use client";

import {
  BodyText,
  MainContainer,
  Subtitle,
  useCartStore,
} from "@/ui-framework";
import Link from "next/link";
import { useEffect } from "react";

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <MainContainer alignContent="center" width={"full"} padding="2xl">
      <Subtitle align="center">Payment Successful!</Subtitle>
      <BodyText align="center" className="w-full">
        Thank you for your purchase. Your order is being processed!
      </BodyText>
      <Link
        href={"/products"}
        className="text-lg text-blue-600 text-center w-full"
      >
        Continue Shopping
      </Link>
    </MainContainer>
  );
}
