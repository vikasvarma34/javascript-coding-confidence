// // // // // // // console.log("Let's Come On!");

// // // // // // // async function getStatus() {
// // // // // // //   return "READY";
// // // // // // // }

// // // // // // // getStatus().then((value) => console.log(value));

// // // // // // // ========================================
// // // // // // // Demo 1 — What does an async function return?
// // // // // // // ========================================

// // // // // // // async function getPaymentStatus() {
// // // // // // //   return "APPROVED";
// // // // // // // }

// // // // // // // const result = getPaymentStatus();

// // // // // // // console.log("Returned immediately:", result);

// // // // // // // result.then((status) => {
// // // // // // //   console.log("Resolved value:", status);
// // // // // // // });

// // // // // // // ========================================
// // // // // // // Demo 2 — Awaiting a Promise
// // // // // // // ========================================

// // // // // // function fetchOrderStatus() {
// // // // // //   return new Promise((resolve) => {
// // // // // //     setTimeout(() => {
// // // // // //       resolve("SHIPPED");
// // // // // //     }, 1000);
// // // // // //   });
// // // // // // }

// // // // // // async function displayOrderStatus() {
// // // // // //   console.log("1. Starting request");

// // // // // //   const status = await fetchOrderStatus();

// // // // // //   console.log("3. Status:", status);
// // // // // // }

// // // // // // displayOrderStatus();

// // // // // // console.log("2. Other JavaScript continues");

// // // // // // console.log("---");

// // // // // // ========================================
// // // // // // Exercise 1 — Async User Access Service
// // // // // // ========================================
// // // // // //
// // // // // // Requirements:
// // // // // //
// // // // // // buildUserAccessResponse(userId) must:
// // // // // //
// // // // // // - get the user asynchronously using getUserById()
// // // // // // - use information from that returned user to get the correct account
// // // // // // - wait for the required asynchronous operations before using their values
// // // // // //
// // // // // // Return an object with exactly:
// // // // // //
// // // // // // {
// // // // // //   userId,
// // // // // //   name,
// // // // // //   accountId,
// // // // // //   access
// // // // // // }
// // // // // //
// // // // // // access must be:
// // // // // // "ALLOWED" when:
// // // // // //   - the user is enabled
// // // // // //   - AND the account status is "ACTIVE"
// // // // // //
// // // // // // otherwise:
// // // // // // "DENIED"
// // // // // //
// // // // // // Do not modify the supplied helper functions or data.

// // // // // const users = [
// // // // //   {
// // // // //     id: 101,
// // // // //     name: "Anita",
// // // // //     enabled: true,
// // // // //     accountId: "ACC-1",
// // // // //   },
// // // // //   {
// // // // //     id: 102,
// // // // //     name: "Rahul",
// // // // //     enabled: false,
// // // // //     accountId: "ACC-2",
// // // // //   },
// // // // //   {
// // // // //     id: 103,
// // // // //     name: "Meera",
// // // // //     enabled: true,
// // // // //     accountId: "ACC-3",
// // // // //   },
// // // // // ];

// // // // // const accounts = [
// // // // //   {
// // // // //     id: "ACC-1",
// // // // //     status: "ACTIVE",
// // // // //   },
// // // // //   {
// // // // //     id: "ACC-2",
// // // // //     status: "ACTIVE",
// // // // //   },
// // // // //   {
// // // // //     id: "ACC-3",
// // // // //     status: "SUSPENDED",
// // // // //   },
// // // // // ];

// // // // // function getUserById(userId) {
// // // // //   return new Promise((resolve) => {
// // // // //     setTimeout(() => {
// // // // //       resolve(users.find((user) => user.id === userId));
// // // // //     }, 100);
// // // // //   });
// // // // // }

// // // // // function getAccountById(accountId) {
// // // // //   return new Promise((resolve) => {
// // // // //     setTimeout(() => {
// // // // //       resolve(accounts.find((account) => account.id === accountId));
// // // // //     }, 100);
// // // // //   });
// // // // // }

// // // // // async function buildUserAccessResponse(userId) {
// // // // //   const user = await getUserById(userId);
// // // // //   const account = await getAccountById(user.accountId);

