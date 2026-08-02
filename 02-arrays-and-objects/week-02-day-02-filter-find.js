// console.log("Let's come on!!");

// const { sendStatus } = require("express/lib/response");

// const numbers = [5, 12, 8, 20];

// const largeNumbers = numbers.filter((number) => number >= 10);

// console.log(largeNumbers); // [12, 20]

// Business rules:
// 1. Return only users whose status is "ACTIVE".
// 2. Status matching must ignore spaces and letter casing.
// 3. Missing or null status must not cause an error.
// 4. Return the original user objects without transforming them.
// 5. Do not modify the original array or objects.

// function filterActiveUsers(users) {
//   const filteredUsers = users.filter((user) => {
//     const normalizedStatus = user?.status?.trim().toLowerCase() || "inactive";

//     return normalizedStatus === "active";
//   });

//   return filteredUsers;
// }

// function areEqual(actual, expected) {
//   return JSON.stringify(actual) === JSON.stringify(expected);
// }

// console.log("----- Test 1: Mixed statuses -----");

// const usersTest1 = [
//   { id: 101, name: "Asha", status: "ACTIVE" },
//   { id: 102, name: "Ravi", status: "inactive" },
//   { id: 103, name: "Meena", status: " active " },
// ];

// const expectedTest1 = [
//   { id: 101, name: "Asha", status: "ACTIVE" },
//   { id: 103, name: "Meena", status: " active " },
// ];

// const actualTest1 = filterActiveUsers(usersTest1);

// console.log("Expected:", expectedTest1);
// console.log("Actual:", actualTest1);
// console.log("Passed:", areEqual(actualTest1, expectedTest1)); // true

// console.log("----- Test 2: Missing statuses -----");

// const usersTest2 = [
//   { id: 201, name: "Kiran", status: null },
//   { id: 202, name: "Sara" },
//   { id: 203, name: "John", status: "Active" },
// ];

// const expectedTest2 = [{ id: 203, name: "John", status: "Active" }];
// const actualTest2 = filterActiveUsers(usersTest2);

// console.log("Expected:", expectedTest2);
// console.log("Actual:", actualTest2);
// console.log("Passed:", areEqual(actualTest2, expectedTest2)); // true

// console.log("----- Test 3: Empty array -----");

// const usersTest3 = [];
// const expectedTest3 = [];
// const actualTest3 = filterActiveUsers(usersTest3);

// console.log("Expected:", expectedTest3);
// console.log("Actual:", actualTest3);
// console.log("Passed:", areEqual(actualTest3, expectedTest3)); // true

// console.log("----- Reference and mutation checks -----");

// console.log("Returned a new array:", actualTest1 !== usersTest1); // true

// console.log(
//   "Original array unchanged:",
//   usersTest1.length === 3 &&
//     usersTest1[0].status === "ACTIVE" &&
//     usersTest1[2].status === " active ",
// ); // true

// console.log(
//   "Matching objects keep their references:",
//   actualTest1[0] === usersTest1[0],
// ); // true

// Business rules:
// 1. Return only tasks with a completed status.
// 2. The priority must be either high or urgent.
// 3. Status and priority comparisons must ignore spaces and casing.
// 4. Missing or null values must not throw an error.
// 5. Return the original matching task objects.
// 6. Do not modify the original array or task objects.

// function filterImportantCompletedTasks(tasks) {
//   return tasks.filter((task) => {
//     const status = task?.status?.trim().toLowerCase() || "undefined";
//     const priority = task?.priority?.trim().toLowerCase() || "undefined";
//     return (
//       status === "completed" && (priority === "high" || priority === "urgent")
//     );
//   });
// }

// function areEqualTasks(actual, expected) {
//   return JSON.stringify(actual) === JSON.stringify(expected);
// }

// console.log("----- Exercise 2, Test 1: Combined conditions -----");

// const tasksTest1 = [
//   {
//     id: "T-101",
//     title: "Fix payment bug",
//     status: "COMPLETED",
//     priority: "HIGH",
//   },
//   {
//     id: "T-102",
//     title: "Update documentation",
//     status: "completed",
//     priority: "low",
//   },
//   {
//     id: "T-103",
//     title: "Restore database",
//     status: " completed ",
//     priority: " urgent ",
//   },
//   {
//     id: "T-104",
//     title: "Review logs",
//     status: "IN_PROGRESS",
//     priority: "HIGH",
//   },
// ];

// const expectedTasksTest1 = [
//   {
//     id: "T-101",
//     title: "Fix payment bug",
//     status: "COMPLETED",
//     priority: "HIGH",
//   },
//   {
//     id: "T-103",
//     title: "Restore database",
//     status: " completed ",
//     priority: " urgent ",
//   },
// ];

