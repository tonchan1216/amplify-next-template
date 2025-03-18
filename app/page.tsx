"use client";

import { Flex, Heading, View } from '@aws-amplify/ui-react';
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import HeroLayout1 from "@/components/elements/HeroLayout1"
import MainForm from "@/components/elements/MainForm"

export default function App() {
  return (
    <View overflow="hidden" backgroundColor="rgba(255,255,255,1)">
      <Flex gap="50px" direction="column" padding="2% 10%">
        <View>
          <Heading
            level={1}
            fontFamily="Inter"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="77.45454406738281px"
            textAlign="left"
            display="block"
            letterSpacing="-1.13px"
            children="HOME"
          ></Heading>
        </View>

        <MainForm></MainForm>

      </Flex>

      <HeroLayout1></HeroLayout1>
    </View>
  );
}
