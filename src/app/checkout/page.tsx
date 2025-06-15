import OrderSummary from "@/src/components/checkout/OrderSummary";
import { MainContainer, Title } from "@/ui-framework";

export default function CheckoutPage() {
  return (
    <MainContainer px="primary">
      <Title>Checkout</Title>
      <OrderSummary />
    </MainContainer>
  );
}
