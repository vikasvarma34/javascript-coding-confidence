// // // // const printLog = (value) => {
// // // //   console.log(value);
// // // // };

// // // // printLog("Let's Come on!");

// // // // const employees = [
// // // //   { id: "EMP-101", name: "Asha" },
// // // //   { id: "EMP-102", name: "Rahul" },
// // // //   { id: "EMP-103", name: "Meera" },
// // // // ];

// // // // // Business rules:
// // // // //
// // // // // 1. Create a new Map.
// // // // // 2. Each employee ID must become the Map key.
// // // // // 3. Each employee name must become the Map value.
// // // // // 4. Do not modify the original employees array.
// // // // // 5. Return the completed Map.
// // // // //
// // // // // Expected Map:
// // // // //
// // // // // EMP-101 → Asha
// // // // // EMP-102 → Rahul
// // // // // EMP-103 → Meera

// // // // function createEmployeeLookup(employees) {
// // // //   const employeeMap = new Map();

// // // //   for (const employee of employees) {
// // // //     employeeMap.set(employee?.id, employee?.name);
// // // //   }

// // // //   return employeeMap;
// // // // }

// // // // const employeeLookup = createEmployeeLookup(employees);

// // // // // Expected: "Asha"
// // // // console.log("Test 1:", employeeLookup.get("EMP-101") === "Asha");

// // // // // Expected: "Meera"
// // // // console.log("Test 2:", employeeLookup.get("EMP-103") === "Meera");

// // // // // Edge case: unknown ID should not exist
// // // // console.log("Test 3:", employeeLookup.has("EMP-999") === false);

// // // // // Original array should remain unchanged
// // // // console.log("Test 4:", employees.length === 3 && employees[0].name === "Asha");

// // // const orders = [
// // //   {
// // //     id: "ORD-101",
// // //     customer: "Asha",
// // //     status: "PENDING",
// // //     total: 1200,
// // //   },
// // //   {
// // //     id: "ORD-102",
// // //     customer: "Rahul",
// // //     status: "COMPLETED",
// // //     total: 850,
// // //   },
// // //   {
// // //     id: "ORD-103",
// // //     customer: "Meera",
// // //     status: "CANCELLED",
// // //     total: 450,
// // //   },
// // // ];

// // // // Business rules:
// // // //
// // // // - Create and return a Map containing all orders.
// // // //
// // // // - Each order's `id` must be the Map key.
// // // //
// // // // - The value must be the ENTIRE original order object,
// // // //   not only the customer, status, or total.
// // // //
// // // // - For example, looking up "ORD-102" should give access to:
// // // //   {
// // // //     id: "ORD-102",
// // // //     customer: "Rahul",
// // // //     status: "COMPLETED",
// // // //     total: 850
// // // //   }
// // // //
// // // // - Do not create replacement order objects.
// // // //   Store the existing order objects from the input array.
// // // //
// // // // - Do not modify the input array or any order object.
// // // //
// // // // - If an order ID does not exist, normal Map behaviour is enough.
// // // //   You do not need custom error handling.
// // // //
// // // // Expected behaviour:
// // // //
// // // // lookup.get("ORD-101").customer  → "Asha"
// // // // lookup.get("ORD-102").total     → 850
// // // // lookup.get("ORD-103").status    → "CANCELLED"
// // // // lookup.has("ORD-999")           → false

// // // function createOrderLookup(orders) {
// // //   const orderLookupMap = new Map();
// // //   for (const order of orders) {
// // //     orderLookupMap.set(order?.id, order);
// // //   }

// // //   return orderLookupMap;
// // // }

// // // const orderLookup = createOrderLookup(orders);

// // // console.log("Order Test 1:", orderLookup.get("ORD-101")?.customer === "Asha");

// // // console.log("Order Test 2:", orderLookup.get("ORD-102")?.total === 850);

// // // console.log(
// // //   "Order Test 3:",
// // //   orderLookup.get("ORD-103")?.status === "CANCELLED",
// // // );

// // // console.log("Order Test 4:", orderLookup.has("ORD-999") === false);

// // // // Confirm that the Map contains the original object,
// // // // rather than a newly created replacement object.
// // // console.log("Order Test 5:", orderLookup.get("ORD-101") === orders[0]);

