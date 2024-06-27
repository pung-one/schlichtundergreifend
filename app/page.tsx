import { Food } from "@/components/Food";
import { Landing } from "@/components/Landing";
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
  return <Landing />;
}
