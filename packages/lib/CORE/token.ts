import jwt, { Secret } from "jsonwebtoken";
import { NEXTAUTH_SECRET } from "../constants.js";

export async function createNewToken(userInfo: any) {
  const token = jwt.sign(
    {
      ...userInfo,
    },
    NEXTAUTH_SECRET as Secret,
    {
      expiresIn: "30d" || process.env.NEXTAUTH_EXPIRY,
    }
  );

  return token;
}
