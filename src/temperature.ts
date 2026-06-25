// Temperature conversion. Pure arithmetic — every operator here is a
// mutation target, and the constants (32, 9, 5) can be mutated too.

export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

export function isFreezing(celsius: number): boolean {
  return celsius <= 0;
}
