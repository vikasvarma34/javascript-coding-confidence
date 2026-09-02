// console.log("Let's Come On!");

// ========================================
// Exercise 1 — Pagination Indexes
// ========================================

// Requirements:
// - The function receives page and limit.
// - Calculate the start index for that page.
// - Calculate the end index to use with slice(start, end).
// - Return:
//   {
//     start: ...,
//     end: ...
//   }
//
// Do not call slice() yet.
// This exercise is only about calculating the indexes.

function getPaginationIndexes(page, limit) {
  const start = (page - 1) * limit;
  const end = page * limit;

  return {
    start,
    end,
  };
}

// ========================================
// Tests
// ========================================

const result1 = getPaginationIndexes(1, 5);
console.log("Test 1:", result1.start === 0 && result1.end === 5);

const result2 = getPaginationIndexes(3, 4);
console.log("Test 2:", result2.start === 8 && result2.end === 12);

const result3 = getPaginationIndexes(4, 3);
console.log("Test 3:", result3.start === 9 && result3.end === 12);

// Expected:
// Test 1: true
// Test 2: true
// Test 3: true

console.log("----");

// ========================================
// Exercise 2 — Return One Page of Records
// ========================================

// Requirements:
// - The function receives an array, page, and limit.
// - Use getPaginationIndexes(page, limit) from Exercise 1.
// - Return only the records belonging to the requested page.
// - Do not modify the original array.

function getPage(records, page, limit) {
  const paginationIndexes = getPaginationIndexes(page, limit);
  return records.slice(paginationIndexes.start, paginationIndexes.end);
}

// ========================================
// Tests
// ========================================

const orders = [
  "Order A",
  "Order B",
  "Order C",
  "Order D",
  "Order E",
  "Order F",
  "Order G",
  "Order H",
  "Order I",
  "Order J",
];

const pageResult1 = getPage(orders, 1, 3);
console.log(
  "Exercise 2 - Test 1:",
  JSON.stringify(pageResult1) ===
    JSON.stringify(["Order A", "Order B", "Order C"]),
);

const pageResult2 = getPage(orders, 2, 3);
console.log(
  "Exercise 2 - Test 2:",
  JSON.stringify(pageResult2) ===
    JSON.stringify(["Order D", "Order E", "Order F"]),
);

const pageResult3 = getPage(orders, 4, 3);
console.log(
  "Exercise 2 - Test 3:",
  JSON.stringify(pageResult3) === JSON.stringify(["Order J"]),
);

console.log("Exercise 2 - Original unchanged:", orders.length === 10);

// Expected:
// Exercise 2 - Test 1: true
// Exercise 2 - Test 2: true
// Exercise 2 - Test 3: true
// Exercise 2 - Original unchanged: true

// ========================================
// Exercise 3 — Filter Users by Status
// ========================================

// Requirements:
// - The function receives an array of users and a status.
// - Return only users whose status exactly matches the requested status.
// - Do not modify the original array.

function filterUsersByStatus(users, status) {
  const filteredUsers = users.filter((user) => user.status === status);

  return filteredUsers;
}

// ========================================
// Tests
// ========================================

const users = [
  { id: 1, name: "Vikas", status: "ACTIVE" },
  { id: 2, name: "Ravi", status: "INACTIVE" },
  { id: 3, name: "Vijay", status: "ACTIVE" },
  { id: 4, name: "Meena", status: "SUSPENDED" },
  { id: 5, name: "Anil", status: "ACTIVE" },
];

const activeUsers = filterUsersByStatus(users, "ACTIVE");

console.log("Exercise 3 - Test 1:", activeUsers.length === 3);

console.log(
  "Exercise 3 - Test 2:",
  activeUsers.every((user) => user.status === "ACTIVE"),
);

const suspendedUsers = filterUsersByStatus(users, "SUSPENDED");

console.log(
  "Exercise 3 - Test 3:",
  suspendedUsers.length === 1 && suspendedUsers[0].name === "Meena",
);

console.log("Exercise 3 - Original unchanged:", users.length === 5);

// Expected:
// Exercise 3 - Test 1: true
// Exercise 3 - Test 2: true
// Exercise 3 - Test 3: true
// Exercise 3 - Original unchanged: true

const unusualUsers = [
  { id: 1, name: "A", status: " active " },
  { id: 2, name: "B", status: "ACTIVE" },
];

const exactMatchResult = filterUsersByStatus(unusualUsers, "ACTIVE");

console.log(
  "Exact-match test:",
  exactMatchResult.length === 1 && exactMatchResult[0].name === "B",
);

// Expected:
// Exact-match test: true

console.log("----");

// ========================================
// Exercise 4 — Search Users by Name
// ========================================

// Requirements:
// - The function receives an array of users and a search string.
// - Match users when their name contains the search text.
// - Search must be case-insensitive.
// - Ignore spaces before or after the search text.
// - Do not modify the original array.

