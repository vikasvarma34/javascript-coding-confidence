const printLog = (value) => {
  console.log(value);
};

// console.log("Let's Come on!");

// Business rules:
// 1. Return the total of all payment amounts.
// 2. Use reduce().
// 3. Start the accumulator at 0.
// 4. An empty array must return 0.
// 5. Negative numbers are allowed because they may represent refunds.
// 6. Do not mutate the original array.

// function calculateTotalPayments(payments = []) {
//   return payments.reduce((total, payment) => {
//     return total + payment;
//   }, 0);
// }

// const payments = [120, 80, 50];
// const paymentsBefore = [...payments];

// // Expected: 250
// console.log("Test 1:", calculateTotalPayments(payments));
// console.log("Test 1 passed:", calculateTotalPayments(payments) === 250);

// // Expected: 70.5
// console.log("Test 2 passed:", calculateTotalPayments([40.5, 20, 10]) === 70.5);

// // Expected: 0
// console.log("Test 3 passed:", calculateTotalPayments([]) === 0);

// // Expected: 75
// console.log("Test 4 passed:", calculateTotalPayments([100, -25]) === 75);

// // Expected: true
// console.log(
//   "Non-mutation passed:",
//   JSON.stringify(payments) === JSON.stringify(paymentsBefore),
// );

// printLog("");

// // Business rules:
// // 1. Return the total cost of all cart items.
// // 2. Each item's subtotal is price * quantity.
// // 3. Use reduce().
// // 4. Start the accumulator at 0.
// // 5. An empty or omitted array must return 0.
// // 6. Price and quantity will be valid numbers.
// // 7. Do not mutate the original array or its objects.

// function calculateCartTotal(cartItems = []) {
//   return cartItems.reduce((total, item) => {
//     const itemPrice = item?.price ?? 0;
//     const itemQuantity = item?.quantity ?? 0;
//     return total + itemQuantity * itemPrice;
//   }, 0);
// }

// const cartItems = [
//   { productId: "P-101", price: 25, quantity: 2 },
//   { productId: "P-102", price: 15, quantity: 3 },
//   { productId: "P-103", price: 10, quantity: 1 },
// ];

// const cartItemsBefore = JSON.stringify(cartItems);

// // Expected calculation:
// // 25 * 2 = 50
// // 15 * 3 = 45
// // 10 * 1 = 10
// // Expected total: 105
// console.log("Test 1 result:", calculateCartTotal(cartItems));
// console.log("Test 1 passed:", calculateCartTotal(cartItems) === 105);

// // Decimal-price case:
// // 12.5 * 2 = 25
// // 5 * 3 = 15
// // Expected: 40
// console.log(
//   "Test 2 passed:",
//   calculateCartTotal([
//     { productId: "P-201", price: 12.5, quantity: 2 },
//     { productId: "P-202", price: 5, quantity: 3 },
//   ]) === 40,
// );

// // Empty-array edge case — expected: 0
// console.log("Test 3 passed:", calculateCartTotal([]) === 0);

// // Omitted-array edge case — expected: 0
// console.log("Test 4 passed:", calculateCartTotal() === 0);

// // Expected: true
// console.log(
//   "Non-mutation passed:",
//   JSON.stringify(cartItems) === cartItemsBefore,
// );

// printLog("");

// Business rules:
// 1. Return the number of completed tasks.
// 2. Use reduce().
// 3. Start the accumulator at 0.
// 4. Ignore spaces and letter case when checking status.
// 5. Missing, null, blank, or non-string statuses are not completed.
// 6. An empty or omitted array must return 0.
// 7. Do not mutate the original array or objects.

// function countCompletedTasks(tasks = []) {
//   return tasks.reduce((count, task) => {
//     const status =
//       typeof task?.status === "string"
//         ? task.status.trim().toLowerCase()
//         : undefined;
//     if (status === "completed") {
//       return count + 1;
//     }

//     return count;
//   }, 0);
// }

// const tasks = [
//   { id: "T-101", status: "completed" },
//   { id: "T-102", status: " Pending " },
//   { id: "T-103", status: " COMPLETED " },
//   { id: "T-104", status: null },
// ];

