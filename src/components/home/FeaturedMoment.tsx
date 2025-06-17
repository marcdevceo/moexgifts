import { featuredList } from "@/src/data/featuredlist";
import {
  BlockContainer,
  BodyText,
  Card,
  FlexContainer,
  Subtitle,
} from "@/ui-framework";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedMoment() {
  return (
    <FlexContainer
      bg="none"
      flexDirection="column"
      px="2xl"
      mb="2xl"
      width={"full"}
    >
      <BlockContainer my="lg" width={"full"}>
        <Subtitle align="center" color="dark">
          How Will You Express This Moment?
        </Subtitle>
      </BlockContainer>
      <FlexContainer flexDirection="primary" width={"full"}>
        {featuredList.map((list) => (
          <Card bg={list.bgColor} padding="primary" key={list.label}>
            <FlexContainer flexDirection="column" alignItems="center">
              <BodyText align="center">{list.label}</BodyText>
              <BodyText>{list.title}</BodyText>
              <Link href={list.url}>
                <Image
                  src={list.image}
                  alt={list.label}
                  width={200}
                  height={200}
                />
              </Link>
            </FlexContainer>
          </Card>
        ))}
      </FlexContainer>
    </FlexContainer>
  );
}
