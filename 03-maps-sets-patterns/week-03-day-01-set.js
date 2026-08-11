const printLog = (value) => {
  console.log(value);
};

const normalizeStringToLowerCase = (string, replaceValue = "unknown") => {
  return string?.trim().toLowerCase() || replaceValue;
};

const normalizeStringToUpperCase = (string, replaceValue = "Unknown") => {
  return string?.trim().toUpperCase() || replaceValue;
};

const normalizeString = (string, replaceValue = "Unknown") => {
  return string?.trim() || replaceValue;
};

printLog("Let's Come on!");

// const customerIds = [
//   "CUS-101",
//   "CUS-102",
//   "CUS-101",
//   "CUS-103",
//   "CUS-102",
//   "CUS-104",
// ];

// Business rules:
// - Return each customer ID only once.
// - Preserve the order of the first occurrence.
// - Return an ARRAY, not a Set.
// - Do not modify the original customerIds array.
// - An empty array should return an empty array.

// function getUniqueCustomerIds(ids) {
//   return [...new Set(ids)];
// }

// // Expected:
// // ["CUS-101", "CUS-102", "CUS-103", "CUS-104"]

// const result1 = getUniqueCustomerIds(customerIds);
// const result2 = getUniqueCustomerIds(["A", "A", "B", "B", "C"]);
// const result3 = getUniqueCustomerIds([]);

// console.log(result1);

// console.log(
//   "Test 1:",
//   JSON.stringify(result1) ===
//     JSON.stringify(["CUS-101", "CUS-102", "CUS-103", "CUS-104"]),
// );

// console.log(
//   "Test 2:",
//   JSON.stringify(result2) === JSON.stringify(["A", "B", "C"]),
// );

// console.log("Test 3:", JSON.stringify(result3) === JSON.stringify([]));

// console.log(
//   "Original unchanged:",
//   JSON.stringify(customerIds) ===
//     JSON.stringify([
//       "CUS-101",
//       "CUS-102",
//       "CUS-101",
//       "CUS-103",
//       "CUS-102",
//       "CUS-104",
//     ]),
// );

// const assignedPermissions = [
//   "READ_USERS",
//   "CREATE_USER",
//   "UPDATE_USER",
//   "READ_REPORTS",
// ];

// // Business rules:
// // - Return true when requiredPermission exists in permissions.
// // - Return false when it does not exist.
// // - Comparison should be case-sensitive for now.
// // - Do not modify the original permissions array.
// // - An empty permissions array should return false.

// const hasPermission = (permissions, requiredPermission) =>
//   new Set(permissions).has(requiredPermission);

// // Expected:
// // true
// // false
// // false
// // false

// const permissionResult1 = hasPermission(assignedPermissions, "UPDATE_USER");

// const permissionResult2 = hasPermission(assignedPermissions, "DELETE_USER");

// const permissionResult3 = hasPermission([], "READ_USERS");

// const permissionResult4 = hasPermission(assignedPermissions, "update_user");

// console.log("Permission Test 1:", permissionResult1 === true);

// console.log("Permission Test 2:", permissionResult2 === false);

// console.log("Permission Test 3:", permissionResult3 === false);

// console.log("Permission Test 4:", permissionResult4 === false);

// console.log(
//   "Permissions unchanged:",
//   JSON.stringify(assignedPermissions) ===
//     JSON.stringify([
//       "READ_USERS",
//       "CREATE_USER",
//       "UPDATE_USER",
//       "READ_REPORTS",
//     ]),
// );

// const departments = new Set(["IT", "HR", "IT", "SALES"]);

// console.log(departments.size); // 3

// const employeeLocations = [
//   "Hyderabad",
//   "Chennai",
//   "Hyderabad",
//   "Bangalore",
//   "Chennai",
//   "Pune",
//   "Hyderabad",
// ];

