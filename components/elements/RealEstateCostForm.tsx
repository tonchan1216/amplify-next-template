"use client";

import { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableFoot,
  Input,
  Text,
  Flex,
  Button
} from "@aws-amplify/ui-react";
import { TableCell } from "@/components/elements/CustomTable";
import Link from "next/link";
import { CostModel } from "@/models/CostModel";

export default function RealEstateCostForm() {
  const [price, setPrice] = useState(5000);
  const beforeCost = new CostModel(price);
  const afterCost = new CostModel(price, true);
  const format = (n: number) => `${n.toFixed(2)}万円`;

  return (
    <>
      <Flex gap="27px" direction="column" alignItems="center">
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
                    // <TableCell test="hoge">{category}</TableCell>
                    <TableCell rowSpan={items.length}>{category}</TableCell>
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
            <TableCell colSpan={2}>総額</TableCell>
            {/* <TableCell foobar="hoge">総額</TableCell> */}
            {/* <TableCell></TableCell> */}
            <TableCell>{format(beforeCost.getTotal())}</TableCell>
            <TableCell>{format(afterCost.getTotal())}</TableCell>
            <TableCell>
              節約額：{format(beforeCost.getTotal() - afterCost.getTotal())}
            </TableCell>
          </TableRow>
        </TableFoot>
      </Table>

      <Flex direction="column" alignItems="center">
        <Text fontSize="20px">
          総額で{format(beforeCost.getTotal() - afterCost.getTotal())}節約できる可能性があります！<br />
        </Text>
        <Text fontSize="20px">
          ぜひ、仲介手数料無料の業者を選ぶなどして、節約してみてください。
        </Text>
        <Button width="50%" variation="link" colorTheme="info"><Link href="/simulation">さらに詳しくシミュレーションしたい方はコチラ</Link></Button>
      </Flex>
    </>
  );
}
