"use client";

import {
  BlockContainer,
  BodyText,
  Button,
  Caption,
  Card,
  FlexContainer,
  Form,
  Subtitle,
  useCartStore,
} from "@/ui-framework";

export default function OrderSummary() {
  const { items, removeItem, addItem } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!items.length) return <BodyText>Your Cart is Empty</BodyText>;

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
      <Form bg="none" title=" " buttonTitle="Proceed to Payment" />
    </FlexContainer>
  );
}
