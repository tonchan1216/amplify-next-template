/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import NavBarHeader from "./NavBarHeader";
import SideBar from "./SideBar";
import {
  Button,
  Divider,
  Flex,
  SwitchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function SettingsPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="855px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SettingsPage")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="1440px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Settings Page")}
      >
        <NavBarHeader
          display="flex"
          gap="40px"
          direction="row"
          width="1440px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
          padding="24px 32px 24px 32px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "NavBarHeader")}
        ></NavBarHeader>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "main")}
        >
          <SideBar
            display="flex"
            gap="10px"
            direction="row"
            width="385px"
            height="762px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="32px 0px 32px 0px"
            {...getOverrideProps(overrides, "SideBar")}
          ></SideBar>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="32px 32px 32px 32px"
            {...getOverrideProps(overrides, "Frame 4373")}
          >
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="32px 0px 12px 0px"
              {...getOverrideProps(overrides, "header48522784")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Profile"
                {...getOverrideProps(overrides, "Profile")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="This info is displayed on your public profile"
                {...getOverrideProps(
                  overrides,
                  "This info is displayed on your public profile"
                )}
              ></Text>
            </Flex>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider48522787")}
            ></Divider>
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "DataRow48522788")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="300px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Full name"
                {...getOverrideProps(overrides, "Full name")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Wesley Peck"
                {...getOverrideProps(overrides, "Wesley Peck")}
              ></Text>
              <Button
                width="unset"
                height="unset"
                shrink="0"
                size="small"
                isDisabled={false}
                variation="link"
                children="Edit"
                {...getOverrideProps(overrides, "Button48522791")}
              ></Button>
            </Flex>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider48522792")}
            ></Divider>
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "DataRow48522793")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="300px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Title"
                {...getOverrideProps(overrides, "Title")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Product Manager"
                {...getOverrideProps(overrides, "Product Manager")}
              ></Text>
              <Button
                width="unset"
                height="unset"
                shrink="0"
                size="small"
                isDisabled={false}
                variation="link"
                children="Edit"
                {...getOverrideProps(overrides, "Button48522796")}
              ></Button>
            </Flex>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider48522797")}
            ></Divider>
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "DataRow48522798")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="300px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Company"
                {...getOverrideProps(overrides, "Company")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="AWS"
                {...getOverrideProps(overrides, "AWS")}
              ></Text>
              <Button
                width="unset"
                height="unset"
                shrink="0"
                size="small"
                isDisabled={false}
                variation="link"
                children="Edit"
                {...getOverrideProps(overrides, "Button48522801")}
              ></Button>
            </Flex>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider48522802")}
            ></Divider>
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "DataRow48522803")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="300px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Email address"
                {...getOverrideProps(overrides, "Email address")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="wpeck@aws.com"
                {...getOverrideProps(overrides, "wpeck@aws.com")}
              ></Text>
              <Button
                width="unset"
                height="unset"
                shrink="0"
                size="small"
                isDisabled={false}
                variation="link"
                children="Edit"
                {...getOverrideProps(overrides, "Button48522806")}
              ></Button>
            </Flex>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider48522807")}
            ></Divider>
            <Flex
              gap="8px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="32px 0px 12px 0px"
              {...getOverrideProps(overrides, "header48522808")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Sync"
                {...getOverrideProps(overrides, "Sync")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="How you want to sync data across platforms"
                {...getOverrideProps(
                  overrides,
                  "How you want to sync data across platforms"
                )}
              ></Text>
            </Flex>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider48522811")}
            ></Divider>
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "DataRow48522812")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="300px"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Automatic syncing"
                {...getOverrideProps(overrides, "Automatic syncing")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children=" "
                {...getOverrideProps(overrides, "Text")}
              ></Text>
              <SwitchField
                width="unset"
                height="unset"
                shrink="0"
                label="On"
                size="default"
                defaultChecked={true}
                isDisabled={false}
                labelPosition="start"
                {...getOverrideProps(overrides, "SwitchField")}
              ></SwitchField>
            </Flex>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider48522816")}
            ></Divider>
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="32px 0px 0px 0px"
              {...getOverrideProps(overrides, "Delete Account")}
            >
              <Flex
                gap="8px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "header48522818")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="600"
                  color="rgba(13,26,38,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Delete account"
                  {...getOverrideProps(overrides, "Delete account")}
                ></Text>
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(92,102,112,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Not happy with the product? Delete your account and you'll never hear from us again."
                  {...getOverrideProps(
                    overrides,
                    "Not happy with the product? Delete your account and you'll never hear from us again."
                  )}
                ></Text>
              </Flex>
              <Button
                width="unset"
                height="unset"
                shrink="0"
                size="default"
                isDisabled={false}
                variation="warning"
                children="Yes, delete my account"
                {...getOverrideProps(overrides, "Button48522821")}
              ></Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