// // // // //   return {
// // // // //     userId,
// // // // //     name: user.name,
// // // // //     accountId: user.accountId,
// // // // //     access: user.enabled && account.status === "ACTIVE" ? "ALLOWED" : "DENIED",
// // // // //   };
// // // // // }

// // // // // // ========================================
// // // // // // Tests — do not modify
// // // // // // ========================================

// // // // // function matchesResponse(actual, expected) {
// // // // //   return (
// // // // //     actual.userId === expected.userId &&
// // // // //     actual.name === expected.name &&
// // // // //     actual.accountId === expected.accountId &&
// // // // //     actual.access === expected.access
// // // // //   );
// // // // // }

// // // // // async function runTests() {
// // // // //   const result1 = await buildUserAccessResponse(101);

// // // // //   console.log(
// // // // //     "Test 1:",
// // // // //     matchesResponse(result1, {
// // // // //       userId: 101,
// // // // //       name: "Anita",
// // // // //       accountId: "ACC-1",
// // // // //       access: "ALLOWED",
// // // // //     }),
// // // // //   );

// // // // //   const result2 = await buildUserAccessResponse(102);

// // // // //   console.log(
// // // // //     "Test 2:",
// // // // //     matchesResponse(result2, {
// // // // //       userId: 102,
// // // // //       name: "Rahul",
// // // // //       accountId: "ACC-2",
// // // // //       access: "DENIED",
// // // // //     }),
// // // // //   );

// // // // //   const result3 = await buildUserAccessResponse(103);

// // // // //   console.log(
// // // // //     "Test 3:",
// // // // //     matchesResponse(result3, {
// // // // //       userId: 103,
// // // // //       name: "Meera",
// // // // //       accountId: "ACC-3",
// // // // //       access: "DENIED",
// // // // //     }),
// // // // //   );
// // // // // }

// // // // // runTests();

// // // // // // Expected:
// // // // // // Test 1: true
// // // // // // Test 2: true
// // // // // // Test 3: true

// // // // // function loadPayment() {
// // // // //   return new Promise((resolve, reject) => {
// // // // //     setTimeout(() => {
// // // // //       reject("PAYMENT_SERVICE_FAILED");
// // // // //     }, 100);
// // // // //   });
// // // // // }

// // // // // async function processPayment() {
// // // // //   try {
// // // // //     const payment = await loadPayment();

// // // // //     return payment;
// // // // //   } catch (error) {
// // // // //     return error;
// // // // //   }
// // // // // }

// // // // // console.log(await processPayment());

// // // // // ========================================
// // // // // Exercise 2 — Async Refund Eligibility
// // // // // ========================================
// // // // //
// // // // // Complete checkRefundEligibility(paymentId).
// // // // //
// // // // // Business requirements:
// // // // //
// // // // // 1. Load the payment using getPaymentById().
// // // // //
// // // // // 2. getPaymentById() can reject.
// // // // //    Your function must handle that failure.
// // // // //
// // // // // 3. If loading fails, return:
// // // // //
// // // // // {
// // // // //   eligible: false,
// // // // //   reason: <the rejection reason>
// // // // // }
// // // // //
// // // // // 4. If the payment loads successfully:
// // // // //
// // // // // Refund is allowed only when:
// // // // // - payment.status is "COMPLETED"
// // // // // - payment.amount is at least 50
// // // // //
// // // // // If both conditions pass:
// // // // //
// // // // // {
// // // // //   eligible: true,
// // // // //   reason: null
// // // // // }
// // // // //
// // // // // Otherwise:
// // // // //
// // // // // {
// // // // //   eligible: false,
// // // // //   reason: "NOT_ELIGIBLE"
// // // // // }
// // // // //
// // // // // Do not modify the helper function, data, or tests.

// // // // const payments = [
// // // //   {
// // // //     id: "PAY-101",
// // // //     amount: 120,
// // // //     status: "COMPLETED",
// // // //   },
// // // //   {
// // // //     id: "PAY-102",
// // // //     amount: 30,
// // // //     status: "COMPLETED",
// // // //   },
// // // //   {
// // // //     id: "PAY-103",
// // // //     amount: 200,
// // // //     status: "PENDING",
// // // //   },
// // // // ];

