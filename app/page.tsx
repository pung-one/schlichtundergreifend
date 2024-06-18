import { Food } from "@/components/Food";
import { Hero } from "@/components/Hero";
import { NextDates } from "@/components/NextDates";
import { PageContainer } from "@/components/PageContainer";
import { Together } from "@/components/Together";

export default function Home() {
  return (
    <>
      <Hero />

      <hr style={{ margin: "15vh auto", width: "80%" }} />

      <Food />

      <hr style={{ margin: "15vh auto", width: "80%" }} />

      <Together />

      <hr style={{ margin: "15vh auto", width: "80%" }} />

      <NextDates />
    </>
  );
}
