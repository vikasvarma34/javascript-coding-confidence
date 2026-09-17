// // console.log("Let's Come On!");

// // // ========================================
// // // Exercise 1 — Payment Processing Result
// // // ========================================

// // // Business rules:
// // //
// // // processPayment(payment)
// // //
// // // 1. If payment.amount is not a positive number:
// // //    return a failure result.
// // //    code must be "VALIDATION_ERROR"
// // //    message must be "Amount must be greater than zero"
// // //
// // // 2. If payment.status is already "completed":
// // //    return a failure result.
// // //    code must be "CONFLICT"
// // //    message must be "Payment is already completed"
// // //
// // // 3. Otherwise:
// // //    return a success result containing:
// // //      id
// // //      amount
// // //      status: "completed"
// // //
// // // Response convention:
// // //
// // // Success:
// // // {
// // //   success: true,
// // //   data: ...
// // // }
// // //
// // // Failure:
// // // {
// // //   success: false,
// // //   code: "...",
// // //   message: "..."
// // // }

// // function processPayment(payment) {
// //   if (typeof payment.amount !== "number" || payment.amount <= 0) {
// //     return {
// //       success: false,
// //       code: "VALIDATION_ERROR",
// //       message: "Amount must be greater than zero",
// //     };
// //   }

// //   if (payment.status === "completed") {
// //     return {
// //       success: false,
// //       code: "CONFLICT",
// //       message: "Payment is already completed",
// //     };
// //   }

// //   payment.status = "completed";
// //   return {
// //     success: true,
// //     data: payment,
// //   };
// // }

// // // ========================================
// // // Tests
// // // ========================================

// // const result1 = processPayment({
// //   id: 101,
// //   amount: 250,
// //   status: "pending",
// // });

// // console.log(
// //   "----- Test 1: valid payment -----",
// //   result1.success === true &&
// //     result1.data.id === 101 &&
// //     result1.data.amount === 250 &&
// //     result1.data.status === "completed",
// // );

// // const result2 = processPayment({
// //   id: 102,
// //   amount: 0,
// //   status: "pending",
// // });

// // console.log(
// //   "----- Test 2: invalid amount -----",
// //   result2.success === false &&
// //     result2.code === "VALIDATION_ERROR" &&
// //     result2.message === "Amount must be greater than zero",
// // );

// // const result3 = processPayment({
// //   id: 103,
// //   amount: 400,
// //   status: "completed",
// // });

// // console.log(
// //   "----- Test 3: conflicting state -----",
// //   result3.success === false &&
// //     result3.code === "CONFLICT" &&
// //     result3.message === "Payment is already completed",
// // );

// // // Expected:
// // // ----- Test 1: valid payment ----- true
// // // ----- Test 2: invalid amount ----- true
// // // ----- Test 3: conflicting state ----- true

// // // ========================================
// // // Hidden Test — Amount type
// // // ========================================

// // const result4 = processPayment({
// //   id: 104,
// //   amount: "250",
// //   status: "pending",
// // });

// // console.log(
// //   "----- Test 4: amount is not a number -----",
// //   result4.success === false &&
// //     result4.code === "VALIDATION_ERROR" &&
// //     result4.message === "Amount must be greater than zero",
// // );

// // // Expected:
// // // ----- Test 4: amount is not a number ----- true

// console.log("-----");

// // ========================================
// // Exercise 2 — Standard Response Helpers
// // ========================================

// // Requirements:
// //
// // createSuccess(data)
// // - Return:
// //   {
// //     success: true,
// //     data: data
// //   }
// //
// // createError(code, message)
// // - Return one standard failure object.
// // - It must contain:
// //     success
// //     code
// //     message
// //
// // findOrderById(orders, orderId)
// //
// // Business rules:
// // 1. Find the order matching orderId.
// //
// // 2. If no order exists:
// //    return a standard error using createError()
// //    code: "NOT_FOUND"
// //    message: "Order not found"
// //
// // 3. If the order status is "cancelled":
// //    return a standard error using createError()
// //    code: "CONFLICT"
// //    message: "Order is cancelled"
// //
// // 4. Otherwise:
// //    return a standard success result using createSuccess()
// //    containing the found order.

// function createSuccess(data) {
//   return {
//     success: true,
//     data,
//   };
// }

// function createError(code, message) {
//   return {
//     success: false,
//     code,
//     message,
//   };
// }

// function findOrderById(orders, orderId) {
//   const order = orders.find((order) => order.id === orderId);

//   if (!order) {
//     return createError("NOT_FOUND", "Order not found");
//   }

//   if (order.status === "cancelled") {
//     return createError("CONFLICT", "Order is cancelled");
//   }

//   return createSuccess(order);
// }

// // ========================================
// // Tests
// // ========================================

// const orders = [
//   {
//     id: 201,
//     customer: "Ravi",
//     status: "confirmed",
//   },
//   {
//     id: 202,
//     customer: "Anil",
//     status: "cancelled",
//   },
// ];

// const orderResult1 = findOrderById(orders, 201);

// console.log(
//   "----- Test 1: successful lookup -----",
//   orderResult1.success === true &&
//     orderResult1.data.id === 201 &&
//     orderResult1.data.customer === "Ravi",
// );

// const orderResult2 = findOrderById(orders, 999);

// console.log(
//   "----- Test 2: order not found -----",
//   orderResult2.success === false &&
//     orderResult2.code === "NOT_FOUND" &&
//     orderResult2.message === "Order not found",
// );

// const orderResult3 = findOrderById(orders, 202);

