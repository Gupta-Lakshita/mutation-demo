// A small cart calculation that pulls several concepts together.
// Mix of arithmetic, conditional-boundary, and logical mutations.

export interface CartItem {
  price: number;
  quantity: number;
}

export function subtotal(items: CartItem[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

export function shippingCost(subtotalAmount: number): number {
  // Free shipping over 50, otherwise flat 5.
  if (subtotalAmount >= 50) {
    return 0;
  }
  return 5;
}

export function taxAmount(subtotalAmount: number, taxRate: number): number {
  return subtotalAmount * taxRate;
}

export function cartTotal(items: CartItem[], taxRate: number): number {
  const sub = subtotal(items);
  return sub + taxAmount(sub, taxRate) + shippingCost(sub);
}
