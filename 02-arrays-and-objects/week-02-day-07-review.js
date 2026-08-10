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

// // printLog("Let's come on!");

// /*
// WEEK 2 DAY 7 — REVIEW
// Exercise 1: Customer Completed Order Summary

// BUSINESS RULES

// Create a function named createCustomerOrderSummary.

// The function receives:
// - customers
// - orders
// - customerId

// Requirements:

// 1. Return null if the requested customer does not exist.

// 2. Only COMPLETED orders belonging to the requested customer
//    should appear in the result.

// 3. Each completed order in the returned response must contain only:
//    - orderId
//    - amount

// 4. Return the customer's:
//    - customerId
//    - customerName
//    - completedOrders
//    - totalAmount

// 5. totalAmount must represent the combined amount of the
//    completed orders included in the response.

// 6. Orders belonging to other customers must not be included.

// 7. PENDING and CANCELLED orders must not be included.

// 8. If the customer exists but has no completed orders:
//    - completedOrders should be []
//    - totalAmount should be 0

// 9. Do not mutate the customers array.

// 10. Do not mutate the orders array.

// EXPECTED RESPONSE SHAPE

// {
//   customerId: "CUS-101",
//   customerName: "Asha",
//   completedOrders: [
//     { orderId: "ORD-1", amount: 120 },
//     { orderId: "ORD-3", amount: 75 }
//   ],
//   totalAmount: 195
// }
// */

// const customers = [
//   { id: "CUS-101", name: "Asha", email: "asha@example.com" },
//   { id: "CUS-102", name: "Ravi", email: "ravi@example.com" },
//   { id: "CUS-103", name: "Meera", email: "meera@example.com" },
//   { id: "CUS-104", name: "Arjun", email: "arjun@example.com" },
// ];

// const orders = [
//   {
//     id: "ORD-1",
//     customerId: "CUS-101",
//     status: "COMPLETED",
//     amount: 120,
//   },
//   {
//     id: "ORD-2",
//     customerId: "CUS-102",
//     status: "PENDING",
//     amount: 80,
//   },
//   {
//     id: "ORD-3",
//     customerId: "CUS-101",
//     status: "COMPLETED",
//     amount: 75,
//   },
//   {
//     id: "ORD-4",
//     customerId: "CUS-101",
//     status: "CANCELLED",
//     amount: 50,
//   },
//   {
//     id: "ORD-5",
//     customerId: "CUS-102",
//     status: "COMPLETED",
//     amount: 200,
//   },
//   {
//     id: "ORD-6",
//     customerId: "CUS-103",
//     status: "CANCELLED",
//     amount: 90,
//   },
// ];

// function createCustomerOrderSummary(customers, orders, customerId) {
//   const customer = customers.find((customer) => customer?.id === customerId);

//   if (!customer) {
//     return null;
//   }

//   const filteredOrders = orders.filter(
//     (order) =>
//       order?.customerId === customerId &&
//       normalizeString(order?.status) === "COMPLETED",
//   );

//   return filteredOrders.reduce(
//     (orderSummary, currentOrder) => {
//       orderSummary.totalAmount += currentOrder.amount;
//       orderSummary.completedOrders.push({
//         orderId: currentOrder?.id,
//         amount: currentOrder?.amount,
//       });

//       return orderSummary;
//     },
//     {
//       customerId: customer?.id,
//       customerName: customer?.name,
//       completedOrders: [],
//       totalAmount: 0,
//     },
//   );
// }

// /*
// EXPECTED OUTPUT — TEST 1

// {
//   customerId: "CUS-101",
//   customerName: "Asha",
//   completedOrders: [
//     { orderId: "ORD-1", amount: 120 },
//     { orderId: "ORD-3", amount: 75 }
//   ],
//   totalAmount: 195
// }
// */
// const result1 = createCustomerOrderSummary(customers, orders, "CUS-101");

// console.log("Result 1:", result1);

// /*
// EXPECTED OUTPUT — TEST 2

// {
//   customerId: "CUS-102",
//   customerName: "Ravi",
//   completedOrders: [
//     { orderId: "ORD-5", amount: 200 }
//   ],
//   totalAmount: 200
// }
// */
// const result2 = createCustomerOrderSummary(customers, orders, "CUS-102");

// console.log("Result 2:", result2);

// /*
// EXPECTED OUTPUT — TEST 3

// {
//   customerId: "CUS-103",
//   customerName: "Meera",
//   completedOrders: [],
//   totalAmount: 0
// }
// */
// const result3 = createCustomerOrderSummary(customers, orders, "CUS-103");