// // Business rules:
// // - Return the number of UNIQUE locations.
// // - Duplicate locations must count only once.
// // - Comparison is case-sensitive for now.
// // - Do not modify the original array.
// // - An empty array should return 0.
// //
// // Expected:
// // employeeLocations -> 4
// // ["Toronto", "Toronto", "Oshawa"] -> 2
// // [] -> 0
// // ["Delhi", "delhi"] -> 2

// function countUniqueLocations(locations) {
//   return new Set(locations).size;
// }

// const uniqueLocationResult1 = countUniqueLocations(employeeLocations);

// const uniqueLocationResult2 = countUniqueLocations([
//   "Toronto",
//   "Toronto",
//   "Oshawa",
// ]);

// const uniqueLocationResult3 = countUniqueLocations([]);

// const uniqueLocationResult4 = countUniqueLocations(["Delhi", "delhi"]);

// console.log("Unique Location Test 1:", uniqueLocationResult1 === 4);

// console.log("Unique Location Test 2:", uniqueLocationResult2 === 2);

// console.log("Unique Location Test 3:", uniqueLocationResult3 === 0);

// console.log("Unique Location Test 4:", uniqueLocationResult4 === 2);

// console.log(
//   "Locations unchanged:",
//   JSON.stringify(employeeLocations) ===
//     JSON.stringify([
//       "Hyderabad",
//       "Chennai",
//       "Hyderabad",
//       "Bangalore",
//       "Chennai",
//       "Pune",
//       "Hyderabad",
//     ]),
// );

// const accountPermissions = [
//   "READ_ACCOUNT",
//   "UPDATE_ACCOUNT",
//   "VIEW_TRANSACTIONS",
//   "DOWNLOAD_STATEMENT",
// ];

// Business rules:
// - Return true only when EVERY required permission exists
//   in the available permissions.
// - The order of permissions does not matter.
// - Extra permissions in availablePermissions are allowed.
// - Comparison is case-sensitive.
// - Do not mutate either input array.
// - If requiredPermissions is empty, return true.
//
// Expected:
// Test 1 -> true
// Test 2 -> false
// Test 3 -> true
// Test 4 -> false

// function hasAllRequiredPermissions(availablePermissions, requiredPermissions) {
//   const availablePermissionsSet = new Set(availablePermissions);
//   return requiredPermissions.every((permission) =>
//     availablePermissionsSet.has(permission),
//   );
// }

// const permissionCheck1 = hasAllRequiredPermissions(accountPermissions, [
//   "READ_ACCOUNT",
//   "VIEW_TRANSACTIONS",
// ]);

// const permissionCheck2 = hasAllRequiredPermissions(accountPermissions, [
//   "READ_ACCOUNT",
//   "DELETE_ACCOUNT",
// ]);

// const permissionCheck3 = hasAllRequiredPermissions(accountPermissions, []);

// const permissionCheck4 = hasAllRequiredPermissions(accountPermissions, [
//   "read_account",
// ]);

// console.log("Collection Test 1:", permissionCheck1 === true);

// console.log("Collection Test 2:", permissionCheck2 === false);

// console.log("Collection Test 3:", permissionCheck3 === true);

// console.log("Collection Test 4:", permissionCheck4 === false);

// console.log(
//   "Available permissions unchanged:",
//   JSON.stringify(accountPermissions) ===
//     JSON.stringify([
//       "READ_ACCOUNT",
//       "UPDATE_ACCOUNT",
//       "VIEW_TRANSACTIONS",
//       "DOWNLOAD_STATEMENT",
//     ]),
// );

// const seenIds = new Set();

// seenIds.add("REQ-101");
// seenIds.add("REQ-102");

// console.log(seenIds.has("REQ-101")); // true

// const requestIds = ["REQ-101", "REQ-102", "REQ-103", "REQ-102"];

// Business rules:
// - Return true as soon as a duplicate request ID is found.
// - Return false if every request ID is unique.
// - Use an initially empty Set.
// - Use Set.has() to check whether the ID was already seen.
// - Use Set.add() to remember IDs.
// - Do not modify the original array.
// - [] should return false.
//
// Expected:
// requestIds -> true
// ["REQ-1", "REQ-2", "REQ-3"] -> false
// [] -> false
// ["REQ-1", "REQ-1"] -> true

