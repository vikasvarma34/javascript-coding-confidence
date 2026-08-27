// // // // console.log("Let's Come On!");

// // // // function getProductPrice(product) {
// // // //   if (!product) {
// // // //     throw new Error("Product not found");
// // // //   }

// // // //   return product.price;
// // // // }

// // // // try {
// // // //   const price = getProductPrice(null);
// // // //   console.log("Price:", price);
// // // // } catch (error) {
// // // //   console.log("Handled:", error.message);
// // // // }

// // // // console.log("Program continues");

// // // console.log("----");

// // // // ========================================
// // // // Exercise 1 — Process Account Withdrawal
// // // // ========================================

// // // // Business rules:
// // // //
// // // // processWithdrawal(account, amount)
// // // //
// // // // - amount must be greater than 0.
// // // //   Otherwise throw: "Withdrawal amount must be greater than zero"
// // // //
// // // // - account.status must be "ACTIVE".
// // // //   Otherwise throw: "Account is not active"
// // // //
// // // // - amount cannot exceed account.balance.
// // // //   Otherwise throw: "Insufficient balance"
// // // //
// // // // - If everything is valid, return:
// // // // {
// // // //   accountId: account.id,
// // // //   withdrawnAmount: amount,
// // // //   remainingBalance: account.balance - amount
// // // // }
// // // //
// // // // Important:
// // // // - Do not mutate the account object.
// // // // - Use `throw new Error(...)` for invalid situations.
// // // // - Do not put try/catch inside processWithdrawal.
// // // //   The caller below will handle the errors.

// // // function processWithdrawal(account, amount) {
// // //   if (amount <= 0) {
// // //     throw new Error("Withdrawal amount must be greater than zero");
// // //   }

// // //   if (account.status !== "ACTIVE") {
// // //     throw new Error("Account is not active");
// // //   }

// // //   if (amount > account.balance) {
// // //     throw new Error("Insufficient balance");
// // //   }

// // //   return {
// // //     accountId: account.id,
// // //     withdrawnAmount: amount,
// // //     remainingBalance: account.balance - amount,
// // //   };
// // // }

// // // // ========================================
// // // // Test helper — supplied
// // // // ========================================

// // // function runWithdrawalTest(account, amount, expected) {
// // //   try {
// // //     const result = processWithdrawal(account, amount);

// // //     console.log(JSON.stringify(result) === JSON.stringify(expected));
// // //   } catch (error) {
// // //     console.log(error.message === expected);
// // //   }
// // // }

// // // // ========================================
// // // // Tests
// // // // ========================================

// // // runWithdrawalTest({ id: "ACC-101", status: "ACTIVE", balance: 500 }, 200, {
// // //   accountId: "ACC-101",
// // //   withdrawnAmount: 200,
// // //   remainingBalance: 300,
// // // });

// // // runWithdrawalTest(
// // //   { id: "ACC-102", status: "ACTIVE", balance: 500 },
// // //   0,
// // //   "Withdrawal amount must be greater than zero",
// // // );

// // // runWithdrawalTest(
// // //   { id: "ACC-103", status: "FROZEN", balance: 500 },
// // //   100,
// // //   "Account is not active",
// // // );

// // // runWithdrawalTest(
// // //   { id: "ACC-104", status: "ACTIVE", balance: 100 },
// // //   150,
// // //   "Insufficient balance",
// // // );

// // // // Expected:
// // // // true
// // // // true
// // // // true
// // // // true

// // console.log("----");

// // // ========================================
// // // Exercise 2 — Create Payment Result
// // // ========================================

