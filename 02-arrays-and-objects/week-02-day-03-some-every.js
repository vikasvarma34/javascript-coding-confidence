// console.log("Let's Come On!!");

// const products = [
//   { name: "Keyboard", inStock: true },
//   { name: "Monitor", inStock: false },
// ];

// const hasOutOfStockProduct = products.some((product) => {
//   return product.inStock === false;
// });

// console.log(hasOutOfStockProduct); // true

// Exercise 1 — hasCancelledAppointment
//
// Business rules:
// 1. Return true when at least one appointment has a cancelled status.
// 2. Status comparison must ignore uppercase/lowercase differences.
// 3. Status comparison must ignore surrounding spaces.
// 4. Missing or null status values must not cause an error.
// 5. Return false for an empty array.
// 6. Do not modify the original array or its objects.

// function hasCancelledAppointment(appointments = []) {
//   return appointments.some((appointment) => {
//     return normalizeString(appointment?.status) === "cancelled";
//   });
// }

// const appointmentsWithCancellation = [
//   { id: "APT-101", status: "confirmed" },
//   { id: "APT-102", status: " CANCELLED " },
//   { id: "APT-103", status: "completed" },
// ];

// const appointmentsWithoutCancellation = [
//   { id: "APT-201", status: "confirmed" },
//   { id: "APT-202", status: "completed" },
// ];

// const appointmentsWithMissingStatuses = [
//   { id: "APT-301", status: null },
//   { id: "APT-302" },
//   { id: "APT-303", status: "pending" },
// ];

// console.log(
//   "Test 1 - cancellation exists:",
//   hasCancelledAppointment(appointmentsWithCancellation) === true,
// ); // Expected: true

// console.log(
//   "Test 2 - no cancellation:",
//   hasCancelledAppointment(appointmentsWithoutCancellation) === false,
// ); // Expected: true

// console.log(
//   "Test 3 - missing statuses:",
//   hasCancelledAppointment(appointmentsWithMissingStatuses) === false,
// ); // Expected: true

// console.log("Test 4 - empty array:", hasCancelledAppointment([]) === false); // Expected: true

// console.log(
//   "Test 5 - missing appointments argument:",
//   hasCancelledAppointment() === false,
// ); // Expected: true

// const permissions = ["read", "write", "delete"];

// const areAllPermissionsStrings = permissions.every((permission) => {
//   return typeof permission === "string";
// });

// console.log(areAllPermissionsStrings); // true

// Exercise 2 — areAllRequiredFieldsCompleted
//
// Business rules:
// 1. Return true only when every field has a completed value.
// 2. A completed value must be a string containing at least one
//    non-whitespace character.
// 3. Missing, undefined, null, or whitespace-only values are incomplete.
// 4. Return false when the fields array is empty.
// 5. Return false when the argument is omitted.
// 6. Do not modify the original array or its objects.

// function areAllRequiredFieldsCompleted(fields = []) {
//   if (fields.length === 0) {
//     return false;
//   }

//   return fields.every((field) => {
//     return normalizeString(field.value) !== "Unavailable";
//   });
// }

// const completedRegistrationFields = [
//   { name: "fullName", value: " Vikas Varma " },
//   { name: "email", value: "vikas@example.com" },
//   { name: "password", value: "secure-password" },
// ];

// const incompleteRegistrationFields = [
//   { name: "fullName", value: "Vikas Varma" },
//   { name: "email", value: "   " },
//   { name: "password", value: "secure-password" },
// ];

// const missingRegistrationFields = [
//   { name: "fullName", value: "Vikas Varma" },
//   { name: "email", value: null },
//   { name: "password" },
// ];

// console.log(
//   "Test 1 - all fields completed:",
//   areAllRequiredFieldsCompleted(completedRegistrationFields) === true,
// ); // Expected: true

// console.log(
//   "Test 2 - whitespace field:",
//   areAllRequiredFieldsCompleted(incompleteRegistrationFields) === false,
// ); // Expected: true

// console.log(
//   "Test 3 - null and missing fields:",
//   areAllRequiredFieldsCompleted(missingRegistrationFields) === false,
// ); // Expected: true

// console.log(
//   "Test 4 - empty array:",
//   areAllRequiredFieldsCompleted([]) === false,
// ); // Expected: true

// console.log(
//   "Test 5 - omitted argument:",
//   areAllRequiredFieldsCompleted() === false,
// ); // Expected: true

// const validValuesWithoutNames = [
//   { value: "Vikas Varma" },
//   { value: "vikas@example.com" },
// ];

// console.log(
//   "Test 6 - valid values without names:",
//   areAllRequiredFieldsCompleted(validValuesWithoutNames) === true,
// ); // Expected: true

// const fieldsWithNonStringValue = [
//   { name: "fullName", value: "Vikas Varma" },
//   { name: "age", value: 27 },
// ];

