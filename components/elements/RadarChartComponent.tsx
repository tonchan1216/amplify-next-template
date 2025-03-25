"use client"; // クライアントコンポーネントとして指定

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";


interface RadarChartData {
  subject: string;
  A: number;
}

export default function RadarChartComponent({ data }: { data: RadarChartData[] }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis domain={[0, 100]} />
        <Radar name="評価" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        {/* <Radar name="平均" dataKey="B" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} /> */}
        {/* <Legend /> */}
      </RadarChart>
    </ResponsiveContainer>
  );
}
