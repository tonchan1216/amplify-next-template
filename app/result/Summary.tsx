import {
  Button,
  Flex,
  Image,
  Rating,
  Text,
  View,
} from "@aws-amplify/ui-react";
import RadarChartComponent from "@/components/elements/RadarChartComponent";

const chartData = [
  { subject: "利便性", A: 100, B: 60, fullMark: 100 },
  { subject: "快適性", A: 98, B: 60, fullMark: 100 },
  { subject: "耐震", A: 86, B: 60, fullMark: 100 },
  { subject: "資産性", A: 99, B: 60, fullMark: 100 },
  { subject: "その他", A: 85, B: 60, fullMark: 100 },
];

export default function Summary() {
  return (
    <Flex gap="24px" direction="row" justifyContent="flex-start" alignItems="flex-start">
    <View width="45vw" height="664px">
      <RadarChartComponent data={chartData} />
    </View>

    <Flex gap="24px" width="55vw" direction="column">
      <Text
        fontSize="24px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="30px"
        children="プラウド町屋"
      ></Text>
      <Text
        fontSize="24px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="36px"
        alignSelf="stretch"
        children="8,480万円"
      ></Text>

      <Flex gap="16px" direction="row">
        <Rating value={2} maxValue={5}></Rating>
        <Text
          fontSize="14px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="18px"
          textDecoration="underline"
          children="75点"
        ></Text>
      </Flex>

      <Flex gap="16px" direction="column">
        <Text
          fontSize="20px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="30px"
        >東京都荒川区<br/>東京メトロ千代田線「町屋」歩6分<br/>情報提供日:25/3/9<br/>次回更新日:情報提供より８日以内</Text>

        <Button size="large" variation="primary">
          Add to Favorite♡
        </Button>
      </Flex>
    </Flex>
  </Flex>

  )
}