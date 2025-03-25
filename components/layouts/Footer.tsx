import { Flex, Divider } from "../elements/UI";
import LogoWithText from "@/components/elements/LogoWithText";

function FooterCategory({category, sub}: {category: string, sub?: string[]}) {
  return (
    <Flex gap="8px" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
    <p 
      className="amplify-text"
      style={{
      fontFamily:"Inter",
      fontSize:"16px",
      fontWeight:"600",
      color:"rgba(48,64,80,1)",
      lineHeight:"24px",
      textAlign:"left",
      display:"block",
      letterSpacing:"0.01px",
      width:"272px"
    }}>{category}</p>

    { sub && sub.map((item, index) => (
      <p key={index} 
        className="amplify-text"
        style={{
        fontFamily:"Inter",
        fontSize:"16px",
        fontWeight:"400",
        color:"rgba(48,64,80,1)",
        lineHeight:"24px",
        textAlign:"left",
        display:"block",
        letterSpacing:"0.01px",
        width:"272px"
      }}>{item}</p>
    ))}

  </Flex>

  )
}

export default function Footer() {
  return (
    <Flex
      gap="32px"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="40px 40px 40px 40px"
      backgroundColor="rgba(250,250,250,1)"
    >
      <Flex
        gap="16px"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
        alignSelf="stretch"
      >
        <Flex
          gap="10px"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <p 
            className="amplify-text"
            style={{
            fontFamily:"Inter",
            fontSize:"20px",
            fontWeight:"600",
            color:"rgba(48,64,80,1)",
            lineHeight:"30px",
            textAlign:"left",
            display:"block",
            width:"471px"
          }}>Sign up for our newsletter</p>
          <p 
            className="amplify-text"
            style={{
              fontFamily:"Inter",
              fontSize:"16px",
              fontWeight:"400",
              color:"rgba(48,64,80,1)",
              lineHeight:"24px",
              textAlign:"left",
              display:"block",
              width:"471px"
          }}>No spam. We promise.</p>
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
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignSelf="stretch"
      >
        <FooterCategory category="Products" sub={["A","B","C"]}></FooterCategory>
        <FooterCategory category="Resources" sub={["A","B","C"]}></FooterCategory>
        <FooterCategory category="Company" sub={["A","B","C"]}></FooterCategory>
      </Flex>

      <Divider
        height="1px"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
      ></Divider>

      <Flex
        gap="0"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
      >
        <LogoWithText></LogoWithText>
        <p 
          className="amplify-text"
          style={{
            fontFamily:"Inter",
            fontSize:"16px",
            fontWeight:"400",
            color:"rgba(102,112,133,1)",
            lineHeight:"24px",
            textAlign:"right",
            display:"block"
        }}>© 2023 AWS Amplify UI. All rights reserved.</p>
      </Flex>
    </Flex>
  );
}
