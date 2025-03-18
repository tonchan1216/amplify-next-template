
"use client";

import { Button, Flex, Icon, Text, View, Link } from "@aws-amplify/ui-react";

const BarItem = (props) => {
  return (
    <Link href={props.link}>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        position="relative"
        whiteSpace="pre-wrap"
        children={props.name}
      ></Text>
    </Link>
  )
}


export default function NavBarHeader(props) {
  const { overrides, ...rest } = props;


  return (
    <Flex
      gap="10px"
      direction="row"
      // width="1440px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="16px 32px 16px 32px"
      backgroundColor="rgba(255,255,255,1)"
    >
      <Flex
        gap="32px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <View
          width="34.55px"
          height="30px"
          display="block"
          position="relative"
        >
          <Icon
            width="34.55px"
            height="30px"
            viewBox={{ minX: 0, minY: 0, width: 34.55172348022461, height: 30 }}
            paths={[
              {
                d: "M21.4692 29.7592C21.5476 29.8948 21.6926 29.9784 21.8496 29.9784L25.2666 29.9784C25.6048 29.9784 25.8161 29.6131 25.647 29.3208L13.2346 7.86425C13.0656 7.572 12.6429 7.572 12.4738 7.86425C8.34493 15.0016 4.20619 22.1711 0.0594594 29.3425C-0.109529 29.6348 0.101807 30 0.439898 30L16.4449 30C16.783 30 16.9944 29.6347 16.8253 29.3424L15.1882 26.5124C15.1097 26.3768 14.9647 26.2932 14.8078 26.2932L6.62176 26.2932C6.45269 26.2932 6.34703 26.1106 6.43156 25.9644L12.6625 15.1933C12.7471 15.0472 12.9584 15.0472 13.0429 15.1933L21.4692 29.7592Z",
                fill: "rgba(64,170,191,1)",
                fillRule: "nonzero",
              },
              {
                d: "M15.1924 3.16491C15.1139 3.30055 15.1139 3.46765 15.1924 3.60329L30.3233 29.7592C30.4017 29.8948 30.5468 29.9784 30.7037 29.9784L34.1118 29.9784C34.45 29.9784 34.6613 29.6131 34.4922 29.3208L17.6572 0.219188C17.4882 -0.0730631 17.0655 -0.0730625 16.8964 0.219189L15.1924 3.16491Z",
                fill: "rgba(64,170,191,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
          ></Icon>
        </View>

        <BarItem name="Home" link="/" />
        <BarItem name="Products" link="/" />
        <BarItem name="Pricing" link="/" />
        <BarItem name="Contact" link="/" />
      </Flex>

      <Flex
        gap="8px"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="relative"
      >
        <Link href="/login">
          <Button variation="link" children="Log in"></Button>
        </Link>

        <Link href="/signup">
          <Button variation="primary" children="Sign up"></Button>
        </Link>
      </Flex>
    </Flex>
  );
}
