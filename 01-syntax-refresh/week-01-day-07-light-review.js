// // // ----- Review Function 1: createActiveUserResponses -----
// // //
// // // Business rules:
// // // 1. Return a new array containing only active users.
// // // 2. A user is active when status becomes "active" after trimming
// // //    whitespace and converting it to lowercase.
// // // 3. Each returned object must contain:
// // //    - id
// // //    - name
// // //    - email
// // // 4. Normalize the name by trimming it.
// // // 5. Normalize the email by trimming it and converting it to lowercase.
// // // 6. Use "Unavailable" when the name is missing, null, or whitespace-only.
// // // 7. Use "unavailable" when the email is missing, null, or whitespace-only.
// // // 8. Do not modify the original users or the original array.
// // // 9. Return an empty array when there are no active users.

// // function createActiveUserResponses(users) {
// //   const activeUsers = [];

// //   for (const user of users) {
// //     const id = user?.id;
// //     const normalizedName = user?.name?.trim() || "Unavailable";
// //     const normalizedEmail = user?.email?.trim().toLowerCase() || "unavailable";
// //     const normalizedStatus =
// //       user?.status?.trim().toLowerCase() ?? "unavailable";

// //     if (normalizedStatus !== "active") {
// //       continue;
// //     }

// //     activeUsers.push({
// //       id,
// //       name: normalizedName,
// //       email: normalizedEmail,
// //     });
// //   }

// //   return activeUsers;
// // }

// // const reviewUsers = [
// //   {
// //     id: 1,
// //     name: "  Asha  ",
// //     email: " ASHA@EXAMPLE.COM ",
// //     status: " ACTIVE ",
// //   },
// //   {
// //     id: 2,
// //     name: "Ravi",
// //     email: "ravi@example.com",
// //     status: "inactive",
// //   },
// //   {
// //     id: 3,
// //     name: "   ",
// //     email: null,
// //     status: "active",
// //   },
// //   {
// //     id: 4,
// //     name: "Meera",
// //     status: " Active",
// //   },
// //   {
// //     id: 5,
// //     name: "Kiran",
// //     email: "kiran@example.com",
// //     status: null,
// //   },
// // ];

// // console.log("----- Test 1: Mixed users -----");
// // console.log(createActiveUserResponses(reviewUsers));
// // // Expected:
// // // [
// // //   { id: 1, name: "Asha", email: "asha@example.com" },
// // //   { id: 3, name: "Unavailable", email: "unavailable" },
// // //   { id: 4, name: "Meera", email: "unavailable" }
// // // ]

// // console.log("----- Test 2: No active users -----");
// // console.log(
// //   createActiveUserResponses([
// //     { id: 10, name: "Sam", email: "sam@example.com", status: "inactive" },
// //     //  ])
// //   ]),
// // );
// // // Expected: []

// // console.log("----- Test 3: Empty array -----");
// // console.log(createActiveUserResponses([]));
// // // Expected: []

// // console.log("----- Original data remains unchanged -----");
// // console.log(reviewUsers);
// // // Expected name and email to still contain their original spaces and casing.

// // console.log("----- Test 4: Whitespace-only fields -----");
// // console.log(
// //   createActiveUserResponses([
// //     {
// //       id: 6,
// //       name: "   ",
// //       email: "   ",
// //       status: " active ",
// //     },
// //   ]),
// // );
// // // Expected:
// // // [{ id: 6, name: "Unavailable", email: "unavailable" }]

// console.log("----");

// // ----- Review Function 2: createDeliveredOrderReport -----
// //
// // Business rules:
// // 1. Process only orders whose status becomes "delivered" after
// //    trimming whitespace and converting it to lowercase.
// // 2. Each order may contain an items array.
// // 3. For each delivered order:
// //    - Add 1 to deliveredOrderCount.
// //    - Add every item's quantity to totalUnits.
// //    - Add quantity * unitPrice to productRevenue.
// //    - Add the order's deliveryFee once, not once per item.
// // 4. Missing items should behave like an empty array.
// // 5. Missing quantity, unitPrice, or deliveryFee should behave like 0.
// // 6. Return:
// //    {
// //      deliveredOrderCount,
// //      totalUnits,
// //      productRevenue,
// //      deliveryFees,
// //      grandTotal
// //    }
// // 7. grandTotal must equal productRevenue + deliveryFees.
// // 8. Do not modify the original orders or items.

// // function createDeliveredOrderReport(orders) {
// //   const orderReport = {
// //     deliveredOrderCount: 0,
// //     totalUnits: 0,
// //     productRevenue: 0,
// //     deliveryFees: 0,
// //     grandTotal: 0,
// //   };

