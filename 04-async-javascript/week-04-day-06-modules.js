// // import {
// //   calculateProcessingFee,
// //   calculateNetAmount,
// //   isLargePayment,
// // } from "./modules/payment-utils.js";

// // // // // console.log("----");

// // // // // // Import calculateProcessingFee from payment-utils.js.
// // // // // // Work out the correct relative path yourself.

// // // // // // ============================================================
// // // // // // Tests
// // // // // // ============================================================

// // // // // console.log("Test 1:", calculateProcessingFee(1000) === 20);

// // // // // console.log("Test 2:", calculateProcessingFee(2500) === 50);

// // // // // console.log("Test 3:", calculateProcessingFee(0) === 0);

// // // // // // Expected:
// // // // // // Test 1: true
// // // // // // Test 2: true
// // // // // // Test 3: true

// // // // onsole.log("----");

// // // // // Import calculateProcessingFee from payment-utils.js.
// // // // // Work out the correct relative path yourself.

// // // // // ============================================================
// // // // // Tests
// // // // // ============================================================

// // // // console.log("Test 1:", calculateProcessingFee(1000) === 20);

// // // // console.log("Test 2:", calculateProcessingFee(2500) === 50);

// // // // console.log("Test 3:", calculateProcessingFee(0) === 0);

// // // // // Expected:
// // // // // Test 1: true
// // // // // Test 2: true
// // // // // Test 3: true

// // // console.log("----");

// // // // Import all required functions from payment-utils.js.

// // // // ============================================================
// // // // Tests
// // // // ============================================================

// // // const fee1 = calculateProcessingFee(1000);

// // // console.log("Test 1:", fee1 === 20);

// // // console.log("Test 2:", calculateNetAmount(1000, fee1) === 980);

// // // console.log("Test 3:", isLargePayment(5000) === true);

// // // console.log("Test 4:", isLargePayment(4999) === false);

// // // // Expected:
// // // // Test 1: true
// // // // Test 2: true
// // // // Test 3: true
// // // // Test 4: true

// // // ============================================================
// // // FILE:
// // // 04-async-javascript/week-04-day-06-modules.js
// // // ============================================================

// // console.log("----");

// // // Import only buildPaymentSummary from payment-service.js.
// // // Work out the relative path yourself.

// // // ============================================================
// // // Tests
// // // ============================================================

// // const result1 = buildPaymentSummary(1000);

// // console.log(
// //   "Test 1:",
// //   result1.amount === 1000 &&
// //     result1.processingFee === 20 &&
// //     result1.netAmount === 980 &&
// //     result1.largePayment === false,
// // );

// // const result2 = buildPaymentSummary(5000);

// // console.log(
// //   "Test 2:",
// //   result2.amount === 5000 &&
// //     result2.processingFee === 100 &&
// //     result2.netAmount === 4900 &&
// //     result2.largePayment === true,
// // );

// // const result3 = buildPaymentSummary(0);

// // console.log(
// //   "Test 3:",
// //   result3.amount === 0 &&
// //     result3.processingFee === 0 &&
// //     result3.netAmount === 0 &&
// //     result3.largePayment === false,
// // );

// // // Expected:
// // // Test 1: true
// // // Test 2: true
// // // Test 3: true

// // ============================================================
// // FILE:
// // 04-async-javascript/week-04-day-06-modules.js
// // ============================================================

// import { buildPaymentSummary } from "./modules/payment-service.js";

// // console.log("----");

// // // Import only buildPaymentSummary from payment-service.js.
// // // Work out the relative path yourself.

// // // ============================================================
// // // Tests
// // // ============================================================

// // const result1 = buildPaymentSummary(1000);

// // console.log(
// //   "Test 1:",
// //   result1.amount === 1000 &&
// //     result1.processingFee === 20 &&
// //     result1.netAmount === 980 &&
// //     result1.largePayment === false,
// // );

// // const result2 = buildPaymentSummary(5000);

// // console.log(
// //   "Test 2:",
// //   result2.amount === 5000 &&
// //     result2.processingFee === 100 &&
// //     result2.netAmount === 4900 &&
// //     result2.largePayment === true,
// // );

// // const result3 = buildPaymentSummary(0);

// // console.log(
// //   "Test 3:",
// //   result3.amount === 0 &&
// //     result3.processingFee === 0 &&
// //     result3.netAmount === 0 &&
// //     result3.largePayment === false,
// // );

// // // Expected:
// // // Test 1: true
// // // Test 2: true
// // // Test 3: true

// // ============================================================
// // FILE:
// // 04-async-javascript/week-04-day-06-modules.js
// // ============================================================

// console.log("----");

// // Import only what this file actually needs.

// // ============================================================
// // Tests
// // ============================================================

// const result1 = buildPaymentSummary(1000);

// console.log(
//   "Test 1:",
//   result1.processingFee === 20 &&
//     result1.netAmount === 980 &&
//     result1.largePayment === false &&
//     result1.tier === "STANDARD",
// );

// const result2 = buildPaymentSummary(5000);

// console.log(
//   "Test 2:",
//   result2.processingFee === 100 &&
//     result2.netAmount === 4900 &&
//     result2.largePayment === true &&
//     result2.tier === "LARGE",
// );

// const result3 = buildPaymentSummary(10000);

// console.log(
//   "Test 3:",
//   result3.processingFee === 200 &&
//     result3.netAmount === 9800 &&
//     result3.largePayment === true &&
//     result3.tier === "PREMIUM",
// );

// // Expected:
// // Test 1: true
// // Test 2: true
// // Test 3: true

// ============================================================
// FILE:
// 04-async-javascript/week-04-day-06-modules.js
// ============================================================

import { processRefund } from "./modules/refund-service.js";
console.log("----");

// Import only what this file actually needs.

// ============================================================
// Tests
// ============================================================

const result1 = processRefund(1000);

console.log(
  "Test 1:",
  result1.originalAmount === 1000 &&
    result1.fee === 50 &&
    result1.refundAmount === 950 &&
    result1.status === "APPROVED",
);

const result2 = processRefund(5000);

console.log(
  "Test 2:",
  result2.originalAmount === 5000 &&
    result2.fee === 250 &&
    result2.refundAmount === 4750 &&
    result2.status === "REVIEW_REQUIRED",
);

const result3 = processRefund(0);

console.log(
  "Test 3:",
  result3.originalAmount === 0 &&
    result3.fee === 0 &&
    result3.refundAmount === 0 &&
    result3.status === "APPROVED",
);

// Expected:
// Test 1: true
// Test 2: true
// Test 3: true
