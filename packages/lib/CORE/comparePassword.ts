import { compare } from "bcryptjs";

export async function compareEncryptedPassword(
  dbPassword: string,
  userPassword: string
) {
  const result = await compare(dbPassword, userPassword);
  return result;
}
