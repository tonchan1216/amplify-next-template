"use client";

import { Suspense } from 'react'
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
Amplify.configure(outputs);

const client = generateClient<Schema>();
type Todo = Schema['Todo']['type'];

import {
  View,
  Button,
  Heading,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import RadarChartComponent from "@/components/elements/RadarChartComponent";

const chartData = [
  { subject: "利便性", A: 100, B: 60, fullMark: 100 },
  { subject: "快適性", A: 98, B: 60, fullMark: 100 },
  { subject: "耐震", A: 86, B: 60, fullMark: 100 },
  { subject: "資産性", A: 99, B: 60, fullMark: 100 },
  { subject: "その他", A: 85, B: 60, fullMark: 100 },
];

function MainComponent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [data, setData] = useState<Todo>();

  useEffect(() => {
    (async() => {
      if (id) {
        console.log(id)
        const {data, errors} = await client.models.Todo.get({
          id: id
        })

        if(errors){
          console.log(errors)
          return
        }
        console.log(data)
        // console.log(todo)
        setData(data as Todo);
      }  
    })()
  }, [id]);

  return (
    <View>
      <View>
        <Heading level={2}>Summary</Heading>
        <Heading level={3}>プラウド町屋 8480万円（2LDK）</Heading>
        <Heading level={4}>URL: {data?.url}</Heading>
        <Heading level={4}>総合：点</Heading>

        {/* RadarChart を表示 */}
        <RadarChartComponent data={chartData} />
      </View>

      <View>
        <Heading level={3}>Detail</Heading>
        <Table highlightOnHover={false} variation="striped">
        <TableHead>
          <TableRow>
            <TableCell as="th">項目</TableCell>
            <TableCell as="th">値</TableCell>
            <TableCell as="th">点数</TableCell>
            <TableCell as="th">評価</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell as="th">建築基準法</TableCell>
            <TableCell>2023年2月</TableCell>
            <TableCell>80点</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell as="th">構造</TableCell>
            <TableCell>RC</TableCell>
            <TableCell>80点</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell as="th">向き</TableCell>
            <TableCell>南西</TableCell>
            <TableCell>80点</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell as="th">専有面積</TableCell>
            <TableCell>63.82m2（19.30坪）（壁芯）</TableCell>
            <TableCell>80点</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell as="th">住所</TableCell>
            <TableCell>東京都荒川区荒川４</TableCell>
            <TableCell>80点</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
        </TableBody>
        </Table>
      </View>

    </View>
  );
}

export default function Page() {
  const router = useRouter();

  return (
    <View>
      <Heading level={1}>物件アセスメント</Heading>

      <Suspense>
        <MainComponent />
      </Suspense>

      <Button type="button" onClick={() => router.back()}>
        back
      </Button>
    </View>
  )
}