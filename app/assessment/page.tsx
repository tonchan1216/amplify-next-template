import { Flex } from "@/components/elements/UI";
import Hero from "@/components/elements/Hero"
import LinkForm from "@/app/assessment/LinkForm"

export default function App() {
  return (
    <div style={{overflow:"hidden", backgroundColor:"rgba(255,255,255,1)"}}>
      <Flex gap="50px" flexDirection="column" padding="2% 10%">
        <div>
          <h1
            className="amplify-heading--1"
            style={{
              fontWeight: "700",
              lineHeight: "77.45454406738281px",
              textAlign: "left",
              display: "block",
              letterSpacing: "-1.13px",
            }}
          >Assessment</h1>
        </div>

        <LinkForm></LinkForm>

      </Flex>

      <Hero></Hero>
    </div>
  );
}