// // // // function getPaymentById(paymentId) {
// // // //   return new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //       const payment = payments.find((payment) => payment.id === paymentId);

// // // //       if (!payment) {
// // // //         reject("PAYMENT_NOT_FOUND");
// // // //         return;
// // // //       }

// // // //       resolve(payment);
// // // //     }, 100);
// // // //   });
// // // // }

// // // // // ========================================
// // // // // Vikas writes this function
// // // // // ========================================

// // // // async function checkRefundEligibility(paymentId) {
// // // //   let payment;
// // // //   try {
// // // //     payment = await getPaymentById(paymentId);
// // // //   } catch (error) {
// // // //     return {
// // // //       eligible: false,
// // // //       reason: error,
// // // //     };
// // // //   }

// // // //   if (payment.status === "COMPLETED" && payment.amount >= 50) {
// // // //     return {
// // // //       eligible: true,
// // // //       reason: null,
// // // //     };
// // // //   } else {
// // // //     return {
// // // //       eligible: false,
// // // //       reason: "NOT_ELIGIBLE",
// // // //     };
// // // //   }
// // // // }

// // // // // ========================================
// // // // // Tests — do not modify
// // // // // ========================================

// // // // function sameResult(actual, expected) {
// // // //   return (
// // // //     actual.eligible === expected.eligible && actual.reason === expected.reason
// // // //   );
// // // // }

// // // // async function runTests() {
// // // //   const result1 = await checkRefundEligibility("PAY-101");

// // // //   console.log(
// // // //     "Test 1:",
// // // //     sameResult(result1, {
// // // //       eligible: true,
// // // //       reason: null,
// // // //     }),
// // // //   );

// // // //   const result2 = await checkRefundEligibility("PAY-102");

// // // //   console.log(
// // // //     "Test 2:",
// // // //     sameResult(result2, {
// // // //       eligible: false,
// // // //       reason: "NOT_ELIGIBLE",
// // // //     }),
// // // //   );

// // // //   const result3 = await checkRefundEligibility("PAY-103");

// // // //   console.log(
// // // //     "Test 3:",
// // // //     sameResult(result3, {
// // // //       eligible: false,
// // // //       reason: "NOT_ELIGIBLE",
// // // //     }),
// // // //   );

// // // //   const result4 = await checkRefundEligibility("PAY-999");

// // // //   console.log(
// // // //     "Test 4:",
// // // //     sameResult(result4, {
// // // //       eligible: false,
// // // //       reason: "PAYMENT_NOT_FOUND",
// // // //     }),
// // // //   );
// // // // }

// // // // runTests();

// // // // // Expected:
// // // // // Test 1: true
// // // // // Test 2: true
// // // // // Test 3: true
// // // // // Test 4: true

// // // // ========================================
// // // // Exercise 3 — Complete User Activation Flow
// // // // ========================================
// // // //
// // // // activateUser(userId) should:
// // // //
// // // // 1. Load the user.
// // // //
// // // // 2. If the user is already active, return:
// // // //
// // // // {
// // // //   success: false,
// // // //   reason: "ALREADY_ACTIVE"
// // // // }
// // // //
// // // // In this case, no audit record should be created.
// // // //
// // // // 3. Otherwise, activate the user.
// // // //
// // // // 4. Save an audit record for the activation.
// // // //
// // // // 5. The function must not report success until the audit save
// // // //    has successfully completed.
// // // //
// // // // 6. On success return:
// // // //
// // // // {
// // // //   success: true,
// // // //   userId: <user id>,
// // // //   auditId: <saved audit id>
// // // // }
// // // //
// // // // Do not modify the supplied helper functions or data.
// // // //
// // // // The current activateUser() implementation is intentionally incorrect.
// // // // Diagnose and repair it.

// // // const users = [
// // //   {
// // //     id: 201,
// // //     name: "Nikhil",
// // //     active: false,
// // //   },
// // //   {
// // //     id: 202,
// // //     name: "Sara",
// // //     active: true,
// // //   },
// // //   {
// // //     id: 203,
// // //     name: "David",
// // //     active: false,
// // //   },
// // // ];

// // // const auditRecords = [];

