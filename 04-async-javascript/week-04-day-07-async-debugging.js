// // // // console.log("Let's Come on!");

// // // // console.log("----");

// // // // // ========================================
// // // // // Exercise 1 — Payment Status Bug
// // // // // ========================================

// // // // // Requirements:
// // // // // - fetchPayment() returns a Promise.
// // // // // - buildPaymentResponse() must return:
// // // // //   { success: true, status: "COMPLETED" }
// // // // // - Do not change fetchPayment().
// // // // // - Find the async bug in buildPaymentResponse().
// // // // // - Fix only what is necessary.

// // // // function fetchPayment() {
// // // //   return new Promise((resolve) => {
// // // //     setTimeout(() => {
// // // //       resolve({
// // // //         id: "PAY-101",
// // // //         status: "COMPLETED",
// // // //       });
// // // //     }, 300);
// // // //   });
// // // // }

// // // // async function buildPaymentResponse() {
// // // //   const payment = await fetchPayment();

// // // //   return {
// // // //     success: true,
// // // //     status: payment.status,
// // // //   };
// // // // }

// // // // // ========================================
// // // // // Tests
// // // // // ========================================

// // // // const result = await buildPaymentResponse();

// // // // console.log("Test 1:", result.success === true);

// // // // console.log("Test 2:", result.status === "COMPLETED");

// // // // // Expected:
// // // // // Test 1: true
// // // // // Test 2: true

// // // console.log("----");

// // // // ========================================
// // // // Exercise 2 — Refund Failure Bug
// // // // ========================================

// // // // Requirements:
// // // // - processRefund() rejects when refundId is missing.
// // // // - buildRefundResult() should return:
// // // //
// // // // Success:
// // // // { success: true, message: "Refund processed" }
// // // //
// // // // Failure:
// // // // { success: false, message: "Refund ID is required" }
// // // //
// // // // - Do not change processRefund().
// // // // - Find and fix the bug inside buildRefundResult().
// // // // - Keep the solution readable.

// // // function processRefund(refundId) {
// // //   return new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //       if (!refundId) {
// // //         reject(new Error("Refund ID is required"));
// // //       }

// // //       resolve("Refund processed");
// // //     }, 200);
// // //   });
// // // }

// // // async function buildRefundResult(refundId) {
// // //   let message;
// // //   try {
// // //     message = await processRefund(refundId);
// // //   } catch (error) {
// // //     console.log("Refund failed:", error.message);
// // //     return {
// // //       success: false,
// // //       message: error.message,
// // //     };
// // //   }

// // //   return {
// // //     success: true,
// // //     message,
// // //   };
// // // }

// // // // ========================================
// // // // Tests
// // // // ========================================

// // // const result1 = await buildRefundResult("REF-101");

// // // console.log(
// // //   "Test 1:",
// // //   result1.success === true && result1.message === "Refund processed",
// // // );

// // // const result2 = await buildRefundResult("");

// // // console.log(
// // //   "Test 2:",
// // //   result2.success === false && result2.message === "Refund ID is required",
// // // );

// // // // Expected:
// // // // Test 1: true
// // // // Test 2: true

// // console.log("----");

// // // ========================================
// // // Exercise 3 — Slow Order Summary
// // // ========================================

// // // Requirements:
// // // - fetchOrder() must run first.
// // // - fetchCustomer() and fetchWarehouse() both depend on the order.
// // // - Once the order is available, customer and warehouse lookups do NOT depend on each other.
// // // - buildOrderSummary() must return:
// // //
// // // {
// // //   orderId: "ORD-10",
// // //   customerName: "Vikas",
// // //   warehouseName: "Hyderabad Central"
// // // }
// // //
// // // - Do not change the helper functions.
// // // - Improve buildOrderSummary() so it does not wait unnecessarily.

// // function fetchOrder() {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve({
// //         id: "ORD-10",
// //         customerId: "CUS-1",
// //         warehouseId: "WH-1",
// //       });
// //     }, 300);
// //   });
// // }

// // function fetchCustomer(customerId) {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve({
// //         id: customerId,
// //         name: "Vikas",
// //       });
// //     }, 400);
// //   });
// // }

// // function fetchWarehouse(warehouseId) {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve({
// //         id: warehouseId,
// //         name: "Hyderabad Central",
// //       });
// //     }, 500);
// //   });
// // }

// // async function buildOrderSummary() {
// //   try {
// //     const order = await fetchOrder();

// //     const [customer, warehouse] = await Promise.all([
// //       fetchCustomer(order.customerId),
// //       fetchWarehouse(order.warehouseId),
// //     ]);

// //     return {
// //       orderId: order.id,
// //       customerName: customer.name,
// //       warehouseName: warehouse.name,
// //     };
// //   } catch (error) {
// //     return error;
// //   }
// // }

// // // ========================================
// // // Tests
// // // ========================================

// // const startTime = Date.now();

// // const result = await buildOrderSummary();

// // const duration = Date.now() - startTime;

// // console.log("Test 1:", result.orderId === "ORD-10");

