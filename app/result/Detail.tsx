import {
  Divider,
  Flex,
  Rating,
  Text,
  View,
  Heading
} from "@aws-amplify/ui-react";

export default function Detail({score}: { score: number[] | null }) {
  return (
    <Flex direction="column">

      <Heading level={2} fontSize="25px" fontWeight="400">Assessment Results</Heading>

      <Flex gap="100px" direction="row" padding="30px 0px 30px 0px">
        <ItemCard title="利便性" description="周辺環境の住みやすさを評価" score={score ? score[0] : 0}></ItemCard>
        <ItemCard title="快適性" description="物件内部の住みやすさを評価" score={score ? score[1] : 0}></ItemCard>
        <ItemCard title="耐震" description="地震に対する安全性を評価" score={score ? score[2] : 0}></ItemCard>
        <ItemCard title="資産性" description="資産としての価値を評価" score={score ? score[3] : 0}></ItemCard>
        <ItemCard title="その他" description="特筆すべき特徴を評価" score={score ? score[4] : 0}></ItemCard>
      </Flex>
  </Flex>

  )
}

function ItemCard({title, description, score}:{title: string, description: string, score: number}) {
  return (
    <View width="45vw">
      <Flex
        gap="24px"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
      >
        <Flex gap="8px" direction="column">

          <Text
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
            alignSelf="stretch"
          >{title}</Text>

          <Text
            fontSize="14px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            grow="1"
            shrink="1"
          >{description}</Text>

        </Flex>

        <Divider width="40px" height="1px" size="small" orientation="horizontal"></Divider>

        <Flex gap="8px" direction="column">
          <Comment category="交通"></Comment>
          <Comment category="買い物"></Comment>
          <Comment category="教育"></Comment>
        </Flex>

        <Flex gap="16px" direction="row" alignItems="center">
          <Rating size="large" value={score>0 ? score/20 : 0} maxValue={5}></Rating>
          <Text
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="right"
            display="block"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
          >{score}/100</Text>
        </Flex>
      </Flex>
    </View>

  )
}

function Comment({category}:{category: string}) {
  return (
      <Text
      fontSize="16px"
      fontWeight="400"
      color="rgba(92,102,112,1)"
      lineHeight="24px"
      textAlign="left"
      display="block"
      letterSpacing="0.01px"
      alignSelf="stretch"
      position="relative"
    >{category}:</Text>
  )
}
