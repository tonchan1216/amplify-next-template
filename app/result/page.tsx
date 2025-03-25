"use client";

import { View, Loader, Flex } from "@aws-amplify/ui-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Summary from "./Summary";
import Detail from "./Detail";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { scrapeDataFromUrl } from "@/actions/scraper";
import type { PropertyData, AssessmentResult } from "@/types/property";
import { assessmentProperty } from "@/actions/assessment";

Amplify.configure(outputs);

const client = generateClient<Schema>();
type Todo = Schema["Todo"]["type"];

function MainComponent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [scrapedData, setScrapedData] = useState<PropertyData | null>(null);
  const [assessment, setAssessment] = useState<AssessmentResult[] | null>(null); // 点数を保存する状態
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (!id) {
        setError("IDが取得できませんでした。");
        setLoading(false);
        return;
      }

      try {
        const { data, errors } = await client.models.Todo.get({ id });

        if (errors) {
          console.error(errors);
          setError("データ取得に失敗しました。");
          return;
        }

        if (data?.url) {
          const scraped = await scrapeDataFromUrl(data.url);
          if (scraped?.propertyData) {
            setScrapedData(scraped.propertyData);
            console.log(scraped.propertyData)

            // スクレイピング後、点数を算出
            const assessmentResult = await assessmentProperty(scraped.propertyData); // 点数算出
            // console.log(assessmentResult)
            setAssessment(assessmentResult);
          }
        }
      } catch (error) {
        console.error("データ取得エラー:", error);
        setError("予期せぬエラーが発生しました。");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <Flex height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Loader size="large" variation="linear" />
        <View marginTop="10px">Loading...</View>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex display="flex" justifyContent="center" alignItems="center" color="red">
        <View>{error}</View>
      </Flex>
    );
  }

  return (
    <Flex gap="24px" direction="column" justifyContent="flex-start" alignItems="flex-start">
      {scrapedData ? (
        <Summary propertyData={scrapedData} assessment={assessment} />
      ) : (
        <View>No Data Available</View>
      )}
      <Detail assessment={assessment} />
    </Flex>
  );
}

export default function ResultPage() {
  return (
    <View overflow="hidden" backgroundColor="rgba(255,255,255,1)" padding="25px 30px">
      <MainComponent />
    </View>
  );
}