// // const supportTickets = [
// //   { id: "TKT-101", category: "PAYMENT" },
// //   { id: "TKT-102", category: "LOGIN" },
// //   { id: "TKT-103", category: "PAYMENT" },
// //   { id: "TKT-104", category: "ACCOUNT" },
// //   { id: "TKT-105", category: "PAYMENT" },
// //   { id: "TKT-106", category: "LOGIN" },
// // ];

// // // Business rules:
// // //
// // // Create a function that counts how many support tickets belong
// // // to each category.
// // //
// // // The function must return a Map.
// // //
// // // Each unique ticket category must become a key in the Map.
// // //
// // // The value associated with each category must be the number
// // // of tickets belonging to that category.
// // //
// // // Categories should be counted exactly as they appear in the data.
// // // No lowercase/uppercase normalization is required today.
// // //
// // // When a category appears for the first time, its count should
// // // effectively begin from zero and then become one.
// // //
// // // When the same category appears again, retrieve its existing
// // // count, increase it by one, and store the updated count.
// // //
// // // Do not hard-code category names such as PAYMENT, LOGIN, or ACCOUNT.
// // // The function must work with any category that appears in the input.
// // //
// // // Do not modify the input array or any ticket object.
// // //
// // // If the input array is empty, return an empty Map.
// // //
// // // Expected counts for the supplied data:
// // //
// // // PAYMENT → 3
// // // LOGIN   → 2
// // // ACCOUNT → 1
// // //
// // // The returned Map should contain exactly three unique keys.

// // function countTicketsByCategory(tickets) {
// //   const countMap = new Map();

// //   for (const ticket of tickets) {
// //     const count = countMap.get(ticket.category) ?? 0;
// //     countMap.set(ticket.category, count + 1);
// //   }

// //   return countMap;
// // }

// // const ticketCounts = countTicketsByCategory(supportTickets);

// // console.log("Ticket Test 1:", ticketCounts.get("PAYMENT") === 3);

// // console.log("Ticket Test 2:", ticketCounts.get("LOGIN") === 2);

// // console.log("Ticket Test 3:", ticketCounts.get("ACCOUNT") === 1);

// // console.log("Ticket Test 4:", ticketCounts.size === 3);

// // const emptyTicketCounts = countTicketsByCategory([]);

// // console.log(
// //   "Ticket Test 5:",
// //   emptyTicketCounts instanceof Map && emptyTicketCounts.size === 0,
// // );

// // console.log(
// //   "Ticket Test 6:",
// //   supportTickets.length === 6 && supportTickets[0].category === "PAYMENT",
// // );

// const customerOrders = [
//   {
//     id: "ORD-201",
//     customerId: "CUS-101",
//     total: 500,
//   },
//   {
//     id: "ORD-202",
//     customerId: "CUS-102",
//     total: 900,
//   },
//   {
//     id: "ORD-203",
//     customerId: "CUS-101",
//     total: 750,
//   },
//   {
//     id: "ORD-204",
//     customerId: "CUS-103",
//     total: 300,
//   },
//   {
//     id: "ORD-205",
//     customerId: "CUS-102",
//     total: 1100,
//   },
// ];

// // Business rules:
// //
// // Create a function that groups orders according to customerId.
// //
// // Return a Map.
// //
// // Each unique customerId must become one Map key.
// //
// // The value for each customerId must be an array containing all
// // order objects belonging to that customer.
// //
// // Store the original order objects in those arrays.
// // Do not create replacement order objects.
// //
// // Preserve the order in which the orders appeared in the input.
// //
// // Do not hard-code customer IDs.
// //
// // A customer appearing for the first time needs a new array.
// //
// // If another order for the same customer appears later, add that
// // order to the customer's existing array instead of replacing it.
// //
// // Do not modify the customerOrders array itself or modify any
// // properties of the order objects.
// //
// // An empty input array must return an empty Map.
// //
// // Expected grouping:
// //
// // CUS-101 → ORD-201, ORD-203
// // CUS-102 → ORD-202, ORD-205
// // CUS-103 → ORD-204

// function groupOrdersByCustomer(orders) {
//   const groupingMap = new Map();

//   for (const order of orders) {
//     const existingOrders = groupingMap.get(order.customerId) ?? [];
//     existingOrders.push(order);
//     groupingMap.set(order.customerId, existingOrders);
//   }

//   return groupingMap;
// }

// const groupedOrders = groupOrdersByCustomer(customerOrders);

// console.log("Grouping Test 1:", groupedOrders.get("CUS-101")?.length === 2);

