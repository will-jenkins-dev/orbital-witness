"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { format } from "date-fns";
import { blue } from "@mui/material/colors";
import { Usage } from "@/src/lib/apiClient";

export const UsageChart = ({ data }: { data: Array<Usage> }) => {
  const summedCredit = data.reduce((acc, curr) => {
    const { timestamp, creditsUsed } = curr;
    const dateStr = format(timestamp, "d MMMM");
    const runningTotal = acc.get(dateStr) || 0;
    return acc.set(dateStr, runningTotal + creditsUsed);
  }, new Map<string, number>());

  const chartData = Array.from(summedCredit.entries()).map(
    ([date, credits]) => ({
      name: date,
      credits: Math.round(credits),
    })
  );

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={600}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={10} />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="credits"
          fill={blue[800]}
          activeBar={<Rectangle fill={blue[400]} stroke={blue[900]} />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
