import { AssessmentResult, PropertyData } from "@/types/property";

const directionScoreMap: { direction: string; score: number; comment: string }[] = [
  { direction: "南", score: 100, comment: "南向きで日当たり良好" },
  { direction: "南東", score: 90, comment: "南東向きで日当たり良好" },
  { direction: "南西", score: 85, comment: "南西向きで日当たり良好" },
  { direction: "東", score: 80, comment: "東向きで比較的日当たりが良い" },
  { direction: "西", score: 70, comment: "西向きで西日がきつい" },
  { direction: "北東", score: 65, comment: "北東向きであまり日当たりは良くない" },
  { direction: "北西", score: 60, comment: "北西向きであまり日当たりは良くない" },
  { direction: "北", score: 55, comment: "北向きで日当たりは良くない" },
];

const structureScoreMap: { structure: string, score: number, comment: string }[] = [
  { structure: "SRC", score: 90, comment: "SRCは最高レベルの耐震性能"},
  { structure: "S", score: 85, comment: "鉄骨造は変形に強く優れた靭性能"},
  { structure: "RC", score: 80, comment: "RCは高い強度と耐久性・耐火性"},
  { structure: "鉄骨木造", score: 75, comment: "木造と鉄骨のメリットを組み合わせ"},
  { structure: "木造", score: 70, comment: "適切な耐力壁配置で高い耐震性"},
  { structure: "組積造", score: 50, comment: "耐震性が比較的低い"},
];

const lawScoreMap: { maxYear: number; score: number; comment: string }[] = [
  { maxYear: 1971, score: 30, comment: "1971年以前の物件は、かなりリスク" },
  { maxYear: 1981, score: 50, comment: "1981年以前の物件は、リスク大きい" },
  { maxYear: 1995, score: 70, comment: "1995年以降の物件なら一定の安心感あり" },
  { maxYear: 9999, score: 80, comment: "2000年以降の物件は安全" },
];

const areaScoreMap: { maxSize: number; score: number, comment: string }[] = [
  { maxSize: 20, score: 40, comment: "20平米未満はかなり狭い" },
  { maxSize: 25, score: 50, comment: "25平米未満は狭い" },
  { maxSize: 30, score: 60, comment: "30平米未満はやや狭い" },
  { maxSize: 40, score: 70, comment: "40平米未満は普通" },
  { maxSize: 50, score: 80, comment: "50平米未満はやや広い" },
  { maxSize: Infinity, score: 90, comment: "50平米以上は広い" }, // 50m²以上
];

export const assessmentProperty = async (propertyData: PropertyData): Promise<AssessmentResult[]> => {
  let result: AssessmentResult[] = [...Array(5)].map(() => ({ score: 0, comments: [] }));

  // <利便性 score[0]>
  // 交通
  const {score: transportationScore, comment: transportationComment} = assessTransportation(propertyData.transportation);
  result[0].comments.push(transportationComment)

  // 買い物
  result[0].comments.push('買い物：')
  // 教育
  result[0].comments.push('教育：')

  // 利便性　小計
  result[0].score = transportationScore

  // <快適性 score[1]>
  // 日当たり
  const directionEntry = directionScoreMap.find(entry => entry.direction === propertyData.direction);
  const directionScore = directionEntry ? directionEntry.score : 0;
  const directionComment = directionEntry ? directionEntry.comment : "データなし";
  result[1].comments.push(`日当たり：${directionComment}`)
  // セキュリティ
  result[1].comments.push('セキュリティ：')

  // 設備
  result[1].comments.push('設備：')

  // 快適性　小計
  result[1].score = directionScore;

  // <耐震 score[2]> 
  // 構造
  const structure = structureScoreMap.find(entry => propertyData.structure.includes(entry.structure));
  const structureScore = structure ? structure.score : 0
  const structureComment = structure ? structure.comment : "データなし"
  result[2].comments.push(`構造：${structureComment}`)

  // 建築基準法
  const completionYear = parseInt(propertyData.completionDate.split("年")[0]); // "2024年2月" -> 2024
  const law = lawScoreMap.find(entry => completionYear < entry.maxYear )
  const lawScore = law ? law.score : 0
  const lawComment = law ? law.comment : "データなし"
  result[2].comments.push(`建築基準法：${lawComment}`)

  // 地盤
  result[2].comments.push('地盤：')

  // 耐震　小計
  result[2].score = (lawScore + structureScore) / 2;

  // <資産性 score[3]>
  // 占有面積
  const areaSize = parseInt(propertyData.area.replace("m2", "").trim()); // "50m2" -> 50
  const area = areaScoreMap.find(entry => areaSize < entry.maxSize);
  const areaScore = area ? area.score : 0
  const areaComment = area ? area.comment : "データなし"
  result[3].comments.push(`占有面積：${areaComment}`)

  // 資産性　小計
  result[3].score = areaScore

  // <その他 score[4]>
  result[4].comments.push('other：')
  result[4].score = 50;

  return result;
};


const assessTransportation = (transportation: string[]): { score: number; comment: string } => {
  let score = 0;
  let comment = "交通：";

  // 利用可能な路線数で点数を付ける(最大30点)
  const numRoutes = transportation.length;
  if (numRoutes >= 3) {
    score += 30;  // 3路線以上の場合
  } else if (numRoutes === 2) {
    score += 20;  // 2路線の場合
  } else if (numRoutes === 1) {
    score += 10;  // 1路線の場合
  }

  // 徒歩距離を評価する(最大70点)
  const distances = transportation.map(route => {
    // 徒歩時間の情報を抽出（例："歩6分" から "6" を取り出す）
    const match = route.match(/歩(\d+)分/);
    return match ? parseInt(match[1]) : null; // 数値を取得
  }).filter(dist => dist !== null) as number[]; // null を除外した徒歩距離の配列

  if (distances.length > 0) {
    // 徒歩距離の平均を求める
    const avgDistance = distances.reduce((sum, dist) => sum + dist, 0) / distances.length;

    if (avgDistance <= 5) {
      score += 70;  // 5分以内：最大70点
    } else if (avgDistance <= 10) {
      score += 50;  // 6〜10分：50点
    } else if (avgDistance <= 15) {
      score += 30;  // 11〜15分：30点
    } else if (avgDistance <= 20) {
      score += 10;  // 16〜20分：10点
    } else {
      score += 0;   // それ以上：0点
    }

    // **最小距離**が1分ならさらに加点する(ボーナス)
    const minDistance = Math.min(...distances);
    if (minDistance === 1) {
      score += 10;  // 最小距離が1分の場合、さらに10点加点
    } else if (minDistance === 2) {
      score += 5;  // 最小距離が2分の場合、5点加点
    }

    comment = `交通：${numRoutes}路線利用可能（最短${minDistance ?? '不明'}分）`;
  }
  
  // 最終的な点数が100点を超えないように制限
  if (score > 100) {
    score = 100;
  }

  return { score, comment };
};
