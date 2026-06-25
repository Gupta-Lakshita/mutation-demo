// The classic. Targets for arithmetic (% mutations), logical (&&), and
// string-literal mutations all in one tiny function.

export function fizzbuzz(n: number): string {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  }
  if (n % 3 === 0) {
    return "Fizz";
  }
  if (n % 5 === 0) {
    return "Buzz";
  }
  return String(n);
}