// const tasksBefore = JSON.stringify(tasks);

// // Expected: 2
// console.log("Test 1 result:", countCompletedTasks(tasks));
// console.log("Test 1 passed:", countCompletedTasks(tasks) === 2);

// // Expected: 3
// console.log(
//   "Test 2 passed:",
//   countCompletedTasks([
//     { status: "COMPLETED" },
//     { status: " completed " },
//     { status: "Completed" },
//   ]) === 3,
// );

// // Invalid-status edge cases — expected: 0
// console.log(
//   "Test 3 passed:",
//   countCompletedTasks([
//     { status: "" },
//     { status: "   " },
//     { status: null },
//     {},
//     { status: 100 },
//   ]) === 0,
// );

// // Empty and omitted arrays — expected: 0
// console.log("Test 4 passed:", countCompletedTasks([]) === 0);
// console.log("Test 5 passed:", countCompletedTasks() === 0);

// // Expected: true
// console.log("Non-mutation passed:", JSON.stringify(tasks) === tasksBefore);

// printLog("");

// // Business rules:
// // 1. Return an object containing counts for:
// //    - completed
// //    - pending
// //    - cancelled
// //    - unknown
// // 2. Use reduce().
// // 3. Start with this exact accumulator:
// //    {
// //      completed: 0,
// //      pending: 0,
// //      cancelled: 0,
// //      unknown: 0,
// //    }
// // 4. Status matching must ignore spaces and letter case.
// // 5. Missing, null, blank, non-string, or unsupported statuses count as unknown.
// // 6. An empty or omitted array must return all four properties with 0.
// // 7. Do not mutate the original array or task objects.
// //
// // Expected input:
// // An array of task objects.
// // Each task may have any type of status value.

// function createTaskStatusSummary(tasks = []) {
//   const validStatuses = ["completed", "pending", "cancelled"];
//   return tasks.reduce(
//     (summary, task) => {
//       const status =
//         typeof task?.status === "string"
//           ? task.status.trim().toLowerCase()
//           : undefined;

//       if (validStatuses.includes(status)) {
//         summary[status]++;
//       } else {
//         summary.unknown++;
//       }

//       return summary;
//     },
//     {
//       completed: 0,
//       pending: 0,
//       cancelled: 0,
//       unknown: 0,
//     },
//   );
// }

// const summaryTasks = [
//   { id: "T-201", status: " COMPLETED " },
//   { id: "T-202", status: "pending" },
//   { id: "T-203", status: "Completed" },
//   { id: "T-204", status: " CANCELLED " },
//   { id: "T-205", status: null },
//   { id: "T-206", status: "blocked" },
// ];

// const summaryTasksBefore = JSON.stringify(summaryTasks);

// const expectedSummary1 = {
//   completed: 2,
//   pending: 1,
//   cancelled: 1,
//   unknown: 2,
// };

// console.log("Test 1 result:", createTaskStatusSummary(summaryTasks));
// console.log(
//   "Test 1 passed:",
//   JSON.stringify(createTaskStatusSummary(summaryTasks)) ===
//     JSON.stringify(expectedSummary1),
// );

// const expectedSummary2 = {
//   completed: 0,
//   pending: 0,
//   cancelled: 0,
//   unknown: 5,
// };

// console.log(
//   "Test 2 passed:",
//   JSON.stringify(
//     createTaskStatusSummary([
//       { status: "" },
//       { status: "   " },
//       { status: undefined },
//       { status: 100 },
//       {},
//     ]),
//   ) === JSON.stringify(expectedSummary2),
// );

// const emptySummary = {
//   completed: 0,
//   pending: 0,
//   cancelled: 0,
//   unknown: 0,
// };

// console.log(
//   "Test 3 passed:",
//   JSON.stringify(createTaskStatusSummary([])) === JSON.stringify(emptySummary),
// );

// console.log(
//   "Test 4 passed:",
//   JSON.stringify(createTaskStatusSummary()) === JSON.stringify(emptySummary),
// );

