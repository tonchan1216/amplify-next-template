import { PropertyData } from "@/types/property";

const directionScoreMap: { [key: string]: number } = {
  南: 100,
  南東: 90,
  南西: 85,
  東: 80,
  西: 70,
  北東: 65,
  北西: 60,
  北: 55,
};

const structureScoreMap: { [key: string]: number } = {
  "SRC": 90,
  "S": 85,
  "RC": 80,
  "木造": 70,
  "鉄骨木造": 75,
  "組積造": 50,
};


export const assessmentProperty = async (propertyData: PropertyData): Promise<number[]> => {
  let score: number[] = [0, 0, 0, 0, 0];

  // <利便性 score[0]>
  // 利用可能路線
  const transportationScore = assessTransportation(propertyData.transportation);
  score[0] = transportationScore

  // <快適性 score[1]>
  // 向き
  const directionScore = directionScoreMap[propertyData.direction] || 0;
  score[1] = directionScore;

  // <耐震 score[2]> 
  // 築年
  const completionYear = parseInt(propertyData.completionDate.split("年")[0]); // "2024年2月" -> 2024
  let oldScore = 0
  if (completionYear <= 1971) {
    oldScore = 30;
  } else if (completionYear <= 1981) {
    oldScore = 50;
  } else if (completionYear <= 1995) {
    oldScore = 70;
  } else {
    oldScore = 80;
  }

  // 構造
  const structureScore = structureScoreMap[propertyData.structure] || 0;
  score[2] = (oldScore + structureScore) / 2;

  // <資産性 score[3]>
  // 占有面積
  let areaScore = 0
  const area = parseInt(propertyData.area.replace("m2", "").trim()); // "50m2" -> 50
  if (area <= 25) {
    areaScore = 50;
  } else if (area <= 30) {
    areaScore = 60;
  } else if (area <= 50) {
    areaScore = 70;
  } else {
    areaScore = 80;
  }
  score[3] = areaScore

  // <その他 score[4]>
  score[4] = 50;

  return score;
};


const assessTransportation = (transportation: string[]): number => {
  let score = 0;

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
  }
  
  // 最終的な点数が100点を超えないように制限
  if (score > 100) {
    score = 100;
  }

  return score;
};
