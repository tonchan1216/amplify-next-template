import { Flex } from "@/components/elements/UI";
import ProfileCard from "./ProfileCard"

export default function MyPage() {

  return (
    <div style={{overflow:"hidden", backgroundColor:"rgba(255,255,255,1)"}}>
      <Flex gap="50px" flexDirection="column" padding="2% 10%">
        <h1
          className="amplify-heading--1"
          style={{
            fontWeight: "700",
            lineHeight: "77.45454406738281px",
            textAlign: "left",
            display: "block",
            letterSpacing: "-1.13px",
          }}
        >My Profile</h1>
      </Flex>

      <ProfileCard></ProfileCard>

    </div>
  );
}