// console.log("Grouping Test 2:", groupedOrders.get("CUS-102")?.length === 2);

// console.log("Grouping Test 3:", groupedOrders.get("CUS-103")?.length === 1);

// console.log(
//   "Grouping Test 4:",
//   groupedOrders.get("CUS-101")?.[0]?.id === "ORD-201" &&
//     groupedOrders.get("CUS-101")?.[1]?.id === "ORD-203",
// );

// console.log(
//   "Grouping Test 5:",
//   groupedOrders.get("CUS-102")?.[0] === customerOrders[1] &&
//     groupedOrders.get("CUS-102")?.[1] === customerOrders[4],
// );

// const emptyGroupedOrders = groupOrdersByCustomer([]);

// console.log(
//   "Grouping Test 6:",
//   emptyGroupedOrders instanceof Map && emptyGroupedOrders.size === 0,
// );

// console.log(
//   "Grouping Test 7:",
//   customerOrders.length === 5 && customerOrders[0].id === "ORD-201",
// );

const inventoryMovements = [
  {
    productId: "PROD-101",
    productName: "Keyboard",
    quantity: 3,
  },
  {
    productId: "PROD-102",
    productName: "Mouse",
    quantity: 5,
  },
  {
    productId: "PROD-101",
    productName: "Keyboard",
    quantity: 4,
  },
  {
    productId: "PROD-103",
    productName: "Monitor",
    quantity: 2,
  },
  {
    productId: "PROD-102",
    productName: "Mouse",
    quantity: 1,
  },
];

// Business rules:
//
// Build a product inventory summary using a Map.
//
// Each unique productId must become one key in the returned Map.
//
// The value for each product must be a NEW summary object with
// exactly these properties:
//
// {
//   productId,
//   productName,
//   totalQuantity
// }
//
// Multiple inventory movements may exist for the same product.
//
// When the same product appears again, its quantity must be added
// to the existing totalQuantity rather than creating another Map entry.
//
// Example:
//
// PROD-101 appears twice with quantities 3 and 4.
//
// Its final Map value should therefore be:
//
// {
//   productId: "PROD-101",
//   productName: "Keyboard",
//   totalQuantity: 7
// }
//
// Do not hard-code product IDs or product names.
//
// Preserve the product name from the supplied movement data.
//
// Do not modify the inventoryMovements array.
//
// Do not modify any of the original movement objects.
//
// The returned summary objects should be separate objects created
// specifically for the Map.
//
// An empty input array must return an empty Map.
//
// Expected final summaries:
//
// PROD-101 → Keyboard, totalQuantity 7
// PROD-102 → Mouse, totalQuantity 6
// PROD-103 → Monitor, totalQuantity 2

function createInventoryLookup(movements) {
  const inventoryMap = new Map();

  for (const movement of movements) {
    if (inventoryMap.has(movement.productId)) {
      const existingMovement = inventoryMap.get(movement.productId);
      existingMovement.totalQuantity += movement.quantity;
    } else {
      inventoryMap.set(movement.productId, {
        productId: movement.productId,
        productName: movement.productName,
        totalQuantity: movement.quantity,
      });
    }
  }

  return inventoryMap;
}

const inventoryLookup = createInventoryLookup(inventoryMovements);

console.log(
  "Inventory Test 1:",
  inventoryLookup.get("PROD-101")?.totalQuantity === 7,
);

console.log(
  "Inventory Test 2:",
  inventoryLookup.get("PROD-102")?.totalQuantity === 6,
);

console.log(
  "Inventory Test 3:",
  inventoryLookup.get("PROD-103")?.totalQuantity === 2,
);

console.log(
  "Inventory Test 4:",
  inventoryLookup.get("PROD-101")?.productName === "Keyboard",
);

console.log("Inventory Test 5:", inventoryLookup.size === 3);

console.log(
  "Inventory Test 6:",
  inventoryLookup.get("PROD-101") !== inventoryMovements[0],
);

const emptyInventoryLookup = createInventoryLookup([]);

console.log(
  "Inventory Test 7:",
  emptyInventoryLookup instanceof Map && emptyInventoryLookup.size === 0,
);

console.log(
  "Inventory Test 8:",
  inventoryMovements.length === 5 &&
    inventoryMovements[0].quantity === 3 &&
    inventoryMovements[2].quantity === 4,
);
