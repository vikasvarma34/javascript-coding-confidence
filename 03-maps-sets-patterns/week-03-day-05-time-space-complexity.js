// console.log("Let's Come On!");

// // ============================================================
// // Exercise — Improve repeated lookup complexity
// // ============================================================
// //
// // Scenario:
// // We receive support tickets and a list of valid employees.
// //
// // A ticket is "unassigned" when its assignedEmployeeId
// // does not match any employee in the employees array.
// //
// // The slow version is already implemented.
// //
// // Your job:
// // Implement findUnassignedTicketIdsFast.
// //
// // Business rules:
// // - Return only ticket IDs whose assignedEmployeeId is missing.
// // - Preserve the original ticket order.
// // - Do not mutate tickets or employees.
// // - Use a lookup structure so employees are not repeatedly searched.
// // - Empty tickets should return [].
// // - Do not modify findUnassignedTicketIdsSlow.

// const complexityEmployees = [
//   { id: "EMP-101", name: "Asha" },
//   { id: "EMP-102", name: "Ravi" },
//   { id: "EMP-103", name: "Meera" },
// ];

// const complexityTickets = [
//   { id: "TKT-001", assignedEmployeeId: "EMP-101" },
//   { id: "TKT-002", assignedEmployeeId: "EMP-999" },
//   { id: "TKT-003", assignedEmployeeId: "EMP-103" },
//   { id: "TKT-004", assignedEmployeeId: "EMP-888" },
// ];

// function findUnassignedTicketIdsSlow(tickets, employees) {
//   return tickets
//     .filter((ticket) => {
//       const employee = employees.find(
//         (employee) => employee.id === ticket.assignedEmployeeId,
//       );

//       return !employee;
//     })
//     .map((ticket) => ticket.id);
// }

// function findUnassignedTicketIdsFast(tickets, employees) {
//   const employeeMap = new Map();

//   for (const employee of employees) {
//     employeeMap.set(employee.id, true);
//   }

//   return tickets
//     .filter((ticket) => !employeeMap.has(ticket.assignedEmployeeId))
//     .map((ticket) => ticket.id);
// }

// // ----- Tests -----

// console.log(
//   "Test 1:",
//   JSON.stringify(
//     findUnassignedTicketIdsFast(complexityTickets, complexityEmployees),
//   ) === JSON.stringify(["TKT-002", "TKT-004"]),
// );

// console.log(
//   "Test 2:",
//   JSON.stringify(
//     findUnassignedTicketIdsFast(
//       [{ id: "TKT-100", assignedEmployeeId: "EMP-102" }],
//       complexityEmployees,
//     ),
//   ) === JSON.stringify([]),
// );

// console.log(
//   "Test 3:",
//   JSON.stringify(findUnassignedTicketIdsFast([], complexityEmployees)) ===
//     JSON.stringify([]),
// );

// ============================================================
// FINAL INDEPENDENT CHALLENGE — Week 3 Day 5
// Refund Validation Report
// ============================================================
//
// Scenario:
//
// A payment service receives refund requests.
//
// Each refund request refers to a payment.
//
// Your job is to validate all refund requests and return
// one clean backend-style report.
//
// ------------------------------------------------------------
// BUSINESS RULES
// ------------------------------------------------------------
//
// A refund request is ACCEPTED only when:
//
// 1. The payment exists.
// 2. The payment status is "CAPTURED".
// 3. requestedAmount is greater than 0.
// 4. requestedAmount is not greater than the payment amount.
// 5. Only ONE refund request for the same paymentId may be accepted.
//
// If another refund request later refers to a paymentId that
// has already had an accepted refund request, reject it with:
//
// "DUPLICATE_REFUND"
//
// ------------------------------------------------------------
// REJECTION REASONS
// ------------------------------------------------------------
//
// Missing payment:
// "PAYMENT_NOT_FOUND"
//
// Payment status is not CAPTURED:
// "PAYMENT_NOT_REFUNDABLE"
//
// requestedAmount <= 0:
// "INVALID_AMOUNT"
//
// requestedAmount > payment.amount:
// "AMOUNT_EXCEEDS_PAYMENT"
//
// Payment already had an accepted refund request:
// "DUPLICATE_REFUND"
//
// ------------------------------------------------------------
// RETURN SHAPE
// ------------------------------------------------------------
//
// {
//   acceptedRequestIds: [...],
//   rejectedRequests: [
//     {
//       requestId: "...",
//       reason: "...",
//     },
//   ],
//   totalAcceptedAmount: number,
// }
//
// ------------------------------------------------------------
// IMPORTANT
// ------------------------------------------------------------
//
// - Preserve refund request order.
// - Do not mutate either input array.
// - Do not repeatedly search the payments array for every request.
// - Choose your own lookup / tracking structures.
// - Do not sort anything.
// - Empty refundRequests should return:
//   {
//     acceptedRequestIds: [],
//     rejectedRequests: [],
//     totalAcceptedAmount: 0,
//   }
//
// ============================================================

