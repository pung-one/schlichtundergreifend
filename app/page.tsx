import { Hero } from "@/components/Hero";
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
    </>
  );
}
