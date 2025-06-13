import {
  BodyText,
  Caption,
  FlexContainer,
  MainContainer,
  Subtitle,
  Title,
} from "@/ui-framework";

export default function Home() {
  return (
    <MainContainer>
      <Title>Im the Title Component</Title>
      <Subtitle>Im the Subtitle Component</Subtitle>
      <BodyText>Im the BodyText Component</BodyText>
      <Caption>Im the Caption Component</Caption>
      <FlexContainer>
        <BodyText>We are all in the Flex Container</BodyText>
        <Title>Im the Title Component</Title>
        <Subtitle>Im the Subtitle Component</Subtitle>
        <BodyText>Im the BodyText Component</BodyText>
        <Caption>Im the Caption Component</Caption>
      </FlexContainer>
    </MainContainer>
  );
}