// // // function getUserById(userId) {
// // //   return new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve(users.find((user) => user.id === userId));
// // //     }, 100);
// // //   });
// // // }

// // // function saveAuditRecord(userId, action) {
// // //   return new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       const auditRecord = {
// // //         id: `AUDIT-${auditRecords.length + 1}`,
// // //         userId,
// // //         action,
// // //       };

// // //       auditRecords.push(auditRecord);

// // //       resolve(auditRecord);
// // //     }, 100);
// // //   });
// // // }

// // // // ========================================
// // // // Vikas diagnoses and repairs this function
// // // // ========================================

// // // async function activateUser(userId) {
// // //   const user = await getUserById(userId);

// // //   if (user.active) {
// // //     return {
// // //       success: false,
// // //       reason: "ALREADY_ACTIVE",
// // //     };
// // //   }

// // //   user.active = true;

// // //   const auditRecord = await saveAuditRecord(user.id, "USER_ACTIVATED");

// // //   return {
// // //     success: true,
// // //     userId: user.id,
// // //     auditId: auditRecord.id,
// // //   };
// // // }

// // // // ========================================
// // // // Tests — do not modify
// // // // ========================================

// // // async function runTests() {
// // //   auditRecords.length = 0;

// // //   users[0].active = false;
// // //   users[1].active = true;
// // //   users[2].active = false;

// // //   const result1 = await activateUser(201);

// // //   console.log(
// // //     "Test 1:",
// // //     result1.success === true &&
// // //       result1.userId === 201 &&
// // //       result1.auditId === "AUDIT-1",
// // //   );

// // //   console.log("Test 2:", users[0].active === true);

// // //   console.log(
// // //     "Test 3:",
// // //     auditRecords.length === 1 &&
// // //       auditRecords[0].userId === 201 &&
// // //       auditRecords[0].action === "USER_ACTIVATED",
// // //   );

// // //   const result2 = await activateUser(202);

// // //   console.log(
// // //     "Test 4:",
// // //     result2.success === false && result2.reason === "ALREADY_ACTIVE",
// // //   );

// // //   console.log("Test 5:", auditRecords.length === 1);

// // //   const result3 = await activateUser(203);

// // //   console.log(
// // //     "Test 6:",
// // //     result3.success === true &&
// // //       result3.userId === 203 &&
// // //       result3.auditId === "AUDIT-2",
// // //   );

// // //   console.log("Test 7:", auditRecords.length === 2);
// // // }

// // // runTests();

// // // // Expected:
// // // // Test 1: true
// // // // Test 2: true
// // // // Test 3: true
// // // // Test 4: true
// // // // Test 5: true
// // // // Test 6: true
// // // // Test 7: true

// // // ========================================
// // // Exercise 3 — Process Cancellation Request
// // // ========================================
// // //
// // // Complete processCancellation(requestId).
// // //
// // // Business rules:
// // //
// // // - Load the cancellation request asynchronously.
// // // - Load the order associated with that request asynchronously.
// // //
// // // If either asynchronous lookup fails:
// // // return:
// // // {
// // //   success: false,
// // //   reason: <the failure reason>
// // // }
// // //
// // // A cancellation must be rejected when:
// // //
// // // - the request has already been processed
// // // - OR the order status is not "PLACED"
// // // - OR the requested refund amount is greater than the order total
// // //
// // // Rejected business requests return:
// // //
// // // {
// // //   success: false,
// // //   reason: "CANCELLATION_REJECTED"
// // // }
// // //
// // // If the cancellation is accepted:
// // //
// // // - change the order status to "CANCELLED"
// // // - change the request status to "PROCESSED"
// // //
// // // return:
// // //
// // // {
// // //   success: true,
// // //   orderId: <order id>,
// // //   refundAmount: <requested refund amount>
// // // }
// // //
// // // Do not modify the supplied data, helpers, or tests.

// // const orders = [
// //   {
// //     id: "ORD-101",
// //     total: 150,
// //     status: "PLACED",
// //   },
// //   {
// //     id: "ORD-102",
// //     total: 80,
// //     status: "SHIPPED",
// //   },
// //   {
// //     id: "ORD-103",
// //     total: 100,
// //     status: "PLACED",
// //   },
// // ];