// console.log(
//   "Non-mutation passed:",
//   JSON.stringify(summaryTasks) === summaryTasksBefore,
// );

// Business rules:
// 1. Return an object containing the total expense for each category.
// 2. Use reduce().
// 3. Start the accumulator as an empty object: {}.
// 4. Category must be a non-blank string.
// 5. Normalize valid categories using trim() and toLowerCase().
// 6. Missing, null, blank, or non-string categories must use "uncategorized".
// 7. Amount must be a finite number.
// 8. Invalid amounts must add 0.
// 9. Negative amounts are allowed because they may represent refunds.
// 10. An empty or omitted array must return {}.
// 11. Do not mutate the original array or objects.

// function calculateExpensesByCategory(expenses = []) {
//   return expenses.reduce((expenseSummary, expense) => {
//     const normalizedCategory =
//       typeof expense?.category === "string"
//         ? expense?.category?.trim().toLowerCase() || undefined
//         : undefined;
//     const normalizedAmount = Number.isFinite(expense?.amount)
//       ? expense.amount
//       : 0;

//     if (normalizedCategory !== undefined) {
//       expenseSummary[normalizedCategory] =
//         (expenseSummary[normalizedCategory] ?? 0) + normalizedAmount;
//     } else {
//       expenseSummary["uncategorized"] =
//         (expenseSummary["uncategorized"] ?? 0) + normalizedAmount;
//     }

//     return expenseSummary;
//   }, {});
// }

// const expenses = [
//   { id: "E-101", category: " Food ", amount: 120 },
//   { id: "E-102", category: "travel", amount: 80 },
//   { id: "E-103", category: "FOOD", amount: 50 },
//   { id: "E-104", category: null, amount: 30 },
//   { id: "E-105", category: "Travel", amount: -10 },
// ];

// const expensesBefore = JSON.stringify(expenses);

// const expectedResult1 = {
//   food: 170,
//   travel: 70,
//   uncategorized: 30,
// };

// console.log("Test 1 result:", calculateExpensesByCategory(expenses));

// console.log(
//   "Test 1 passed:",
//   JSON.stringify(calculateExpensesByCategory(expenses)) ===
//     JSON.stringify(expectedResult1),
// );

// const expectedResult2 = {
//   supplies: 25,
//   uncategorized: 15,
// };

// console.log(
//   "Test 2 passed:",
//   JSON.stringify(
//     calculateExpensesByCategory([
//       { category: " Supplies ", amount: 20 },
//       { category: "SUPPLIES", amount: 5 },
//       { category: "", amount: 10 },
//       { amount: 5 },
//       { category: null, amount: "invalid" },
//     ]),
//   ) === JSON.stringify(expectedResult2),
// );

// // Expected: {}
// console.log(
//   "Test 3 passed:",
//   JSON.stringify(calculateExpensesByCategory([])) === JSON.stringify({}),
// );

// // Expected: {}
// console.log(
//   "Test 4 passed:",
//   JSON.stringify(calculateExpensesByCategory()) === JSON.stringify({}),
// );

// // Expected: true
// console.log(
//   "Non-mutation passed:",
//   JSON.stringify(expenses) === expensesBefore,
// );

// console.log(
//   "Non-string category test:",
//   calculateExpensesByCategory([
//     { category: 100, amount: 20 },
//     { category: false, amount: 10 },
//   ]),
// );

// // Expected:
// // { uncategorized: 30 }

// console.log(
//   "Invalid-number test:",
//   calculateExpensesByCategory([
//     { category: "food", amount: NaN },
//     { category: "travel", amount: Infinity },
//     { category: "supplies", amount: -Infinity },
//   ]),
// );

// // Expected:
// // { food: 0, travel: 0, supplies: 0 }

// console.log(
//   "Whitespace category test:",
//   calculateExpensesByCategory([{ category: "   ", amount: 25 }]),
// );

// // Expected:
// // { uncategorized: 25 }

printLog("");

