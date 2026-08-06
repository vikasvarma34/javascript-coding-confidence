const printLog = (value) => {
  console.log(value);
};

// printLog("Let's Come on!");

// Exercise 1: Sort product prices in ascending order
//
// Business rules:
// 1. Return the prices from lowest to highest.
// 2. The input will be an array of numbers.
// 3. Duplicate prices must remain in the result.
// 4. Negative numbers and decimal numbers are valid.
// 5. An empty array must return an empty array.
// 6. Do not modify the original input array.
// 7. The returned array must have a different array reference.
//
// Plain-English approach:
// 1.
// 2.
// 3.

// function sortPricesAscending(prices = []) {
//   const toBeMutatedPrices = [...prices];
//   return toBeMutatedPrices.sort((a, b) => a - b);
// }

// const prices1 = [499, 99, 250, 120];
// const result1 = sortPricesAscending(prices1);

// console.log("Result:", result1);
// // Expected: [99, 120, 250, 499]

// console.log(
//   "Test 1:",
//   JSON.stringify(result1) === JSON.stringify([99, 120, 250, 499]),
// );
// // Expected: true

// console.log(
//   "Original array preserved:",
//   JSON.stringify(prices1) === JSON.stringify([499, 99, 250, 120]),
// );
// // Expected: true

// console.log("Different array reference:", result1 !== prices1);
// // Expected: true

// console.log(
//   "Duplicates and decimals:",
//   JSON.stringify(sortPricesAscending([10.5, -2, 10.5, 3])) ===
//     JSON.stringify([-2, 3, 10.5, 10.5]),
// );
// // Expected: true

// console.log(
//   "Already sorted:",
//   JSON.stringify(sortPricesAscending([1, 2, 3])) === JSON.stringify([1, 2, 3]),
// );
// // Expected: true

// console.log(
//   "Empty array:",
//   JSON.stringify(sortPricesAscending([])) === JSON.stringify([]),
// );
// // Expected: true

// Exercise 1 modification: Sort prices in descending order
//
// Business rules:
// 1. Return prices from highest to lowest.
// 2. Preserve duplicate, decimal, zero, and negative values.
// 3. An empty array must return an empty array.
// 4. Do not mutate the original input array.
// 5. Return a different array reference.
//
// Plain-English approach:
// 1.
// 2.
// 3.

// function sortPricesDescending(prices = []) {
//   const copiedPrices = [...prices];
//   return copiedPrices.sort((a, b) => b - a);
// }

// const prices2 = [499, 99, 250, 120];
// const result2 = sortPricesDescending(prices2);

// console.log("Descending result:", result2);
// // Expected: [499, 250, 120, 99]

// console.log(
//   "Descending order:",
//   JSON.stringify(result2) === JSON.stringify([499, 250, 120, 99]),
// );
// // Expected: true

// console.log(
//   "Original preserved:",
//   JSON.stringify(prices2) === JSON.stringify([499, 99, 250, 120]),
// );
// // Expected: true

// console.log("Different array reference:", result2 !== prices2);
// // Expected: true

// console.log(
//   "Decimals, duplicates, zero and negatives:",
//   JSON.stringify(sortPricesDescending([3.5, -2, 10, 3.5, 0])) ===
//     JSON.stringify([10, 3.5, 3.5, 0, -2]),
// );
// // Expected: true

// console.log(
//   "Empty descending array:",
//   JSON.stringify(sortPricesDescending([])) === JSON.stringify([]),
// );
// // Expected: true

// Exercise 2: Sort department names alphabetically
//
// Business rules:
// 1. Return department names in alphabetical order.
// 2. Sorting must be case-insensitive.
// 3. Preserve the original spelling and capitalization in the returned array.
// 4. Duplicate values must remain.
// 5. Empty strings are valid and should appear first.
// 6. Do not mutate the original input array.
// 7. Return a different array reference.
//
// Accepted input:
// - An array containing strings only.
//
// Test scenarios:
// - Mixed capitalization
// - Duplicate departments
// - Empty strings
// - Empty array
//
// Plain-English approach:
// 1.
// 2.
// 3.

