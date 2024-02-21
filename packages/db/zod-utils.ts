import { isPasswordValid } from "@repo/lib/isPasswordValid.js";
import z from "zod";

export const stringOrNumber = z.union([
  z.string().transform((value, ctx) => {
    const parsed = parseInt(value);
    if (isNaN(parsed)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Not a Number",
      });
    }
    return parsed;
  }),
  z.number().int(),
]);

export const stringToDate = z.string().transform((value) => new Date(value));

export const userMetadata = z
  .object({
    isPremium: z.boolean().optional(),
    sessionTimeout: z.number().optional(),
  })
  .nullable();

/**
 * Ensures that it is a valid HTTP URL
 * It automatically avoids
 * -  XSS attempts through javascript:alert('hi')
 * - mailto: links
 */
export const successRedirectUrl = z
  .union([
    z.literal(""),
    z
      .string()
      .url()
      .regex(/^http(s)?:\/\/.*/),
  ])
  .optional();

type UnknownKeysParam = "passthrough" | "strict" | "strip";

type DeepWriteable<T> = T extends Readonly<{
  -readonly [K in keyof T]: T[K];
}>
  ? {
      -readonly [K in keyof T]: DeepWriteable<T[K]>;
    }
  : T;

type FromEntries<T> = T extends [infer Keys, unknown][]
  ? { [K in Keys & PropertyKey]: Extract<T[number], [K, unknown]>[1] }
  : never;

export const fromEntries = <
  E extends
    | [PropertyKey, unknown][]
    | ReadonlyArray<readonly [PropertyKey, unknown]>,
>(
  entries: E
): FromEntries<DeepWriteable<E>> => {
  return Object.fromEntries(entries) as FromEntries<DeepWriteable<E>>;
};

export const downloadLinkSchema = z.object({
  download_link: z.string(),
});

export const emailSchemaRefinement = (value: string) => {
  const emailRegex =
    /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;
  return emailRegex.test(value);
};

export const signupSchema = z.object({
  // Username is marked optional here because it's requirement depends on if it's the Organization invite or a team invite which isn't easily done in zod
  // It's better handled beyond zod in `validateAndGetCorrectedUsernameAndEmail`
  username: z.string().optional(),
  email: z.string().email(),
  password: z.string().superRefine((data, ctx) => {
    const isStrict = false;
    const result = isPasswordValid(data, true, isStrict);
    Object.keys(result).map((key: string) => {
      if (!result[key as keyof typeof result]) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [key],
          message: key,
        });
      }
    });
  }),
  token: z.string().optional(),
});

export const ZVerifyCodeInputSchema = z.object({
  email: z.string().email(),
  code: z.string(),
});

export type ZVerifyCodeInputSchema = z.infer<typeof ZVerifyCodeInputSchema>;
