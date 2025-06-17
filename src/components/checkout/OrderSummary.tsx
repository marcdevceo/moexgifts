"use client";

import {
  BlockContainer,
  BodyText,
  Button,
  Caption,
  Card,
  FlexContainer,
  Subtitle,
  useCartStore,
} from "@/ui-framework";

export default function OrderSummary() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ items }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Checkout failed: ${errorText}`);
    }

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // ✅ redirect to Stripe Checkout
    }
  } catch (error) {
    console.error("Checkout error:", error);
    alert("Something went wrong. Please try again.");
  }
};


  if (!items.length)
    return (
      <BodyText align="center" className="w-full mt-5">
        Your Cart is Empty
      </BodyText>
    );

  return (
    <FlexContainer flexDirection="column" alignItems="center" width={"full"}>
      <Card padding="md">
        <Subtitle weight="bold" align="center">
          Order Summary
        </Subtitle>
        {items.map((item) => (
          <FlexContainer
            key={item.id}
            flexDirection="column"
            alignItems="center"
          >
            <FlexContainer flexDirection="column" mb="md" width={"full"}>
              <FlexContainer justify="between" width={"full"}>
                <BodyText weight="semibold">{item.name}</BodyText>
                <BodyText>
                  ${((item.price * item.quantity) / 100).toFixed(2)}
                </BodyText>
              </FlexContainer>
              <FlexContainer gap="xs" alignItems="center">
                <Button
                  onClick={() => removeItem(item.id)}
                  aria-label="Decrease quantity"
                  variant="outlineMiniLight"
                  radius="sm"
                >
                  -
                </Button>
                <Caption>{item.quantity}</Caption>
                <Button
                  onClick={() => addItem({ ...item, quantity: 1 })}
                  aria-label="Increase quantity"
                  variant="outlineMiniDark"
                  radius="sm"
                >
                  +
                </Button>
              </FlexContainer>
              <hr className="border-gray-200 w-full rounded-full" />
            </FlexContainer>
          </FlexContainer>
        ))}

        <BlockContainer padding="sm">
          <BodyText align="right" weight="semibold">
            Total: ${(total / 100).toFixed(2)}
          </BodyText>
        </BlockContainer>
      </Card>
      <FlexContainer justify="between" width={"full"}>
        <Button onClick={handleCheckout}>Proceed to Payment</Button>
        <Button onClick={() => clearCart()}>Clear Cart</Button>
      </FlexContainer>
    </FlexContainer>
  );
}
