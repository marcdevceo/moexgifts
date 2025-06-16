import { MainContainer } from "@/ui-framework";
import HomeHero from "../components/home/HomeHero";
import ScrollingPromo from "../components/home/ScrollingPromo";

export default async function Home() {
  return (
    <MainContainer bg="america">
      <ScrollingPromo />
      <HomeHero />
    </MainContainer>
  );
}



