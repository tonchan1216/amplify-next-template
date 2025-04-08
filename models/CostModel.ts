// 型定義
type CostDetail = {
  category: string;
  label: string;
  value: number;
  tips?: string;
};

export class CostModel {
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
