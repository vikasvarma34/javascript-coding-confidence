// function runTest(testName, actual, expected) {
//   const passed = JSON.stringify(actual) === JSON.stringify(expected);

//   console.log(`${testName}:`, passed);

//   if (!passed) {
//     console.log("Actual:", actual);
//     console.log("Expected:", expected);
//   }
// }

// // Business rules:
// // 1. Return a new array using map.
// // 2. Create one display label for every appointment.
// // 3. Each label must use this exact format:
// //    "APT-101 | ASHA | CONFIRMED"
// // 4. Trim the patient name before converting it to uppercase.
// // 5. Convert the status to uppercase.
// // 6. Preserve the original appointment order.
// // 7. Do not modify the original array or appointment objects.
// // 8. An empty array must return an empty array.

// function createAppointmentLabels(appointments) {
//   return appointments.map((appointment) => {
//     return `${appointment.appointmentId} | ${appointment.patientName.trim().toUpperCase()} | ${appointment.status.trim().toUpperCase()}`;
//   });
// }

// const labelAppointments = [
//   {
//     appointmentId: "APT-101",
//     patientName: "  Asha ",
//     status: "confirmed",
//   },
//   {
//     appointmentId: "APT-102",
//     patientName: "Ravi  ",
//     status: "pending",
//   },
// ];

// const appointmentLabelsResult = createAppointmentLabels(labelAppointments);

// runTest("Test 1: Creates appointment labels", appointmentLabelsResult, [
//   "APT-101 | ASHA | CONFIRMED",
//   "APT-102 | RAVI | PENDING",
// ]);
// // Expected: true

// runTest(
//   "Test 2: Single cancelled appointment",
//   createAppointmentLabels([
//     {
//       appointmentId: "APT-201",
//       patientName: " Meena Reddy ",
//       status: "cancelled",
//     },
//   ]),
//   ["APT-201 | MEENA REDDY | CANCELLED"],
// );
// // Expected: true

// runTest("Test 3: Empty array", createAppointmentLabels([]), []);
// // Expected: true

// runTest("Test 4: Original appointments unchanged", labelAppointments, [
//   {
//     appointmentId: "APT-101",
//     patientName: "  Asha ",
//     status: "confirmed",
//   },
//   {
//     appointmentId: "APT-102",
//     patientName: "Ravi  ",
//     status: "pending",
//   },
// ]);
// // Expected: true

// console.log(
//   "Test 5: Returned a new array reference:",
//   appointmentLabelsResult !== labelAppointments,
// );
// // Expected: true

// Business rules:
// 1. Return a new array using map.
// 2. Convert every CAD price into integer cents.
// 3. Multiply each price by 100.
// 4. Use Math.round so every result is an integer.
// 5. Do not modify the original array.
// 6. An empty array must return an empty array.

// function convertPricesToCents(prices) {
//   return prices.map((price) => {
//     return Math.round(price * 100);
//   });
// }

// function runTest(testName, actual, expected) {
//   const passed = JSON.stringify(actual) === JSON.stringify(expected);

//   console.log(`${testName}:`, passed);

//   if (!passed) {
//     console.log("Actual:", actual);
//     console.log("Expected:", expected);
//   }
// }

// const prices1 = [12.5, 29.99, 100];
// const result1 = convertPricesToCents(prices1);

// runTest("Test 1: Converts normal prices", result1, [1250, 2999, 10000]);
// // Expected: true

// runTest(
//   "Test 2: Includes zero and small decimals",
//   convertPricesToCents([0, 0.99, 5.25]),
//   [0, 99, 525],
// );
// // Expected: true

// runTest(
//   "Test 3: Rounds fractional cents",
//   convertPricesToCents([10.999, 2.345]),
//   [1100, 235],
// );
// // Expected: true

// runTest("Test 4: Empty array", convertPricesToCents([]), []);
// // Expected: true

// runTest("Test 5: Original array unchanged", prices1, [12.5, 29.99, 100]);
// // Expected: true

// console.log("Test 6: Returned a new array reference:", result1 !== prices1);
// // Expected: true
console.log("-----");

// Business rules:
// 1. Return a new array using map.
// 2. Create one new API response object for every user.
// 3. Each response object must contain:
//    - id: taken from userId
//    - displayName: the trimmed name converted to uppercase
//    - email: the trimmed email converted to lowercase
//    - status: "ACTIVE" when isActive is true, otherwise "INACTIVE"
// 4. Preserve the original user order.
// 5. Do not modify the original array or its user objects.
// 6. Every returned response object must be a new object.
// 7. An empty array must return an empty array.

function createUserResponses(users) {
  return users.map((user) => {
    return {
      id: user.userId,
      displayName: user.name.trim().toUpperCase(),
      email: user.email.trim().toLowerCase(),
      status: user.isActive ? "ACTIVE" : "INACTIVE",
    };
  });
}

function runTest(testName, actual, expected) {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);

  console.log(`${testName}:`, passed);

  if (!passed) {
    console.log("Actual:", actual);
    console.log("Expected:", expected);
  }
}

const users1 = [
  {
    userId: 101,
    name: "  Asha Reddy ",
    email: " ASHA@EXAMPLE.COM ",
    isActive: true,
    passwordHash: "hidden-value-1",
  },
  {
    userId: 102,
    name: " Ravi Kumar  ",
    email: "RAVI@Example.com",
    isActive: false,
    passwordHash: "hidden-value-2",
  },
];

const result1 = createUserResponses(users1);

runTest("Test 1: Creates clean user responses", result1, [
  {
    id: 101,
    displayName: "ASHA REDDY",
    email: "asha@example.com",
    status: "ACTIVE",
  },
  {
    id: 102,
    displayName: "RAVI KUMAR",
    email: "ravi@example.com",
    status: "INACTIVE",
  },
]);
// Expected: true

runTest(
  "Test 2: Handles already normalized user",
  createUserResponses([
    {
      userId: 201,
      name: "MEENA",
      email: "meena@example.com",
      isActive: true,
      passwordHash: "hidden-value-3",
    },
  ]),
  [
    {
      id: 201,
      displayName: "MEENA",
      email: "meena@example.com",
      status: "ACTIVE",
    },
  ],
);
// Expected: true

runTest("Test 3: Empty array", createUserResponses([]), []);
// Expected: true

runTest("Test 4: Original users unchanged", users1, [
  {
    userId: 101,
    name: "  Asha Reddy ",
    email: " ASHA@EXAMPLE.COM ",
    isActive: true,
    passwordHash: "hidden-value-1",
  },
  {
    userId: 102,
    name: " Ravi Kumar  ",
    email: "RAVI@Example.com",
    isActive: false,
    passwordHash: "hidden-value-2",
  },
]);
// Expected: true

console.log("Test 5: Returned a new array reference:", result1 !== users1);
// Expected: true

console.log(
  "Test 6: Created new object references:",
  result1[0] !== users1[0] && result1[1] !== users1[1],
);
// Expected: true

console.log(
  "Test 7: Excluded sensitive password hashes:",
  !Object.hasOwn(result1[0], "passwordHash") &&
    !Object.hasOwn(result1[1], "passwordHash"),
);
// Expected: true