// console.log("Result 3:", result3);

// /*
// EXPECTED OUTPUT — TEST 4

// {
//   customerId: "CUS-104",
//   customerName: "Arjun",
//   completedOrders: [],
//   totalAmount: 0
// }
// */
// const result4 = createCustomerOrderSummary(customers, orders, "CUS-104");

// console.log("Result 4:", result4);

// /*
// EXPECTED OUTPUT — TEST 5

// null
// */
// const result5 = createCustomerOrderSummary(customers, orders, "CUS-999");

// console.log("Result 5:", result5);

// // --------------------------------------------------
// // AUTOMATIC PASS / FAIL CHECKS
// // --------------------------------------------------

// console.log(
//   "Test 1:",
//   result1?.customerId === "CUS-101" &&
//     result1?.customerName === "Asha" &&
//     result1?.completedOrders?.length === 2 &&
//     result1?.completedOrders?.[0]?.orderId === "ORD-1" &&
//     result1?.completedOrders?.[0]?.amount === 120 &&
//     result1?.completedOrders?.[1]?.orderId === "ORD-3" &&
//     result1?.completedOrders?.[1]?.amount === 75 &&
//     result1?.totalAmount === 195,
// );

// console.log(
//   "Test 2:",
//   result2?.customerId === "CUS-102" &&
//     result2?.customerName === "Ravi" &&
//     result2?.completedOrders?.length === 1 &&
//     result2?.completedOrders?.[0]?.orderId === "ORD-5" &&
//     result2?.completedOrders?.[0]?.amount === 200 &&
//     result2?.totalAmount === 200,
// );

// console.log(
//   "Test 3:",
//   result3?.customerId === "CUS-103" &&
//     result3?.customerName === "Meera" &&
//     result3?.completedOrders?.length === 0 &&
//     result3?.totalAmount === 0,
// );

// console.log(
//   "Test 4:",
//   result4?.customerId === "CUS-104" &&
//     result4?.customerName === "Arjun" &&
//     result4?.completedOrders?.length === 0 &&
//     result4?.totalAmount === 0,
// );

// console.log("Test 5:", result5 === null);

// // --------------------------------------------------
// // NON-MUTATION CHECKS
// // --------------------------------------------------

// console.log(
//   "Customers unchanged:",
//   customers[0].email === "asha@example.com" && customers.length === 4,
// );

// console.log(
//   "Orders unchanged:",
//   orders[0].id === "ORD-1" &&
//     orders[0].status === "COMPLETED" &&
//     orders.length === 6,
// );

printLog("");

/*
WEEK 2 DAY 7 — INDEPENDENT REVIEW CHALLENGE

Exercise 2: Employee Performance Report

BUSINESS RULES

Create a function named createDepartmentPerformanceReport.

The function receives:
- employees
- department

Requirements:

1. Only employees belonging to the requested department should
   be considered.

2. Department matching must be case-insensitive and should
   ignore leading/trailing spaces.

3. Only ACTIVE employees should be included in the report.

4. Each employee returned in the report must contain only:
   - employeeId
   - name
   - score

5. Employees in the report must be sorted by score from
   highest to lowest.

6. If two employees have the same score, sort them
   alphabetically by name.

7. Return:

{
  department,
  activeEmployeeCount,
  averageScore,
  employees
}

8. The returned department should be normalized to uppercase.

9. averageScore should be the average score of only the
   employees included in the report.

10. If the department has no active employees:
    - activeEmployeeCount should be 0
    - averageScore should be 0
    - employees should be []

11. Do not mutate the original employees array.

12. Do not mutate any employee object.

EXPECTED RESPONSE EXAMPLE

{
  department: "ENGINEERING",
  activeEmployeeCount: 3,
  averageScore: 90,
  employees: [
    { employeeId: "EMP-104", name: "Anil", score: 95 },
    { employeeId: "EMP-101", name: "Asha", score: 90 },
    { employeeId: "EMP-102", name: "Ravi", score: 85 }
  ]
}
*/

const performanceEmployees = [
  {
    id: "EMP-101",
    name: "Asha",
    department: "Engineering",
    status: "ACTIVE",
    score: 90,
    email: "asha@example.com",
  },
  {
    id: "EMP-102",
    name: "Ravi",
    department: " engineering ",
    status: "active",
    score: 85,
    email: "ravi@example.com",
  },
  {
    id: "EMP-103",
    name: "Meera",
    department: "HR",
    status: "ACTIVE",
    score: 92,
    email: "meera@example.com",
  },
  {
    id: "EMP-104",
    name: "Anil",
    department: "ENGINEERING",
    status: "ACTIVE",
    score: 95,
    email: "anil@example.com",
  },
  {
    id: "EMP-105",
    name: "Kiran",
    department: "Engineering",
    status: "INACTIVE",
    score: 100,
    email: "kiran@example.com",
  },
  {
    id: "EMP-106",
    name: "Priya",
    department: "Sales",
    status: "ACTIVE",
    score: 88,
    email: "priya@example.com",
  },
  {
    id: "EMP-107",
    name: "Zoya",
    department: "HR",
    status: "ACTIVE",
    score: 92,
    email: "zoya@example.com",
  },
];

