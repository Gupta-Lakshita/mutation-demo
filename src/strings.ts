// String helpers. Targets for string-literal mutations (Stryker replaces
// string literals with "" and similar) and conditional-boundary mutations.

export function capitalize(value: string): string {
  if (value.length === 0) {
    return value;
  }
  return value[0].toUpperCase() + value.slice(1);
}

export function truncate(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }
  return value.slice(0, maxLength) + "...";
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function repeat(value: string, times: number): string {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += value;
  }
  return result;
}
