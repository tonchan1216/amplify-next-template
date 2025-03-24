import {
  Divider,
  Flex,
  Rating,
  Text,
  View,
  Heading
} from "@aws-amplify/ui-react";
import { AssessmentResult } from "@/types/property";

export default function Detail({assessment}: { assessment: AssessmentResult[] | null }) {
  return (
    <Flex direction="column">

      <Heading level={2} fontSize="25px" fontWeight="400">Assessment Results</Heading>

      <Flex gap="100px" direction="row" padding="30px 0px 30px 0px" wrap="wrap" width="100vw">
        <ItemCard title="利便性" description="周辺環境の住みやすさを評価" assessment={assessment ? assessment[0] : null}></ItemCard>
        <ItemCard title="快適性" description="物件内部の住みやすさを評価" assessment={assessment ? assessment[1] : null}></ItemCard>
        <ItemCard title="耐震" description="地震に対する安全性を評価" assessment={assessment ? assessment[2] : null}></ItemCard>
        <ItemCard title="資産性" description="資産としての価値を評価" assessment={assessment ? assessment[3] : null}></ItemCard>
        <ItemCard title="その他" description="特筆すべき特徴を評価" assessment={assessment ? assessment[4] : null}></ItemCard>
      </Flex>
  </Flex>

  )
}

function ItemCard({ title, description, assessment }:{ title: string, description: string, assessment: AssessmentResult | null }) {
  return (
    <View width="350px">
      <Flex gap="24px" direction="column" padding="32px 32px">
        <Flex gap="8px" direction="column">
          <Text fontSize="20px" fontWeight="700" color="rgba(13,26,38,1)" lineHeight="25px">{title}</Text>
          <Text fontSize="14px" fontWeight="400" color="rgba(92,102,112,1)">{description}</Text>
        </Flex>

        <Divider width="40px" height="1px" size="small" orientation="horizontal"></Divider>

        <Flex gap="8px" direction="column">
          {assessment && assessment.comments.map((comment, index) => (
            <Text
              key={index}
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
            >{comment}</Text>
          ))}
        </Flex>

        <Flex gap="16px" direction="row" alignItems="center">
          <Rating size="large" value={assessment && assessment.score > 0 ? assessment.score / 20 : 0} maxValue={5}></Rating>
          <Text fontSize="16px" fontWeight="700" color="rgba(13,26,38,1)">{assessment ? assessment.score : 0}/100</Text>
        </Flex>
      </Flex>
    </View>

  )
}
