export const metadata = {
  title: "Skill Forge",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Features from "@/components/features";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
    </>
  );
}
