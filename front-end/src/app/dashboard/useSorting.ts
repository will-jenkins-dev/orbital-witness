import { useQueryState } from "nuqs";
import { Column, Direction, Sort, SortDict } from "./types";

const toSortDict = (sortString: string | null): SortDict => {
  if (!sortString || sortString.length === 0) {
    return {};
  }

  return Object.fromEntries(
    sortString.split(",").map((sortStr) => {
      const [column, direction] = sortStr.split(":");
      return [column, direction];
    })
  );
};

const toSortString = (sortDict: Partial<Record<Column, Direction>>): string =>
  Object.entries(sortDict)
    .map(([col, dir]) => (col && dir ? `${col}:${dir}` : undefined))
    .filter(Boolean)
    .join(",");

export const getNextDirection = (direction: Sort["direction"] | undefined) => {
  if (!direction) {
    return "asc";
  }
  if (direction === "asc") {
    return "desc";
  }
  return undefined;
};

export const useSorting = (): {
  allSorts: SortDict;
  stepSortingForColumnn: (column: Column) => void;
} => {
  const [sortString, setSortsString] = useQueryState("sort");
  const allSorts = toSortDict(sortString);

  const stepSortingForColumnn = (column: Column) => {
    const nextDirection = getNextDirection(allSorts[column]);
    const newSorts = { ...allSorts, [column]: nextDirection };

    const newSortsString = toSortString(newSorts);

    setSortsString(newSortsString);
  };

  return { allSorts, stepSortingForColumnn };
};
