import { Food } from "@/components/Food";
import { Hero } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { Together } from "@/components/Together";

export default function Home() {
  return (
    <PageContainer>
      <Hero />

      <Food />

      <Together />
    </PageContainer>
  );
}
