"use client";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import { format } from "date-fns/format";

import { useSorting } from "./useSorting";
import { sortData } from "./sortData";
import { useMemo } from "react";
import { Usage } from "@/src/lib/apiClient";
import { Column } from "./types";

const columns: Array<{
  key: keyof Usage;
  label: string;
  isSortable?: boolean;
}> = [
  { key: "messageId", label: "Message ID" },
  { key: "timestamp", label: "Timestamp" },
  { key: "reportName", label: "Report Name", isSortable: true },
  { key: "creditsUsed", label: "Credits Used", isSortable: true },
];

export const UsageTable = ({ data }: { data: Array<Usage> }) => {
  const { allSorts, stepSortingForColumnn } = useSorting();

  const getSortProps = (column: Column) => {
    const direction = allSorts[column];
    return {
      active: Boolean(direction),
      direction: direction,
    };
  };

  const sortedData = useMemo(() => sortData(data, allSorts), [data, allSorts]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(({ key, label, isSortable }) => (
              <TableCell key={key}>
                {isSortable ? (
                  <TableSortLabel
                    {...getSortProps(key)}
                    onClick={() => stepSortingForColumnn(key)}
                  >
                    {label}
                  </TableSortLabel>
                ) : (
                  label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((item) => (
            <TableRow key={item.messageId}>
              <TableCell>{item.messageId}</TableCell>
              <TableCell>{format(item.timestamp, "dd-MM-yyy HH:mm")}</TableCell>
              <TableCell>{item.reportName}</TableCell>
              <TableCell>{item.creditsUsed.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
