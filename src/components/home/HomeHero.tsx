import { stripe } from "@/src/lib/stripe";
import {
  BlockContainer,
  Button,
  Caption,
  Card,
  FlexContainer,
  Title,
} from "@/ui-framework";
import Image from "next/image";
import Carousel from "./carousel";

export default async function HomeHero() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 6,
  });

  return (
    <BlockContainer width="full"px="primary" spaceY="lg">
      <Card bg="surface" py="2xl">
        <FlexContainer
          flexDirection="primary"
          alignItems="center"
          justify="around"
          width="full"
        >
          <FlexContainer flexDirection="column" gap="md" alignItems="primary">
            <Title size="subtitle" align="left" weight="bold" className="">
              Welcome to Moments Expressed
            </Title>
            <Caption italic>
              Express your <span className="italic font-semibold">Moments</span> with a gift today!
            </Caption>
            <Button href="/products" variant="thin" radius="full" className="px-4">
              Browse All Products
            </Button>
          </FlexContainer>
          <BlockContainer>
            <Image
              src={products.data[0].images[0]}
              alt="banner image of a product"
              width={200}
              height={200}
              className="rounded-full"
            />
          </BlockContainer>
        </FlexContainer>
      </Card>
      <Carousel products={products.data} />
    </BlockContainer>
  );
}
