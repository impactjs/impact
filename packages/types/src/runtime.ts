import { z } from "zod";

const maybePromise = <T>(schema: z.ZodType<T>) =>
  z.union([schema, z.promise(schema)]);

export const runtimeSchema = z.object({
  fs: z.object({
    read: z.function().args(z.string()).returns(maybePromise(z.string())),
    write: z
      .function()
      .args(z.string(), z.string())
      .returns(maybePromise(z.void().or(z.number()))),
  }),
  exec: z
    .function()
    .args(z.array(z.string()))
    .returns(
      maybePromise(
        z.object({
          code: z.number(),
          output: z.string(),
          success: z.boolean(),
        }),
      ),
    ),
});

export type Runtime = z.infer<typeof runtimeSchema>;
