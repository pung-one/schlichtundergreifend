import { getServerSession } from "next-auth/next";
import clientPromise from "@/db/mongodb";
import { authOptions } from "@/utils/authOptions";
import { ObjectId } from "mongodb";

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (session) {
      const request = await req.json();

      const client = await clientPromise;
      const database = client.db("schlichtergreifend");
      const upcomingEvents = database.collection("upcomingEvents");

      await upcomingEvents.insertOne(request);

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

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (session) {
      const request = await req.json();

      const client = await clientPromise;
      const database = client.db("schlichtergreifend");
      const upcomingEvents = database.collection("upcomingEvents");

      const objectId = new ObjectId(request);

      await upcomingEvents.findOneAndDelete({
        _id: objectId,
      });

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
