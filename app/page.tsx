import { Food } from "@/components/Food";
import { Hero } from "@/components/Hero";
import { NextDates } from "@/components/NextDates";
import { PageContainer } from "@/components/PageContainer";
import { Together } from "@/components/Together";

export default function Home() {
  return (
    <>
      <Hero />

      <Food />

      <Together />

      <NextDates />
    </>
  );
}
