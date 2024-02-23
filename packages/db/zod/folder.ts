import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteIcon, IconModel, CompleteSubfolder, SubfolderModel, CompletePost, PostModel, CompleteUser, UserModel } from "./index"

export const _FolderModel = z.object({
  id: z.string(),
  label: z.string(),
  route: z.string(),
  iconId: z.string(),
  userId: z.string(),
})

export interface CompleteFolder extends z.infer<typeof _FolderModel> {
  icon: CompleteIcon
  subfolders: CompleteSubfolder[]
  Post: CompletePost[]
  user: CompleteUser
}

/**
 * FolderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const FolderModel: z.ZodSchema<CompleteFolder> = z.lazy(() => _FolderModel.extend({
  icon: IconModel,
  subfolders: SubfolderModel.array(),
  Post: PostModel.array(),
  user: UserModel,
}))
