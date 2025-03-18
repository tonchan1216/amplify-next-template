"use client";

import CTASection from "@/components/elements/CTASection";
import MarketingFooter from "@/components/layouts/MarketingFooter"
import NavBarHeader from "@/components/layouts/NavBarHeader"

import { Flex, View } from "@aws-amplify/ui-react";
export default function SignupPage() {
  return (
    <main>
      <NavBarHeader></NavBarHeader>

      <View overflow="hidden" backgroundColor="rgba(255,255,255,1)" padding="25px 30px">
        <CTASection
          display="flex"
          gap="10px"
          direction="column"
          width="1440px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="160px 160px 160px 160px"
          backgroundColor="rgba(255,255,255,1)"
        ></CTASection>
      </View>

    <MarketingFooter></MarketingFooter>

    </main>
  );
}
