import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  // Providers defined for NextAuth processing
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // User information returned from actions
  callbacks: {
    async signIn({ user, account }) {
      // If a user signs in with google then store their user data within our database.
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectMongoDB();

          // Check the database to see if the user already exists
          const userExists = await User.findOne({ email });

          // If the user doesn't already exist then store them in our database
          if (!userExists) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });

            // Sign in the user if data successfully entered into the database
            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      // Returning the user at any point in this process signs in the user
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
