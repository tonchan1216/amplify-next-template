import {
  Button,
  Flex,
  Rating,
  Text,
  View,
} from "@aws-amplify/ui-react";
import RadarChartComponent from "@/components/elements/RadarChartComponent";
import React from "react";
import type { PropertyData } from "@/types/property";

export default function Summary({propertyData, score}: { propertyData: PropertyData, score: number[] | null }) {
  const chartData = score ? [
    { subject: "利便性", A: score[0], B: 60, fullMark: 100 },
    { subject: "快適性", A: score[1], B: 60, fullMark: 100 },
    { subject: "耐震", A: score[2], B: 60, fullMark: 100 },
    { subject: "資産性", A: score[3], B: 60, fullMark: 100 },
    { subject: "その他", A: score[4], B: 50, fullMark: 100 },
  ] : [];

  const averageScore = score ? score.reduce((sum, current) => sum + current, 0) / score.length : 0;
  const ratingScore = averageScore > 0 ? averageScore / 20 : 0;
  
  return (
    <Flex gap="24px" direction="row" justifyContent="flex-start" alignItems="flex-start">
    <View width="45vw">
      <RadarChartComponent data={chartData} />
    </View>

    <Flex gap="24px" width="55vw" direction="column">
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

      <Flex gap="16px" direction="row">
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
        <br />
        {propertyData.transportation.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Text>

        <Button size="large" variation="primary">
          Add to Favorite♡
        </Button>
      </Flex>
    </Flex>
  </Flex>

  )
}