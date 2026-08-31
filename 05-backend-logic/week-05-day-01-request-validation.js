// // // console.log("Let's Come On!");

// // // console.log("----");

// // // // ========================================
// // // // Exercise 1 — Validate Booking Request
// // // // ========================================

// // // // Requirements:
// // // // A booking request is valid only when:
// // // //
// // // // - customerName is a non-empty string.
// // // // - customerName containing only spaces is invalid.
// // // // - serviceName is a non-empty string.
// // // // - serviceName containing only spaces is invalid.
// // // //
// // // // Return:
// // // // true  -> valid request
// // // // false -> invalid request

// // // function isValidBookingRequest(request) {
// // //   if (
// // //     typeof request.customerName !== "string" ||
// // //     typeof request.serviceName !== "string" ||
// // //     request.customerName.trim() === "" ||
// // //     request.serviceName.trim() === ""
// // //   ) {
// // //     return false;
// // //   }

// // //   return true;
// // // }

// // // // ========================================
// // // // Tests
// // // // ========================================

// // // console.log(
// // //   "Test 1:",
// // //   isValidBookingRequest({
// // //     customerName: "Vikas",
// // //     serviceName: "Consultation",
// // //   }) === true,
// // // );

// // // console.log(
// // //   "Test 2:",
// // //   isValidBookingRequest({
// // //     customerName: "   ",
// // //     serviceName: "Consultation",
// // //   }) === false,
// // // );

// // // console.log(
// // //   "Test 3:",
// // //   isValidBookingRequest({
// // //     customerName: "Vikas",
// // //     serviceName: "",
// // //   }) === false,
// // // );

// // // console.log(
// // //   "Test 4:",
// // //   isValidBookingRequest({
// // //     customerName: undefined,
// // //     serviceName: "Consultation",
// // //   }) === false,
// // // );

// // // // Expected:
// // // // Test 1: true
// // // // Test 2: true
// // // // Test 3: true
// // // // Test 4: true

// // console.log("----");

// // // ========================================
// // // Exercise 2 — Validate Registration
// // // ========================================

// // // Requirements:
// // //
// // // A registration request is valid only when:
// // //
// // // - name is a non-empty string.
// // // - name containing only spaces is invalid.
// // // - email is a non-empty string.
// // // - email must have a reasonable email format.
// // // - email must not contain spaces.
// // //
// // // Return:
// // // true  -> valid registration
// // // false -> invalid registration

// // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// // function isValidRegistration(request) {
// //   if (
// //     typeof request.name !== "string" ||
// //     typeof request.email !== "string" ||
// //     request.name.trim() === "" ||
// //     !emailPattern.test(request.email.trim())
// //   ) {
// //     return false;
// //   }

// //   return true;
// // }

// // // ========================================
// // // Tests
// // // ========================================

// // console.log(
// //   "Test 1:",
// //   isValidRegistration({
// //     name: "Vikas",
// //     email: "vikas@example.com",
// //   }) === true,
// // );

// // console.log(
// //   "Test 2:",
// //   isValidRegistration({
// //     name: "Vikas",
// //     email: "vikasexample.com",
// //   }) === false,
// // );

// // console.log(
// //   "Test 3:",
// //   isValidRegistration({
// //     name: "   ",
// //     email: "vikas@example.com",
// //   }) === false,
// // );

// // console.log(
// //   "Test 4:",
// //   isValidRegistration({
// //     name: "Vikas",
// //     email: "vikas @example.com",
// //   }) === false,
// // );

// // console.log(
// //   "Test 5:",
// //   isValidRegistration({
// //     name: "Vikas",
// //     email: undefined,
// //   }) === false,
// // );

// // // Expected:
// // // Test 1: true
// // // Test 2: true
// // // Test 3: true
// // // Test 4: true
// // // Test 5: true

// console.log("----");

// // ========================================
// // Exercise 3 — Validate User Creation
// // ========================================

// // Requirements:
// //
// // A request is valid only when:
// //
// // - name is a non-empty string.
// // - email is a string and matches emailPattern.
// // - password is a string with at least 8 characters.
// // - role must be one of:
// //   "admin", "user", "manager"
// //
// // Return:
// // true  -> valid request
// // false -> invalid request

// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// const allowedRoles = ["admin", "user", "manager"];

// function isValidUserCreation(request) {
//   if (
//     typeof request.name !== "string" ||
//     typeof request.email !== "string" ||
//     typeof request.password !== "string" ||
//     request.name.trim() === "" ||
//     !emailPattern.test(request.email.trim()) ||
//     request.password.length < 8 ||
//     !allowedRoles.includes(request.role)
//   ) {
//     return false;
//   }

