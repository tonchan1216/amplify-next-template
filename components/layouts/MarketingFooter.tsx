"use client";

import { Button, Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
import LogoWithText from "@/components/elements/LogoWithText";

function FooterCategory({category}: {category: string}) {
  return (
    <Flex
      gap="8px"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
    <Text
      fontFamily="Inter"
      fontSize="16px"
      fontWeight="600"
      color="rgba(48,64,80,1)"
      lineHeight="24px"
      textAlign="left"
      display="block"
      letterSpacing="0.01px"
      width="272px"
    >{category}</Text>

    <Text
      fontFamily="Inter"
      fontSize="16px"
      fontWeight="400"
      color="rgba(48,64,80,1)"
      lineHeight="24px"
      textAlign="left"
      display="block"
      letterSpacing="0.01px"
      width="272px"
    >Libraries</Text>
    <Text
      fontFamily="Inter"
      fontSize="16px"
      fontWeight="400"
      color="rgba(48,64,80,1)"
      lineHeight="24px"
      textAlign="left"
      display="block"
      letterSpacing="0.01px"
      width="272px"
    >CLI</Text>
    <Text
      fontFamily="Inter"
      fontSize="16px"
      fontWeight="400"
      color="rgba(48,64,80,1)"
      lineHeight="24px"
      textAlign="left"
      display="block"
      letterSpacing="0.01px"
      width="272px"
    >Studio</Text>
    <Text
      fontFamily="Inter"
      fontSize="16px"
      fontWeight="400"
      color="rgba(48,64,80,1)"
      lineHeight="24px"
      textAlign="left"
      display="block"
      letterSpacing="0.01px"
      width="272px"
    >Hosting</Text>
  </Flex>

  )
}

export default function MarketingFooter() {
  return (
    <Flex
      gap="32px"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="40px 40px 40px 40px"
      backgroundColor="rgba(250,250,250,1)"
    >
      <Flex
        gap="16px"
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        alignSelf="stretch"
      >
        <Flex
          gap="10px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="600"
            color="rgba(48,64,80,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            width="471px"
          >Sign up for our newsletter</Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            width="471px"
          >No spam. We promise.</Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <TextField
            width="300px"
            placeholder="Your email"
            label="Your email"
            isDisabled={false}
            labelHidden={true}
          ></TextField>
          <Button isDisabled={false}>Subscribe</Button>
        </Flex>
      </Flex>
      <Divider
        height="1px"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
      ></Divider>
      <Flex
        gap="24px"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignSelf="stretch"
      >
        <FooterCategory category="Products"></FooterCategory>
        <FooterCategory category="Resources"></FooterCategory>
        <FooterCategory category="Company"></FooterCategory>
      </Flex>
      <Divider
        height="1px"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
      ></Divider>
      <Flex
        gap="0"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
      >
        <LogoWithText></LogoWithText>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(102,112,133,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
        >© 2023 AWS Amplify UI. All rights reserved.</Text>
      </Flex>
    </Flex>
  );
}
