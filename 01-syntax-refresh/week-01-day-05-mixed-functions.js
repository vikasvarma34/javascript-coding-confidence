// // console.log("Let's Come On!");

// // // Business rules:
// // // 1. Return only users whose status is "active".
// // // 2. Ignore users whose email is missing, null, or only whitespace.
// // // 3. Normalize every valid email using trim() and toLowerCase().
// // // 4. Create a new object for every included user.
// // // 5. Each returned object must contain:
// // //    - id
// // //    - displayName: the trimmed name converted to uppercase
// // //    - email: the normalized email
// // // 6. Do not modify the original users or their objects.
// // // 7. Ignore users whose name is missing, null, or only whitespace.

// // function createActiveUserResponses(users) {
// //   const activeUsers = [];
// //   for (const user of users) {
// //     const email = user?.email;
// //     const name = user?.name;
// //     if (email && name) {
// //       const normalizedEmail = email.trim().toLowerCase();
// //       const normalizedName = name.trim().toUpperCase();

// //       if (
// //         normalizedEmail !== "" &&
// //         normalizedName !== "" &&
// //         user.status === "active"
// //       ) {
// //         activeUsers.push({
// //           id: user.id,
// //           displayName: normalizedName,
// //           email: normalizedEmail,
// //         });
// //       }
// //     }
// //   }

// //   return activeUsers;
// // }

// // const users = [
// //   {
// //     id: 1,
// //     name: "  Vikas  ",
// //     email: "  VIKAS@EXAMPLE.COM ",
// //     status: "active",
// //   },
// //   {
// //     id: 2,
// //     name: "Anjali",
// //     email: "anjali@example.com",
// //     status: "inactive",
// //   },
// //   {
// //     id: 3,
// //     name: "  Ravi Kumar ",
// //     email: "   ",
// //     status: "active",
// //   },
// //   {
// //     id: 4,
// //     name: "Meena",
// //     email: " Meena@Example.com ",
// //     status: "active",
// //   },
// //   {
// //     id: 5,
// //     name: " Arun ",
// //     email: null,
// //     status: "active",
// //   },
// //   {
// //     id: 6,
// //     email: "  harishrao@gmail.COM ",
// //     status: "active",
// //   },
// //   {
// //     id: 7,
// //     name: "   ",
// //     email: "valid@example.com",
// //     status: "active",
// //   },
// // ];

// // console.log(createActiveUserResponses(users));
// // // Expected:
// // // [
// // //   {
// // //     id: 1,
// // //     displayName: "VIKAS",
// // //     email: "vikas@example.com"
// // //   },
// // //   {
// // //     id: 4,
// // //     displayName: "MEENA",
// // //     email: "meena@example.com"
// // //   }
// // // ]

// // console.log(createActiveUserResponses([]));
// // // Expected: []

// // console.log(
// //   createActiveUserResponses([
// //     {
// //       id: 5,
// //       name: " Arun ",
// //       email: null,
// //       status: "active",
// //     },
// //   ]),
// // );
// // // Expected: []

// // Business rules:
// // 1. Include only orders whose status is "confirmed".
// // 2. Ignore orders with no items or an empty items array.
// // 3. Calculate the total quantity across all items.
// // 4. Calculate the order total using price * quantity for each item.
// // 5. Normalize the customer email using trim() and toLowerCase().
// // 6. If the email is missing, null, or whitespace-only, use "email-unavailable".
// // 7. Return a new array of summary objects.
// // 8. Each summary must contain:
// //    - orderId
// //    - customerEmail
// //    - totalQuantity
// //    - orderTotal
// // 9. Do not modify the original orders or items.

// // function createConfirmedOrderSummaries(orders) {
// //   const confirmedOrders = [];
// //   for (const order of orders) {
// //     let totalQuantity = 0;
// //     let orderTotal = 0;
// //     const email = order.customer?.email;
// //     if (order.status === "confirmed" && order.items.length !== 0) {
// //       for (const item of order.items) {
// //         totalQuantity += item.quantity;
// //         orderTotal += item.price * item.quantity;
// //       }

// //       let customerEmail = "email-unavailable";

// //       if (email) {
// //         const normalizedEmail = email.trim().toLowerCase();
// //         if (normalizedEmail !== "") {
// //           customerEmail = normalizedEmail;
// //         }
// //       }

// //       confirmedOrders.push({
// //         orderId: order.id,
// //         customerEmail,
// //         totalQuantity,
// //         orderTotal,
// //       });
// //     }
// //   }

