// Tiered discount logic. Heavy on conditional boundaries (>=) — exactly the
// kind of thing where a passing test can still miss an off-by-one bug.

export function discountRate(orderTotal: number): number {
  if (orderTotal >= 1000) {
    return 0.2;
  }
  if (orderTotal >= 500) {
    return 0.1;
  }
  if (orderTotal >= 100) {
    return 0.05;
  }
  return 0;
}

export function applyDiscount(orderTotal: number): number {
  const rate = discountRate(orderTotal);
  return orderTotal - orderTotal * rate;
}