const refundPayments = [
  {
    id: "PAY-101",
    amount: 500,
    status: "CAPTURED",
  },
  {
    id: "PAY-102",
    amount: 900,
    status: "FAILED",
  },
  {
    id: "PAY-103",
    amount: 1200,
    status: "CAPTURED",
  },
  {
    id: "PAY-104",
    amount: 300,
    status: "REFUNDED",
  },
  {
    id: "PAY-105",
    amount: 700,
    status: "CAPTURED",
  },
];

const refundRequestsData = [
  {
    id: "REF-001",
    paymentId: "PAY-101",
    requestedAmount: 300,
  },
  {
    id: "REF-002",
    paymentId: "PAY-999",
    requestedAmount: 100,
  },
  {
    id: "REF-003",
    paymentId: "PAY-102",
    requestedAmount: 200,
  },
  {
    id: "REF-004",
    paymentId: "PAY-103",
    requestedAmount: 1500,
  },
  {
    id: "REF-005",
    paymentId: "PAY-105",
    requestedAmount: 500,
  },
  {
    id: "REF-006",
    paymentId: "PAY-105",
    requestedAmount: 100,
  },
  {
    id: "REF-007",
    paymentId: "PAY-103",
    requestedAmount: 0,
  },
  {
    id: "REF-008",
    paymentId: "PAY-103",
    requestedAmount: 1000,
  },
];

function createRefundValidationReport(refundRequests, payments) {
  const paymentsLookUp = new Map();

  for (const payment of payments) {
    paymentsLookUp.set(payment.id, payment);
  }

  const acceptedRequestIds = [];
  const acceptedPaymentIds = new Set();
  const rejectedRequests = [];
  let totalAcceptedAmount = 0;

  for (const refundRequest of refundRequests) {
    const refundPayment = paymentsLookUp.get(refundRequest.paymentId);

    if (refundPayment === undefined) {
      rejectedRequests.push({
        requestId: refundRequest.id,
        reason: "PAYMENT_NOT_FOUND",
      });
      continue;
    }

    if (refundPayment.status !== "CAPTURED") {
      rejectedRequests.push({
        requestId: refundRequest.id,
        reason: "PAYMENT_NOT_REFUNDABLE",
      });
      continue;
    }

    if (acceptedPaymentIds.has(refundRequest.paymentId)) {
      rejectedRequests.push({
        requestId: refundRequest.id,
        reason: "DUPLICATE_REFUND",
      });
      continue;
    }

    if (refundRequest.requestedAmount <= 0) {
      rejectedRequests.push({
        requestId: refundRequest.id,
        reason: "INVALID_AMOUNT",
      });
      continue;
    }

    if (refundRequest.requestedAmount > refundPayment.amount) {
      rejectedRequests.push({
        requestId: refundRequest.id,
        reason: "AMOUNT_EXCEEDS_PAYMENT",
      });
      continue;
    }

    acceptedPaymentIds.add(refundRequest.paymentId);
    acceptedRequestIds.push(refundRequest.id);
    totalAcceptedAmount += refundRequest.requestedAmount;
  }

  return {
    acceptedRequestIds,
    rejectedRequests,
    totalAcceptedAmount,
  };
}

