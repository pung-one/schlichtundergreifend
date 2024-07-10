import { About } from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "zu uns | schlicht+ergreifend",
  metadataBase: new URL("https://www.schlichtplusergreifend.de/about/"),
  alternates: {
    canonical: "/",
  },
  description: "kontakt zu schlicht+ergreifend dining",
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

export default async function AboutPage() {
  return <About />;
}
