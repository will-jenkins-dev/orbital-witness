import { Usage } from "@/src/lib/apiClient";

export type Column = keyof Usage;

export type Direction = "asc" | "desc";
export type SortDict = Partial<Record<Column, Direction>>;

export type Sort = {
  column: Column;
  direction: Direction;
};