// console.log(
//   "Test 7 - non-string value:",
//   areAllRequiredFieldsCompleted(fieldsWithNonStringValue) === false,
// ); // Expected: true

// Exercise 3 — hasAnyRequiredPermission
//
// Business rules:
// 1. Return true when the user has at least one required permission.
// 2. Permission comparison must ignore uppercase/lowercase differences.
// 3. Permission comparison must ignore surrounding spaces.
// 4. null and undefined permission values must be safely ignored.
// 5. Return false when userPermissions is empty.
// 6. Return false when requiredPermissions is empty.
// 7. Return false when either argument is omitted.
// 8. Do not modify either original array.
//
// Expected input types:
// - userPermissions: array of strings, null, or undefined
// - requiredPermissions: array of strings, null, or undefined

// function hasAnyRequiredPermission(
//   userPermissions = [],
//   requiredPermissions = [],
// ) {
//   if (userPermissions.length === 0 || requiredPermissions.length === 0) {
//     return false;
//   }

//   const normalizedUserPermissions = userPermissions.map((userPermission) =>
//     normalizeString(userPermission),
//   );

//   const normalizedRequiredPermissions = requiredPermissions.map(
//     (requiredPermission) => normalizeString(requiredPermission),
//   );

//   return normalizedUserPermissions.some((userPermission) => {
//     return (
//       userPermission !== "Unavailable" &&
//       normalizedRequiredPermissions.some((requiredPermission) => {
//         return (
//           requiredPermission !== "Unavailable" &&
//           requiredPermission === userPermission
//         );
//       })
//     );
//   });
// }

// const editorPermissions = ["read", " WRITE ", "publish"];
// const adminRequiredPermissions = ["delete", "admin"];
// const contentRequiredPermissions = ["write", "edit"];

// console.log(
//   "Test 1 - matching permission:",
//   hasAnyRequiredPermission(editorPermissions, contentRequiredPermissions) ===
//     true,
// ); // Expected: true

// console.log(
//   "Test 2 - no matching permission:",
//   hasAnyRequiredPermission(editorPermissions, adminRequiredPermissions) ===
//     false,
// ); // Expected: true

// console.log(
//   "Test 3 - case-insensitive match:",
//   hasAnyRequiredPermission(["READ"], ["read"]) === true,
// ); // Expected: true

// console.log(
//   "Test 4 - null and undefined values:",
//   hasAnyRequiredPermission(
//     [null, undefined, "publish"],
//     [undefined, " PUBLISH "],
//   ) === true,
// ); // Expected: true

// console.log(
//   "Test 5 - empty user permissions:",
//   hasAnyRequiredPermission([], ["read"]) === false,
// ); // Expected: true

// console.log(
//   "Test 6 - empty required permissions:",
//   hasAnyRequiredPermission(["read"], []) === false,
// ); // Expected: true

// console.log(
//   "Test 7 - omitted arguments:",
//   hasAnyRequiredPermission() === false,
// ); // Expected: true

// Exercise 4 — areAllOrderItemsValid
//
// Business rules:
// 1. Return true only when every order item is valid.
// 2. productId must be a string containing at least one
//    non-whitespace character.
// 3. quantity must be an integer greater than or equal to 1.
// 4. Return false when the items array is empty.
// 5. Return false when the argument is omitted.
// 6. Missing, null, or undefined properties are invalid.
// 7. Do not modify the original array or its objects.
//
// Expected input scenarios:
// - productId may be a valid string, blank string, null,
//   undefined, or missing.
// - quantity may be a positive integer, zero, negative,
//   decimal, null, undefined, or missing.
// - items may be an empty array or omitted.
// - No other input types need to be handled.

// function areAllOrderItemsValid(items = []) {
//   if (items.length === 0) {
//     return false;
//   }

//   return items.every((item) => {
//     const itemQuantity = Number.isInteger(item?.quantity) ? item?.quantity : 0;
//     return (
//       normalizeString(item.productId) !== "Unavailable" && itemQuantity > 0
//     );
//   });
// }

// const validOrderItems = [
//   { productId: "PRD-101", quantity: 2 },
//   { productId: " PRD-102 ", quantity: 1 },
//   { productId: "PRD-103", quantity: 5 },
// ];

// const itemsWithBlankProductId = [
//   { productId: "PRD-101", quantity: 2 },
//   { productId: "   ", quantity: 1 },
// ];

// const itemsWithZeroQuantity = [
//   { productId: "PRD-101", quantity: 2 },
//   { productId: "PRD-102", quantity: 0 },
// ];

// const itemsWithDecimalQuantity = [{ productId: "PRD-101", quantity: 1.5 }];

// const itemsWithMissingProperties = [
//   { productId: "PRD-101", quantity: 2 },
//   { productId: null },
// ];

// console.log(
//   "Test 1 - all items valid:",
//   areAllOrderItemsValid(validOrderItems) === true,
// ); // Expected: true

