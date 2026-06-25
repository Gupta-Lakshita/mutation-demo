// Validation helpers. Targets for logical-operator (&& ||) and
// conditional-boundary (>= > <= <) mutations.

export function isAdult(age: number): boolean {
  // The classic boundary bug source: >= vs >. A mutant that turns this
  // into `age > 18` only fails if a test checks exactly age === 18.
  return age >= 18;
}

export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

export function isValidEmail(email: string): boolean {
  // Deliberately simple (not RFC-correct). Just needs an @ with text
  // on both sides and a dot after the @.
  const atIndex = email.indexOf("@");
  if (atIndex <= 0) {
    return false;
  }
  const dotIndex = email.indexOf(".", atIndex);
  return dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

export function isNonEmptyString(value: string): boolean {
  return value.trim().length > 0;
}