// //   for (const order of orders) {
// //     const normalizedStatus =
// //       order?.status?.trim().toLowerCase() || "unavailable";
// //     const deliveryFee = order?.deliveryFee || 0;

// //     if (normalizedStatus !== "delivered") {
// //       continue;
// //     }

// //     orderReport.deliveredOrderCount++;
// //     orderReport.deliveryFees += deliveryFee;
// //     let orderSubTotal = 0;
// //     for (const item of order.items ?? []) {
// //       const itemQuantity = item?.quantity || 0;
// //       const itemPrice = item?.unitPrice || 0;
// //       orderReport.totalUnits += itemQuantity;
// //       orderSubTotal += itemQuantity * itemPrice;
// //     }

// //     orderReport.productRevenue += orderSubTotal;
// //   }

// //   orderReport.grandTotal =
// //     orderReport.productRevenue + orderReport.deliveryFees;

// //   return orderReport;
// // }

// // const reviewOrders = [
// //   {
// //     id: 101,
// //     status: " DELIVERED ",
// //     deliveryFee: 10,
// //     items: [
// //       { product: "Keyboard", quantity: 2, unitPrice: 50 },
// //       { product: "Mouse", quantity: 1, unitPrice: 20 },
// //     ],
// //   },
// //   {
// //     id: 102,
// //     status: "pending",
// //     deliveryFee: 25,
// //     items: [{ product: "Monitor", quantity: 1, unitPrice: 200 }],
// //   },
// //   {
// //     id: 103,
// //     status: "delivered",
// //     deliveryFee: 5,
// //     items: [
// //       { product: "Cable", quantity: 3, unitPrice: 4 },
// //       { product: "Adapter", quantity: 2, unitPrice: 8 },
// //     ],
// //   },
// //   {
// //     id: 104,
// //     status: "Delivered",
// //     items: [{ product: "Stand", quantity: 1, unitPrice: 30 }],
// //   },
// //   {
// //     id: 105,
// //     status: null,
// //     deliveryFee: 50,
// //     items: [{ product: "Chair", quantity: 1, unitPrice: 100 }],
// //   },
// // ];

// // console.log("----- Function 2 — Test 1: Mixed orders -----");
// // console.log(createDeliveredOrderReport(reviewOrders));
// // // Expected:
// // // {
// // //   deliveredOrderCount: 3,
// // //   totalUnits: 9,
// // //   productRevenue: 178,
// // //   deliveryFees: 15,
// // //   grandTotal: 193
// // // }

// // console.log("----- Function 2 — Test 2: Missing values -----");
// // console.log(
// //   createDeliveredOrderReport([
// //     {
// //       id: 201,
// //       status: " delivered ",
// //       items: [
// //         { product: "Notebook", quantity: 2 },
// //         { product: "Pen", unitPrice: 3 },
// //       ],
// //     },
// //     {
// //       id: 202,
// //       status: "delivered",
// //     },
// //   ]),
// // );
// // // Expected:
// // // {
// // //   deliveredOrderCount: 2,
// // //   totalUnits: 2,
// // //   productRevenue: 0,
// // //   deliveryFees: 0,
// // //   grandTotal: 0
// // // }

// // console.log("----- Function 2 — Test 3: No delivered orders -----");
// // console.log(
// //   createDeliveredOrderReport([
// //     {
// //       id: 301,
// //       status: "cancelled",
// //       deliveryFee: 10,
// //       items: [{ product: "Bag", quantity: 1, unitPrice: 40 }],
// //     },
// //   ]),
// // );
// // // Expected:
// // // {
// // //   deliveredOrderCount: 0,
// // //   totalUnits: 0,
// // //   productRevenue: 0,
// // //   deliveryFees: 0,
// // //   grandTotal: 0
// // // }

// // console.log("----- Function 2 — Test 4: Empty array -----");
// // console.log(createDeliveredOrderReport([]));
// // // Expected:
// // // {
// // //   deliveredOrderCount: 0,
// // //   totalUnits: 0,
// // //   productRevenue: 0,
// // //   deliveryFees: 0,
// // //   grandTotal: 0
// // // }

// // console.log("----- Function 2 — Original data -----");
// // console.log(reviewOrders[0]);
// // // Expected: Original order and items remain unchanged.

// // console.log("----- Function 2 — Hidden decimal test -----");

