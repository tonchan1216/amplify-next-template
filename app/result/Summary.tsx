import {
  Button,
  Flex,
  Rating,
  Text,
  View,
} from "@aws-amplify/ui-react";
import RadarChartComponent from "@/components/elements/RadarChartComponent";
import React from "react";
import type { PropertyData, AssessmentResult } from "@/types/property";

export default function Summary({propertyData, assessment}: { propertyData: PropertyData, assessment: AssessmentResult[] | null }) {
  const chartData = assessment ? [
    { subject: "利便性", A: assessment[0].score, B: 60, fullMark: 100 },
    { subject: "快適性", A: assessment[1].score, B: 60, fullMark: 100 },
    { subject: "耐震", A: assessment[2].score, B: 60, fullMark: 100 },
    { subject: "資産性", A: assessment[3].score, B: 60, fullMark: 100 },
    { subject: "その他", A: assessment[4].score, B: 50, fullMark: 100 },
  ] : [];

  const averageScore = assessment ? assessment.reduce((sum, current) => sum + current.score, 0) / assessment.length : 0;
  const ratingScore = averageScore > 0 ? averageScore / 20 : 0;
  
  return (
    <Flex gap="24px" direction="row" justifyContent="flex-start" alignItems="flex-start">
    <View width="60vw">
      <RadarChartComponent data={chartData} />
    </View>

    <Flex gap="24px" width="40vw" direction="column">
      <Text
        fontSize="24px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="30px"
      >{propertyData.name}</Text>
      <Text
        fontSize="24px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="36px"
        alignSelf="stretch"
      >{propertyData.price}</Text>

      <Flex gap="16px" direction="row"  justifyContent="flex-start" alignItems="center">
        <Rating value={ratingScore} maxValue={5}></Rating>
        <Text
          fontSize="14px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          textDecoration="underline"
        >{averageScore}点</Text>
      </Flex>

      <Flex gap="16px" direction="column">
        <Text fontSize="20px" fontWeight="400" color="rgba(13,26,38,1)" lineHeight="30px">
          {propertyData.address}
        </Text>

        <Text fontSize="20px" fontWeight="400" color="rgba(13,26,38,1)" lineHeight="30px">
          {propertyData.transportation.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Text>

        <Button size="large" variation="primary" width="60%">Add to Favorite♡</Button>
      </Flex>
    </Flex>
  </Flex>

  )
}