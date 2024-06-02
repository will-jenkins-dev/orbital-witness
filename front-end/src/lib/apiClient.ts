export type Usage = {
  messageId: number;
  timestamp: Date;
  reportName?: string;
  creditsUsed: number;
};

type UsageReponse = {
  message_id: number;
  timestamp: string;
  report_name?: string;
  credits_used: number;
};

const toUsage = ({
  message_id,
  timestamp,
  report_name,
  credits_used,
}: UsageReponse): Usage => ({
  messageId: message_id,
  timestamp: new Date(timestamp),
  reportName: report_name,
  creditsUsed: credits_used,
});

export const getData = async (): Promise<Array<Usage>> => {
  const res = await fetch("http://127.0.0.1:5000/usage", { cache: "no-store" });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch data, ${text}, ${res.status}`);
  }

  const { usage: usageResults = [] } = (await res.json()) as {
    usage: Array<UsageReponse>;
  };
  return usageResults.map(toUsage);
};
