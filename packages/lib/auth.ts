import { compare, hash } from "bcryptjs";

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 13);
  return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