// Business rules:
//
// Input:
// 1. `payments` will be an array of payment objects.
// 2. A payment object may be null or may have missing/invalid properties.
//
// Output:
// 3. Return exactly this summary shape:
//    {
//      totalPayments: 0,
//      successfulPayments: 0,
//      failedPayments: 0,
//      unknownPayments: 0,
//      totalSuccessfulAmount: 0,
//    }
//
// Status rules:
// 4. A valid status must be a string.
// 5. Normalize status with trim() and toLowerCase().
// 6. Supported statuses are "successful" and "failed".
// 7. Missing, null, blank, non-string, or unsupported statuses count as unknown.
//
// Amount rules:
// 8. An amount is valid only when Number.isFinite(amount) is true.
// 9. Invalid amounts must be treated as 0.
// 10. Only successful-payment amounts are added to totalSuccessfulAmount.
// 11. Negative successful amounts are allowed because they may represent reversals.
//
// General rules:
// 12. totalPayments counts every array item, including null or invalid items.
// 13. Use reduce() only for the main processing.
// 14. Start reduce() with the exact output object shown above.
// 15. An empty or omitted array returns the initial summary object.
// 16. Do not mutate the original array or payment objects.
// 17. No requirements beyond those listed here will be added later.

function createPaymentSummary(payments = []) {
  return payments.reduce(
    (summary, payment) => {
      const normalizedStatus =
        typeof payment?.status === "string"
          ? payment.status.trim().toLowerCase() || undefined
          : undefined;

      const normalizedAmount = Number.isFinite(payment?.amount)
        ? payment.amount
        : 0;

      summary.totalPayments += 1;
      if (normalizedStatus === "successful") {
        summary.successfulPayments += 1;
        summary.totalSuccessfulAmount += normalizedAmount;
      } else if (normalizedStatus === "failed") {
        summary.failedPayments += 1;
      } else {
        summary.unknownPayments += 1;
      }

      return summary;
    },
    {
      totalPayments: 0,
      successfulPayments: 0,
      failedPayments: 0,
      unknownPayments: 0,
      totalSuccessfulAmount: 0,
    },
  );
}

const paymentRecords = [
  { id: "P-101", status: " SUCCESSFUL ", amount: 120 },
  { id: "P-102", status: "failed", amount: 80 },
  { id: "P-103", status: "Successful", amount: 50 },
  { id: "P-104", status: null, amount: 30 },
  { id: "P-105", status: "pending", amount: 20 },
];

const paymentRecordsBefore = JSON.stringify(paymentRecords);

const expectedSummary1 = {
  totalPayments: 5,
  successfulPayments: 2,
  failedPayments: 1,
  unknownPayments: 2,
  totalSuccessfulAmount: 170,
};

console.log("Test 1 result:", createPaymentSummary(paymentRecords));
console.log(
  "Test 1 passed:",
  JSON.stringify(createPaymentSummary(paymentRecords)) ===
    JSON.stringify(expectedSummary1),
);

const expectedSummary2 = {
  totalPayments: 5,
  successfulPayments: 2,
  failedPayments: 1,
  unknownPayments: 2,
  totalSuccessfulAmount: 75,
};

console.log(
  "Test 2 passed:",
  JSON.stringify(
    createPaymentSummary([
      { status: "successful", amount: 100 },
      { status: " successful ", amount: -25 },
      { status: "FAILED", amount: Infinity },
      { status: "", amount: 40 },
      null,
    ]),
  ) === JSON.stringify(expectedSummary2),
);

const expectedEmptySummary = {
  totalPayments: 0,
  successfulPayments: 0,
  failedPayments: 0,
  unknownPayments: 0,
  totalSuccessfulAmount: 0,
};

console.log(
  "Test 3 passed:",
  JSON.stringify(createPaymentSummary([])) ===
    JSON.stringify(expectedEmptySummary),
);

console.log(
  "Test 4 passed:",
  JSON.stringify(createPaymentSummary()) ===
    JSON.stringify(expectedEmptySummary),
);

console.log(
  "Non-mutation passed:",
  JSON.stringify(paymentRecords) === paymentRecordsBefore,
);
