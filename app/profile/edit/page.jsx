"use client";

import * as React from "react";
import MyIcon from "@/components/elements/MyIcon"
import { Button, Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
export default function EditProfile() {
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
    >
      <Flex
        gap="24px"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
      >
        <Flex
          gap="16px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Profile"
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            direction="column"
            textDecoration="underline"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload New Image"
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <TextField
            label="Full name"
            placeholder="John Doe"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
          ></TextField>
          <TextField
            label="Location"
            placeholder="Seattle, WA"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
          ></TextField>
          <TextField
            label="Email"
            placeholder="john.doe@awsamplify.com"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
          ></TextField>
        </Flex>
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
        ></Button>
      </Flex>
    </Flex>
  );
}
