import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/db/mongodb";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Passwort", type: "password" },
      },
      async authorize(credentials, req) {
        const client = await clientPromise;

        const bcrypt = require("bcrypt");

        const database = client.db("schlichtergreifend");

        const users = database.collection("users");

        const dbUser = await users.findOne({
          name: credentials?.username,
        });

        if (dbUser) {
          const match = await bcrypt.compare(
            credentials?.password,
            dbUser.password
          );

          if (match) {
            const user = {
              name: dbUser.name,
              role: dbUser.role,
              id: dbUser._id.toString(),
            };

            return user;
          } else {
            return null;
          }
        }
        return null;
      },
    }),
  ],
  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 24 * 60 * 60, // 1 day
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.user = { name: user.name, role: user.role };
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user = token.user;
      return session;
    },
  },
};