// // const cancellationRequests = [
// //   {
// //     id: "REQ-1",
// //     orderId: "ORD-101",
// //     refundAmount: 120,
// //     status: "PENDING",
// //   },
// //   {
// //     id: "REQ-2",
// //     orderId: "ORD-102",
// //     refundAmount: 80,
// //     status: "PENDING",
// //   },
// //   {
// //     id: "REQ-3",
// //     orderId: "ORD-103",
// //     refundAmount: 130,
// //     status: "PENDING",
// //   },
// //   {
// //     id: "REQ-4",
// //     orderId: "ORD-103",
// //     refundAmount: 50,
// //     status: "PROCESSED",
// //   },
// // ];

// // function getCancellationRequest(requestId) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       const request = cancellationRequests.find(
// //         (request) => request.id === requestId,
// //       );

// //       if (!request) {
// //         reject("REQUEST_NOT_FOUND");
// //         return;
// //       }

// //       resolve(request);
// //     }, 100);
// //   });
// // }

// // function getOrder(orderId) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       const order = orders.find((order) => order.id === orderId);

// //       if (!order) {
// //         reject("ORDER_NOT_FOUND");
// //         return;
// //       }

// //       resolve(order);
// //     }, 100);
// //   });
// // }

// // // ========================================
// // // Vikas writes the entire function
// // // ========================================

// // async function processCancellation(requestId) {
// //   let request;
// //   let order;
// //   try {
// //     request = await getCancellationRequest(requestId);
// //   } catch (error) {
// //     return {
// //       success: false,
// //       reason: error,
// //     };
// //   }

// //   try {
// //     order = await getOrder(request.orderId);
// //   } catch (error) {
// //     return {
// //       success: false,
// //       reason: error,
// //     };
// //   }

// //   if (
// //     request.status === "PROCESSED" ||
// //     order.status !== "PLACED" ||
// //     request.refundAmount > order.total
// //   ) {
// //     return {
// //       success: false,
// //       reason: "CANCELLATION_REJECTED",
// //     };
// //   }

// //   order.status = "CANCELLED";
// //   request.status = "PROCESSED";

// //   return {
// //     success: true,
// //     orderId: order.id,
// //     refundAmount: request.refundAmount,
// //   };
// // }

// // // ========================================
// // // Tests
// // // ========================================

// // async function runTests() {
// //   // Reset mutable state before tests.

// //   orders[0].status = "PLACED";
// //   orders[1].status = "SHIPPED";
// //   orders[2].status = "PLACED";

// //   cancellationRequests[0].status = "PENDING";
// //   cancellationRequests[1].status = "PENDING";
// //   cancellationRequests[2].status = "PENDING";
// //   cancellationRequests[3].status = "PROCESSED";

// //   const result1 = await processCancellation("REQ-1");

// //   console.log(
// //     "Test 1:",
// //     result1.success === true &&
// //       result1.orderId === "ORD-101" &&
// //       result1.refundAmount === 120,
// //   );

// //   console.log(
// //     "Test 2:",
// //     orders[0].status === "CANCELLED" &&
// //       cancellationRequests[0].status === "PROCESSED",
// //   );

// //   const result2 = await processCancellation("REQ-2");

// //   console.log(
// //     "Test 3:",
// //     result2.success === false && result2.reason === "CANCELLATION_REJECTED",
// //   );

// //   const result3 = await processCancellation("REQ-3");

// //   console.log(
// //     "Test 4:",
// //     result3.success === false && result3.reason === "CANCELLATION_REJECTED",
// //   );

// //   const result4 = await processCancellation("REQ-4");

// //   console.log(
// //     "Test 5:",
// //     result4.success === false && result4.reason === "CANCELLATION_REJECTED",
// //   );

// //   const result5 = await processCancellation("REQ-999");

// //   console.log(
// //     "Test 6:",
// //     result5.success === false && result5.reason === "REQUEST_NOT_FOUND",
// //   );
// // }

// // runTests();

// // // Expected:
// // // Test 1: true
// // // Test 2: true
// // // Test 3: true
// // // Test 4: true
// // // Test 5: true
// // // Test 6: true

// console.log("---");

