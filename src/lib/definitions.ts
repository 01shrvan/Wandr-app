import { z } from "zod";

export const travelStoriesInput = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required." })
    .max(32, { message: "Title must be less than 32 characters." }),
  story: z
    .string()
    .min(1, { message: "Story is required." })
    .max(256, { message: "Story must be less than 256 characters." }),
  visitedLocation: z
    .array(z.string())
    .min(1, { message: "Location is required." }),
  imageUrl: z.string().url({ message: "Invalid image URL." }),
  visitedDate: z.string().date(),
});