// // const decimalReport = createDeliveredOrderReport([
// //   {
// //     status: "delivered",
// //     deliveryFee: 0.2,
// //     items: [{ quantity: 1, unitPrice: 0.1 }],
// //   },
// //   {
// //     status: "delivered",
// //     deliveryFee: 0.3,
// //     items: [{ quantity: 1, unitPrice: 0.1 }],
// //   },
// // ]);

// // console.log(decimalReport);
// // console.log(
// //   decimalReport.grandTotal ===
// //     decimalReport.productRevenue + decimalReport.deliveryFees,
// // );
// // // Expected: true

// // ----- Review Function 3: createDepartmentSummary -----
// //
// // Business rules:
// //
// // 1. Process only employees whose status becomes "active"
// //    after trimming whitespace and converting to lowercase.
// //
// // 2. Department names should be normalized by:
// //    - trimming whitespace
// //    - converting to uppercase
// //
// // 3. Missing or whitespace-only department names become:
// //    "UNASSIGNED"
// //
// // 4. Ignore duplicate employees based on email.
// //    Emails are compared after trimming and converting to lowercase.
// //
// // 5. Missing or whitespace-only emails should NOT be counted
// //    and should NOT participate in duplicate detection.
// //
// // 6. Return:
// //
// // {
// //   totalActiveEmployees,
// //   uniqueDepartments,
// //   employeesPerDepartment
// // }
// //
// // Example:
// //
// // {
// //   totalActiveEmployees: 5,
// //   uniqueDepartments: 3,
// //   employeesPerDepartment: {
// //     ENGINEERING: 2,
// //     HR: 2,
// //     UNASSIGNED: 1
// //   }
// // }
// //
// // 7. Do not modify the original array or employee objects.

// function createDepartmentSummary(employees) {
//   const departmentSummary = {
//     totalActiveEmployees: 0,
//     uniqueDepartments: 0,
//     employeesPerDepartment: {},
//   };

//   const activeEmails = [];
//   const uniqueDepartments = [];

//   for (const employee of employees) {
//     const normalizedStatus =
//       employee?.status?.trim().toLowerCase() ?? "unavailable";
//     const normalizedEmail = employee?.email?.trim().toLowerCase() || "";
//     const normalizedDepartment =
//       employee?.department?.trim().toUpperCase() || "UNASSIGNED";

//     if (normalizedStatus !== "active" || normalizedEmail === "") {
//       continue;
//     }

//     if (!activeEmails.includes(normalizedEmail)) {
//       activeEmails.push(normalizedEmail);
//       departmentSummary.totalActiveEmployees++;

//       if (!uniqueDepartments.includes(normalizedDepartment)) {
//         uniqueDepartments.push(normalizedDepartment);
//         if (normalizedDepartment !== "UNASSIGNED") {
//           departmentSummary.uniqueDepartments++;
//         }
//         departmentSummary.employeesPerDepartment[normalizedDepartment] = 1;
//       } else {
//         departmentSummary.employeesPerDepartment[normalizedDepartment]++;
//       }
//     }
//   }

//   return departmentSummary;
// }

// const reviewEmployees = [
//   {
//     name: "Asha",
//     email: " ASHA@company.com ",
//     department: " Engineering ",
//     status: "ACTIVE",
//   },
//   {
//     name: "Ravi",
//     email: "ravi@company.com",
//     department: "HR",
//     status: " active ",
//   },
//   {
//     name: "Meera",
//     email: "asha@company.com",
//     department: "Engineering",
//     status: "active",
//   },
//   {
//     name: "Kiran",
//     email: null,
//     department: "HR",
//     status: "active",
//   },
//   {
//     name: "Vijay",
//     email: "   ",
//     department: "Finance",
//     status: "active",
//   },
//   {
//     name: "Pooja",
//     email: "pooja@company.com",
//     department: "   ",
//     status: "Active",
//   },
//   {
//     name: "Rahul",
//     email: "rahul@company.com",
//     department: "Engineering",
//     status: "inactive",
//   },
// ];

// console.log(createDepartmentSummary(reviewEmployees));

// // Expected:
// // {
// //   totalActiveEmployees: 5,
// //   uniqueDepartments: 3,
// //   employeesPerDepartment: {
// //     ENGINEERING: 1,
// //     HR: 2,
// //     FINANCE: 1,
// //     UNASSIGNED: 1
// //   }
// // }

// console.log("----- Hidden Test: Missing and blank emails -----");

// console.log(
//   createDepartmentSummary([
//     {
//       name: "Asha",
//       email: "asha@company.com",
//       department: "Engineering",
//       status: "active",
//     },
//     {
//       name: "Kiran",
//       email: null,
//       department: "HR",
//       status: "active",
//     },
//     {
//       name: "Vijay",
//       department: "Finance",
//       status: "active",
//     },
//     {
//       name: "Pooja",
//       email: "   ",
//       department: "HR",
//       status: "active",
//     },
//   ]),
// );