function searchUsersByName(users, search) {
  return users.filter((user) => {
    const normalisedName = user.name.trim().toLowerCase();
    const normalisedSearch = search.trim().toLowerCase();

    return normalisedName.includes(normalisedSearch);
  });
}

// ========================================
// Tests
// ========================================

const searchUsers = [
  { id: 1, name: "Vikas" },
  { id: 2, name: "Vijay" },
  { id: 3, name: "Ravi" },
  { id: 4, name: "Avinash" },
  { id: 5, name: "Meena" },
];

const searchResult1 = searchUsersByName(searchUsers, "vi");

console.log(
  "Exercise 4 - Test 1:",
  JSON.stringify(searchResult1.map((user) => user.id)) ===
    JSON.stringify([1, 2, 3, 4]),
);

const searchResult2 = searchUsersByName(searchUsers, "ME");

console.log(
  "Exercise 4 - Test 2:",
  searchResult2.length === 1 && searchResult2[0].name === "Meena",
);

const searchResult3 = searchUsersByName(searchUsers, "  ravi  ");

console.log(
  "Exercise 4 - Test 3:",
  searchResult3.length === 1 && searchResult3[0].id === 3,
);

const searchResult4 = searchUsersByName(searchUsers, "xyz");

console.log("Exercise 4 - Test 4:", searchResult4.length === 0);

// Expected:
// Exercise 4 - Test 1: true
// Exercise 4 - Test 2: true
// Exercise 4 - Test 3: true
// Exercise 4 - Test 4: true

console.log("----");

// ========================================
// Exercise 5 — Search + Filter + Pagination
// ========================================

// Requirements:
//
// createUserQueryResult receives:
// - users
// - search
// - status
// - page
// - limit
//
// Behaviour:
// 1. Search users by name.
//    - case-insensitive
//    - ignore spaces around the search text
//
// 2. Filter the searched users by exact status.
//
// 3. Calculate `total` AFTER search/filter,
//    but BEFORE pagination.
//
// 4. Paginate the remaining users.
//
// 5. Return:
// {
//   data: [...],
//   total: number,
//   page: number,
//   limit: number
// }
//
// You may reuse functions you already wrote today.
// Do not modify the original users array.

// function createUserQueryResult(users, search, status, page, limit) {
//   const filteredUsersByName = users.filter((user) => {
//     const normalisedName = user.name.trim().toLowerCase();
//     const normalisedSearch = search.trim().toLowerCase();

//     return normalisedName.includes(normalisedSearch);
//   });

//   const filteredUsersByStatus = filteredUsersByName.filter(
//     (user) => user.status === status,
//   );

//   const total = filteredUsersByStatus.length;

//   const paginationIndexes = getPaginationIndexes(page, limit);

//   const data = filteredUsersByStatus.slice(
//     paginationIndexes.start,
//     paginationIndexes.end,
//   );

//   return {
//     data,
//     total,
//     page,
//     limit,
//   };
// }

function createUserQueryResult(users, search, status, page, limit) {
  const normalisedSearch = search.trim().toLowerCase();

  const filteredUsers = users
    .filter((user) => {
      const normalisedName = user.name.trim().toLowerCase();

      return normalisedName.includes(normalisedSearch);
    })
    .filter((user) => user.status === status);

  const total = filteredUsers.length;

  const paginationIndexes = getPaginationIndexes(page, limit);

  const data = filteredUsers.slice(
    paginationIndexes.start,
    paginationIndexes.end,
  );

  const totalPages = Math.ceil(total / limit);

  return {
    data,
    total,
    page,
    limit,
    totalPages,
  };
}

// ========================================
// Tests
// ========================================

const queryUsers = [
  { id: 1, name: "Vikas", status: "ACTIVE" },
  { id: 2, name: "Vijay", status: "ACTIVE" },
  { id: 3, name: "Ravi", status: "INACTIVE" },
  { id: 4, name: "Avinash", status: "ACTIVE" },
  { id: 5, name: "Meena", status: "ACTIVE" },
  { id: 6, name: "Vinod", status: "INACTIVE" },
  { id: 7, name: "Vishal", status: "ACTIVE" },
  { id: 8, name: "Kavitha", status: "ACTIVE" },
];

const queryResult1 = createUserQueryResult(queryUsers, "vi", "ACTIVE", 1, 2);

console.log(
  "Exercise 5 - Test 1:",
  JSON.stringify(queryResult1.data.map((user) => user.id)) ===
    JSON.stringify([1, 2]),
);

console.log(
  "Exercise 5 - Test 2:",
  queryResult1.total === 5 &&
    queryResult1.page === 1 &&
    queryResult1.limit === 2,
);

const queryResult2 = createUserQueryResult(queryUsers, "vi", "ACTIVE", 2, 2);

console.log(
  "Exercise 5 - Test 3:",
  JSON.stringify(queryResult2.data.map((user) => user.id)) ===
    JSON.stringify([4, 7]),
);

const queryResult3 = createUserQueryResult(queryUsers, "vi", "INACTIVE", 1, 5);

