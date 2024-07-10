import { Landing } from "@/components/Landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "home | schlicht+ergreifend",
  metadataBase: new URL("https://www.schlichtplusergreifend.de/"),
  alternates: {
    canonical: "/",
  },
  description: "down to earth fine dining",
  category: "food",
  authors: [
    { name: "Jules Massey" },
    { name: "Rosa Krieg" },
    { name: "Paul Ungerer", url: "https://github.com/pung-one" },
  ],
  keywords: [
    "schlicht und ergreifend",
    "schlicht und ergreifend dining",
    "schlicht plus ergreifend",
    "schlicht plus ergreifend dining",
    "schlicht + ergreifend",
    "schlicht + ergreifend dining",
    "schlicht",
    "ergreifend",
    "dining",
    "fine dining",
    "hamburg",
    "popup dinner",
    "popup",
    "catering",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function Home() {
  return <Landing />;
}
