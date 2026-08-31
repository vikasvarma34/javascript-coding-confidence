// // ============================================================
// // FILE:
// // 04-async-javascript/modules/payment-service.js
// // ============================================================

// // Requirements:
// //
// // Create and export a function:
// // buildPaymentSummary(amount)
// //
// // It must use the existing functions from payment-utils.js.
// //
// // Return this structure:
// //
// // {
// //   amount: 1000,
// //   processingFee: 20,
// //   netAmount: 980,
// //   largePayment: false
// // }
// //
// // Important:
// // - Do not duplicate the calculation logic from payment-utils.js.
// // - Import and reuse the existing functions.
// // - payment-service.js and payment-utils.js are in the same folder.

// // Write the required import here.

// import {
//   calculateProcessingFee,
//   calculateNetAmount,
//   isLargePayment,
// } from "./payment-utils.js";

// export function buildPaymentSummary(amount) {
//   const processingFee = calculateProcessingFee(amount);
//   const netAmount = calculateNetAmount(amount, processingFee);
//   const isLargePaymentCheck = isLargePayment(amount);
//   return {
//     amount,
//     processingFee,
//     netAmount,
//     largePayment: isLargePaymentCheck,
//   };
// }

// ============================================================
// FILE:
// 04-async-javascript/modules/payment-service.js
// ============================================================

import {
  calculateProcessingFee,
  calculateNetAmount,
  isLargePayment,
} from "./payment-utils.js";

// Requirements:
//
// Add an internal function named determinePaymentTier.
//
// Rules:
// - amount >= 10000  → "PREMIUM"
// - amount >= 5000   → "LARGE"
// - otherwise        → "STANDARD"
//
// Then update buildPaymentSummary(amount) so it returns:
//
// {
//   amount,
//   processingFee,
//   netAmount,
//   largePayment,
//   tier
// }
//
// Important:
// - determinePaymentTier is only needed inside this module.
// - Decide whether it should be exported.
// - Continue reusing the existing utility functions.
// - Do not duplicate their calculation logic.

// Write determinePaymentTier here.

function determinePaymentTier(amount) {
  if (amount >= 10000) {
    return "PREMIUM";
  } else if (amount >= 5000) {
    return "LARGE";
  } else {
    return "STANDARD";
  }
}

export function buildPaymentSummary(amount) {
  const processingFee = calculateProcessingFee(amount);
  const netAmount = calculateNetAmount(amount, processingFee);
  const largePayment = isLargePayment(amount);
  const tier = determinePaymentTier(amount);
  return {
    amount,
    processingFee,
    netAmount,
    largePayment,
    tier,
  };
}
