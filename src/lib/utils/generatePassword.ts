import type { PasswordData, StrengthStatus } from "../../types";
import { strengthStatuses } from "../../types";

interface Options {
  withNumbers?: boolean;
  withSymbols?: boolean;
  withUppercase?: boolean;
  withLowercase?: boolean;
}
export default function generatePassword(
  length: number,
  options: Options = {}
): PasswordData {
  const { withNumbers, withSymbols, withUppercase, withLowercase } = options;

  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";

  let strengthOutOf5 = 0;
  let chars = "";

  if (length <= 0) {
    throw new Error("Length must be greater than 0");
  }

  if (length >= 30) {
    strengthOutOf5++;
  }

  if (withNumbers) {
    strengthOutOf5++;
    chars += numbers;
  }
  if (withSymbols) {
    strengthOutOf5++;
    chars += symbols;
  }
  if (withUppercase) {
    strengthOutOf5++;
    chars += uppercase;
  }
  if (withLowercase) {
    strengthOutOf5++;
    chars += lowercase;
  }

  if (chars.length === 0) {
    throw new Error("You must select at least one option");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  let strength = strengthStatuses[
    Math.ceil((strengthOutOf5 / 5) * 3) - 1
  ] satisfies StrengthStatus;

  return {
    password,
    strength,
  };
}
