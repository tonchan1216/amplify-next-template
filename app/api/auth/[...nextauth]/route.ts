import NextAuth from "next-auth";

// NextAuthの設定を行う
const authOptions = {
  providers: [],
  secret: "3+p3gv+r+lFUnEXQ9hdf/83eXFx/gQ2lI03LJA0V/9k="
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; // GETとPOST両方のリクエストをハンドル
