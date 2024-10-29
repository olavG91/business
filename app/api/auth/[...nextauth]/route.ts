import NextAuth from "next-auth";
import { headers } from "next/headers";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };