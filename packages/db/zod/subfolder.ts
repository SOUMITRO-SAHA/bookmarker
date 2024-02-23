import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteFolder, FolderModel, CompletePost, PostModel } from "./index"

export const _SubfolderModel = z.object({
  id: z.string(),
  label: z.string(),
  route: z.string(),
  folderId: z.string(),
})

export interface CompleteSubfolder extends z.infer<typeof _SubfolderModel> {
  parent: CompleteFolder
  Post: CompletePost[]
}

/**
 * SubfolderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const SubfolderModel: z.ZodSchema<CompleteSubfolder> = z.lazy(() => _SubfolderModel.extend({
  parent: FolderModel,
  Post: PostModel.array(),
}))
