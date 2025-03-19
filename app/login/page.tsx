"use client";

import { Authenticator, Link } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs);
import { View, Button } from "@aws-amplify/ui-react";

export default function LoginPage() {
    return (
        <Authenticator>
        {({ signOut, user }) => (
          <View overflow="hidden" backgroundColor="rgba(255,255,255,1)" padding="25px 30px">
            <h1>Hello {user?.username}</h1>
            <Button onClick={signOut}>Sign out</Button>
          </View>
        )}
        </Authenticator>
      );
}
