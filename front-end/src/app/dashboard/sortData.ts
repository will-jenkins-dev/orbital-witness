"use client";

import { Usage } from "@/src/lib/apiClient";
import { Column, Direction, SortDict } from "./types";

export const compareValues = ({
  valueA,
  valueB,
  direction,
}: {
  valueA?: string | number | Date;
  valueB?: string | number | Date;
  direction: Direction;
}) => {
  if (valueA === undefined && valueB !== undefined) {
    return 1;
  }
  if (valueB === undefined && valueA !== undefined) {
    return -1;
  }
  if (valueA === undefined && valueB === undefined) {
    return 0;
  }

  if (valueA! < valueB!) {
    return direction === "asc" ? -1 : 1;
  }
  if (valueA! > valueB!) {
    return direction === "asc" ? 1 : -1;
  }
  return 0;
};

const sortOrder: Column[] = ["reportName", "creditsUsed"];

export const sortData = (data: Array<Usage>, allSorts: SortDict) =>
  [...data].sort((usageA, usageB) => {
    const activeSorts = Object.entries(allSorts)
      .filter((entry): entry is [Column, Direction] => entry[1] !== undefined)
      .map(([column]) => column);

    const orderedSorts = sortOrder.filter((sort) => activeSorts.includes(sort));

    for (const key of orderedSorts) {
      const direction = allSorts[key];
      if (direction) {
        const valueA = usageA[key];
        const valueB = usageB[key];
        const comparison = compareValues({ valueA, valueB, direction });
        debugger;
        if (comparison !== 0) {
          return comparison;
        }
      }
    }
    return 0;
  });
