export const strengthStatuses = ["weak", "medium", "strong"] as const;
export type StrengthStatus = typeof strengthStatuses[number];
export type PasswordData = {
  password: string;
  strength: StrengthStatus;
};
