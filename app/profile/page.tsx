"use client";

import { Authenticator, Link } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs);

export default function MyPage() {
    return (
        <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
            <p><Link href="/">TOP</Link></p>
          </main>
        )}
        </Authenticator>
      );
}
