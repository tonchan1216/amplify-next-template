/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Hero() {
  return (
    <Flex
      gap="0"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
    >
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
      >
        <Flex
          gap="24px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
        >
          <Flex
            gap="16px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
          >
            <Text
              fontSize="16px"
              fontWeight="700"
              color="rgba(64,170,191,1)"
              lineHeight="24px"
              textAlign="center"
              children="Full stack"
            ></Text>
            <Text
              fontSize="24px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="center"
              children="Build full-stack web and mobile apps in hours. Easy to start, easy to scale"
            ></Text>
            <Text
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
              children="AWS Amplify is a complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise needed."
            ></Text>
          </Flex>
          <Button size="large" variation="primary">Get started</Button>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        alignSelf="stretch"
      >
        <Image
          width="720px"
          height="50px"
          display="block"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZ1bGwlMjBzdGFjayUyMHdlYiUyMGFwcHxlbnwwfHx8fDE2OTY5NTQ3NzE&ixlib=rb-4.0.3&q=80&w=1080"
          alt="hero"
        ></Image>
      </Flex>
    </Flex>
  );
}