// // // Business rules:
// // //
// // // createPaymentResult(payment)
// // //
// // // 1. payment.amount must be greater than 0.
// // //    If not, throw:
// // //    "Payment amount must be greater than zero"
// // //
// // // 2. Call chargePaymentProvider(payment).
// // //
// // // 3. If everything succeeds, return:
// // // {
// // //   success: true,
// // //   transactionId: <provider transactionId>
// // // }
// // //
// // // Error handling:
// // //
// // // - Validation errors should be returned to the caller with their
// // //   original useful message:
// // //
// // // {
// // //   success: false,
// // //   type: "VALIDATION_ERROR",
// // //   message: <validation message>
// // // }
// // //
// // // - Any failure coming from chargePaymentProvider() is considered
// // //   a system error.
// // //
// // // - For a system error, DO NOT return the provider's original
// // //   technical message.
// // //
// // // Return:
// // //
// // // {
// // //   success: false,
// // //   type: "SYSTEM_ERROR",
// // //   message: "Unable to process payment"
// // // }
// // //
// // // You may inspect error.message to decide what happened.
// // //
// // // Do not change chargePaymentProvider().

// // async function chargePaymentProvider(payment) {
// //   if (payment.forceSystemFailure) {
// //     throw new Error("PAYMENT_GATEWAY_TIMEOUT host=payments.internal port=8443");
// //   }

// //   return {
// //     transactionId: `TX-${payment.id}`,
// //   };
// // }

// // async function createPaymentResult(payment) {
// //   try {
// //     if (payment.amount <= 0) {
// //       throw new Error("Payment amount must be greater than zero");
// //     }
// //   } catch (error) {
// //     return {
// //       success: false,
// //       type: "VALIDATION_ERROR",
// //       message: error.message,
// //     };
// //   }

// //   let transaction;
// //   try {
// //     transaction = await chargePaymentProvider(payment);
// //   } catch (error) {
// //     return {
// //       success: false,
// //       type: "SYSTEM_ERROR",
// //       message: "Unable to process payment",
// //     };
// //   }

// //   return {
// //     success: true,
// //     transactionId: transaction.transactionId,
// //   };
// // }

// // // ========================================
// // // Tests
// // // ========================================

// // async function runExercise2Tests() {
// //   const result1 = await createPaymentResult({
// //     id: "PAY-101",
// //     amount: 250,
// //   });

// //   console.log(
// //     "Test 1:",
// //     JSON.stringify(result1) ===
// //       JSON.stringify({
// //         success: true,
// //         transactionId: "TX-PAY-101",
// //       }),
// //   );

// //   const result2 = await createPaymentResult({
// //     id: "PAY-102",
// //     amount: 0,
// //   });

// //   console.log(
// //     "Test 2:",
// //     JSON.stringify(result2) ===
// //       JSON.stringify({
// //         success: false,
// //         type: "VALIDATION_ERROR",
// //         message: "Payment amount must be greater than zero",
// //       }),
// //   );

// //   const result3 = await createPaymentResult({
// //     id: "PAY-103",
// //     amount: 500,
// //     forceSystemFailure: true,
// //   });

// //   console.log(
// //     "Test 3:",
// //     JSON.stringify(result3) ===
// //       JSON.stringify({
// //         success: false,
// //         type: "SYSTEM_ERROR",
// //         message: "Unable to process payment",
// //       }),
// //   );
// // }

// // runExercise2Tests();

// // // Expected:
// // // ----
// // // Test 1: true
// // // Test 2: true
// // // Test 3: true

// console.log("----");

// // ========================================
// // Exercise 3 — Cancel Booking
// // ========================================

// // Business rules:
// //
// // cancelBooking(request)
// //
// // - request.bookingId is required.
// //   If missing, throw an Error with:
// //     message: "Booking ID is required"
// //     code: "VALIDATION_ERROR"
// //
// // - Call findBooking(request.bookingId).
// //
// // - If no booking exists, throw an Error with:
// //     message: "Booking not found"
// //     code: "NOT_FOUND"
// //
// // - A booking with status "COMPLETED" cannot be cancelled.
// //   Throw an Error with:
// //     message: "Completed booking cannot be cancelled"
// //     code: "VALIDATION_ERROR"
// //
// // - Call saveCancellation(booking).
// //
// // - On success return:
// // {
// //   success: true,
// //   bookingId: <booking id>
// // }
// //
// // Error handling:
// //
// // VALIDATION_ERROR:
// // {
// //   success: false,
// //   type: "VALIDATION_ERROR",
// //   message: <original safe message>
// // }
// //
// // NOT_FOUND:
// // {
// //   success: false,
// //   type: "NOT_FOUND",
// //   message: <original safe message>
// // }
// //
// // Any other error is a system error.
// // Do NOT expose its original technical message.
// //
// // Return:
// // {
// //   success: false,
// //   type: "SYSTEM_ERROR",
// //   message: "Unable to cancel booking"
// // }
// //
// // Requirements:
// // - Use only ONE try/catch inside cancelBooking().
// // - Do not change the supplied async functions.
// // - Do not classify errors by comparing exact message strings.

