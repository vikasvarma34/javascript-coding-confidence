// Requirements:
// processRefund(amount)
//
// - Reuse the functions from refund-utils.js.
// - Do not duplicate their calculations.
//
// Status rules:
// amount >= 5000 → "REVIEW_REQUIRED"
// otherwise       → "APPROVED"
//
// Create whatever internal helper you think is appropriate.
//
// Return:
// {
//   originalAmount,
//   fee,
//   refundAmount,
//   status
// }
//
// Decide:
// - what to import;
// - what to export;
// - what should remain internal.

// Write your implementation here.

import { calculateRefundFee, calculateRefundAmount } from "./refund-utils.js";

export function processRefund(amount) {
  const fee = calculateRefundFee(amount);
  const refundAmount = calculateRefundAmount(amount, fee);
  return {
    originalAmount: amount,
    fee,
    refundAmount,
    status: amount >= 5000 ? "REVIEW_REQUIRED" : "APPROVED",
  };
}
