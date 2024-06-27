import { Food } from "@/components/Food";
import { Hero } from "@/components/Hero";
import { NextDates } from "@/components/NextDates";
import { Together } from "@/components/Together";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* 
      <hr id="food" style={{ margin: "15vh auto", width: "80%" }} />

      <Food />

      <hr id="together" style={{ margin: "15vh auto", width: "80%" }} />

      <Together />

      <hr id="next-dates" style={{ margin: "15vh auto", width: "80%" }} />

      <NextDates /> */}
    </>
  );
}