// function hasDuplicateRequestId(ids) {
//   const idsSet = new Set();

//   for (const id of ids) {
//     if (!idsSet.has(id)) {
//       idsSet.add(id);
//     } else {
//       return true;
//     }
//   }

//   return false;
// }

// const duplicateResult1 = hasDuplicateRequestId(requestIds);

// const duplicateResult2 = hasDuplicateRequestId(["REQ-1", "REQ-2", "REQ-3"]);

// const duplicateResult3 = hasDuplicateRequestId([]);

// const duplicateResult4 = hasDuplicateRequestId(["REQ-1", "REQ-1"]);

// console.log("Duplicate Test 1:", duplicateResult1 === true);

// console.log("Duplicate Test 2:", duplicateResult2 === false);

// console.log("Duplicate Test 3:", duplicateResult3 === false);

// console.log("Duplicate Test 4:", duplicateResult4 === true);

// console.log(
//   "Request IDs unchanged:",
//   JSON.stringify(requestIds) ===
//     JSON.stringify(["REQ-101", "REQ-102", "REQ-103", "REQ-102"]),
// );

const developerPermissions = [
  "READ_USERS",
  "UPDATE_USERS",
  "VIEW_REPORTS",
  "READ_USERS",
  "EXPORT_REPORTS",
];

const supportPermissions = [
  "VIEW_REPORTS",
  "READ_USERS",
  "RESET_PASSWORD",
  "VIEW_REPORTS",
];

// Business rules:
// - Return an ARRAY containing permissions that exist in BOTH collections.
// - Each returned permission must appear only once.
// - Preserve the order in which permissions first appear
//   in the first collection.
// - Comparison is case-sensitive.
// - Extra permissions that exist in only one collection are ignored.
// - Do not mutate either input array.
// - If there are no shared permissions, return [].
//
// Expected:
// Test 1 -> ["READ_USERS", "VIEW_REPORTS"]
// Test 2 -> ["B", "C"]
// Test 3 -> []
// Test 4 -> []

function getSharedPermissions(firstPermissions, secondPermissions) {
  const commonPermissionSet = new Set();
  //   const firstPermissionsSet = new Set(firstPermissions);
  const secondPermissionsSet = new Set(secondPermissions);

  for (const permission of firstPermissions) {
    if (secondPermissionsSet.has(permission)) {
      commonPermissionSet.add(permission);
    }
  }

  return [...commonPermissionSet];
}

const sharedResult1 = getSharedPermissions(
  developerPermissions,
  supportPermissions,
);

const sharedResult2 = getSharedPermissions(
  ["A", "B", "B", "C"],
  ["C", "B", "D"],
);

const sharedResult3 = getSharedPermissions(
  ["READ", "WRITE"],
  ["DELETE", "ADMIN"],
);

const sharedResult4 = getSharedPermissions([], ["READ"]);

console.log(
  "Shared Test 1:",
  JSON.stringify(sharedResult1) ===
    JSON.stringify(["READ_USERS", "VIEW_REPORTS"]),
);

console.log(
  "Shared Test 2:",
  JSON.stringify(sharedResult2) === JSON.stringify(["B", "C"]),
);

console.log(
  "Shared Test 3:",
  JSON.stringify(sharedResult3) === JSON.stringify([]),
);

console.log(
  "Shared Test 4:",
  JSON.stringify(sharedResult4) === JSON.stringify([]),
);

console.log(
  "First input unchanged:",
  JSON.stringify(developerPermissions) ===
    JSON.stringify([
      "READ_USERS",
      "UPDATE_USERS",
      "VIEW_REPORTS",
      "READ_USERS",
      "EXPORT_REPORTS",
    ]),
);

console.log(
  "Second input unchanged:",
  JSON.stringify(supportPermissions) ===
    JSON.stringify([
      "VIEW_REPORTS",
      "READ_USERS",
      "RESET_PASSWORD",
      "VIEW_REPORTS",
    ]),
);
