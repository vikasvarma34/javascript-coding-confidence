// // // // // // console.log("Let's Come On!");

// // // // // // // ========================================
// // // // // // // Week 4 Day 1 — Exercise 1: Block Scope
// // // // // // // ========================================

// // // // // // // Business rules:
// // // // // // // - requestId belongs to the outer scope.
// // // // // // // - validationMessage should exist only inside the if block.
// // // // // // // - status should exist only inside the if block.
// // // // // // // - Do not move variables outside their current scopes.
// // // // // // // - Predict each valid console.log before running the file.

// // // // // // const requestId = "REQ-101";

// // // // // // if (requestId) {
// // // // // //   const validationMessage = `Request ${requestId} is valid`;
// // // // // //   let status = "accepted";

// // // // // //   console.log("1:", requestId);
// // // // // //   console.log("2:", validationMessage);
// // // // // //   console.log("3:", status);
// // // // // // }

// // // // // // console.log("4:", requestId);

// // // // // // // Predict what would happen if this were uncommented:
// // // // // // // console.log("5:", validationMessage);

// // // // // console.log("---");

// // // // // // ========================================
// // // // // // Week 4 Day 1 — Fresh Scope Challenge
// // // // // // ========================================

// // // // // const requests = [
// // // // //   { id: "REQ-201", role: "ADMIN", active: true },
// // // // //   { id: "REQ-202", role: "USER", active: true },
// // // // //   { id: "REQ-203", role: "ADMIN", active: false },
// // // // // ];

// // // // // let processedCount = 0;
// // // // // let status = "BATCH_STARTED";

// // // // // for (const request of requests) {
// // // // //   let status = "CHECKING"
// // // // //   if (request.active && request.role === "ADMIN") {
// // // // //     const permission = "FULL_ACCESS";
// // // // //     status = "APPROVED";
// // // // //     processedCount++;

// // // // //     console.log("A:", request.id, permission, status);
// // // // //   }

// // // // //   console.log("B:", request.id, status);
// // // // // }

// // // // // console.log("C:", processedCount);
// // // // // console.log("D:", status);
// // // // // console.log("E:", request);

// // // // console.log("---");

// // // // function processBatch() {
// // // //   var batchStatus = "STARTED";
// // // //   let successful = 0;

// // // //   const jobs = [
// // // //     { id: "JOB-1", valid: true },
// // // //     { id: "JOB-2", valid: false },
// // // //     { id: "JOB-3", valid: true },
// // // //   ];

// // // //   for (var index = 0; index < jobs.length; index++) {
// // // //     const job = jobs[index];

// // // //     if (job.valid) {
// // // //       var lastSuccessfulJob = job.id;
// // // //       let auditMessage = `${job.id}:SUCCESS`;

// // // //       successful++;

// // // //       console.log("A:", index, auditMessage);
// // // //     }

// // // //     batchStatus = `PROCESSED_${index + 1}`;
// // // //   }

// // // //   console.log("B:", index);
// // // //   console.log("C:", lastSuccessfulJob);
// // // //   console.log("D:", successful);
// // // //   console.log("E:", batchStatus);
// // // //   console.log("F:", auditMessage);
// // // // }

// // // // processBatch();

// // // console.log("---");

// // // // ========================================
// // // // Closure Exercise — Permission Checker
// // // // ========================================

// // // // Business rules:
// // // // - createPermissionChecker receives an array of allowed roles.
// // // // - It must return a function.
// // // // - The returned function receives a user object.
// // // // - Return true only when:
// // // //     1. the user is active
// // // //     2. the user's role is in the allowed roles
// // // // - Do not use global variables.

// // // function createPermissionChecker(allowedRoles) {
// // //   // write the logic
// // //   return function (user) {
// // //     return allowedRoles.indexOf(user.role) !== -1 && user.active;
// // //   };
// // // }

// // // const canManageUsers = createPermissionChecker(["ADMIN", "MANAGER"]);

// // // console.log(canManageUsers({ id: 1, role: "ADMIN", active: true }) === true);

// // // console.log(canManageUsers({ id: 2, role: "USER", active: true }) === false);

// // // console.log(
// // //   canManageUsers({ id: 3, role: "MANAGER", active: false }) === false,
// // // );

// // // function outer(value) {
// // //   return function () {
// // //     return value;
// // //   };
// // // }

// // // console.log(outer(10)());

// // // function createSequence(start) {
// // //   console.log("Outer Function called");
// // //   let current = start;

// // //   return function () {
// // //     console.log("Inner Function Started");
// // //     current++;
// // //     console.log("Outer varible changed");
// // //     return current;
// // //   };
// // // }