// async function findBooking(bookingId) {
//   if (bookingId === "BK-404") {
//     return null;
//   }

//   if (bookingId === "BK-DB") {
//     throw new Error(
//       "ECONNRESET database.internal connection unexpectedly closed",
//     );
//   }

//   return {
//     id: bookingId,
//     status: bookingId === "BK-200" ? "COMPLETED" : "CONFIRMED",
//   };
// }

// async function saveCancellation(booking) {
//   if (booking.id === "BK-SAVE") {
//     throw new Error("WRITE_FAILED bookings_table lock timeout after 3000ms");
//   }

//   return true;
// }

// async function cancelBooking(request) {
//   try {
//     const bookingId = request.bookingId ?? "";
//     if (bookingId.trim() === "") {
//       const error = new Error("Booking ID is required");
//       error.code = "VALIDATION_ERROR";

//       throw error;
//     }

//     const booking = await findBooking(bookingId);

//     if (booking === null) {
//       const error = new Error("Booking not found");
//       error.code = "NOT_FOUND";

//       throw error;
//     }

//     if (booking.status === "COMPLETED") {
//       const error = new Error("Completed booking cannot be cancelled");
//       error.code = "VALIDATION_ERROR";

//       throw error;
//     }

//     await saveCancellation(booking);

//     return {
//       success: true,
//       bookingId: bookingId,
//     };
//   } catch (error) {
//     if (error.code === "VALIDATION_ERROR" || error.code === "NOT_FOUND") {
//       return {
//         success: false,
//         type: error.code,
//         message: error.message,
//       };
//     } else {
//       return {
//         success: false,
//         type: "SYSTEM_ERROR",
//         message: "Unable to cancel booking",
//       };
//     }
//   }
// }

// // ========================================
// // Tests
// // ========================================

// async function runExercise3Tests() {
//   const result1 = await cancelBooking({
//     bookingId: "BK-101",
//   });

//   console.log(
//     "Test 1:",
//     JSON.stringify(result1) ===
//       JSON.stringify({
//         success: true,
//         bookingId: "BK-101",
//       }),
//   );

//   const result2 = await cancelBooking({});

//   console.log(
//     "Test 2:",
//     JSON.stringify(result2) ===
//       JSON.stringify({
//         success: false,
//         type: "VALIDATION_ERROR",
//         message: "Booking ID is required",
//       }),
//   );

//   const result3 = await cancelBooking({
//     bookingId: "BK-404",
//   });

//   console.log(
//     "Test 3:",
//     JSON.stringify(result3) ===
//       JSON.stringify({
//         success: false,
//         type: "NOT_FOUND",
//         message: "Booking not found",
//       }),
//   );

//   const result4 = await cancelBooking({
//     bookingId: "BK-200",
//   });

//   console.log(
//     "Test 4:",
//     JSON.stringify(result4) ===
//       JSON.stringify({
//         success: false,
//         type: "VALIDATION_ERROR",
//         message: "Completed booking cannot be cancelled",
//       }),
//   );

//   const result5 = await cancelBooking({
//     bookingId: "BK-DB",
//   });

//   console.log(
//     "Test 5:",
//     JSON.stringify(result5) ===
//       JSON.stringify({
//         success: false,
//         type: "SYSTEM_ERROR",
//         message: "Unable to cancel booking",
//       }),
//   );

//   const result6 = await cancelBooking({
//     bookingId: "BK-SAVE",
//   });

