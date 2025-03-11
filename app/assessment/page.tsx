"use client";

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
import { useRouter } from "next/navigation";
import RadarChartComponent from "@/components/elements/RadarChartComponent";

const data = [
  { subject: "利便性", A: 100, B: 60, fullMark: 100 },
  { subject: "快適性", A: 98, B: 60, fullMark: 100 },
  { subject: "耐震", A: 86, B: 60, fullMark: 100 },
  { subject: "資産性", A: 99, B: 60, fullMark: 100 },
  { subject: "その他", A: 85, B: 60, fullMark: 100 },
];

export default function Page() {
  const router = useRouter();

  return (
    <View>
      <Heading level={1}>物件アセスメント</Heading>

      <View>
        <Heading level={2}>Summary</Heading>
        <Heading level={3}>プラウド町屋 8480万円（2LDK）</Heading>
        <Heading level={4}>総合：点</Heading>

        {/* RadarChart を表示 */}
        <RadarChartComponent data={data} />
      </View>

      <View>
        <Heading level={3}>Detail</Heading>
      </View>

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

      <Button type="button" onClick={() => router.back()}>
        back
      </Button>
    </View>
  );
}
