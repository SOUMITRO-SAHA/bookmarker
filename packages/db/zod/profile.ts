import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel } from "./index"

export const _ProfileModel = z.object({
  id: z.string(),
  uid: z.string(),
  userId: z.string(),
  username: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteProfile extends z.infer<typeof _ProfileModel> {
  user: CompleteUser
}

/**
 * ProfileModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ProfileModel: z.ZodSchema<CompleteProfile> = z.lazy(() => _ProfileModel.extend({
  user: UserModel,
}))