// function createDepartmentPerformanceReport(employees, department) {
//   const normalizedDepartment = normalizeStringToUpperCase(department);
//   const filteredEmployees = employees.filter(
//     (employee) =>
//       normalizeStringToUpperCase(employee?.department) ===
//         normalizedDepartment &&
//       normalizeStringToUpperCase(employee?.status) === "ACTIVE",
//   );

//   const mappedEmployees = filteredEmployees.map((employee) => {
//     return {
//       employeeId: employee?.id,
//       name: employee?.name,
//       score: employee?.score,
//     };
//   });

//   const totalSum = mappedEmployees.reduce((total, employee) => {
//     return total + employee?.score;
//   }, 0);

//   const employeeCount = mappedEmployees.length;

//   const sortedEmployees = mappedEmployees.sort(
//     (firstEmployee, secondEmployee) => {
//       return firstEmployee?.score !== secondEmployee?.score
//         ? secondEmployee?.score - firstEmployee?.score
//         : firstEmployee?.name.localeCompare(secondEmployee?.name);
//     },
//   );

//   return {
//     department: normalizedDepartment,
//     activeEmployeeCount: employeeCount,
//     averageScore: employeeCount === 0 ? 0 : totalSum / employeeCount,
//     employees: sortedEmployees,
//   };
// }

function createDepartmentPerformanceReport(employees, department) {
  const normalizedDepartment = normalizeStringToUpperCase(department);

  const activeDepartmentEmployees = employees.filter((employee) => {
    const employeeDepartment = normalizeStringToUpperCase(employee?.department);
    const employeeStatus = normalizeStringToUpperCase(employee?.status);

    return (
      employeeDepartment === normalizedDepartment && employeeStatus === "ACTIVE"
    );
  });

  const employeeResponses = activeDepartmentEmployees.map((employee) => {
    return {
      employeeId: employee?.id,
      name: employee?.name,
      score: employee?.score,
    };
  });

  const totalScore = employeeResponses.reduce((sum, employee) => {
    return sum + employee.score;
  }, 0);

  const activeEmployeeCount = employeeResponses.length;

  const averageScore =
    activeEmployeeCount === 0 ? 0 : totalScore / activeEmployeeCount;

  const sortedEmployees = employeeResponses.sort(
    (firstEmployee, secondEmployee) => {
      if (firstEmployee.score !== secondEmployee.score) {
        return secondEmployee.score - firstEmployee.score;
      }

      return firstEmployee.name.localeCompare(secondEmployee.name);
    },
  );

  return {
    department: normalizedDepartment,
    activeEmployeeCount,
    averageScore,
    employees: sortedEmployees,
  };
}
/*
EXPECTED OUTPUT — TEST 1

{
  department: "ENGINEERING",
  activeEmployeeCount: 3,
  averageScore: 90,
  employees: [
    { employeeId: "EMP-104", name: "Anil", score: 95 },
    { employeeId: "EMP-101", name: "Asha", score: 90 },
    { employeeId: "EMP-102", name: "Ravi", score: 85 }
  ]
}
*/
const performanceResult1 = createDepartmentPerformanceReport(
  performanceEmployees,
  "engineering",
);

console.log("Performance Result 1:", performanceResult1);

/*
EXPECTED OUTPUT — TEST 2

{
  department: "HR",
  activeEmployeeCount: 2,
  averageScore: 92,
  employees: [
    { employeeId: "EMP-103", name: "Meera", score: 92 },
    { employeeId: "EMP-107", name: "Zoya", score: 92 }
  ]
}
*/
const performanceResult2 = createDepartmentPerformanceReport(
  performanceEmployees,
  " hr ",
);

console.log("Performance Result 2:", performanceResult2);

/*
EXPECTED OUTPUT — TEST 3

{
  department: "SALES",
  activeEmployeeCount: 1,
  averageScore: 88,
  employees: [
    { employeeId: "EMP-106", name: "Priya", score: 88 }
  ]
}
*/
const performanceResult3 = createDepartmentPerformanceReport(
  performanceEmployees,
  "SALES",
);