//   return true;
// }

// // ========================================
// // Tests
// // ========================================

// console.log(
//   "Test 1:",
//   isValidUserCreation({
//     name: "Vikas",
//     email: "vikas@example.com",
//     password: "password123",
//     role: "user",
//   }) === true,
// );

// console.log(
//   "Test 2:",
//   isValidUserCreation({
//     name: "Vikas",
//     email: "vikas@example.com",
//     password: "1234567",
//     role: "user",
//   }) === false,
// );

// console.log(
//   "Test 3:",
//   isValidUserCreation({
//     name: "Vikas",
//     email: "vikas@example.com",
//     password: "password123",
//     role: "superadmin",
//   }) === false,
// );

// console.log(
//   "Test 4:",
//   isValidUserCreation({
//     name: "",
//     email: "vikas@example.com",
//     password: "password123",
//     role: "admin",
//   }) === false,
// );

// console.log(
//   "Test 5:",
//   isValidUserCreation({
//     name: "Vikas",
//     email: "invalid-email",
//     password: "password123",
//     role: "manager",
//   }) === false,
// );

// console.log(
//   "Test 6:",
//   isValidUserCreation({
//     name: "Vikas",
//     email: "vikas@example.com",
//     password: undefined,
//     role: "user",
//   }) === false,
// );

// // Expected:
// // Test 1: true
// // Test 2: true
// // Test 3: true
// // Test 4: true
// // Test 5: true

console.log("----");

// ========================================
// Exercise 4 — Validate Payment Request
// ========================================

// Requirements:
//
// A payment request is valid only when:
//
// - customerId is a non-empty string.
// - amount must be a number.
// - amount must be greater than 0.
// - currency must be one of:
//   "INR", "USD", "CAD"
//
// Return:
// true  -> valid request
// false -> invalid request

const allowedCurrencies = ["INR", "USD", "CAD"];

function isValidPaymentRequest(request) {
  if (
    typeof request.customerId !== "string" ||
    typeof request.amount !== "number" ||
    typeof request.paymentDate !== "string" ||
    request.customerId.trim() === "" ||
    request.amount <= 0 ||
    !allowedCurrencies.includes(request.currency) ||
    Number.isNaN(new Date(request.paymentDate).getTime())
  ) {
    return false;
  }

  return true;
}

// ========================================
// Tests
// ========================================

console.log(
  "Test 1:",
  isValidPaymentRequest({
    customerId: "C101",
    amount: 500,
    currency: "INR",
    paymentDate: "2026-09-10",
  }) === true,
);

console.log(
  "Test 2:",
  isValidPaymentRequest({
    customerId: "C101",
    amount: 0,
    currency: "INR",
    paymentDate: "2026-09-10",
  }) === false,
);

console.log(
  "Test 3:",
  isValidPaymentRequest({
    customerId: "C101",
    amount: -200,
    currency: "USD",
    paymentDate: "2026-09-10",
  }) === false,
);

console.log(
  "Test 4:",
  isValidPaymentRequest({
    customerId: "C101",
    amount: "500",
    currency: "INR",
    paymentDate: "2026-09-10",
  }) === false,
);

console.log(
  "Test 5:",
  isValidPaymentRequest({
    customerId: "   ",
    amount: 500,
    currency: "CAD",
    paymentDate: "2026-09-10",
  }) === false,
);

console.log(
  "Test 6:",
  isValidPaymentRequest({
    customerId: "C101",
    amount: 500,
    currency: "EUR",
    paymentDate: "2026-09-10",
  }) === false,
);

console.log(
  "Test 7:",
  isValidPaymentRequest({
    customerId: "C101",
    amount: 500,
    currency: "INR",
    paymentDate: "2026-09-10",
  }) === true,
);

console.log(
  "Test 8:",
  isValidPaymentRequest({
    customerId: "C101",
    amount: 500,
    currency: "INR",
    paymentDate: "not-a-date",
  }) === false,
);

console.log(
  "Test 9:",
  isValidPaymentRequest({
    customerId: "C101",
    amount: 500,
    currency: "INR",
    paymentDate: undefined,
  }) === false,
);

// Expected:
// Test 7: true
// Test 8: true
// Test 9: true

// Expected:
// Test 1: true
// Test 2: true
// Test 3: true
// Test 4: true
// Test 5: true
// Test 6: true
