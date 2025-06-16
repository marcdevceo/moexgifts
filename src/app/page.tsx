import { MainContainer } from "@/ui-framework";
import HomeHero from "../components/home/HomeHero";
import MomentHero from "../components/home/MomentHero";

export default async function Home() {
  return (
    <MainContainer>
      <HomeHero />
      <MomentHero />
    </MainContainer>
  );
}
