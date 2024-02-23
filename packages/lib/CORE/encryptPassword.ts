import bcrypt from "bcryptjs";

export async function encryptPassword(password: string) {
  const encryptedPassword = await bcrypt.hash(password, 12);
  return encryptedPassword;
}
