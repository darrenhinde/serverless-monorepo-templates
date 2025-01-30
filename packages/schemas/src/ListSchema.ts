import { z } from "zod";

export const ListSchema = z.object({
  cursor: z.string().optional(),
  limit: z.number().optional(),
});

export type ListSchema = z.infer<typeof ListSchema>;