import { TRPCError } from "@trpc/server";
import { TrpcSessionUser } from "../../../trpc.js";
import z from "zod";
import { db } from "@bookmarker/db";
import { compareEncryptedPassword } from "@bookmarker/lib";

export const ZVerifyPasswordInputSchema = z.object({
  passwordInput: z.string(),
});

export type TVerifyPasswordInputSchema = z.infer<
  typeof ZVerifyPasswordInputSchema
>;

type VerifyPasswordOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TVerifyPasswordInputSchema;
};

export const verifyPasswordHandler = async ({
  input,
  ctx,
}: VerifyPasswordOptions) => {
  const userPassword = await db.userPassword.findUnique({
    where: {
      userId: ctx.user.id,
    },
  });

  if (!userPassword?.hash) {
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
  }

  const passwordsMatch = await compareEncryptedPassword(
    userPassword.hash,
    input.passwordInput
  );

  if (!passwordsMatch) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return;
};
