import * as z from "zod"
import * as imports from "../zod-utils"

export const _VerificationTokenModel = z.object({
  id: z.string(),
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
  expiresInDays: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