// //   return confirmedOrders;
// // }

// // const orders = [
// //   {
// //     id: "ORD-101",
// //     status: "confirmed",
// //     customer: {
// //       email: "  VIKAS@EXAMPLE.COM ",
// //     },
// //     items: [
// //       { productId: 1, price: 25, quantity: 2 },
// //       { productId: 2, price: 10, quantity: 3 },
// //     ],
// //   },
// //   {
// //     id: "ORD-102",
// //     status: "pending",
// //     customer: {
// //       email: "anjali@example.com",
// //     },
// //     items: [{ productId: 3, price: 40, quantity: 1 }],
// //   },
// //   {
// //     id: "ORD-103",
// //     status: "confirmed",
// //     customer: {
// //       email: "   ",
// //     },
// //     items: [
// //       { productId: 4, price: 15, quantity: 4 },
// //       { productId: 5, price: 5, quantity: 2 },
// //     ],
// //   },
// //   {
// //     id: "ORD-104",
// //     status: "confirmed",
// //     customer: {
// //       email: null,
// //     },
// //     items: [],
// //   },
// // ];

// // console.log("-----");

// // console.log(createConfirmedOrderSummaries(orders));
// // // Expected:
// // // [
// // //   {
// // //     orderId: "ORD-101",
// // //     customerEmail: "vikas@example.com",
// // //     totalQuantity: 5,
// // //     orderTotal: 80
// // //   },
// // //   {
// // //     orderId: "ORD-103",
// // //     customerEmail: "email-unavailable",
// // //     totalQuantity: 6,
// // //     orderTotal: 70
// // //   }
// // // ]

// // console.log("-----");

// // console.log(createConfirmedOrderSummaries([]));
// // // Expected: []

// // console.log("-----");

// // console.log(
// //   createConfirmedOrderSummaries([
// //     {
// //       id: "ORD-105",
// //       status: "confirmed",
// //       customer: {},
// //       items: [{ productId: 6, price: 12, quantity: 1 }],
// //     },
// //   ]),
// // );

// // console.log("-----");
// // // Expected:
// // // [
// // //   {
// // //     orderId: "ORD-105",
// // //     customerEmail: "email-unavailable",
// // //     totalQuantity: 1,
// // //     orderTotal: 12
// // //   }
// // // ]

// // console.log(
// //   createConfirmedOrderSummaries([
// //     {
// //       id: "ORD-106",
// //       status: "confirmed",
// //       customer: {
// //         email: "   ",
// //       },
// //       items: [{ productId: 7, price: 20, quantity: 2 }],
// //     },
// //   ]),
// // );

// // // Expected:
// // // [
// // //   {
// // //     orderId: "ORD-106",
// // //     customerEmail: "email-unavailable",
// // //     totalQuantity: 2,
// // //     orderTotal: 40
// // //   }
// // // ]

// // console.log("----");
// // Business rules:
// // 1. Include only tasks whose status becomes "pending" after normalization.
// // 2. requestedPriority may be "high", "medium", "low", or "all".
// // 3. Priority matching must ignore surrounding spaces and letter case.
// // 4. When requestedPriority is "all", include every pending task.
// // 5. Ignore tasks whose title is missing, null, or only whitespace.
// // 6. Each included task must become a new object containing:
// //    - taskId
// //    - title: cleaned title
// //    - priority: cleaned lowercase priority
// //    - assignedTo: cleaned assignee name, or "Unassigned"
// // 7. Return:
// //    {
// //      matchingCount: number of included tasks,
// //      tasks: array of clean task objects
// //    }
// // 8. Do not modify the original tasks.

// // function createTaskQueueSummary(tasks, requestedPriority = "all") {
// //   let matchingCount = 0;
// //   const pendingTasks = [];
// //   for (const task of tasks) {
// //     const normalizedStatus = task.status.trim().toLowerCase();
// //     const normalizedTitle = task.title.trim();
// //     const normalizedPriority = task.priority.trim().toLowerCase();
// //     const normalizedRequestPriority = requestedPriority.trim().toLowerCase();
// //     let normalizedAssignee = "Unassigned";
// //     const assignee = task?.assignee;
// //     if (assignee) {
// //       normalizedAssignee = assignee.name.trim();
// //     }

// //     if (
// //       normalizedStatus === "pending" &&
// //       normalizedTitle !== null &&
// //       normalizedTitle !== "" &&
// //       (normalizedRequestPriority === "all" ||
// //         normalizedRequestPriority === normalizedPriority)
// //     ) {
// //       matchingCount++;
// //       pendingTasks.push({
// //         taskId: task.id,
// //         title: normalizedTitle,
// //         priority: normalizedPriority,
// //         assignedTo: normalizedAssignee,
// //       });
// //     }
// //   }

