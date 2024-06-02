import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, within } from "@storybook/test";
import { UsageTable } from "../app/dashboard/UsageTable";
import { mockData } from "./mockData";

const meta = {
  title: "UsageTable",
  component: UsageTable,
  parameters: {
    layout: "centered",
  },
  args: {
    data: mockData,
  },
} satisfies Meta<typeof UsageTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unsorted: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableRows = await canvas.findAllByRole("row");
    expect(tableRows.length).toEqual(7);
    expect(tableRows[1]).toHaveTextContent("1.00");
    expect(tableRows[6]).toHaveTextContent("777.00");
  },
};

export const SortByReportNameAsc: Story = {
  parameters: {
    nextjs: {
      navigation: {
        query: {
          sort: "reportName:asc",
        },
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableRows = await canvas.findAllByRole("row");
    expect(tableRows.length).toEqual(7);
    expect(tableRows[1]).toHaveTextContent("1.00");
    expect(tableRows[6]).toHaveTextContent("777.00");
  },
};

export const SortByReportNameDesc: Story = {
  parameters: {
    nextjs: {
      navigation: {
        query: {
          sort: "reportName:des",
        },
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableRows = await canvas.findAllByRole("row");
    expect(tableRows.length).toEqual(7);
    expect(tableRows[1]).toHaveTextContent("5.00");
    expect(tableRows[6]).toHaveTextContent("123.00");
  },
};

export const SortByCreditsUsedAsc: Story = {
  parameters: {
    nextjs: {
      navigation: {
        query: {
          sort: "creditsUsed:asc",
        },
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableRows = await canvas.findAllByRole("row");
    expect(tableRows.length).toEqual(7);
    expect(tableRows[1]).toHaveTextContent("1.00");
    expect(tableRows[2]).toHaveTextContent("5.00");
    expect(tableRows[6]).toHaveTextContent("777.00");
  },
};

export const SortByCreditsUsedDesc: Story = {
  parameters: {
    nextjs: {
      navigation: {
        query: {
          sort: "creditsUsed:des",
        },
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableRows = await canvas.findAllByRole("row");
    expect(tableRows.length).toEqual(7);
    expect(tableRows[1]).toHaveTextContent("777.00");
    expect(tableRows[2]).toHaveTextContent("123.00");
    expect(tableRows[6]).toHaveTextContent("1.00");
  },
};

export const SortByBothAsc: Story = {
  parameters: {
    nextjs: {
      navigation: {
        query: {
          sort: "creditsUsed:asc,reportName:asc",
        },
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableRows = await canvas.findAllByRole("row");
    expect(tableRows.length).toEqual(7);
    expect(tableRows[1]).toHaveTextContent("1.00");
    expect(tableRows[2]).toHaveTextContent("12.00");
    expect(tableRows[3]).toHaveTextContent("123.00");
    expect(tableRows[4]).toHaveTextContent("5.00");
    expect(tableRows[5]).toHaveTextContent("66.00");
    expect(tableRows[6]).toHaveTextContent("777.00");
  },
};

export const SortByBothDesc: Story = {
  parameters: {
    nextjs: {
      navigation: {
        query: {
          sort: "creditsUsed:des,reportName:des",
        },
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableRows = await canvas.findAllByRole("row");
    expect(tableRows.length).toEqual(7);
    expect(tableRows[1]).toHaveTextContent("777.00");
    expect(tableRows[2]).toHaveTextContent("66.00");
    expect(tableRows[3]).toHaveTextContent("5.00");
    expect(tableRows[4]).toHaveTextContent("123.00");
    expect(tableRows[5]).toHaveTextContent("12.00");
    expect(tableRows[6]).toHaveTextContent("1.00");
  },
};

export const SortByAscDesc: Story = {
  parameters: {
    nextjs: {
      navigation: {
        query: {
          sort: "creditsUsed:des,reportName:asc",
        },
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableRows = await canvas.findAllByRole("row");
    expect(tableRows.length).toEqual(7);
    expect(tableRows[1]).toHaveTextContent("123.00");
    expect(tableRows[2]).toHaveTextContent("12.00");
    expect(tableRows[3]).toHaveTextContent("1.00");
    expect(tableRows[4]).toHaveTextContent("777.00");
    expect(tableRows[5]).toHaveTextContent("66.00");
    expect(tableRows[6]).toHaveTextContent("5.00");
  },
};

export const SortByDescAsc: Story = {
  parameters: {
    nextjs: {
      navigation: {
        query: {
          sort: "creditsUsed:asc,reportName:des",
        },
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableRows = await canvas.findAllByRole("row");
    expect(tableRows.length).toEqual(7);
    expect(tableRows[1]).toHaveTextContent("5.00");
    expect(tableRows[2]).toHaveTextContent("66.00");
    expect(tableRows[3]).toHaveTextContent("777.00");
    expect(tableRows[4]).toHaveTextContent("1.00");
    expect(tableRows[5]).toHaveTextContent("12.00");
    expect(tableRows[6]).toHaveTextContent("123.00");
  },
};