// // console.log("Test 2:", result.customerName === "Vikas");

// // console.log("Test 3:", result.warehouseName === "Hyderabad Central");

// // console.log("Test 4:", duration < 1000);

// // console.log("Duration:", duration, "ms");

// // // Expected:
// // // Test 1: true
// // // Test 2: true
// // // Test 3: true
// // // Test 4: true

// console.log("----");

// // ========================================
// // Exercise 4 — Parallel Failure Handling
// // ========================================

// // Requirements:
// // - fetchUser() and fetchPermissions() are independent.
// // - They should run in parallel.
// // - If both succeed, return:
// //
// // {
// //   success: true,
// //   userName: "Vikas",
// //   permissions: ["READ", "WRITE"]
// // }
// //
// // - If either operation fails, return:
// //
// // {
// //   success: false,
// //   message: <actual error message>
// // }
// //
// // - Do not change the helper functions.
// // - Fix only buildUserAccess().

// function fetchUser(shouldFail) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject(new Error("User service unavailable"));
//         return;
//       }

//       resolve({
//         id: "USER-1",
//         name: "Vikas",
//       });
//     }, 300);
//   });
// }

// function fetchPermissions(shouldFail) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject(new Error("Permission service unavailable"));
//         return;
//       }

//       resolve(["READ", "WRITE"]);
//     }, 400);
//   });
// }

// async function buildUserAccess(userShouldFail, permissionsShouldFail) {
//   try {
//     const [user, permissions] = await Promise.all([
//       fetchUser(userShouldFail),
//       fetchPermissions(permissionsShouldFail),
//     ]);

//     return {
//       success: true,
//       userName: user.name,
//       permissions,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message: error.message,
//     };
//   }
// }

// // ========================================
// // Tests
// // ========================================

// const result1 = await buildUserAccess(false, false);

// console.log(
//   "Test 1:",
//   result1.success === true &&
//     result1.userName === "Vikas" &&
//     result1.permissions.length === 2,
// );

// const result2 = await buildUserAccess(true, false);

// console.log(
//   "Test 2:",
//   result2.success === false && result2.message === "User service unavailable",
// );

// const result3 = await buildUserAccess(false, true);

// console.log(
//   "Test 3:",
//   result3.success === false &&
//     result3.message === "Permission service unavailable",
// );

// // Expected:
// // Test 1: true
// // Test 2: true
// // Test 3: true

console.log("----");

// ========================================
// Final Exercise — Build Account Dashboard
// ========================================

// Requirements:
//
// 1. fetchAccount(accountId) must happen first.
//
// 2. If the account does not exist, fetchAccount() rejects.
//
// 3. After the account is available:
//    - fetchTransactions(account.id)
//    - fetchRewards(account.id)
//    are independent and should run without unnecessary waiting.
//
// 4. On success return:
//
// {
//   success: true,
//   accountName: "...",
//   transactionCount: <number>,
//   rewardPoints: <number>
// }
//
// 5. If any async operation fails, return:
//
// {
//   success: false,
//   message: <actual error message>
// }
//
// 6. Do not change the supplied helper functions.

function fetchAccount(accountId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!accountId) {
        reject(new Error("Account ID is required"));
        return;
      }

      resolve({
        id: accountId,
        name: "Primary Account",
      });
    }, 200);
  });
}

function fetchTransactions(accountId, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Transaction service unavailable"));
        return;
      }

      resolve([
        { id: "TX-1", amount: 100 },
        { id: "TX-2", amount: 250 },
      ]);
    }, 300);
  });
}

function fetchRewards(accountId, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Rewards service unavailable"));
        return;
      }

      resolve({
        points: 450,
      });
    }, 400);
  });
}

async function buildAccountDashboard(
  accountId,
  transactionsShouldFail = false,
  rewardsShouldFail = false,
) {
  try {
    const account = await fetchAccount(accountId);

    const [transactions, rewards] = await Promise.all([
      fetchTransactions(account.id, transactionsShouldFail),
      fetchRewards(account.id, rewardsShouldFail),
    ]);

    return {
      success: true,
      accountName: account.name,
      transactionCount: transactions.length,
      rewardPoints: rewards.points,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

// ========================================
// Tests
// ========================================

const result1 = await buildAccountDashboard("ACC-1");

console.log(
  "Test 1:",
  result1.success === true &&
    result1.accountName === "Primary Account" &&
    result1.transactionCount === 2 &&
    result1.rewardPoints === 450,
);

const result2 = await buildAccountDashboard("");

console.log(
  "Test 2:",
  result2.success === false && result2.message === "Account ID is required",
);

const result3 = await buildAccountDashboard("ACC-1", true, false);

console.log(
  "Test 3:",
  result3.success === false &&
    result3.message === "Transaction service unavailable",
);

const result4 = await buildAccountDashboard("ACC-1", false, true);

console.log(
  "Test 4:",
  result4.success === false &&
    result4.message === "Rewards service unavailable",
);

// Expected:
// Test 1: true
// Test 2: true
// Test 3: true
// Test 4: true