// //   return {
// //     matchingCount,
// //     tasks: pendingTasks,
// //   };
// // }

// // const tasks = [
// //   {
// //     id: "TASK-101",
// //     title: "  Fix login validation ",
// //     status: " Pending ",
// //     priority: " HIGH ",
// //     assignee: { name: "  Vikas " },
// //   },
// //   {
// //     id: "TASK-102",
// //     title: "Update documentation",
// //     status: "completed",
// //     priority: "medium",
// //     assignee: { name: "Anjali" },
// //   },
// //   {
// //     id: "TASK-103",
// //     title: " Review payment logs ",
// //     status: "PENDING",
// //     priority: "medium",
// //     assignee: null,
// //   },
// //   {
// //     id: "TASK-104",
// //     title: "   ",
// //     status: "pending",
// //     priority: "high",
// //     assignee: { name: "Ravi" },
// //   },
// //   {
// //     id: "TASK-105",
// //     title: "Clean expired sessions",
// //     status: "pending",
// //     priority: " LOW ",
// //     assignee: { name: "   " },
// //   },
// // ];

// // console.log("----- Test 1: All pending tasks -----");
// // console.log(createTaskQueueSummary(tasks));
// // // Expected:
// // // {
// // //   matchingCount: 3,
// // //   tasks: [
// // //     {
// // //       taskId: "TASK-101",
// // //       title: "Fix login validation",
// // //       priority: "high",
// // //       assignedTo: "Vikas"
// // //     },
// // //     {
// // //       taskId: "TASK-103",
// // //       title: "Review payment logs",
// // //       priority: "medium",
// // //       assignedTo: "Unassigned"
// // //     },
// // //     {
// // //       taskId: "TASK-105",
// // //       title: "Clean expired sessions",
// // //       priority: "low",
// // //       assignedTo: "Unassigned"
// // //     }
// // //   ]
// // // }

// // console.log("----- Test 2: High-priority pending tasks -----");
// // console.log(createTaskQueueSummary(tasks, " HIGH "));
// // // Expected:
// // // {
// // //   matchingCount: 1,
// // //   tasks: [
// // //     {
// // //       taskId: "TASK-101",
// // //       title: "Fix login validation",
// // //       priority: "high",
// // //       assignedTo: "Vikas"
// // //     }
// // //   ]
// // // }

// // console.log("----- Test 3: No matching priority -----");
// // console.log(createTaskQueueSummary(tasks, "medium"));
// // // Expected:
// // // {
// // //   matchingCount: 1,
// // //   tasks: [
// // //     {
// // //       taskId: "TASK-103",
// // //       title: "Review payment logs",
// // //       priority: "medium",
// // //       assignedTo: "Unassigned"
// // //     }
// // //   ]
// // // }

// // console.log("----- Test 4: Empty task list -----");
// // console.log(createTaskQueueSummary([], "high"));
// // // Expected:
// // // {
// // //   matchingCount: 0,
// // //   tasks: []
// // // }

// // Business rules:
// // 1. Include only products whose status becomes "active" after cleaning.
// // 2. Include a product only when its current stock is less than or equal to
// //    its reorder level.
// // 3. Ignore products whose name or SKU is missing, null, or whitespace-only.
// // 4. Clean the product name by removing surrounding whitespace.
// // 5. Clean the SKU by removing surrounding whitespace and converting it
// //    to uppercase.
// // 6. supplier.name may be missing, null, or whitespace-only.
// //    Use "No supplier" in those cases.
// // 7. Calculate unitsNeeded as targetStock - stock.
// // 8. If unitsNeeded is negative, use 0.
// // 9. Do not modify the original products.
// // 10. Return:
// //
// // {
// //   productCount: number of included products,
// //   totalUnitsNeeded: combined units needed,
// //   products: [
// //     {
// //       productId,
// //       name,
// //       sku,
// //       supplierName,
// //       currentStock,
// //       unitsNeeded
// //     }
// //   ]
// // }

// function createRestockReport(products) {
//   const restockProducts = [];
//   let totalUnitesCombined = 0;
//   for (const product of products) {
//     const normalizedName = product.name ? product.name.trim() : null;
//     const normalizedStatus = product?.status
//       ? product.status.trim().toLowerCase()
//       : null;
//     const normalizedSKU = product?.sku
//       ? product.sku.trim().toUpperCase()
//       : null;
//     let supplierName = "No supplier";
//     if (product?.supplier?.name) {
//       const trimmedName = product?.supplier?.name.trim();
//       if (trimmedName !== "") {
//         supplierName = trimmedName;
//       }
//     }

