// import { WEBAPP_URL } from "@repo/lib";
// import { CreateInnerTRPCContex, createInnerTRPCContext } from "../trpc.js";

// type Maybe<T> = T | null | undefined;

// export async function getUserFromSession(opts: CreateInnerTRPCContex) {
//   const { db, session } = opts;
//   if (!session) {
//     return null;
//   }

//   if (!session?.user?.id) {
//     return null;
//   }

//   const userFromDb = await db.user.findUnique({
//     where: {
//       id: session.user.id,
//       locked: false,
//     },
//     select: {
//       id: true,
//       username: true,
//       name: true,
//       email: true,
//       emailVerified: true,
//       bio: true,
//       avatarUrl: true,
//       role: true,
//     },
//   });

//   // some hacks to make sure `username` and `email` are never inferred as `null`
//   if (!userFromDb) {
//     return null;
//   }

//   const userId = session.user.id;
//   const { email, username, id } = userFromDb;
//   if (!email || !id) {
//     return null;
//   }

//   return {
//     ...userFromDb,
//     avatar: `${WEBAPP_URL}/${userFromDb.username}/avatar.png?`,
//     id,
//     email,
//     username,
//   };
// }
