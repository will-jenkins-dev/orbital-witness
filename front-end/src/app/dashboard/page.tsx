import { UsageTable } from "./UsageTable";
import { Box, Paper, Typography } from "@mui/material";
import { UsageChart } from "./UsageChart";
import { getData } from "@/src/lib/apiClient";

export default async function Page() {
  const data = await getData();

  return (
    <main className="flex flex-col justify-between p-12">
      <Box component={Paper}>
        <Typography variant="h1" className="pb-12" sx={{ fontSize: "3rem" }}>
          Credit Usage Dashboard
        </Typography>
        <UsageChart data={data} />
        <UsageTable data={data} />
      </Box>
    </main>
  );
}