// console.log(
//   "----- Test 3: cancelled order -----",
//   orderResult3.success === false &&
//     orderResult3.code === "CONFLICT" &&
//     orderResult3.message === "Order is cancelled",
// );

// // Expected:
// // ----- Test 1: successful lookup ----- true
// // ----- Test 2: order not found ----- true
// // ----- Test 3: cancelled order ----- true

console.log("-----");

// ========================================
// Exercise 3 — Registration Result Design
// ========================================

// Requirements:
//
// registerUser(users, input)
//
// Validation rules:
//
// - email must be a non-empty string after trimming.
// - password must be a string with at least 8 characters.
//
// If one or more validation rules fail:
// return:
//
// {
//   success: false,
//   code: "VALIDATION_ERROR",
//   message: "Validation failed",
//   details: {
//      ...only the fields that failed
//   }
// }
//
// Exact field-error messages:
//
// email:
// "Email is required"
//
// password:
// "Password must contain at least 8 characters"
//
//
// After validation succeeds:
//
// - Check whether another user already has the same email.
// - Email comparison must be case-insensitive.
//
// If the email already exists:
// return a standard error using createError()
//
// code:
// "CONFLICT"
//
// message:
// "Email already exists"
//
//
// Otherwise:
//
// Create a new user with:
// - id = highest existing ID + 1
// - trimmed email
//
// Add the user to the users array.
//
// Return the new user using createSuccess().

function createSuccess(data) {
  return {
    success: true,
    data,
  };
}

function createError(code, message, details) {
  return {
    success: false,
    code,
    message,
    details,
  };
}

function registerUser(users, input) {
  let details = {};

  const inputEmail = input?.email;
  if (
    typeof inputEmail !== "string" ||
    inputEmail?.trim().toLowerCase() === ""
  ) {
    details.email = "Email is required";
  }

  if (typeof input.password !== "string" || input.password.length < 8) {
    details.password = "Password must contain at least 8 characters";
  }

  if (details.email || details.password) {
    return createError("VALIDATION_ERROR", "Validation failed", details);
  }

  const user = users.find(
    (user) =>
      user.email.trim().toLowerCase() === inputEmail.trim().toLowerCase(),
  );

  if (user) {
    return createError("CONFLICT", "Email already exists");
  }

  let highestId = 0;
  for (const user of users) {
    if (user.id > highestId) {
      highestId = user.id;
    }
  }

  const newUser = {
    id: highestId + 1,
    email: inputEmail?.trim().toLowerCase(),
  };

  users.push(newUser);

  return createSuccess(newUser);
}

// ========================================
// Tests
// ========================================

const registeredUsers = [
  {
    id: 4,
    email: "ravi@example.com",
  },
  {
    id: 9,
    email: "anil@example.com",
  },
];

const registrationResult1 = registerUser(registeredUsers, {
  email: "  priya@example.com  ",
  password: "secure123",
});

console.log(
  "----- Test 1: successful registration -----",
  registrationResult1.success === true &&
    registrationResult1.data.id === 10 &&
    registrationResult1.data.email === "priya@example.com",
);

const registrationResult2 = registerUser(registeredUsers, {
  email: "   ",
  password: "123",
});

console.log(
  "----- Test 2: multiple validation errors -----",
  registrationResult2.success === false &&
    registrationResult2.code === "VALIDATION_ERROR" &&
    registrationResult2.message === "Validation failed" &&
    registrationResult2.details.email === "Email is required" &&
    registrationResult2.details.password ===
      "Password must contain at least 8 characters",
);

const registrationResult3 = registerUser(registeredUsers, {
  email: "RAVI@EXAMPLE.COM",
  password: "password123",
});

console.log(
  "----- Test 3: duplicate email conflict -----",
  registrationResult3.success === false &&
    registrationResult3.code === "CONFLICT" &&
    registrationResult3.message === "Email already exists",
);

const registrationResult4 = registerUser(registeredUsers, {
  email: "new@example.com",
  password: 12345678,
});

console.log(
  "----- Test 4: password wrong type -----",
  registrationResult4.success === false &&
    registrationResult4.code === "VALIDATION_ERROR" &&
    registrationResult4.details.password ===
      "Password must contain at least 8 characters",
);

// Expected:
// ----- Test 1: successful registration ----- true
// ----- Test 2: multiple validation errors ----- true
// ----- Test 3: duplicate email conflict ----- true
// ----- Test 4: password wrong type ----- true

// ========================================
// Additional Requirement Tests
// ========================================

const usersForTest5 = [{ id: 1, email: "existing@example.com" }];

const result5 = registerUser(usersForTest5, {
  email: "newuser@example.com",
  password: "password123",
});

console.log(
  "----- Test 5: successful user is stored -----",
  result5.success === true &&
    usersForTest5.length === 2 &&
    usersForTest5.some((user) => user.email === "newuser@example.com"),
);

const usersForTest6 = [{ id: 1, email: "ADMIN@EXAMPLE.COM" }];

const result6 = registerUser(usersForTest6, {
  email: "admin@example.com",
  password: "password123",
});

console.log(
  "----- Test 6: duplicate comparison is case-insensitive -----",
  result6.success === false && result6.code === "CONFLICT",
);

// Expected:
// ----- Test 5: successful user is stored ----- true
// ----- Test 6: duplicate comparison is case-insensitive ----- true

// ========================================
// Final Validation Test
// ========================================

const result7 = registerUser(registeredUsers, {
  email: 12345,
  password: "password123",
});

console.log(
  "----- Test 7: email wrong type -----",
  result7.success === false &&
    result7.code === "VALIDATION_ERROR" &&
    result7.details.email === "Email is required",
);

// Expected:
// ----- Test 7: email wrong type ----- true
