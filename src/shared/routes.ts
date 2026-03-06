import { z } from "zod";

const insertMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  serviceType: z.string(),
});

export type MessageInput = z.infer<typeof insertMessageSchema>;

export const api = {
  messages: {
    create: {
      input: insertMessageSchema,
      path: "/api/messages",
      method: "POST"
    },
  },
};