// function sortDepartmentsAlphabetically(departments = []) {
//   const copiedDepartments = [...departments];
//   return copiedDepartments.sort((a, b) =>
//     a.toLowerCase().localeCompare(b.toLowerCase()),
//   );
// }

// const departments1 = ["sales", "Engineering", "finance", "HR"];
// const sortedDepartments1 = sortDepartmentsAlphabetically(departments1);

// console.log("Sorted departments:", sortedDepartments1);
// // Expected: ["Engineering", "finance", "HR", "sales"]

// console.log(
//   "Alphabetical order:",
//   JSON.stringify(sortedDepartments1) ===
//     JSON.stringify(["Engineering", "finance", "HR", "sales"]),
// );
// // Expected: true

// console.log(
//   "Original preserved:",
//   JSON.stringify(departments1) ===
//     JSON.stringify(["sales", "Engineering", "finance", "HR"]),
// );
// // Expected: true

// console.log("Different array reference:", sortedDepartments1 !== departments1);
// // Expected: true

// console.log(
//   "Duplicates and mixed capitalization:",
//   JSON.stringify(
//     sortDepartmentsAlphabetically(["Support", "accounts", "support", "HR"]),
//   ) === JSON.stringify(["accounts", "HR", "Support", "support"]),
// );
// // Expected: true

// console.log(
//   "Empty strings:",
//   JSON.stringify(sortDepartmentsAlphabetically(["Sales", "", "Finance"])) ===
//     JSON.stringify(["", "Finance", "Sales"]),
// );
// // Expected: true

// console.log(
//   "Empty array:",
//   JSON.stringify(sortDepartmentsAlphabetically([])) === JSON.stringify([]),
// );
// // Expected: true

// const products = [
//   { name: "Keyboard", stock: 12 },
//   { name: "Mouse", stock: 5 },
//   { name: "Monitor", stock: 20 },
// ];

// const sortedProducts = [...products].sort(
//   (firstProduct, secondProduct) => firstProduct.stock - secondProduct.stock,
// );

// console.log(sortedProducts);

// printLog("");

// Exercise 3: Sort users by age
//
// Business rules:
// 1. Return users sorted from youngest to oldest.
// 2. Each user is an object with id, name, and age.
// 3. Age will be a valid finite number.
// 4. Users with the same age must preserve their original relative order.
// 5. Do not mutate the original users array.
// 6. Do not mutate any user object.
// 7. Return a different array reference.
// 8. An empty array must return an empty array.
//
// Accepted input:
// - An array of user objects.
// - age may be an integer, decimal, zero, or negative number for this exercise.
//
// Test scenarios:
// - Normal unsorted users
// - Users with equal ages
// - Decimal and zero ages
// - Empty array
// - Original array and object references

// function sortUsersByAge(users = []) {
//   const copiedUsers = [...users];
//   return copiedUsers.sort(
//     (firstUser, secondUser) => firstUser.age - secondUser.age,
//   );
// }

// const users1 = [
//   { id: "U1", name: "Asha", age: 31 },
//   { id: "U2", name: "Ravi", age: 24 },
//   { id: "U3", name: "Meera", age: 28 },
// ];

// const sortedUsers1 = sortUsersByAge(users1);

// console.log(
//   "Users by age:",
//   sortedUsers1.map((user) => user.id),
// );
// // Expected: ["U2", "U3", "U1"]

// console.log(
//   "Age sorting:",
//   JSON.stringify(sortedUsers1.map((user) => user.id)) ===
//     JSON.stringify(["U2", "U3", "U1"]),
// );
// // Expected: true

// console.log(
//   "Original array preserved:",
//   JSON.stringify(users1.map((user) => user.id)) ===
//     JSON.stringify(["U1", "U2", "U3"]),
// );
// // Expected: true

// console.log("Different array reference:", sortedUsers1 !== users1);
// // Expected: true

// console.log(
//   "Original object references preserved:",
//   sortedUsers1[0] === users1[1] &&
//     sortedUsers1[1] === users1[2] &&
//     sortedUsers1[2] === users1[0],
// );
// // Expected: true