//     if (!normalizedName || !normalizedSKU) {
//       continue;
//     }
//     const currentStock = product?.stock;
//     const reOrderLevel = product?.reorderLevel;
//     const targetStock = product?.targetStock;

//     if (normalizedStatus === "active" && currentStock <= reOrderLevel) {
//       const stockDifference = targetStock - currentStock;
//       const unitsNeeded = stockDifference >= 0 ? stockDifference : 0;

//       totalUnitesCombined += unitsNeeded;

//       restockProducts.push({
//         productId: product.id,
//         name: normalizedName,
//         sku: normalizedSKU,
//         supplierName,
//         currentStock,
//         unitsNeeded,
//       });
//     }
//   }

//   return {
//     productCount: restockProducts.length,
//     totalUnitsNeeded: totalUnitesCombined,
//     products: restockProducts,
//   };
// }

// const products = [
//   {
//     id: "PROD-101",
//     name: "  Wireless Mouse ",
//     sku: " wm-101 ",
//     status: " ACTIVE ",
//     stock: 4,
//     reorderLevel: 5,
//     targetStock: 15,
//     supplier: {
//       name: "  TechSource ",
//     },
//   },
//   {
//     id: "PROD-102",
//     name: "Keyboard",
//     sku: "kb-202",
//     status: "active",
//     stock: 12,
//     reorderLevel: 5,
//     targetStock: 20,
//     supplier: {
//       name: "Input World",
//     },
//   },
//   {
//     id: "PROD-103",
//     name: "USB-C Cable",
//     sku: " cable-303 ",
//     status: "ACTIVE",
//     stock: 0,
//     reorderLevel: 3,
//     targetStock: 10,
//     supplier: null,
//   },
//   {
//     id: "PROD-104",
//     name: "   ",
//     sku: "screen-404",
//     status: "active",
//     stock: 1,
//     reorderLevel: 2,
//     targetStock: 8,
//     supplier: {
//       name: "Display House",
//     },
//   },
//   {
//     id: "PROD-105",
//     name: "Laptop Stand",
//     sku: " stand-505 ",
//     status: "inactive",
//     stock: 2,
//     reorderLevel: 4,
//     targetStock: 12,
//     supplier: {
//       name: "   ",
//     },
//   },
//   {
//     id: "PROD-106",
//     name: "Webcam",
//     sku: " cam-606 ",
//     status: "active",
//     stock: 5,
//     reorderLevel: 5,
//     targetStock: 14,
//     supplier: {
//       name: "   ",
//     },
//   },
// ];

// console.log("----- Test 1: Main restock report -----");
// console.log(createRestockReport(products));
// // Expected:
// // {
// //   productCount: 3,
// //   totalUnitsNeeded: 30,
// //   products: [
// //     {
// //       productId: "PROD-101",
// //       name: "Wireless Mouse",
// //       sku: "WM-101",
// //       supplierName: "TechSource",
// //       currentStock: 4,
// //       unitsNeeded: 11
// //     },
// //     {
// //       productId: "PROD-103",
// //       name: "USB-C Cable",
// //       sku: "CABLE-303",
// //       supplierName: "No supplier",
// //       currentStock: 0,
// //       unitsNeeded: 10
// //     },
// //     {
// //       productId: "PROD-106",
// //       name: "Webcam",
// //       sku: "CAM-606",
// //       supplierName: "No supplier",
// //       currentStock: 5,
// //       unitsNeeded: 9
// //     }
// //   ]
// // }

// console.log("----- Test 2: Empty product list -----");
// console.log(createRestockReport([]));
// // Expected:
// // {
// //   productCount: 0,
// //   totalUnitsNeeded: 0,
// //   products: []
// // }

// console.log("----- Test 3: Missing SKU -----");
// console.log(
//   createRestockReport([
//     {
//       id: "PROD-107",
//       name: "Headphones",
//       sku: null,
//       status: "active",
//       stock: 1,
//       reorderLevel: 4,
//       targetStock: 10,
//       supplier: {
//         name: "Audio Store",
//       },
//     },
//   ]),
// );
// // Expected:
// // {
// //   productCount: 0,
// //   totalUnitsNeeded: 0,
// //   products: []
// // }