// const actualTasksTest1 = filterImportantCompletedTasks(tasksTest1);

// console.log("Expected:", expectedTasksTest1);
// console.log("Actual:", actualTasksTest1);
// console.log("Passed:", areEqualTasks(actualTasksTest1, expectedTasksTest1)); // true

// console.log("----- Exercise 2, Test 2: Missing values -----");

// const tasksTest2 = [
//   { id: "T-201", title: "Missing priority", status: "completed" },
//   { id: "T-202", title: "Missing status", priority: "urgent" },
//   { id: "T-203", title: "Null values", status: null, priority: null },
//   {
//     id: "T-204",
//     title: "Security patch",
//     status: "Completed",
//     priority: "High",
//   },
// ];

// const expectedTasksTest2 = [
//   {
//     id: "T-204",
//     title: "Security patch",
//     status: "Completed",
//     priority: "High",
//   },
// ];

// const actualTasksTest2 = filterImportantCompletedTasks(tasksTest2);

// console.log("Expected:", expectedTasksTest2);
// console.log("Actual:", actualTasksTest2);
// console.log("Passed:", areEqualTasks(actualTasksTest2, expectedTasksTest2)); // true

// console.log("----- Exercise 2, Test 3: No matches -----");

// const tasksTest3 = [
//   {
//     id: "T-301",
//     title: "Pending urgent task",
//     status: "pending",
//     priority: "urgent",
//   },
//   {
//     id: "T-302",
//     title: "Completed normal task",
//     status: "completed",
//     priority: "medium",
//   },
// ];

// const expectedTasksTest3 = [];
// const actualTasksTest3 = filterImportantCompletedTasks(tasksTest3);

// console.log("Expected:", expectedTasksTest3);
// console.log("Actual:", actualTasksTest3);
// console.log("Passed:", areEqualTasks(actualTasksTest3, expectedTasksTest3)); // true

// console.log("----- Exercise 2: Reference checks -----");

// console.log("Returned a new array:", actualTasksTest1 !== tasksTest1); // true

// console.log(
//   "Matching object reference preserved:",
//   actualTasksTest1[0] === tasksTest1[0],
// ); // true

// console.log(
//   "Original array unchanged:",
//   tasksTest1.length === 4 &&
//     tasksTest1[0].status === "COMPLETED" &&
//     tasksTest1[2].priority === " urgent ",
// ); // true

// console.log("----");

// Business rules:
// 1. Find the first user whose id matches the provided userId.
// 2. Compare IDs after trimming spaces.
// 3. ID comparison must ignore letter casing.
// 4. Missing or null IDs must not throw an error.
// 5. Return the original matching user object.
// 6. Return undefined when no user matches.
// 7. Do not modify the array or user objects.

// function findUserById(users, userId) {
//   const normalizedCheckId = userId?.trim().toUpperCase();

//   if (!normalizedCheckId) {
//     return undefined;
//   }

//   return users.find((user) => {
//     const normalizedId = user?.id?.trim().toUpperCase();
//     return normalizedId === normalizedCheckId;
//   });
// }

// console.log("----- Exercise 3, Test 1: Matching user -----");

// const findUsersTest1 = [
//   { id: "USR-101", name: "Asha", role: "ADMIN" },
//   { id: " usr-102 ", name: "Ravi", role: "USER" },
//   { id: "USR-103", name: "Meena", role: "MANAGER" },
// ];

// const expectedFindTest1 = {
//   id: " usr-102 ",
//   name: "Ravi",
//   role: "USER",
// };

// const actualFindTest1 = findUserById(findUsersTest1, "USR-102");

// console.log("Expected:", expectedFindTest1);
// console.log("Actual:", actualFindTest1);
// console.log(
//   "Passed:",
//   JSON.stringify(actualFindTest1) === JSON.stringify(expectedFindTest1),
// ); // true

// console.log("----- Exercise 3, Test 2: First matching user -----");

// const findUsersTest2 = [
//   { id: "USR-201", name: "First User" },
//   { id: "usr-201", name: "Second User" },
//   { id: "USR-202", name: "Third User" },
// ];

// const expectedFindTest2 = {
//   id: "USR-201",
//   name: "First User",
// };

// const actualFindTest2 = findUserById(findUsersTest2, " usr-201 ");

// console.log("Expected:", expectedFindTest2);
// console.log("Actual:", actualFindTest2);
// console.log(
//   "Passed:",
//   JSON.stringify(actualFindTest2) === JSON.stringify(expectedFindTest2),
// ); // true

// console.log("----- Exercise 3, Test 3: No match -----");

// const findUsersTest3 = [
//   { id: null, name: "Missing ID" },
//   { name: "No ID" },
//   { id: "USR-302", name: "Sara" },
// ];