// console.log(
//   "Equal ages preserve original order:",
//   JSON.stringify(
//     sortUsersByAge([
//       { id: "U1", name: "A", age: 25 },
//       { id: "U2", name: "B", age: 20 },
//       { id: "U3", name: "C", age: 25 },
//     ]).map((user) => user.id),
//   ) === JSON.stringify(["U2", "U1", "U3"]),
// );
// // Expected: true

// console.log(
//   "Decimal and zero ages:",
//   JSON.stringify(
//     sortUsersByAge([
//       { id: "U1", name: "A", age: 2.5 },
//       { id: "U2", name: "B", age: 0 },
//       { id: "U3", name: "C", age: 1.5 },
//     ]).map((user) => user.id),
//   ) === JSON.stringify(["U2", "U3", "U1"]),
// );
// // Expected: true

// console.log(
//   "Empty users:",
//   JSON.stringify(sortUsersByAge([])) === JSON.stringify([]),
// );
// // Expected: true

// printLog("");

// // Exercise 4: Sort appointments by date
// //
// // Business rules:
// // 1. Return appointments from earliest date to latest date.
// // 2. Every appointment has id, patientName, and date.
// // 3. Every date is a valid string in YYYY-MM-DD format.
// // 4. Appointments on the same date must preserve their original order.
// // 5. Do not mutate the original appointments array.
// // 6. Do not mutate the appointment objects.
// // 7. Return a different array reference.
// // 8. An empty array must return an empty array.
// //
// // Accepted input:
// // - An array of valid appointment objects.
// // - date is always a valid YYYY-MM-DD string.
// //
// // Edge cases:
// // - Multiple appointments on the same date.
// // - Dates across different months and years.
// // - Empty array.
// //
// // Plain-English approach:
// // 1.
// // 2.
// // 3.

// function sortAppointmentsByDate(appointments = []) {
//   const copiedAppointments = [...appointments];
//   return copiedAppointments.sort((firstAppointment, secondAppointment) =>
//     firstAppointment.date.localeCompare(secondAppointment.date),
//   );
// }

// const appointments1 = [
//   { id: "A1", patientName: "Ravi", date: "2026-08-20" },
//   { id: "A2", patientName: "Meera", date: "2026-07-15" },
//   { id: "A3", patientName: "Asha", date: "2026-08-02" },
// ];

// const sortedAppointments1 = sortAppointmentsByDate(appointments1);

// console.log(
//   "Appointments by date:",
//   sortedAppointments1.map((appointment) => appointment.id),
// );
// // Expected: ["A2", "A3", "A1"]

// console.log(
//   "Date sorting:",
//   JSON.stringify(sortedAppointments1.map((appointment) => appointment.id)) ===
//     JSON.stringify(["A2", "A3", "A1"]),
// );
// // Expected: true

// console.log(
//   "Original array preserved:",
//   JSON.stringify(appointments1.map((appointment) => appointment.id)) ===
//     JSON.stringify(["A1", "A2", "A3"]),
// );
// // Expected: true

// console.log(
//   "Different array reference:",
//   sortedAppointments1 !== appointments1,
// );
// // Expected: true

// console.log(
//   "Original object references preserved:",
//   sortedAppointments1[0] === appointments1[1] &&
//     sortedAppointments1[1] === appointments1[2] &&
//     sortedAppointments1[2] === appointments1[0],
// );
// // Expected: true

// console.log(
//   "Same-date appointments preserve order:",
//   JSON.stringify(
//     sortAppointmentsByDate([
//       { id: "A1", patientName: "A", date: "2026-08-10" },
//       { id: "A2", patientName: "B", date: "2026-07-01" },
//       { id: "A3", patientName: "C", date: "2026-08-10" },
//     ]).map((appointment) => appointment.id),
//   ) === JSON.stringify(["A2", "A1", "A3"]),
// );
// // Expected: true

// console.log(
//   "Different years:",
//   JSON.stringify(
//     sortAppointmentsByDate([
//       { id: "A1", patientName: "A", date: "2027-01-01" },
//       { id: "A2", patientName: "B", date: "2025-12-31" },
//       { id: "A3", patientName: "C", date: "2026-06-15" },
//     ]).map((appointment) => appointment.id),
//   ) === JSON.stringify(["A2", "A3", "A1"]),
// );
// // Expected: true