//   console.log(
//     "Test 6:",
//     JSON.stringify(result6) ===
//       JSON.stringify({
//         success: false,
//         type: "SYSTEM_ERROR",
//         message: "Unable to cancel booking",
//       }),
//   );

//   console.log(
//     "Hidden Test:",
//     JSON.stringify(await cancelBooking({ bookingId: "  " })) ===
//       JSON.stringify({
//         success: false,
//         type: "VALIDATION_ERROR",
//         message: "Booking ID is required",
//       }),
//   );
// }

// runExercise3Tests();

// // Expected:
// // ----
// // Test 1: true
// // Test 2: true
// // Test 3: true
// // Test 4: true
// // Test 5: true
// // Test 6: true

console.log("----");

// ========================================
// Exercise 4 — Process Refund
// ========================================

// processRefund(request)
//
// Business rules:
//
// 1. request.paymentId is required.
//    Failure:
//      code: "VALIDATION_ERROR"
//      message: "Payment ID is required"
//
// 2. request.amount must be greater than 0.
//    Failure:
//      code: "VALIDATION_ERROR"
//      message: "Refund amount must be greater than zero"
//
// 3. Fetch the payment using getPayment(paymentId).
//
// 4. If no payment exists:
//      code: "NOT_FOUND"
//      message: "Payment not found"
//
// 5. Only a payment with status "CAPTURED" can be refunded.
//    Otherwise:
//      code: "CONFLICT"
//      message: "Payment cannot be refunded"
//
// 6. Refund amount cannot be greater than payment.amount.
//    Failure:
//      code: "VALIDATION_ERROR"
//      message: "Refund amount exceeds payment amount"
//
// 7. Call sendRefund(payment, request.amount).
//
// Success:
//
// {
//   success: true,
//   paymentId: <payment id>,
//   refundedAmount: <amount>
// }
//
// Error response for these known codes:
// - VALIDATION_ERROR
// - NOT_FOUND
// - CONFLICT
//
// {
//   success: false,
//   type: <error code>,
//   message: <original error message>
// }
//
// Any other error is a system error.
//
// Return:
//
// {
//   success: false,
//   type: "SYSTEM_ERROR",
//   message: "Unable to process refund"
// }
//
// Requirements:
// - Use ONE try/catch inside processRefund().
// - Do not compare exact error messages inside catch.
// - Do not expose technical system-error messages.
// - Do not modify the supplied functions.

async function getPayment(paymentId) {
  if (paymentId === "PAY-404") {
    return null;
  }

  if (paymentId === "PAY-DB") {
    throw new Error("DATABASE_TIMEOUT payments.internal query exceeded 5000ms");
  }

  return {
    id: paymentId,
    amount: 500,
    status: paymentId === "PAY-PENDING" ? "PENDING" : "CAPTURED",
  };
}

async function sendRefund(payment, amount) {
  if (payment.id === "PAY-GATEWAY") {
    throw new Error(
      "REFUND_GATEWAY_CONNECTION_FAILED internal-refund-service:9443",
    );
  }

  return {
    refundId: `REF-${payment.id}`,
    amount,
  };
}

async function processRefund(request) {
  try {
    const paymentId = request?.paymentId;
    if (paymentId === undefined) {
      const error = new Error("Payment ID is required");
      error.code = "VALIDATION_ERROR";

      throw error;
    }

    if (request.amount <= 0) {
      const error = new Error("Refund amount must be greater than zero");
      error.code = "VALIDATION_ERROR";

      throw error;
    }

    const payment = await getPayment(paymentId);

    // console.log("Payment : ");
    // console.log(payment);

    if (payment === null) {
      const error = new Error("Payment not found");
      error.code = "NOT_FOUND";

      throw error;
    }

    if (payment.status !== "CAPTURED") {
      const error = new Error("Payment cannot be refunded");
      error.code = "CONFLICT";

      throw error;
    }

    const requestAmount = request?.amount ?? 0;
    if (requestAmount > payment.amount) {
      const error = new Error("Refund amount exceeds payment amount");
      error.code = "VALIDATION_ERROR";

      throw error;
    }

    const refund = await sendRefund(payment, request.amount);

    return {
      success: true,
      paymentId: payment.id,
      refundedAmount: request.amount,
    };
  } catch (error) {
    if (
      error.code === "VALIDATION_ERROR" ||
      error.code === "CONFLICT" ||
      error.code === "NOT_FOUND"
    ) {
      return {
        success: false,
        type: error.code,
        message: error.message,
      };
    } else {
      return {
        success: false,
        type: "SYSTEM_ERROR",
        message: "Unable to process refund",
      };
    }
  }
}

