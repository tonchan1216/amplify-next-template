import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// NextAuthの設定を行う
export const authOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token?.user) {
        session.user.id = token.user.id;
      }
      return session;
    },
  },
  session: {
    // strategy: "jwt", // JWTセッションを使用
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; // GETとPOST両方のリクエストをハンドル