console.log(
  "Exercise 5 - Test 4:",
  queryResult3.total === 2 &&
    JSON.stringify(queryResult3.data.map((user) => user.id)) ===
      JSON.stringify([3, 6]),
);

console.log("Exercise 5 - Original unchanged:", queryUsers.length === 8);

// Expected:
// Exercise 5 - Test 1: true
// Exercise 5 - Test 2: true
// Exercise 5 - Test 3: true
// Exercise 5 - Test 4: true
// Exercise 5 - Original unchanged: true

console.log("Exercise 5 - Total Pages Test 1:", queryResult1.totalPages === 3);

console.log("Exercise 5 - Total Pages Test 2:", queryResult2.totalPages === 3);

console.log("Exercise 5 - Total Pages Test 3:", queryResult3.totalPages === 1);

// Expected:
// Exercise 5 - Total Pages Test 1: true
// Exercise 5 - Total Pages Test 2: true
// Exercise 5 - Total Pages Test 3: true

console.log("----");

// ========================================
// Exercise 5 — No Matching Records
// ========================================

const noMatchResult = createUserQueryResult(queryUsers, "zzz", "ACTIVE", 1, 5);

console.log("No Match - Test 1:", noMatchResult.data.length === 0);

console.log("No Match - Test 2:", noMatchResult.total === 0);

console.log("No Match - Test 3:", noMatchResult.totalPages === 0);

// Expected:
// No Match - Test 1: true
// No Match - Test 2: true
// No Match - Test 3: true

//Final Exercise

console.log("----");

// ========================================
// Final Exercise — Appointment Query
// ========================================

// Requirements:
//
// buildAppointmentQuery receives:
// - appointments
// - search
// - status
// - page
// - limit
//
// Rules:
//
// 1. Search by patientName.
//    - partial match
//    - case-insensitive
//    - ignore spaces around the search input
//
// 2. Filter by status.
//    - status must match exactly
//
// 3. Pagination happens AFTER searching and filtering.
//
// 4. Return:
//
// {
//   data: [...],
//   total: number,
//   page: number,
//   limit: number,
//   totalPages: number
// }
//
// 5. If no appointments match:
//    - data should be []
//    - total should be 0
//    - totalPages should be 0
//
// 6. Do not modify the original array.
//
// You may reuse getPaginationIndexes() if you want.

function buildAppointmentQuery(appointments, search, status, page, limit) {
  const normalisedSearch = search.trim().toLowerCase();

  const filteredAppointments = appointments.filter((appointment) => {
    const normalisedPatientName = appointment.patientName.trim().toLowerCase();

    return (
      normalisedPatientName.includes(normalisedSearch) &&
      appointment.status === status
    );
  });

  const total = filteredAppointments.length;
  const totalPages = Math.ceil(total / limit);

  const paginationIndexes = getPaginationIndexes(page, limit);

  const data = filteredAppointments.slice(
    paginationIndexes.start,
    paginationIndexes.end,
  );

  return {
    data,
    total,
    page,
    limit,
    totalPages,
  };
}

// ========================================
// Test Data
// ========================================

const appointments = [
  { id: 101, patientName: "Ravi Kumar", status: "CONFIRMED" },
  { id: 102, patientName: "Ravi Teja", status: "CANCELLED" },
  { id: 103, patientName: "Meena Rao", status: "CONFIRMED" },
  { id: 104, patientName: "Aravind", status: "CONFIRMED" },
  { id: 105, patientName: "Ravinder", status: "CONFIRMED" },
  { id: 106, patientName: "Kiran Ravi", status: "CONFIRMED" },
  { id: 107, patientName: "Ravi Shankar", status: "CONFIRMED" },
];

// ========================================
// Tests
// ========================================

const appointmentResult1 = buildAppointmentQuery(
  appointments,
  "ravi",
  "CONFIRMED",
  1,
  2,
);

console.log(
  "Final - Test 1:",
  appointmentResult1.total === 5 &&
    appointmentResult1.totalPages === 3 &&
    JSON.stringify(appointmentResult1.data.map((item) => item.id)) ===
      JSON.stringify([101, 104]),
);

const appointmentResult2 = buildAppointmentQuery(
  appointments,
  "  RAVI  ",
  "CONFIRMED",
  3,
  2,
);

console.log(
  "Final - Test 2:",
  appointmentResult2.total === 5 &&
    appointmentResult2.page === 3 &&
    appointmentResult2.limit === 2 &&
    JSON.stringify(appointmentResult2.data.map((item) => item.id)) ===
      JSON.stringify([107]),
);

const appointmentResult3 = buildAppointmentQuery(
  appointments,
  "meena",
  "CANCELLED",
  1,
  3,
);

console.log(
  "Final - Test 3:",
  appointmentResult3.data.length === 0 &&
    appointmentResult3.total === 0 &&
    appointmentResult3.totalPages === 0,
);

console.log("Final - Original unchanged:", appointments.length === 7);

// Expected:
// Final - Test 1: true
// Final - Test 2: true
// Final - Test 3: true
// Final - Original unchanged: true