console.log("----");

// ========================================
// Exercise 4 — Tests
// ========================================

async function runExercise4Tests() {
  // Test 1 — Successful refund
  const result1 = await processRefund({
    paymentId: "PAY-101",
    amount: 200,
  });

  console.log(
    "Test 1 - Successful refund:",
    JSON.stringify(result1) ===
      JSON.stringify({
        success: true,
        paymentId: "PAY-101",
        refundedAmount: 200,
      }),
  );

  // Test 2 — Missing payment ID
  const result2 = await processRefund({
    amount: 100,
  });

  console.log(
    "Test 2 - Missing payment ID:",
    JSON.stringify(result2) ===
      JSON.stringify({
        success: false,
        type: "VALIDATION_ERROR",
        message: "Payment ID is required",
      }),
  );

  // Test 3 — Invalid refund amount
  const result3 = await processRefund({
    paymentId: "PAY-101",
    amount: 0,
  });

  console.log(
    "Test 3 - Amount is zero:",
    JSON.stringify(result3) ===
      JSON.stringify({
        success: false,
        type: "VALIDATION_ERROR",
        message: "Refund amount must be greater than zero",
      }),
  );

  // Test 4 — Payment does not exist
  const result4 = await processRefund({
    paymentId: "PAY-404",
    amount: 100,
  });

  console.log(
    "Test 4 - Payment not found:",
    JSON.stringify(result4) ===
      JSON.stringify({
        success: false,
        type: "NOT_FOUND",
        message: "Payment not found",
      }),
  );

  // Test 5 — Payment status does not allow refund
  const result5 = await processRefund({
    paymentId: "PAY-PENDING",
    amount: 100,
  });

  console.log(
    "Test 5 - Payment cannot be refunded:",
    JSON.stringify(result5) ===
      JSON.stringify({
        success: false,
        type: "CONFLICT",
        message: "Payment cannot be refunded",
      }),
  );

  // Test 6 — Refund amount exceeds original payment
  const result6 = await processRefund({
    paymentId: "PAY-101",
    amount: 700,
  });

  console.log(
    "Test 6 - Refund exceeds payment:",
    JSON.stringify(result6) ===
      JSON.stringify({
        success: false,
        type: "VALIDATION_ERROR",
        message: "Refund amount exceeds payment amount",
      }),
  );

  // Test 7 — Database/system failure
  const result7 = await processRefund({
    paymentId: "PAY-DB",
    amount: 100,
  });

  console.log(
    "Test 7 - Database failure:",
    JSON.stringify(result7) ===
      JSON.stringify({
        success: false,
        type: "SYSTEM_ERROR",
        message: "Unable to process refund",
      }),
  );

  // Test 8 — Refund provider/system failure
  const result8 = await processRefund({
    paymentId: "PAY-GATEWAY",
    amount: 100,
  });

  console.log(
    "Test 8 - Refund gateway failure:",
    JSON.stringify(result8) ===
      JSON.stringify({
        success: false,
        type: "SYSTEM_ERROR",
        message: "Unable to process refund",
      }),
  );
}

runExercise4Tests();

// Expected:
// ----
// Test 1 - Successful refund: true
// Test 2 - Missing payment ID: true
// Test 3 - Amount is zero: true
// Test 4 - Payment not found: true
// Test 5 - Payment cannot be refunded: true
// Test 6 - Refund exceeds payment: true
// Test 7 - Database failure: true
// Test 8 - Refund gateway failure: true
