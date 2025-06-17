import OrderSummary from "@/src/components/checkout/OrderSummary";
import {
  BlockContainer,
  BodyText,
  MainContainer,
  MarqueeBanner,
  Title,
} from "@/ui-framework";

export default function CheckoutPage() {
  return (
    <MainContainer px="primary">
      <MarqueeBanner message="🚨🚨🚨 DEMO Site, DO NOT USE a real Credit/Debit Card 🚨🚨🚨" />
      <BlockContainer bg="redDark" py="lg" width={"full"} borderRadius="xl" className="shadow-xl shadow-red-300">
        <BodyText align="center" color="light">
          <span className="font-bold">USE</span> the below{" "}
          <span className="font-bold">TEST CARD</span> to checkout:
          <br />
          <span className="font-bold">
            💳 4242 4242 4242 4242 exp: 5/28 cvv: 456
          </span>
        </BodyText>
      </BlockContainer>
      <BlockContainer mt="lg" width={"full"}>
        <Title>Checkout</Title>
      </BlockContainer>
      <OrderSummary />
    </MainContainer>
  );
}
