import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "AiFinance", // Unique app ID
  name: "AiFinance",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