// // ========================================
// // Exercise 4 — Process Fund Transfer
// // ========================================
// //
// // Complete processTransfer(transfer).
// //
// // transfer has:
// //
// // {
// //   fromAccountId,
// //   toAccountId,
// //   amount
// // }
// //
// // Required flow:
// //
// // - Load the sender account asynchronously.
// // - Load the receiver account asynchronously.
// // - Either account lookup may fail.
// //
// // If an async lookup fails, return:
// //
// // {
// //   success: false,
// //   reason: <failure reason>
// // }
// //
// // Reject the transfer with:
// //
// // {
// //   success: false,
// //   reason: "TRANSFER_REJECTED"
// // }
// //
// // when ANY of these are true:
// //
// // - sender and receiver are the same account
// // - amount is not greater than 0
// // - sender.status is not "ACTIVE"
// // - receiver.status is not "ACTIVE"
// // - sender.balance is less than amount
// //
// // If valid:
// //
// // - subtract amount from sender.balance
// // - add amount to receiver.balance
// //
// // Then save an audit record asynchronously using saveTransferAudit().
// //
// // Do NOT return success before that audit operation finishes.
// //
// // Success response:
// //
// // {
// //   success: true,
// //   transferId: <audit record id>,
// //   fromAccountId: <sender id>,
// //   toAccountId: <receiver id>,
// //   amount: <transfer amount>
// // }
// //
// // Do not modify supplied helpers, data, or tests.

// const accounts = [
//   {
//     id: "ACC-101",
//     balance: 1000,
//     status: "ACTIVE",
//   },
//   {
//     id: "ACC-102",
//     balance: 250,
//     status: "ACTIVE",
//   },
//   {
//     id: "ACC-103",
//     balance: 700,
//     status: "FROZEN",
//   },
// ];

// const transferAudits = [];

// function getAccount(accountId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const account = accounts.find((account) => account.id === accountId);

//       if (!account) {
//         reject("ACCOUNT_NOT_FOUND");
//         return;
//       }

//       resolve(account);
//     }, 100);
//   });
// }

// function saveTransferAudit(fromAccountId, toAccountId, amount) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const audit = {
//         id: `TRANSFER-${transferAudits.length + 1}`,
//         fromAccountId,
//         toAccountId,
//         amount,
//       };

//       transferAudits.push(audit);

//       resolve(audit);
//     }, 100);
//   });
// }

// // ========================================
// // Vikas writes the entire function
// // ========================================

// async function processTransfer(transfer) {
//   const TRANSFER_REJECTED = {
//     success: false,
//     reason: "TRANSFER_REJECTED",
//   };

//   let senderAccount;
//   let receiverAccount;
//   try {
//     senderAccount = await getAccount(transfer.fromAccountId);
//     receiverAccount = await getAccount(transfer.toAccountId);
//   } catch (error) {
//     return {
//       success: false,
//       reason: error,
//     };
//   }

//   if (transfer.amount <= 0) {
//     return TRANSFER_REJECTED;
//   }

//   if (
//     senderAccount.id === receiverAccount.id ||
//     senderAccount.status !== "ACTIVE" ||
//     receiverAccount.status !== "ACTIVE" ||
//     senderAccount.balance < transfer.amount
//   ) {
//     return TRANSFER_REJECTED;
//   }

//   senderAccount.balance -= transfer.amount;
//   receiverAccount.balance += transfer.amount;

//   const transferAudit = await saveTransferAudit(
//     transfer.fromAccountId,
//     transfer.toAccountId,
//     transfer.amount,
//   );

//   return {
//     success: true,
//     transferId: transferAudit.id,
//     fromAccountId: transferAudit.fromAccountId,
//     toAccountId: transferAudit.toAccountId,
//     amount: transferAudit.amount,
//   };
// }

// // ========================================
// // Tests
// // ========================================

// async function runTests() {
//   accounts[0].balance = 1000;
//   accounts[0].status = "ACTIVE";

//   accounts[1].balance = 250;
//   accounts[1].status = "ACTIVE";

//   accounts[2].balance = 700;
//   accounts[2].status = "FROZEN";

//   transferAudits.length = 0;

