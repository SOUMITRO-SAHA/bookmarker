import * as z from "zod"
import * as imports from "../zod-utils"

export const _ResetPasswordRequestModel = z.object({
  id: z.string(),
  email: z.string(),
  expires: z.date(),
  updatedAt: z.date(),
  createdAt: z.date(),
})
