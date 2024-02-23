import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteFolder, FolderModel } from "./index"

export const _IconModel = z.object({
  id: z.string(),
  label: z.string(),
})

export interface CompleteIcon extends z.infer<typeof _IconModel> {
  Folder: CompleteFolder[]
}

/**
 * IconModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const IconModel: z.ZodSchema<CompleteIcon> = z.lazy(() => _IconModel.extend({
  Folder: FolderModel.array(),
}))