// console.log("----- Test 4: Target below current stock -----");
// console.log(
//   createRestockReport([
//     {
//       id: "PROD-108",
//       name: "Desk Lamp",
//       sku: " lamp-108 ",
//       status: "active",
//       stock: 3,
//       reorderLevel: 5,
//       targetStock: 2,
//       supplier: {},
//     },
//   ]),
// );
// // Expected:
// // {
// //   productCount: 1,
// //   totalUnitsNeeded: 0,
// //   products: [
// //     {
// //       productId: "PROD-108",
// //       name: "Desk Lamp",
// //       sku: "LAMP-108",
// //       supplierName: "No supplier",
// //       currentStock: 3,
// //       unitsNeeded: 0
// //     }
// //   ]
// // }

// console.log("----- Test 5: Original product must not be modified -----");

// const originalProduct = {
//   id: "PROD-109",
//   name: "  Portable Charger ",
//   sku: " pc-109 ",
//   status: " ACTIVE ",
//   stock: 2,
//   reorderLevel: 4,
//   targetStock: 10,
//   supplier: {
//     name: "  Power Supply Co. ",
//   },
// };

// const originalProductBefore = JSON.stringify(originalProduct);

// console.log(createRestockReport([originalProduct]));

// console.log(
//   "Original unchanged:",
//   JSON.stringify(originalProduct) === originalProductBefore,
// );

// // Expected:
// // {
// //   productCount: 1,
// //   totalUnitsNeeded: 8,
// //   products: [
// //     {
// //       productId: "PROD-109",
// //       name: "Portable Charger",
// //       sku: "PC-109",
// //       supplierName: "Power Supply Co.",
// //       currentStock: 2,
// //       unitsNeeded: 8
// //     }
// //   ]
// // }
// //
// // Original unchanged: true

// ------

// Business rules:
// 1. Include only appointments whose cleaned status is "confirmed".
// 2. Ignore appointments whose patient name is missing, null, or whitespace-only.
// 3. Clean the patient name and convert it to uppercase.
// 4. Clean the service name.
// 5. If the service is missing, null, or whitespace-only, use "General".
// 6. Return a new array of strings in this format:
//    "APPOINTMENT_ID | PATIENT NAME | Service"
// 7. Do not modify the original appointments.

function createAppointmentReminderLabels(appointments) {
  const reminderLabels = [];
  for (const appointment of appointments) {
    const patientName = appointment?.patient?.name
      ? appointment?.patient?.name.trim().toUpperCase()
      : null;
    let service = "General";
    if (appointment.service) {
      const trimmedService = appointment?.service.trim();
      if (trimmedService !== "") {
        service = trimmedService;
      }
    }

    const id = appointment?.id ? appointment.id : null;
    const status = appointment?.status
      ? appointment?.status.trim().toLowerCase()
      : null;

    if (!patientName) {
      continue;
    }

    if (status === "confirmed") {
      reminderLabels.push(`${id} | ${patientName} | ${service}`);
    }
  }

  return reminderLabels;
}

const appointments = [
  {
    id: "APT-101",
    patient: { name: "  Vikas " },
    service: " Dental Cleaning ",
    status: " CONFIRMED ",
  },
  {
    id: "APT-102",
    patient: { name: "Anjali" },
    service: "Consultation",
    status: "cancelled",
  },
  {
    id: "APT-103",
    patient: { name: "  Ravi Kumar " },
    service: "   ",
    status: "confirmed",
  },
  {
    id: "APT-104",
    patient: { name: "   " },
    service: "Eye Checkup",
    status: "confirmed",
  },
];

console.log("----- Test 1: Confirmed appointments -----");
console.log(createAppointmentReminderLabels(appointments));
// Expected:
// [
//   "APT-101 | VIKAS | Dental Cleaning",
//   "APT-103 | RAVI KUMAR | General"
// ]

console.log("----- Test 2: Empty appointment list -----");
console.log(createAppointmentReminderLabels([]));
// Expected: []

console.log("----- Test 3: Missing patient -----");
console.log(
  createAppointmentReminderLabels([
    {
      id: "APT-105",
      patient: null,
      service: "Physiotherapy",
      status: "confirmed",
    },
  ]),
);
// Expected: []

console.log("----- Test 4: Missing service -----");
console.log(
  createAppointmentReminderLabels([
    {
      id: "APT-106",
      patient: { name: " Meena " },
      service: null,
      status: "confirmed",
    },
  ]),
);
// Expected:
// ["APT-106 | MEENA | General"]