// const expectedFindTest3 = undefined;
// const actualFindTest3 = findUserById(findUsersTest3, "USR-999");

// console.log("Expected:", expectedFindTest3);
// console.log("Actual:", actualFindTest3);
// console.log("Passed:", actualFindTest3 === expectedFindTest3); // true

// console.log("----- Exercise 3: Reference and mutation checks -----");

// console.log(
//   "Matching object reference preserved:",
//   actualFindTest1 === findUsersTest1[1],
// ); // true

// console.log(
//   "Original array unchanged:",
//   findUsersTest1.length === 3 && findUsersTest1[1].id === " usr-102 ",
// ); // true

// console.log("----- Exercise 3, Test 4: Invalid search ID -----");

// const findUsersTest4 = [
//   { id: null, name: "Null ID User" },
//   { name: "Missing ID User" },
//   { id: "USR-401", name: "Valid User" },
// ];

// const expectedFindTest4 = undefined;
// const actualFindTest4 = findUserById(findUsersTest4, null);

// console.log("Expected:", expectedFindTest4);
// console.log("Actual:", actualFindTest4);
// console.log("Passed:", actualFindTest4 === expectedFindTest4); // true

// console.log("----- Exercise 3, Test 5: Blank search ID -----");

// const actualFindTest5 = findUserById(findUsersTest4, "   ");

// console.log("Expected:", undefined);
// console.log("Actual:", actualFindTest5);
// console.log("Passed:", actualFindTest5 === undefined); // true

// Business rules:
// 1. Return the first product whose price is greater than or equal to minPrice.
// 2. Price must be a valid number.
// 3. Products with missing, null, or non-number prices must be ignored.
// 4. Return the original matching product object.
// 5. Return undefined when no product matches.
// 6. Do not modify the original array or products.

// function findFirstExpensiveProduct(products, minPrice) {
//   const firstExpensiveProduct = products.find((product) => {
//     const userPrice = product?.price || 0;
//     const normalizedPrice = typeof userPrice === "number" ? userPrice : 0;

//     return normalizedPrice >= minPrice;
//   });

//   return firstExpensiveProduct;
// }

// console.log("----- Exercise 4, Test 1: First expensive product -----");

// const productsTest1 = [
//   { id: "P-101", name: "Keyboard", price: 1200 },
//   { id: "P-102", name: "Monitor", price: 14500 },
//   { id: "P-103", name: "Laptop", price: 65000 },
// ];

// const expectedProductTest1 = {
//   id: "P-102",
//   name: "Monitor",
//   price: 14500,
// };

// const actualProductTest1 = findFirstExpensiveProduct(productsTest1, 10000);

// console.log("Expected:", expectedProductTest1);
// console.log("Actual:", actualProductTest1);
// console.log(
//   "Passed:",
//   JSON.stringify(actualProductTest1) === JSON.stringify(expectedProductTest1),
// ); // true

// console.log("----- Exercise 4, Test 2: Invalid prices -----");

// const productsTest2 = [
//   { id: "P-201", name: "Unknown", price: null },
//   { id: "P-202", name: "Mouse", price: "2500" },
//   { id: "P-203", name: "Chair", price: 8000 },
//   { id: "P-204", name: "Desk", price: 12000 },
// ];

// const expectedProductTest2 = {
//   id: "P-204",
//   name: "Desk",
//   price: 12000,
// };

// const actualProductTest2 = findFirstExpensiveProduct(productsTest2, 10000);

// console.log("Expected:", expectedProductTest2);
// console.log("Actual:", actualProductTest2);
// console.log(
//   "Passed:",
//   JSON.stringify(actualProductTest2) === JSON.stringify(expectedProductTest2),
// ); // true

// console.log("----- Exercise 4, Test 3: No match -----");

// const productsTest3 = [
//   { id: "P-301", name: "Cable", price: 500 },
//   { id: "P-302", name: "Adapter", price: 900 },
// ];

// const actualProductTest3 = findFirstExpensiveProduct(productsTest3, 5000);

// console.log("Expected:", undefined);
// console.log("Actual:", actualProductTest3);
// console.log("Passed:", actualProductTest3 === undefined); // true

// console.log("----- Exercise 4: Reference and mutation checks -----");

// console.log(
//   "Original object reference preserved:",
//   actualProductTest1 === productsTest1[1],
// ); // true

// console.log(
//   "Original array unchanged:",
//   productsTest1.length === 3 &&
//     productsTest1[0].price === 1200 &&
//     productsTest1[1].price === 14500,
// ); // true

// console.log("-----");

// Business rules:
// 1. Return all confirmed appointments for the provided patientId.
// 2. Normalize status and patient IDs by trimming and ignoring casing.
// 3. Missing values must not throw an error.
// 4. Return the original appointment objects.
// 5. Return an empty array when nothing matches.
// 6. Do not mutate the original data.
// 7. Decide whether filter or find is appropriate.

