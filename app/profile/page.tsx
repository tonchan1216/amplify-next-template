"use client";

import MarketingFooter from "@/components/layouts/MarketingFooter"
import NavBarHeader from "@/components/layouts/NavBarHeader"
import ProfileCard from "@/components/elements/ProfileCard"

import { Authenticator, Link, View, Flex, Text } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
Amplify.configure(outputs);

export default function MyPage() {
    return (
        <Authenticator>
        {({ signOut, user }) => (
          <View overflow="hidden" backgroundColor="rgba(255,255,255,1)" padding="25px 30px">

            <Text
              fontFamily="Inter"
              fontSize="64px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="77.45454406738281px"
              textAlign="left"
              display="block"
              letterSpacing="-1.13px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="My Page"
            ></Text>

          <ProfileCard></ProfileCard>

        </View>
        )}
        </Authenticator>
      );
}
