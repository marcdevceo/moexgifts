import { MainContainer } from "@/ui-framework";
import HomeHero from "../components/home/HomeHero";
import ScrollingPromo from "../components/home/ScrollingPromo";
import FeaturedMoment from "../components/home/FeaturedMoment";

export default async function Home() {
  return (
    <MainContainer bg="america" padding="none" gap="2xl">
      <ScrollingPromo />
      <HomeHero />
      <FeaturedMoment />
    </MainContainer>
  );
}



