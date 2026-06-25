// Date helpers. NOTE: this file has NO test file on purpose.
// It demonstrates what your tool reports for a changed file with zero tests
// (every mutant survives -> 0% confidence). Don't add tests for it.

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function daysBetween(a: Date, b: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = Math.abs(a.getTime() - b.getTime());
  return Math.floor(diff / msPerDay);
}