console.log("Performance Result 3:", performanceResult3);

/*
EXPECTED OUTPUT — TEST 4

{
  department: "FINANCE",
  activeEmployeeCount: 0,
  averageScore: 0,
  employees: []
}
*/
const performanceResult4 = createDepartmentPerformanceReport(
  performanceEmployees,
  "Finance",
);

console.log("Performance Result 4:", performanceResult4);

// --------------------------------------------------
// AUTOMATIC PASS / FAIL CHECKS
// --------------------------------------------------

console.log(
  "Performance Test 1:",
  performanceResult1?.department === "ENGINEERING" &&
    performanceResult1?.activeEmployeeCount === 3 &&
    performanceResult1?.averageScore === 90 &&
    performanceResult1?.employees?.length === 3 &&
    performanceResult1?.employees?.[0]?.employeeId === "EMP-104" &&
    performanceResult1?.employees?.[1]?.employeeId === "EMP-101" &&
    performanceResult1?.employees?.[2]?.employeeId === "EMP-102",
);

console.log(
  "Performance Test 2:",
  performanceResult2?.department === "HR" &&
    performanceResult2?.activeEmployeeCount === 2 &&
    performanceResult2?.averageScore === 92 &&
    performanceResult2?.employees?.length === 2 &&
    performanceResult2?.employees?.[0]?.name === "Meera" &&
    performanceResult2?.employees?.[1]?.name === "Zoya",
);

console.log(
  "Performance Test 3:",
  performanceResult3?.department === "SALES" &&
    performanceResult3?.activeEmployeeCount === 1 &&
    performanceResult3?.averageScore === 88 &&
    performanceResult3?.employees?.[0]?.name === "Priya",
);

console.log(
  "Performance Test 4:",
  performanceResult4?.department === "FINANCE" &&
    performanceResult4?.activeEmployeeCount === 0 &&
    performanceResult4?.averageScore === 0 &&
    performanceResult4?.employees?.length === 0,
);

// --------------------------------------------------
// RESPONSE-SHAPE CHECK
// --------------------------------------------------

console.log(
  "Clean response objects:",
  Object.keys(performanceResult1.employees[0]).length === 3 &&
    !("email" in performanceResult1.employees[0]) &&
    !("department" in performanceResult1.employees[0]) &&
    !("status" in performanceResult1.employees[0]),
);

// --------------------------------------------------
// NON-MUTATION CHECKS
// --------------------------------------------------

console.log(
  "Employee array order unchanged:",
  performanceEmployees[0].id === "EMP-101" &&
    performanceEmployees[1].id === "EMP-102" &&
    performanceEmployees[2].id === "EMP-103",
);

console.log(
  "Employee objects unchanged:",
  performanceEmployees[0].department === "Engineering" &&
    performanceEmployees[1].department === " engineering " &&
    performanceEmployees[4].status === "INACTIVE",
);

// --------------------------------------------------
// EXTRA EDGE-CASE TEST
// --------------------------------------------------

const extraEmployees = [
  {
    id: "EMP-201",
    name: "Zara",
    department: "Support",
    status: "ACTIVE",
    score: 80,
    email: "zara@example.com",
  },
  {
    id: "EMP-202",
    name: "Aman",
    department: " support ",
    status: "active",
    score: 80,
    email: "aman@example.com",
  },
  {
    id: "EMP-203",
    name: "Kiran",
    department: "SUPPORT",
    status: "INACTIVE",
    score: 100,
    email: "kiran@example.com",
  },
];

const extraResult = createDepartmentPerformanceReport(
  extraEmployees,
  " SUPPORT ",
);

console.log("Extra Result:", extraResult);

/*
EXPECTED:

{
  department: "SUPPORT",
  activeEmployeeCount: 2,
  averageScore: 80,
  employees: [
    { employeeId: "EMP-202", name: "Aman", score: 80 },
    { employeeId: "EMP-201", name: "Zara", score: 80 }
  ]
}
*/

console.log(
  "Extra Test:",
  extraResult?.department === "SUPPORT" &&
    extraResult?.activeEmployeeCount === 2 &&
    extraResult?.averageScore === 80 &&
    extraResult?.employees?.length === 2 &&
    extraResult?.employees?.[0]?.name === "Aman" &&
    extraResult?.employees?.[1]?.name === "Zara",
);

console.log(
  "Extra source unchanged:",
  extraEmployees[0].id === "EMP-201" &&
    extraEmployees[1].id === "EMP-202" &&
    extraEmployees[2].status === "INACTIVE",
);
