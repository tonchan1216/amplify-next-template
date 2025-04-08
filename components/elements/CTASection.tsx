/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";

export default function CTASection() {
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      justifyContent="center"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="160px 160px 160px 160px"
      backgroundColor="rgba(255,255,255,1)"
    >
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
      >
        <Flex
          gap="12px"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(191,64,191,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            width="1120px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Newsletter"
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            width="1120px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Stay in touch and never miss an update"
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            width="1120px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Keep up to date on the latest and greatest in the frontend and fullstack community"
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <TextField
            width="300px"
            label="Email address"
            placeholder="Email address"
            isDisabled={false}
            labelHidden={true}
          ></TextField>
          <Button
            isDisabled={false}
            variation="primary"
            children="Sign me up"
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