// function getConfirmedAppointmentsForPatient(appointments, patientId) {
//   const confirmedAppointmentsForPatient = appointments.filter((appointment) => {
//     const normalizedId = appointment?.patientId?.trim().toLowerCase();
//     const normalizedStatus = appointment?.status?.trim().toLowerCase();
//     const normalizedGivenPatientId = patientId?.trim().toLowerCase();
//     return (
//       normalizedStatus === "confirmed" &&
//       normalizedId === normalizedGivenPatientId
//     );
//   });

//   return confirmedAppointmentsForPatient;
// }

// function areEqualAppointments(actual, expected) {
//   return JSON.stringify(actual) === JSON.stringify(expected);
// }

// console.log("----- Final Exercise, Test 1: Multiple matches -----");

// const appointmentsTest1 = [
//   {
//     id: "APT-101",
//     patientId: "PAT-10",
//     status: "CONFIRMED",
//     service: "Consultation",
//   },
//   {
//     id: "APT-102",
//     patientId: " pat-20 ",
//     status: "confirmed",
//     service: "Dental",
//   },
//   {
//     id: "APT-103",
//     patientId: " pat-10 ",
//     status: " confirmed ",
//     service: "Follow-up",
//   },
//   {
//     id: "APT-104",
//     patientId: "PAT-10",
//     status: "cancelled",
//     service: "Scan",
//   },
// ];

// const expectedAppointmentsTest1 = [
//   {
//     id: "APT-101",
//     patientId: "PAT-10",
//     status: "CONFIRMED",
//     service: "Consultation",
//   },
//   {
//     id: "APT-103",
//     patientId: " pat-10 ",
//     status: " confirmed ",
//     service: "Follow-up",
//   },
// ];

// const actualAppointmentsTest1 = getConfirmedAppointmentsForPatient(
//   appointmentsTest1,
//   " pat-10 ",
// );

// console.log("Expected:", expectedAppointmentsTest1);
// console.log("Actual:", actualAppointmentsTest1);
// console.log(
//   "Passed:",
//   areEqualAppointments(actualAppointmentsTest1, expectedAppointmentsTest1),
// ); // true

// console.log("----- Final Exercise, Test 2: Missing values -----");

// const appointmentsTest2 = [
//   { id: "APT-201", patientId: null, status: "confirmed" },
//   { id: "APT-202", patientId: "PAT-20", status: null },
//   { id: "APT-203", status: "confirmed" },
//   { id: "APT-204", patientId: "pat-20", status: "Confirmed" },
// ];

// const expectedAppointmentsTest2 = [
//   { id: "APT-204", patientId: "pat-20", status: "Confirmed" },
// ];

// const actualAppointmentsTest2 = getConfirmedAppointmentsForPatient(
//   appointmentsTest2,
//   "PAT-20",
// );

// console.log("Expected:", expectedAppointmentsTest2);
// console.log("Actual:", actualAppointmentsTest2);
// console.log(
//   "Passed:",
//   areEqualAppointments(actualAppointmentsTest2, expectedAppointmentsTest2),
// ); // true

// console.log("----- Final Exercise, Test 3: No matches -----");

// const actualAppointmentsTest3 = getConfirmedAppointmentsForPatient(
//   appointmentsTest1,
//   "PAT-999",
// );

// console.log("Expected:", []);
// console.log("Actual:", actualAppointmentsTest3);
// console.log("Passed:", areEqualAppointments(actualAppointmentsTest3, [])); // true

// console.log("----- Final Exercise: Reference checks -----");

// console.log(
//   "Returned a new array:",
//   actualAppointmentsTest1 !== appointmentsTest1,
// ); // true

// console.log(
//   "Matching object reference preserved:",
//   actualAppointmentsTest1[0] === appointmentsTest1[0],
// ); // true

// console.log(
//   "Original array unchanged:",
//   appointmentsTest1.length === 4 &&
//     appointmentsTest1[2].patientId === " pat-10 ",
// ); // true

// const appointments = [
//   { id: 1, status: "confirmed" },
//   { id: 2, status: "cancelled" },
//   { id: 3, status: "confirmed" },
// ];

// const firstConfirmed = appointments.find(
//   (appointment) => appointment.status === "confirmed",
// );
// // { id: 1, status: "confirmed" }

// const lastConfirmed = appointments.findLast(
//   (appointment) => appointment.status === "confirmed",
// );
// // { id: 3, status: "confirmed" }

// console.log(firstConfirmed);
// console.log(lastConfirmed);

// Day 2 notes:
// filter returns all matches in a new array; no matches returns [].
// find returns the first match; no match returns undefined.
// Weak area: normalize both stored values and input values before comparing.
