import { Flex } from "@/components/elements/UI";
import SynchronizedLineChart from "@/components/elements/SynchronizedLineChart"
import SimForm from "@/app/simulation/SimForm"

export default function Simulation() {
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
          >Cash Flow Simulation</h1>
        </div>

        <SimForm></SimForm>

      </Flex>

      <SynchronizedLineChart/>
    </div>
  );
}
