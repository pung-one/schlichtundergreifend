import { getServerSession } from "next-auth/next";
import clientPromise from "@/db/mongodb";
import { authOptions } from "@/utils/authOptions";

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (session) {
      const request = await req.json();

      const client = await clientPromise;
      const database = client.db("schlichtergreifend");
      const upcomingEvents = database.collection("upcomingEvents");

      await upcomingEvents.findOneAndReplace({}, { events: request });

      return new Response("Info updated", { status: 200 });
    } else {
      return new Response("Go away. Do something meaningful.", {
        status: 401,
      });
    }
  } catch (e) {
    console.error(e);
    return new Response("Internal Server Error", { status: 500 });
  }
}
