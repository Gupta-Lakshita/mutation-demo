// Array helpers. Targets for arithmetic, conditional, and loop mutations.

export function sum(numbers: number[]): number {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}

export function max(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot take max of empty array");
  }
  let largest = numbers[0];
  for (const n of numbers) {
    if (n > largest) {
      largest = n;
    }
  }
  return largest;
}

export function unique<T>(items: T[]): T[] {
  const seen = new Set<T>();
  const result: T[] = [];
  for (const item of items) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  return result;
}

export function average(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  return sum(numbers) / numbers.length;
}