// ============================================================
// TEST 1 — Mixed results
// ============================================================
//
// Expected:
//
// acceptedRequestIds:
// ["REF-001", "REF-005", "REF-008"]
//
// rejectedRequests:
// [
//   { requestId: "REF-002", reason: "PAYMENT_NOT_FOUND" },
//   { requestId: "REF-003", reason: "PAYMENT_NOT_REFUNDABLE" },
//   { requestId: "REF-004", reason: "AMOUNT_EXCEEDS_PAYMENT" },
//   { requestId: "REF-006", reason: "DUPLICATE_REFUND" },
//   { requestId: "REF-007", reason: "INVALID_AMOUNT" },
// ]
//
// totalAcceptedAmount:
// 1800

const refundResult1 = createRefundValidationReport(
  refundRequestsData,
  refundPayments,
);

console.log(
  "Final Challenge Test 1:",
  JSON.stringify(refundResult1) ===
    JSON.stringify({
      acceptedRequestIds: ["REF-001", "REF-005", "REF-008"],
      rejectedRequests: [
        {
          requestId: "REF-002",
          reason: "PAYMENT_NOT_FOUND",
        },
        {
          requestId: "REF-003",
          reason: "PAYMENT_NOT_REFUNDABLE",
        },
        {
          requestId: "REF-004",
          reason: "AMOUNT_EXCEEDS_PAYMENT",
        },
        {
          requestId: "REF-006",
          reason: "DUPLICATE_REFUND",
        },
        {
          requestId: "REF-007",
          reason: "INVALID_AMOUNT",
        },
      ],
      totalAcceptedAmount: 1800,
    }),
);

// ============================================================
// TEST 2 — Empty requests
// ============================================================

console.log(
  "Final Challenge Test 2:",
  JSON.stringify(createRefundValidationReport([], refundPayments)) ===
    JSON.stringify({
      acceptedRequestIds: [],
      rejectedRequests: [],
      totalAcceptedAmount: 0,
    }),
);

// ============================================================
// TEST 3 — No payments
// ============================================================

console.log(
  "Final Challenge Test 3:",
  JSON.stringify(
    createRefundValidationReport(
      [
        {
          id: "REF-100",
          paymentId: "PAY-X",
          requestedAmount: 100,
        },
        {
          id: "REF-101",
          paymentId: "PAY-Y",
          requestedAmount: 200,
        },
      ],
      [],
    ),
  ) ===
    JSON.stringify({
      acceptedRequestIds: [],
      rejectedRequests: [
        {
          requestId: "REF-100",
          reason: "PAYMENT_NOT_FOUND",
        },
        {
          requestId: "REF-101",
          reason: "PAYMENT_NOT_FOUND",
        },
      ],
      totalAcceptedAmount: 0,
    }),
);

// ============================================================
// TEST 4 — Exact payment amount is allowed
// ============================================================

console.log(
  "Final Challenge Test 4:",
  JSON.stringify(
    createRefundValidationReport(
      [
        {
          id: "REF-200",
          paymentId: "PAY-101",
          requestedAmount: 500,
        },
      ],
      refundPayments,
    ),
  ) ===
    JSON.stringify({
      acceptedRequestIds: ["REF-200"],
      rejectedRequests: [],
      totalAcceptedAmount: 500,
    }),
);

console.log(
  "Final Challenge Test 5:",
  JSON.stringify(
    createRefundValidationReport(
      [
        {
          id: "REF-300",
          paymentId: "PAY-101",
          requestedAmount: 300,
        },
        {
          id: "REF-301",
          paymentId: "PAY-101",
          requestedAmount: -50,
        },
      ],
      refundPayments,
    ),
  ) ===
    JSON.stringify({
      acceptedRequestIds: ["REF-300"],
      rejectedRequests: [
        {
          requestId: "REF-301",
          reason: "DUPLICATE_REFUND",
        },
      ],
      totalAcceptedAmount: 300,
    }),
);