// console.log(
//   "Test 2 - blank product ID:",
//   areAllOrderItemsValid(itemsWithBlankProductId) === false,
// ); // Expected: true

// console.log(
//   "Test 3 - zero quantity:",
//   areAllOrderItemsValid(itemsWithZeroQuantity) === false,
// ); // Expected: true

// console.log(
//   "Test 4 - decimal quantity:",
//   areAllOrderItemsValid(itemsWithDecimalQuantity) === false,
// ); // Expected: true

// console.log(
//   "Test 5 - missing properties:",
//   areAllOrderItemsValid(itemsWithMissingProperties) === false,
// ); // Expected: true

// console.log("Test 6 - empty array:", areAllOrderItemsValid([]) === false); // Expected: true

// console.log("Test 7 - omitted argument:", areAllOrderItemsValid() === false); // Expected: true

const normalizeString = (text) => text?.trim().toLowerCase() || "Unavailable";

// Exercise 5 — isAppointmentBatchReady
// Expected input scenarios:
// - appointments is an array of appointment objects.
// - patientId may be a valid string, blank string, null,
//   undefined, or missing.
// - status may be "confirmed", "completed", another string,
//   blank, null, undefined, or missing.
// - appointments may be empty or omitted.
// - Appointment objects themselves will not be null or undefined.
// - No other input types need to be handled.
//
// Required:
// - Use every() to validate the complete batch.
// - Use some() to confirm that at least one appointment is confirmed.

// Business rules:
// 1. Return true only when every appointment has a valid patientId.
// 2. A valid patientId must be a non-empty, non-whitespace string.
// 3. Every appointment status must be either "confirmed" or "completed".
// 4. Status comparison must ignore surrounding spaces and letter casing.
// 5. At least one appointment must have the status "confirmed".
// 6. A batch containing only completed appointments returns false.
// 7. Return false when appointments is empty.
// 8. Return false when the argument is omitted.
// 9. Missing, null, undefined, or blank patientId/status values are invalid.
// 10. Do not modify the original array or its objects.

function isAppointmentBatchReady(appointments = []) {
  if (appointments.length === 0) {
    return false;
  }
  const normalizedAppointments = appointments.map((appointment) => {
    return {
      id: normalizeString(appointment.id),
      patientId: normalizeString(appointment.patientId),
      status: normalizeString(appointment.status),
    };
  });

  return (
    normalizedAppointments.every((appointment) => {
      return (
        appointment.patientId !== "Unavailable" &&
        appointment.status !== "Unavailable" &&
        (appointment.status === "completed" ||
          appointment.status === "confirmed")
      );
    }) &&
    normalizedAppointments.some(
      (appointment) => appointment.status === "confirmed",
    )
  );
}

const readyAppointments = [
  { id: "APT-101", patientId: "PAT-1", status: "completed" },
  { id: "APT-102", patientId: "PAT-2", status: "confirmed" },
  { id: "APT-103", patientId: "PAT-3", status: "completed" },
];

const completedAppointments = [
  { id: "APT-201", patientId: "PAT-1", status: "completed" },
  { id: "APT-202", patientId: "PAT-2", status: "completed" },
];

const appointmentsWithInvalidStatus = [
  { id: "APT-301", patientId: "PAT-1", status: "confirmed" },
  { id: "APT-302", patientId: "PAT-2", status: "cancelled" },
];

const appointmentsWithMissingPatient = [
  { id: "APT-401", patientId: "PAT-1", status: "confirmed" },
  { id: "APT-402", patientId: "   ", status: "completed" },
];

const normalizedAppointments = [
  { id: "APT-501", patientId: " PAT-1 ", status: " COMPLETED " },
  { id: "APT-502", patientId: "PAT-2", status: "Confirmed" },
];

const appointmentsWithMissingStatus = [
  { id: "APT-601", patientId: "PAT-1", status: "confirmed" },
  { id: "APT-602", patientId: "PAT-2" },
];

console.log(
  "Test 1 - batch ready:",
  isAppointmentBatchReady(readyAppointments) === true,
); // Expected: true

console.log(
  "Test 2 - only completed appointments:",
  isAppointmentBatchReady(completedAppointments) === false,
); // Expected: true

console.log(
  "Test 3 - invalid status:",
  isAppointmentBatchReady(appointmentsWithInvalidStatus) === false,
); // Expected: true

console.log(
  "Test 4 - missing patient:",
  isAppointmentBatchReady(appointmentsWithMissingPatient) === false,
); // Expected: true

console.log(
  "Test 5 - spaces and casing:",
  isAppointmentBatchReady(normalizedAppointments) === true,
); // Expected: true

console.log(
  "Test 6 - missing status:",
  isAppointmentBatchReady(appointmentsWithMissingStatus) === false,
); // Expected: true

console.log("Test 7 - empty array:", isAppointmentBatchReady([]) === false); // Expected: true

console.log("Test 8 - omitted argument:", isAppointmentBatchReady() === false); // Expected: true
