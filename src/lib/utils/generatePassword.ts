interface Options {
  withNumbers?: boolean;
  withSymbols?: boolean;
  withUppercase?: boolean;
  withLowercase?: boolean;
}
export default function generatePassword(
  length: number,
  options: Options = {}
): string {
  const { withNumbers, withSymbols, withUppercase, withLowercase } = options;

  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";

  let chars = "";

  if (length >= 30) {
  }

  if (withNumbers) {
    chars += numbers;
  }
  if (withSymbols) {
    chars += symbols;
  }
  if (withUppercase) {
    chars += uppercase;
  }
  if (withLowercase) {
    chars += lowercase;
  }

  if (chars.length === 0) {
    return "Really??";
  }

  if (length <= 0) {
    return "Really??????";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}
