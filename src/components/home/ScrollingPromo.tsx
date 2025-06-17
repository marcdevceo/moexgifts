import { MarqueeBanner } from "@/ui-framework";

export default function ScrollingPromo() {
  return (
    <MarqueeBanner
      message="🎇 Celebrate the 4th | 🔥 20% Off All Orders • Today Only 🇺🇸"
      speed={15}
      color="dark"
      py="md"
      fontSize="xl"
      className="mt-3"
    />
  );
}
