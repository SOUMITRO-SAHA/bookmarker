import * as z from "zod"
import * as imports from "../zod-utils"

export const _AvatarModel = z.object({
  userId: z.string(),
  data: z.string(),
})