// console.log(
//   "Empty appointments:",
//   JSON.stringify(sortAppointmentsByDate([])) === JSON.stringify([]),
// );
// // Expected: true

printLog("");

// Exercise 5: Sort products for an API response
//
// Business rules:
// 1. Return products sorted from lowest price to highest price.
// 2. When two products have the same price, sort them alphabetically by name.
// 3. Name comparison must be case-insensitive.
// 4. Preserve each product's original name capitalization.
// 5. Each product has id, name, and price.
// 6. price is always a valid finite number.
// 7. Do not mutate the original products array.
// 8. Do not mutate any product object.
// 9. Return a different array reference.
// 10. An empty array must return an empty array.
//
// Accepted input:
// - An array of valid product objects.
// - price may be an integer, decimal, zero, or negative number.
//
// Test scenarios:
// - Different prices
// - Equal prices requiring name sorting
// - Mixed capitalization
// - Duplicate price and name
// - Decimal and zero prices
// - Empty array
// - Original array and object references

function sortProductsByPrice(products = []) {
  const copiedProducts = [...products];

  return copiedProducts.sort((product1, product2) => {
    return product1.price - product2.price !== 0
      ? product1.price - product2.price
      : product1.name.toLowerCase().localeCompare(product2.name.toLowerCase());
  });
}

const products1 = [
  { id: "P1", name: "Keyboard", price: 1200 },
  { id: "P2", name: "Mouse", price: 500 },
  { id: "P3", name: "Adapter", price: 500 },
  { id: "P4", name: "Monitor", price: 9000 },
];

const sortedProducts1 = sortProductsByPrice(products1);

console.log(
  "Sorted products:",
  sortedProducts1.map((product) => product.id),
);
// Expected: ["P3", "P2", "P1", "P4"]

console.log(
  "Price and name sorting:",
  JSON.stringify(sortedProducts1.map((product) => product.id)) ===
    JSON.stringify(["P3", "P2", "P1", "P4"]),
);
// Expected: true

console.log(
  "Original array preserved:",
  JSON.stringify(products1.map((product) => product.id)) ===
    JSON.stringify(["P1", "P2", "P3", "P4"]),
);
// Expected: true

console.log("Different array reference:", sortedProducts1 !== products1);
// Expected: true

console.log(
  "Original object references preserved:",
  sortedProducts1[0] === products1[2] &&
    sortedProducts1[1] === products1[1] &&
    sortedProducts1[2] === products1[0] &&
    sortedProducts1[3] === products1[3],
);
// Expected: true

console.log(
  "Equal prices and mixed capitalization:",
  JSON.stringify(
    sortProductsByPrice([
      { id: "P1", name: "support Plan", price: 100 },
      { id: "P2", name: "Accounts Plan", price: 100 },
      { id: "P3", name: "Basic Plan", price: 50 },
    ]).map((product) => product.id),
  ) === JSON.stringify(["P3", "P2", "P1"]),
);
// Expected: true

console.log(
  "Duplicate price and name preserve order:",
  JSON.stringify(
    sortProductsByPrice([
      { id: "P1", name: "Mouse", price: 500 },
      { id: "P2", name: "Keyboard", price: 200 },
      { id: "P3", name: "mouse", price: 500 },
    ]).map((product) => product.id),
  ) === JSON.stringify(["P2", "P1", "P3"]),
);
// Expected: true

console.log(
  "Decimal and zero prices:",
  JSON.stringify(
    sortProductsByPrice([
      { id: "P1", name: "A", price: 2.5 },
      { id: "P2", name: "B", price: 0 },
      { id: "P3", name: "C", price: 1.25 },
    ]).map((product) => product.id),
  ) === JSON.stringify(["P2", "P3", "P1"]),
);
// Expected: true

console.log(
  "Empty products:",
  JSON.stringify(sortProductsByPrice([])) === JSON.stringify([]),
);
// Expected: true
