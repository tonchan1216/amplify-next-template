/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "@/components/elements/MyIcon"

export default function ProfileCard() {
  return (
    <Flex
      gap="24px"
      direction="column"
      width="320px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
    >
      <Image
        width="160px"
        height="160px"
        display="block"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Melinda Marcus"
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Design Engineer at Cloth Studios"
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
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
          type="group"
        ></MyIcon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="99 Followers"
        ></Text>
      </Flex>
      <Button
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="View Profile"
      ></Button>
    </Flex>
  );
}
