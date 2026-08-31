// // Requirements:
// // - Create a function named calculateProcessingFee.
// // - It receives an amount.
// // - Processing fee is 2% of the amount.
// // - Make the function available to other JavaScript modules.

// ------ //

// Requirements:
// - Keep calculateProcessingFee.
// - Create calculateNetAmount.
// - calculateNetAmount receives:
//      amount
//      processingFee
// - It returns amount - processingFee.
//
// - Create isLargePayment.
// - It receives an amount.
// - Return true when amount is 5000 or more.
// - Return false otherwise.
//
// - Make all three functions available to other modules.

export function calculateProcessingFee(amount) {
  return amount * (2 / 100);
}

export function calculateNetAmount(amount, processingFee) {
  return amount - processingFee;
}

export function isLargePayment(amount) {
  if (amount >= 5000) {
    return true;
  }

  return false;
}