//   const result1 = await processTransfer({
//     fromAccountId: "ACC-101",
//     toAccountId: "ACC-102",
//     amount: 300,
//   });

//   console.log(
//     "Test 1:",
//     result1.success === true &&
//       result1.transferId === "TRANSFER-1" &&
//       result1.fromAccountId === "ACC-101" &&
//       result1.toAccountId === "ACC-102" &&
//       result1.amount === 300,
//   );

//   console.log(
//     "Test 2:",
//     accounts[0].balance === 700 && accounts[1].balance === 550,
//   );

//   console.log(
//     "Test 3:",
//     transferAudits.length === 1 && transferAudits[0].amount === 300,
//   );

//   const result2 = await processTransfer({
//     fromAccountId: "ACC-102",
//     toAccountId: "ACC-101",
//     amount: 1000,
//   });

//   console.log(
//     "Test 4:",
//     result2.success === false && result2.reason === "TRANSFER_REJECTED",
//   );

//   const result3 = await processTransfer({
//     fromAccountId: "ACC-101",
//     toAccountId: "ACC-103",
//     amount: 100,
//   });

//   console.log(
//     "Test 5:",
//     result3.success === false && result3.reason === "TRANSFER_REJECTED",
//   );

//   const result4 = await processTransfer({
//     fromAccountId: "ACC-101",
//     toAccountId: "ACC-101",
//     amount: 50,
//   });

//   console.log(
//     "Test 6:",
//     result4.success === false && result4.reason === "TRANSFER_REJECTED",
//   );

//   const result5 = await processTransfer({
//     fromAccountId: "ACC-999",
//     toAccountId: "ACC-102",
//     amount: 50,
//   });

//   console.log(
//     "Test 7:",
//     result5.success === false && result5.reason === "ACCOUNT_NOT_FOUND",
//   );

//   console.log("Test 8:", transferAudits.length === 1);

//   const hiddenResult = await processTransfer({
//     fromAccountId: "ACC-999",
//     toAccountId: "ACC-102",
//     amount: -50,
//   });

//   console.log(
//     "Hidden Test:",
//     hiddenResult.success === false &&
//       hiddenResult.reason === "ACCOUNT_NOT_FOUND",
//   );

//   // Expected:
//   // Hidden Test: true
// }

// runTests();

// // Expected:
// // Test 1: true
// // Test 2: true
// // Test 3: true
// // Test 4: true
// // Test 5: true
// // Test 6: true
// // Test 7: true
// // Test 8: true

console.log("-----");

// ========================================
// Exercise 5 — Process Withdrawal
// ========================================
//
// Complete processWithdrawal(requestId).
//
// Requirements:
//
// 1. Load the withdrawal request asynchronously.
//
// 2. If that lookup fails:
// {
//   success: false,
//   reason: <failure reason>
// }
//
// 3. Reject the request BEFORE processing it when:
// - request.status is not "PENDING"
// - OR request.amount <= 0
//
// Return:
// {
//   success: false,
//   reason: "WITHDRAWAL_REJECTED"
// }
//
// 4. Load the account belonging to the request.
//
// 5. If that lookup fails, return its failure reason.
//
// 6. Reject when:
// - account.status is not "ACTIVE"
// - OR account.balance is less than request.amount
//
// 7. If valid:
// - subtract the amount from account.balance
// - change request.status to "PROCESSED"
// - save a transaction record asynchronously
// - do not return success until the transaction is saved
//
// Success:
//
// {
//   success: true,
//   transactionId,
//   accountId,
//   amount,
//   remainingBalance
// }
//
// Do not modify supplied data, helpers, or tests.

const withdrawalRequests = [
  { id: "W-1", accountId: "A-1", amount: 200, status: "PENDING" },
  { id: "W-2", accountId: "A-2", amount: 500, status: "PENDING" },
  { id: "W-3", accountId: "A-1", amount: -20, status: "PENDING" },
  { id: "W-4", accountId: "A-1", amount: 50, status: "PROCESSED" },
  { id: "W-5", accountId: "A-999", amount: 50, status: "PENDING" },
];

const bankAccounts = [
  { id: "A-1", balance: 1000, status: "ACTIVE" },
  { id: "A-2", balance: 300, status: "ACTIVE" },
];

