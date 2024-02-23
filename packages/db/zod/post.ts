import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteFolder, FolderModel, CompleteSubfolder, SubfolderModel } from "./index"

export const _PostModel = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  content: z.string().nullish(),
  folderId: z.string().nullish(),
  subfolderId: z.string().nullish(),
})

export interface CompletePost extends z.infer<typeof _PostModel> {
  Folder?: CompleteFolder | null
  subfolder?: CompleteSubfolder | null
}

/**
 * PostModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const PostModel: z.ZodSchema<CompletePost> = z.lazy(() => _PostModel.extend({
  Folder: FolderModel.nullish(),
  subfolder: SubfolderModel.nullish(),
}))
