import * as z from "zod"
import * as imports from "../zod-utils"
import { UserPermissionRole, IdentityProvider } from "@prisma/client"
import { CompleteUserPassword, UserPasswordModel, CompleteFeedback, FeedbackModel, CompleteAccount, AccountModel, CompleteSession, SessionModel, CompleteProfile, ProfileModel, CompleteFolder, FolderModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _UserModel = z.object({
  id: z.string(),
  username: z.string().nullish(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  avatar: z.string().nullish(),
  avatarUrl: z.string().nullish(),
  bio: z.string().nullish(),
  theme: z.string().nullish(),
  metadata: jsonSchema,
  verified: z.boolean().nullish(),
  role: z.nativeEnum(UserPermissionRole),
  locked: z.boolean().nullish(),
  identityProvider: z.nativeEnum(IdentityProvider),
  identityProviderId: z.string().nullish(),
})

export interface CompleteUser extends z.infer<typeof _UserModel> {
  password?: CompleteUserPassword | null
  feedbacks: CompleteFeedback[]
  accounts: CompleteAccount[]
  sessions: CompleteSession[]
  Profile: CompleteProfile[]
  Folder: CompleteFolder[]
}

/**
 * UserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const UserModel: z.ZodSchema<CompleteUser> = z.lazy(() => _UserModel.extend({
  password: UserPasswordModel.nullish(),
  feedbacks: FeedbackModel.array(),
  accounts: AccountModel.array(),
  sessions: SessionModel.array(),
  Profile: ProfileModel.array(),
  Folder: FolderModel.array(),
}))
