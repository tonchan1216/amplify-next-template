"use client";

import { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFoot,
  Input,
  Text,
  Flex,
} from "@aws-amplify/ui-react";

// 型定義
type CostDetail = {
  category: string;
  label: string;
  value: number;
  tips?: string;
};

class CostModel {
  private price: number;
  private isOptimized: boolean;

  constructor(price: number, isOptimized: boolean = false) {
    this.price = price;
    this.isOptimized = isOptimized;
  }

  getAll(): CostDetail[] {
    const p = this.price;
    const opt = this.isOptimized;

    return [
      { category: "不動産取得費用", label: "物件価格", value: p },
      {
        category: "不動産取得費用",
        label: "仲介手数料",
        value: opt ? 0 : Math.min(p * 0.03 + 6, p) * 1.1,
        tips: opt ? "仲介手数料無料の業者を選ぶ" : undefined,
      },
      {
        category: "不動産取得費用",
        label: "登記費用",
        value: opt ? 8 : 15,
        tips: opt ? "自分で登記するなど工夫できる" : undefined,
      },
      { category: "税金", label: "印紙税", value: opt ? 0.5 : 1 },
      { category: "税金", label: "登録免許税", value: p * 0.004 },
      { category: "税金", label: "不動産取得税", value: p * 0.03 },
      { category: "税金", label: "固定資産税", value: opt ? 3 : 10 },
      { category: "ローン", label: "ローン保証料", value: 10 },
      {
        category: "ローン",
        label: "ローン手数料",
        value: opt ? p * 0.011 : p * 0.022,
        tips: opt ? "ネット銀行で手数料削減" : undefined,
      },
      { category: "ローン", label: "団体信用生命保険", value: p * 0.003 },
      { category: "保険", label: "火災保険", value: opt ? 10 : 15 },
      { category: "保険", label: "地震保険", value: opt ? 5 : 10 },
    ];
  }

  getGrouped(): Record<string, CostDetail[]> {
    return this.getAll().reduce((acc, item) => {
      acc[item.category] ??= [];
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, CostDetail[]>);
  }

  getTotal(): number {
    return this.getAll().reduce((sum, item) => sum + item.value, 0);
  }
}

const format = (n: number) => `${n.toFixed(2)}万円`;

export default function RealEstateCostForm() {
  const [price, setPrice] = useState(5000);
  const beforeCost = new CostModel(price);
  const afterCost = new CostModel(price, true);

  return (
    <>
      <Flex gap="27px" padding="0 10vw" direction="column">
        <Text fontSize="20px">物件価格を入力してください</Text>
        <Flex direction="row" alignItems="center">
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="予算を入力してください"
            width="50%"
          />
          <Text>万円</Text>
        </Flex>
      </Flex>

      <Table highlightOnHover variation="striped">
        <TableHead>
          <TableRow>
            <TableCell as="th">カテゴリ</TableCell>
            <TableCell as="th">項目</TableCell>
            <TableCell as="th">改善前</TableCell>
            <TableCell as="th">改善後</TableCell>
            <TableCell as="th">Tips</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(beforeCost.getGrouped()).map(([category, items]) =>
            items.map((item, index) => {
              const afterItem = afterCost.getAll().find((i) => i.label === item.label);
              return (
                <TableRow key={`${category}-${index}`}>
                  {index === 0 && (
                    <TableCell rowspan={items.length}>{category}</TableCell>
                  )}
                  <TableCell>{item.label}</TableCell>
                  <TableCell>{format(item.value)}</TableCell>
                  <TableCell>{format(afterItem?.value || 0)}</TableCell>
                  <TableCell>{item.tips || afterItem?.tips || ""}</TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
        <TableFoot>
          <TableRow>
            <TableCell colspan={2}>総額</TableCell>
            {/* <TableCell></TableCell> */}
            <TableCell>{format(beforeCost.getTotal())}</TableCell>
            <TableCell>{format(afterCost.getTotal())}</TableCell>
            <TableCell>
              節約額：{format(beforeCost.getTotal() - afterCost.getTotal())}
            </TableCell>
          </TableRow>
        </TableFoot>
      </Table>
    </>
  );
}
