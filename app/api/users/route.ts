import { getServerSession } from "next-auth/next";
import clientPromise from "@/db/mongodb";
import { createPassword } from "@/utils/createNameAndPw";
import { authOptions } from "@/utils/authOptions";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    const bcrypt = require("bcrypt");

    if (!session || session.user.role !== "super-admin") {
      return new Response("Go away. Do something meaningful.", {
        status: 401,
      });
    }
    const request = await req.json();

    const client = await clientPromise;
    const database = client.db("redesign-dings");
    const collection = database.collection("users");

    const existingUsers = await collection
      .find({}, { projection: { _id: 0, password: 0, isPublished: 0 } })
      .toArray();

    if (existingUsers.some((user) => user.name === request)) {
      return new Response("This name is already taken.", { status: 409 });
    } else {
      const user = {
        name: request,
        password: createPassword(),
        isPublished: false,
        role: "admin",
      };

      const saltedUser = {
        ...user,
        password: await bcrypt.hashSync(user.password, 10),
      };

      await collection.insertOne(saltedUser);

      return new Response(JSON.stringify(user), { status: 200 });
    }
  } catch (e) {
    console.error(e);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "super-admin") {
      return new Response("Go away. Do something meaningful.", {
        status: 401,
      });
    }
    const request = await req.json();

    const client = await clientPromise;
    const database = client.db("redesign-dings");
    const collection = database.collection("users");

    await collection.deleteOne({ name: request });

    return new Response("User deleted", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "super-admin") {
      return new Response("Go away. Do something meaningful.", {
        status: 401,
      });
    }
    const request = await req.json();

    const client = await clientPromise;
    const database = client.db("redesign-dings");
    const collection = database.collection("users");

    await collection.findOneAndUpdate(
      { name: request },
      { $set: { isPublished: true } }
    );

    return new Response("User updated", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("Internal Server Error", { status: 500 });
  }
}
