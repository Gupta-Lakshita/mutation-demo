// Password strength scoring. Dense with logical operators and boundaries —
// a great file to watch mutation testing tear apart if tests are lazy.

export function hasMinLength(password: string, min: number): boolean {
  return password.length >= min;
}

export function hasNumber(password: string): boolean {
  return /[0-9]/.test(password);
}

export function hasUpperCase(password: string): boolean {
  return /[A-Z]/.test(password);
}

export function isStrongPassword(password: string): boolean {
  return (
    hasMinLength(password, 8) &&
    hasNumber(password) &&
    hasUpperCase(password)
  );
}
