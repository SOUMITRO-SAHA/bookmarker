import { logger } from "../..";
import { db } from "@bookmarker/db";

const log = logger.getSubLogger({
  prefix: ["[repository/user]"],
});

export class UserRepository {
  static async findById({ id }: { id: number }) {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      select: {},
    });

    if (!user) {
      return null;
    }
    return user;
  }
}