const transactions = [];

function getWithdrawalRequest(requestId) {
  const request = withdrawalRequests.find(
    (request) => request.id === requestId,
  );

  return request
    ? Promise.resolve(request)
    : Promise.reject("REQUEST_NOT_FOUND");
}

function getBankAccount(accountId) {
  const account = bankAccounts.find((account) => account.id === accountId);

  return account
    ? Promise.resolve(account)
    : Promise.reject("ACCOUNT_NOT_FOUND");
}

function saveTransaction(accountId, amount) {
  const transaction = {
    id: `TX-${transactions.length + 1}`,
    accountId,
    amount,
  };

  transactions.push(transaction);

  return Promise.resolve(transaction);
}

// ========================================
// Vikas writes the entire function
// ========================================

async function processWithdrawal(requestId) {
  let withdrawalRequest;
  let bankAccount;

  try {
    withdrawalRequest = await getWithdrawalRequest(requestId);
  } catch (error) {
    return {
      success: false,
      reason: error,
    };
  }

  if (withdrawalRequest.status !== "PENDING" || withdrawalRequest.amount <= 0) {
    return {
      success: false,
      reason: "WITHDRAWAL_REJECTED",
    };
  }

  try {
    bankAccount = await getBankAccount(withdrawalRequest.accountId);
  } catch (error) {
    return {
      success: false,
      reason: error,
    };
  }

  if (
    bankAccount.status !== "ACTIVE" ||
    bankAccount.balance < withdrawalRequest.amount
  ) {
    return {
      success: false,
      reason: "WITHDRAWAL_REJECTED",
    };
  }

  bankAccount.balance -= withdrawalRequest.amount;
  withdrawalRequest.status = "PROCESSED";
  const savedTranscation = await saveTransaction(
    bankAccount.id,
    withdrawalRequest.amount,
  );

  return {
    success: true,
    transactionId: savedTranscation.id,
    accountId: savedTranscation.accountId,
    amount: savedTranscation.amount,
    remainingBalance: bankAccount.balance,
  };
}

// ========================================
// Tests
// ========================================

async function runTests() {
  bankAccounts[0].balance = 1000;
  bankAccounts[1].balance = 300;

  withdrawalRequests[0].status = "PENDING";
  withdrawalRequests[1].status = "PENDING";
  withdrawalRequests[2].status = "PENDING";
  withdrawalRequests[3].status = "PROCESSED";
  withdrawalRequests[4].status = "PENDING";

  transactions.length = 0;

  const promiseCheck = processWithdrawal("W-1");

  console.log("Test 1:", promiseCheck instanceof Promise);

  const result1 = await promiseCheck;

  console.log(
    "Test 2:",
    result1.success === true &&
      result1.transactionId === "TX-1" &&
      result1.accountId === "A-1" &&
      result1.amount === 200 &&
      result1.remainingBalance === 800,
  );

  console.log(
    "Test 3:",
    bankAccounts[0].balance === 800 &&
      withdrawalRequests[0].status === "PROCESSED" &&
      transactions.length === 1,
  );

  const result2 = await processWithdrawal("W-2");

  console.log(
    "Test 4:",
    result2.success === false && result2.reason === "WITHDRAWAL_REJECTED",
  );

  const result3 = await processWithdrawal("W-3");

  console.log(
    "Test 5:",
    result3.success === false && result3.reason === "WITHDRAWAL_REJECTED",
  );

  const result4 = await processWithdrawal("W-4");

  console.log(
    "Test 6:",
    result4.success === false && result4.reason === "WITHDRAWAL_REJECTED",
  );

  const result5 = await processWithdrawal("W-5");

  console.log(
    "Test 7:",
    result5.success === false && result5.reason === "ACCOUNT_NOT_FOUND",
  );

  const result6 = await processWithdrawal("W-999");

  console.log(
    "Test 8:",
    result6.success === false && result6.reason === "REQUEST_NOT_FOUND",
  );

  console.log("Test 9:", transactions.length === 1);
}

runTests();

// Expected:
// Test 1: true
// Test 2: true
// Test 3: true
// Test 4: true
// Test 5: true
// Test 6: true
// Test 7: true
// Test 8: true
// Test 9: true
