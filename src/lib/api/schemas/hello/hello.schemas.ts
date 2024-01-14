import { z } from "zod";

export const helloSchema = z.object({
  name: z.string().min(2, "Name is too short"),
});
