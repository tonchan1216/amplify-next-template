"use client";

import { Flex, Heading, View } from '@aws-amplify/ui-react';
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import Hero from "@/components/elements/Hero"
import MainForm from "@/components/elements/MainForm"

export default function App() {
  return (
    <View overflow="hidden" backgroundColor="rgba(255,255,255,1)">
      <Flex gap="50px" direction="column" padding="2% 10%">
        <View>
          <Heading
            level={1}
            fontWeight="700"
            lineHeight="77.45454406738281px"
            textAlign="left"
            display="block"
            letterSpacing="-1.13px"
          >HOME</Heading>
        </View>

        <MainForm></MainForm>

      </Flex>

      <Hero></Hero>
    </View>
  );
}
