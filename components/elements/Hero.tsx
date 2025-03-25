import { Button, Flex } from "@/components/elements/UI";
import Image from "next/image";
export default function Hero() {
  return (
    <Flex
      gap="0"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
    >
      <Flex
        gap="10px"
        flexDirection="column"
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
          flexDirection="column"
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
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
          >
            <p
              style={{
              fontSize:"16px",
              fontWeight:"700",
              color:"rgba(64,170,191,1)",
              lineHeight:"24px",
              textAlign:"center",
            }}
            >Full stack</p>
            <p  
              style={{
                fontSize:"24px",
                fontWeight:"600",
                color:"rgba(13,26,38,1)",
                lineHeight:"30px",
                textAlign:"center"
              }}
            >Build full-stack web and mobile apps in hours. Easy to start, easy to scale</p>
            <p
              style={{
                fontSize:"16px",
                fontWeight:"400",
                color:"rgba(48,64,80,1)",
                lineHeight:"24px",
                textAlign:"center"  
              }}
            >AWS Amplify is a complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise needed.</p>
          </Flex>
          <Button size="large" variation="primary">Get started</Button>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        flexDirection="column"
        width="720px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        alignSelf="stretch"
      >
        <Image
          width={720}
          height={50}
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZ1bGwlMjBzdGFjayUyMHdlYiUyMGFwcHxlbnwwfHx8fDE2OTY5NTQ3NzE&ixlib=rb-4.0.3&q=80&w=1080"
          alt="hero"
        />
      </Flex>
    </Flex>
  );
}