// // // const nextId = createSequence(100);

// // // console.log(nextId()); // 101
// // // console.log(nextId()); // 102
// // // console.log(nextId()); // 103

// // function createCounter(name, start) {
// //   console.log(`OUTER called for ${name}`);

// //   let count = start;

// //   return function () {
// //     console.log(`INNER called for ${name}`);
// //     console.log(`${name} before:`, count);

// //     count++;

// //     console.log(`${name} after:`, count);
// //     return count;
// //   };
// // }

// // const firstCounter = createCounter("FIRST", 100);
// // const secondCounter = createCounter("SECOND", 100);

// // console.log("\n--- First call ---");
// // firstCounter();

// // console.log("\n--- First call again ---");
// // firstCounter();

// // console.log("\n--- Second call ---");
// // secondCounter();

// // console.log("\n--- First call one more time ---");
// // firstCounter();

// // ========================================
// // Week 4 Day 1 — Closure Exercise
// // createSeatTracker
// // ========================================

// // Requirements:
// // - Start with 0 reserved seats.
// // - RESERVE adds seats only when capacity would not be exceeded.
// // - CANCEL removes seats only when enough seats are currently reserved.
// // - Invalid operations must leave the current reserved-seat count unchanged.
// // - Every call to the returned function must return the current reserved-seat count.
// // - Do not use global state.

// function createSeatTracker(capacity) {
//   let availableSeats = capacity;
//   return function (operationDetails) {
//     if (
//       operationDetails.type === "RESERVE" &&
//       operationDetails.seats <= availableSeats
//     ) {
//       availableSeats -= operationDetails.seats;
//     }

//     if (
//       operationDetails.type === "CANCEL" &&
//       operationDetails.seats <= capacity - availableSeats
//     ) {
//       availableSeats += operationDetails.seats;
//     }

//     return capacity - availableSeats;
//   };
// }

// // ========================================
// // Tests
// // ========================================

// const updateSeats = createSeatTracker(10);

// console.log("Test 1:", updateSeats({ type: "RESERVE", seats: 4 }) === 4);

// console.log("Test 2:", updateSeats({ type: "RESERVE", seats: 5 }) === 9);

// console.log("Test 3:", updateSeats({ type: "RESERVE", seats: 3 }) === 9);

// console.log("Test 4:", updateSeats({ type: "CANCEL", seats: 2 }) === 7);

// console.log("Test 5:", updateSeats({ type: "CANCEL", seats: 8 }) === 7);

// // Expected output:
// //
// // Test 1: true
// // Test 2: true
// // Test 3: true
// // Test 4: true
// // Test 5: true

console.log("----");

// ========================================
// Week 4 Day 1 — Final Closure Exercise
// createPromoProcessor
// ========================================

// Requirements:
//
// createPromoProcessor receives:
// - validCode
// - maxUses
// - discountPercent
//
// It returns a function.
//
// The returned function receives:
// {
//   code: "SAVE10",
//   total: 100
// }
//
// Rules:
// - A matching promo code can be used only maxUses times.
// - A successful use applies discountPercent to the total.
// - A wrong promo code does not use up one of the allowed uses.
// - After all allowed uses are consumed, no further discount is applied.
// - Every call returns:
//
// {
//   finalTotal: number,
//   applied: boolean
// }
//
// - Do not use global state.

function createPromoProcessor(validCode, maxUses, discountPercent) {
  return function (orderDetails) {
    const result = {
      finalTotal: 0,
      applied: false,
    };

    if (orderDetails.code !== validCode || maxUses === 0) {
      result.finalTotal = orderDetails.total;
      result.applied = false;

      return result;
    }

    result.finalTotal = (1 - discountPercent / 100) * orderDetails.total;
    result.applied = true;
    maxUses -= 1;

    return result;
  };
}

// ========================================
// Tests
// ========================================

const applySave10 = createPromoProcessor("SAVE10", 2, 10);

const result1 = applySave10({
  code: "SAVE10",
  total: 100,
});

console.log("Test 1:", result1.finalTotal === 90 && result1.applied === true);

const result2 = applySave10({
  code: "WRONG",
  total: 200,
});

console.log("Test 2:", result2.finalTotal === 200 && result2.applied === false);

const result3 = applySave10({
  code: "SAVE10",
  total: 50,
});

console.log("Test 3:", result3.finalTotal === 45 && result3.applied === true);

const result4 = applySave10({
  code: "SAVE10",
  total: 80,
});

console.log("Test 4:", result4.finalTotal === 80 && result4.applied === false);

// Expected:
//
// Test 1: true
// Test 2: true
// Test 3: true
// Test 4: true
