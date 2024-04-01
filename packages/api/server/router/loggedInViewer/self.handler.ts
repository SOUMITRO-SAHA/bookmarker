import { Session } from "next-auth";
import { TrpcSessionUser } from "../../trpc";
import { UserRepository } from "@bookmarker/lib/server/repository/user";

type SelfOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
    session: Session;
  };
};

export const SelfHandler = async ({ ctx }: SelfHandler) => {
  const crpto = await import("crypto");

  const { user: sessionUser, session } = ctx;

  const user = await UserRepo;
};
