import { Popup } from "@/components/Popup";
import clientPromise from "@/db/mongodb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "popup | schlicht+ergreifend",
  metadataBase: new URL("https://www.schlichtplusergreifend.de/popup/"),
  alternates: {
    canonical: "/",
  },
  description: "schlicht+ergreifend popup dinner",
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

export default async function PopupPage() {
  let upcomingEvents;
  try {
    const client = await clientPromise;
    const database = client.db("schlichtergreifend");
    const upcomingEventsCollection = database.collection("upcomingEvents");
    upcomingEvents = await upcomingEventsCollection.findOne(
      {},
      { projection: { _id: 0 } }
    );
  } catch (e) {
    console.error(e);
  }

  return <Popup events={upcomingEvents?.events} />;
}
