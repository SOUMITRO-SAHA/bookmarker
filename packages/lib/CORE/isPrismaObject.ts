import type { Prisma } from "@prisma/client";

function isPrismaObject(obj: unknown): obj is Prisma.JsonObject {
  return typeof obj === "object" && !Array.isArray(obj);
}

export function isPrismaObjectOrUndefined(obj: unknown) {
  return isPrismaObject(obj) ? obj : undefined;
}

export default isPrismaObject;