// // Expected:
// // {
// //   totalActiveEmployees: 1,
// //   uniqueDepartments: 1,
// //   employeesPerDepartment: {
// //     ENGINEERING: 1
// //   }
// // }

// console.log("----- Function 3 — Test with 20 employees -----");

// const twentyEmployees = [
//   // 1. Count: ENGINEERING
//   {
//     name: "Asha",
//     email: " ASHA@company.com ",
//     department: " Engineering ",
//     status: "ACTIVE",
//   },

//   // 2. Count: HR
//   {
//     name: "Ravi",
//     email: "ravi@company.com",
//     department: "HR",
//     status: " active ",
//   },

//   // 3. Skip: duplicate of Asha
//   {
//     name: "Meera",
//     email: "asha@company.com",
//     department: "Finance",
//     status: "active",
//   },

//   // 4. Skip: missing email
//   {
//     name: "Kiran",
//     email: null,
//     department: "HR",
//     status: "active",
//   },

//   // 5. Skip: blank email
//   {
//     name: "Vijay",
//     email: "   ",
//     department: "Finance",
//     status: "active",
//   },

//   // 6. Count: UNASSIGNED
//   {
//     name: "Pooja",
//     email: "pooja@company.com",
//     department: "   ",
//     status: "Active",
//   },

//   // 7. Skip: inactive
//   {
//     name: "Rahul",
//     email: "rahul@company.com",
//     department: "Engineering",
//     status: "inactive",
//   },

//   // 8. Count: FINANCE
//   {
//     name: "Neha",
//     email: "neha@company.com",
//     department: "finance",
//     status: "active",
//   },

//   // 9. Count: SALES
//   {
//     name: "Arjun",
//     email: "arjun@company.com",
//     department: " Sales ",
//     status: " ACTIVE ",
//   },

//   // 10. Skip: pending
//   {
//     name: "Divya",
//     email: "divya@company.com",
//     department: "Support",
//     status: "pending",
//   },

//   // 11. Count: SUPPORT
//   {
//     name: "Sameer",
//     email: "sameer@company.com",
//     department: "Support",
//     status: "active",
//   },

//   // 12. Count: ENGINEERING
//   {
//     name: "Lakshmi",
//     email: "lakshmi@company.com",
//     department: " engineering ",
//     status: "active",
//   },

//   // 13. Skip: duplicate of Ravi
//   {
//     name: "John",
//     email: " RAVI@COMPANY.COM ",
//     department: "Operations",
//     status: "active",
//   },

//   // 14. Count: OPERATIONS
//   {
//     name: "Fatima",
//     email: "fatima@company.com",
//     department: "operations",
//     status: "active",
//   },

//   // 15. Count: UNASSIGNED
//   {
//     name: "Bala",
//     email: "bala@company.com",
//     status: "active",
//   },

//   // 16. Count: FINANCE
//   {
//     name: "Priya",
//     email: "priya@company.com",
//     department: "FINANCE",
//     status: "active",
//   },

//   // 17. Count: SALES
//   {
//     name: "Omar",
//     email: "omar@company.com",
//     department: "sales",
//     status: "active",
//   },

//   // 18. Skip: missing status
//   {
//     name: "Sneha",
//     email: "sneha@company.com",
//     department: "HR",
//     status: null,
//   },

//   // 19. Count: HR
//   {
//     name: "Tara",
//     email: "tara@company.com",
//     department: " hr ",
//     status: "active",
//   },

//   // 20. Skip: duplicate of Sameer
//   {
//     name: "Mohan",
//     email: " SAMEER@COMPANY.COM ",
//     department: "Engineering",
//     status: "active",
//   },
// ];

// console.log(createDepartmentSummary(twentyEmployees));

// // Expected:
// // {
// //   totalActiveEmployees: 12,
// //   uniqueDepartments: 6,
// //   employeesPerDepartment: {
// //     ENGINEERING: 2,
// //     HR: 2,
// //     UNASSIGNED: 2,
// //     FINANCE: 2,
// //     SALES: 2,
// //     SUPPORT: 1,
// //     OPERATIONS: 1
// //   }
// // }

const report = {};

report.department = 3;
report["engineering"] = 5;

console.log(report);
// { department: 3 }

const report1 = {};
const department1 = "ENGINEERING";

report1[department1] = 3;

console.log(report1);
// { ENGINEERING: 3 }
