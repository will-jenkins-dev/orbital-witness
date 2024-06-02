import { addDays, addHours } from "date-fns";

const mockDate = "2024-04-29T02:08:29.375Z";
export const mockData = [
  {
    messageId: 1,
    timestamp: new Date(mockDate),
    reportName: "a test",
    creditsUsed: 1,
  },
  {
    messageId: 2,
    timestamp: new Date(mockDate),
    reportName: "a test",
    creditsUsed: 12,
  },
  {
    messageId: 3,
    timestamp: addDays(addHours(new Date(mockDate), 8), 10),
    reportName: "a test",
    creditsUsed: 123,
  },
  {
    messageId: 4,
    timestamp: new Date(mockDate),
    reportName: "b test",
    creditsUsed: 5,
  },
  {
    messageId: 5,
    timestamp: new Date(mockDate),
    reportName: "b test",
    creditsUsed: 66,
  },
  {
    messageId: 6,
    timestamp: new Date(mockDate),
    reportName: "b test",
    creditsUsed: 777,
  },
];
