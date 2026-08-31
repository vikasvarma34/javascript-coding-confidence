// ============================================================
// FILE:
// 04-async-javascript/modules/refund-utils.js
// ============================================================

// Requirements:
// calculateRefundFee(amount)
// - Fee is 5% of amount.
//
// calculateRefundAmount(amount, fee)
// - Return amount minus fee.
//
// Decide what needs to be exported.

export function calculateRefundFee(amount) {
  return amount * (5 / 100);
}

export function calculateRefundAmount(amount, fee) {
  return amount - fee;
}
