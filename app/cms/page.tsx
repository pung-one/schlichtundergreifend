import { getServerSession } from "next-auth/next";
import clientPromise from "@/db/mongodb";
import { authOptions } from "@/utils/authOptions";
import { UpcomingEventsEditor } from "@/components/cms/UpcomingEventsEditor";
import { Login } from "@/components/cms/Login";

export type Event = {
  date: string;
  text: string;
};

export default async function CmsPage() {
  const session = await getServerSession(authOptions);

  let upcomingEvents: any;

  if (session) {
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

    return <UpcomingEventsEditor events={upcomingEvents.events} />;
  } else {
    return <Login />;
  }
}
