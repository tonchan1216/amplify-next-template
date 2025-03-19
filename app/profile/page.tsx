"use client";

import { Authenticator, View, Heading } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs);
import { useEffect, useState } from "react";
import { getCurrentUser } from 'aws-amplify/auth';
import ProfileCard from "./ProfileCard"

export default function MyPage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async() => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        console.log("Current user:", currentUser);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    })();
  }, []);

  return (
    <View overflow="hidden" backgroundColor="rgba(255,255,255,1)" padding="25px 30px">

      <Heading level={1} fontWeight="700">My Page</Heading>
      <ProfileCard userinfo={user}></ProfileCard>

    </View>
  );
}
