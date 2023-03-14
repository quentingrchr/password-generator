import type { IFormStore } from "../stores/form";

export default function validateForm(form: IFormStore): { valid: boolean; message: string } {
  
  if (form.length < 1) return {
    valid: false,
    message: "Password length must be at least 1 character long."
  }
  if (form.length > 50000) return {
    valid: false,
    message: "Password length cannot be longer than 50,000 characters."
  }
  if (
    !form["with-uppercase"] &&
    !form["with-lowercase"] &&
    !form["with-number"] &&
    !form["with-symbols"]
  )
    return {
      valid: false,
      message: "You must select at least one character type."
    };
  
  return {
    valid: true,
    message: ""
  };
}