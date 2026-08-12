// // // // // console.log("Let's Come on!");

// // // // // const users = [
// // // // //   { id: "USR-101", name: "Asha" },
// // // // //   { id: "USR-102", name: "Ravi" },
// // // // //   { id: "USR-103", name: "Meera" },
// // // // // ];

// // // // // const orders = [
// // // // //   { id: "ORD-501", userId: "USR-102", amount: 1200 },
// // // // //   { id: "ORD-502", userId: "USR-101", amount: 850 },
// // // // //   { id: "ORD-503", userId: "USR-102", amount: 450 },
// // // // // ];

// // // // // const usersWithMissingOrderOwner = [
// // // // //   { id: "USR-101", name: "Asha" },
// // // // //   { id: "USR-102", name: "Ravi" },
// // // // // ];

// // // // // const ordersWithMissingOwner = [
// // // // //   { id: "ORD-601", userId: "USR-101", amount: 500 },
// // // // //   { id: "ORD-602", userId: "USR-999", amount: 900 },
// // // // // ];

// // // // // // BUSINESS RULES:
// // // // // //
// // // // // // 1. Create a lookup using each user's `id` as the key.
// // // // // // 2. Process every order.
// // // // // // 3. For each order, find the user whose `id` matches `order.userId`.
// // // // // // 4. Return a NEW array.
// // // // // // 5. Each returned object must contain:
// // // // // //      orderId
// // // // // //      amount
// // // // // //      customerName
// // // // // // 6. If an order refers to a user that does not exist,
// // // // // //    customerName must be "Unknown".
// // // // // // 7. Do not modify the original users or orders arrays.
// // // // // //
// // // // // // Expected result 1:
// // // // // //
// // // // // // [
// // // // // //   { orderId: "ORD-501", amount: 1200, customerName: "Ravi" },
// // // // // //   { orderId: "ORD-502", amount: 850, customerName: "Asha" },
// // // // // //   { orderId: "ORD-503", amount: 450, customerName: "Ravi" }
// // // // // // ]
// // // // // //
// // // // // // Expected result 2:
// // // // // //
// // // // // // [
// // // // // //   { orderId: "ORD-601", amount: 500, customerName: "Asha" },
// // // // // //   { orderId: "ORD-602", amount: 900, customerName: "Unknown" }
// // // // // // ]
// // // // // //
// // // // // // Expected empty result:
// // // // // // []

// // // // // function createOrderCustomerResponses(users, orders) {
// // // // //   const userLookup = new Map();

// // // // //   for (const user of users) {
// // // // //     userLookup.set(user.id, user);
// // // // //   }

// // // // //   const orderCustomerResponses = [];

// // // // //   for (const order of orders) {
// // // // //     const user = userLookup.get(order.userId);
// // // // //     orderCustomerResponses.push({
// // // // //       orderId: order.id,
// // // // //       amount: order.amount,
// // // // //       customerName: user?.name ?? "Unknown",
// // // // //       customerFound: user !== undefined,
// // // // //     });
// // // // //   }

// // // // //   return orderCustomerResponses;
// // // // // }x

// // // // // const expectedResult1 = [
// // // // //   {
// // // // //     orderId: "ORD-501",
// // // // //     amount: 1200,
// // // // //     customerName: "Ravi",
// // // // //     customerFound: true,
// // // // //   },
// // // // //   {
// // // // //     orderId: "ORD-502",
// // // // //     amount: 850,
// // // // //     customerName: "Asha",
// // // // //     customerFound: true,
// // // // //   },
// // // // //   {
// // // // //     orderId: "ORD-503",
// // // // //     amount: 450,
// // // // //     customerName: "Ravi",
// // // // //     customerFound: true,
// // // // //   },
// // // // // ];

// // // // // const expectedResult2 = [
// // // // //   {
// // // // //     orderId: "ORD-601",
// // // // //     amount: 500,
// // // // //     customerName: "Asha",
// // // // //     customerFound: true,
// // // // //   },
// // // // //   {
// // // // //     orderId: "ORD-602",
// // // // //     amount: 900,
// // // // //     customerName: "Unknown",
// // // // //     customerFound: false,
// // // // //   },
// // // // // ];

// // // // // console.log(
// // // // //   JSON.stringify(createOrderCustomerResponses(users, orders)) ===
// // // // //     JSON.stringify(expectedResult1),
// // // // // );

// // // // // console.log(
// // // // //   JSON.stringify(
// // // // //     createOrderCustomerResponses(
// // // // //       usersWithMissingOrderOwner,
// // // // //       ordersWithMissingOwner,
// // // // //     ),
// // // // //   ) === JSON.stringify(expectedResult2),
// // // // // );

// // // // // console.log(
// // // // //   JSON.stringify(createOrderCustomerResponses([], [])) === JSON.stringify([]),
// // // // // );

// // // // // const products = [
// // // // //   { id: "PRD-101", name: "Keyboard", price: 2500 },
// // // // //   { id: "PRD-102", name: "Mouse", price: 1200 },
// // // // //   { id: "PRD-103", name: "Monitor", price: 18000 },
// // // // //   { id: "PRD-104", name: "Webcam", price: 4500 },
// // // // // ];

// // // // // const requestedProductIds1 = ["PRD-101", "PRD-999", "PRD-103", "PRD-888"];

// // // // // const requestedProductIds2 = ["PRD-104", "PRD-102"];

// // // // // const requestedProductIds3 = ["PRD-777"];

// // // // // BUSINESS RULES:
// // // // //
// // // // // 1. Build a lookup containing the available products.
// // // // // 2. Check every requested product ID against the lookup.
// // // // // 3. Return a NEW array containing only IDs that do not exist
// // // // //    in the product catalog.
// // // // // 4. Preserve the order in which the missing IDs appeared.
// // // // // 5. Do not modify either input array.
// // // // // 6. If every requested product exists, return [].
// // // // // 7. If requestedProductIds is empty, return [].
// // // // //
// // // // // Expected result 1:
// // // // // ["PRD-999", "PRD-888"]
// // // // //
// // // // // Expected result 2:
// // // // // []
// // // // //
// // // // // Expected result 3:
// // // // // ["PRD-777"]
// // // // //
// // // // // Expected empty result:
// // // // // []

// // // // // function findMissingProductIds(products, requestedProductIds) {
// // // // //   const productsLookUp = new Map();

// // // // //   for (const product of products) {
// // // // //     productsLookUp.set(product.id, "");
// // // // //   }

// // // // //   const missingIds = [];

// // // // //   for (const productId of requestedProductIds) {
// // // // //     if (!productsLookUp.has(productId)) {
// // // // //       missingIds.push(productId);
// // // // //     }
// // // // //   }

// // // // //   return missingIds;
// // // // // }

// // // // // console.log(
// // // // //   JSON.stringify(findMissingProductIds(products, requestedProductIds1)) ===
// // // // //     JSON.stringify(["PRD-999", "PRD-888"]),
// // // // // );

// // // // // console.log(
// // // // //   JSON.stringify(findMissingProductIds(products, requestedProductIds2)) ===
// // // // //     JSON.stringify([]),
// // // // // );

// // // // // console.log(
// // // // //   JSON.stringify(findMissingProductIds(products, requestedProductIds3)) ===
// // // // //     JSON.stringify(["PRD-777"]),
// // // // // );

// // // // // console.log(
// // // // //   JSON.stringify(findMissingProductIds(products, [])) === JSON.stringify([]),
// // // // // );

// // // // console.log("---");

// // // // const usersWithEmails1 = [
// // // //   { id: "USR-101", email: "asha@example.com" },
// // // //   { id: "USR-102", email: "ravi@example.com" },
// // // //   { id: "USR-103", email: "asha@example.com" },
// // // //   { id: "USR-104", email: "meera@example.com" },
// // // // ];

// // // // const usersWithEmails2 = [
// // // //   { id: "USR-201", email: "john@example.com" },
// // // //   { id: "USR-202", email: "priya@example.com" },
// // // //   { id: "USR-203", email: "sara@example.com" },
// // // // ];

// // // // const usersWithEmails3 = [
// // // //   { id: "USR-301", email: "VIKAS@EXAMPLE.COM" },
// // // //   { id: "USR-302", email: "asha@example.com" },
// // // //   { id: "USR-303", email: "vikas@example.com" },
// // // // ];

// // // // // BUSINESS RULES:
// // // // //
// // // // // 1. Process the users in their original order.
// // // // // 2. Treat emails case-insensitively.
// // // // //    Example:
// // // // //    "VIKAS@EXAMPLE.COM" and "vikas@example.com"
// // // // //    are considered the same email.
// // // // //
// // // // // 3. Use a lookup to remember emails that have already appeared.
// // // // //
// // // // // 4. When an email appears again, add the normalized email
// // // // //    to the returned array.
// // // // //
// // // // // 5. Normalize emails using lowercase.
// // // // //
// // // // // 6. For today's exercise, an email will appear at most twice,
// // // // //    so the returned array does not need additional duplicate removal.
// // // // //
// // // // // 7. Do not modify the input array or user objects.
// // // // //
// // // // // 8. If there are no duplicate emails, return [].
// // // // //
// // // // // 9. If users is empty, return [].
// // // // //
// // // // // Expected result 1:
// // // // // ["asha@example.com"]
// // // // //
// // // // // Expected result 2:
// // // // // []
// // // // //
// // // // // Expected result 3:
// // // // // ["vikas@example.com"]
// // // // //
// // // // // Expected empty result:
// // // // // []

// // // // function findDuplicateEmails(users) {
// // // //   const userLookUp = new Map();
// // // //   const duplicateEmails = [];

// // // //   for (const user of users) {
// // // //     const normalizedEmail = user?.email?.trim().toLowerCase();
// // // //     if (!userLookUp.has(normalizedEmail)) {
// // // //       userLookUp.set(normalizedEmail, true);
// // // //     } else {
// // // //       duplicateEmails.push(normalizedEmail);
// // // //     }
// // // //   }

// // // //   return duplicateEmails;
// // // // }

// // // // console.log(
// // // //   JSON.stringify(findDuplicateEmails(usersWithEmails1)) ===
// // // //     JSON.stringify(["asha@example.com"]),
// // // // );

// // // // console.log(
// // // //   JSON.stringify(findDuplicateEmails(usersWithEmails2)) === JSON.stringify([]),
// // // // );

// // // // console.log(
// // // //   JSON.stringify(findDuplicateEmails(usersWithEmails3)) ===
// // // //     JSON.stringify(["vikas@example.com"]),
// // // // );

// // // // console.log(JSON.stringify(findDuplicateEmails([])) === JSON.stringify([]));

// // // console.log("---");

// // // const employees = [
// // //   {
// // //     id: "EMP-101",
// // //     name: "Asha",
// // //     department: "Engineering",
// // //   },
// // //   {
// // //     id: "EMP-102",
// // //     name: "Ravi",
// // //     department: "Finance",
// // //   },
// // //   {
// // //     id: "EMP-103",
// // //     name: "Meera",
// // //     department: "Engineering",
// // //   },
// // // ];

// // // const singleEmployee = [
// // //   {
// // //     id: "EMP-201",
// // //     name: "John",
// // //     department: "Support",
// // //   },
// // // ];

// // // // BUSINESS RULES:
// // // //
// // // // 1. Create and return a NEW plain JavaScript object.
// // // //
// // // // 2. Each employee's `id` must become a key in the returned object.
// // // //
// // // // 3. Store the entire original employee object as the value.
// // // //
// // // // 4. Do NOT use Map for this exercise.
// // // //
// // // // 5. Do not modify the employees array or employee objects.
// // // //
// // // // 6. If employees is empty, return {}.
// // // //
// // // // Expected result 1:
// // // //
// // // // {
// // // //   "EMP-101": {
// // // //     id: "EMP-101",
// // // //     name: "Asha",
// // // //     department: "Engineering"
// // // //   },
// // // //   "EMP-102": {
// // // //     id: "EMP-102",
// // // //     name: "Ravi",
// // // //     department: "Finance"
// // // //   },
// // // //   "EMP-103": {
// // // //     id: "EMP-103",
// // // //     name: "Meera",
// // // //     department: "Engineering"
// // // //   }
// // // // }
// // // //
// // // // Expected result 2:
// // // //
// // // // {
// // // //   "EMP-201": {
// // // //     id: "EMP-201",
// // // //     name: "John",
// // // //     department: "Support"
// // // //   }
// // // // }
// // // //
// // // // Expected empty result:
// // // // {}

// // // function createEmployeeLookupObject(employees) {
// // //   const employeeLookUp = {};

// // //   for (const employee of employees) {
// // //     employeeLookUp[employee.id] = employee;
// // //   }

// // //   return employeeLookUp;
// // // }

// // // const expectedEmployeeLookup1 = {
// // //   "EMP-101": {
// // //     id: "EMP-101",
// // //     name: "Asha",
// // //     department: "Engineering",
// // //   },
// // //   "EMP-102": {
// // //     id: "EMP-102",
// // //     name: "Ravi",
// // //     department: "Finance",
// // //   },
// // //   "EMP-103": {
// // //     id: "EMP-103",
// // //     name: "Meera",
// // //     department: "Engineering",
// // //   },
// // // };

// // // const expectedEmployeeLookup2 = {
// // //   "EMP-201": {
// // //     id: "EMP-201",
// // //     name: "John",
// // //     department: "Support",
// // //   },
// // // };

// // // console.log(
// // //   JSON.stringify(createEmployeeLookupObject(employees)) ===
// // //     JSON.stringify(expectedEmployeeLookup1),
// // // );

// // // console.log(
// // //   JSON.stringify(createEmployeeLookupObject(singleEmployee)) ===
// // //     JSON.stringify(expectedEmployeeLookup2),
// // // );

// // // console.log(
// // //   JSON.stringify(createEmployeeLookupObject([])) === JSON.stringify({}),
// // // );

// // console.log("---");
// // const customers = [
// //   {
// //     id: "CUS-101",
// //     name: "Asha",
// //     tier: "GOLD",
// //   },
// //   {
// //     id: "CUS-102",
// //     name: "Ravi",
// //     tier: "SILVER",
// //   },
// //   {
// //     id: "CUS-103",
// //     name: "Meera",
// //     tier: "GOLD",
// //   },
// //   {
// //     id: "CUS-104",
// //     name: "John",
// //     tier: "BRONZE",
// //   },
// // ];

// // const supportTickets1 = [
// //   {
// //     id: "TKT-501",
// //     customerId: "CUS-103",
// //     subject: "Payment failed",
// //   },
// //   {
// //     id: "TKT-502",
// //     customerId: "CUS-101",
// //     subject: "Order not received",
// //   },
// //   {
// //     id: "TKT-503",
// //     customerId: "CUS-103",
// //     subject: "Refund request",
// //   },
// //   {
// //     id: "TKT-504",
// //     customerId: "CUS-999",
// //     subject: "Account problem",
// //   },
// // ];

// // const supportTickets2 = [
// //   {
// //     id: "TKT-601",
// //     customerId: "CUS-104",
// //     subject: "Update address",
// //   },
// //   {
// //     id: "TKT-602",
// //     customerId: "CUS-102",
// //     subject: "Invoice request",
// //   },
// // ];

// // // THIS VERSION WORKS,
// // // but it repeatedly searches the customers array.

// // function createTicketResponsesWithRepeatedSearch(customers, tickets) {
// //   const responses = [];

// //   for (const ticket of tickets) {
// //     const customer = customers.find(
// //       (customer) => customer.id === ticket.customerId,
// //     );

// //     responses.push({
// //       ticketId: ticket.id,
// //       subject: ticket.subject,
// //       customerName: customer?.name ?? "Unknown",
// //       customerTier: customer?.tier ?? "Unknown",
// //     });
// //   }

// //   return responses;
// // }

// // // YOUR TASK:
// // //
// // // Rewrite the same behaviour using a lookup table.
// // //
// // // BUSINESS RULES:
// // //
// // // 1. Do NOT use find() inside your solution.
// // //
// // // 2. Build the customer lookup once before processing the tickets.
// // //
// // // 3. Use customer.id as the lookup key.
// // //
// // // 4. Store enough information in the lookup to produce the response.
// // //
// // // 5. Process all support tickets.
// // //
// // // 6. Return a NEW array containing:
// // //
// // //    ticketId
// // //    subject
// // //    customerName
// // //    customerTier
// // //
// // // 7. If customerId does not exist:
// // //
// // //    customerName: "Unknown"
// // //    customerTier: "Unknown"
// // //
// // // 8. Preserve the original ticket order.
// // //
// // // 9. Do not modify customers, tickets, or their objects.
// // //
// // // 10. Empty tickets must return [].
// // //
// // // Expected result 1:
// // //
// // // [
// // //   {
// // //     ticketId: "TKT-501",
// // //     subject: "Payment failed",
// // //     customerName: "Meera",
// // //     customerTier: "GOLD"
// // //   },
// // //   {
// // //     ticketId: "TKT-502",
// // //     subject: "Order not received",
// // //     customerName: "Asha",
// // //     customerTier: "GOLD"
// // //   },
// // //   {
// // //     ticketId: "TKT-503",
// // //     subject: "Refund request",
// // //     customerName: "Meera",
// // //     customerTier: "GOLD"
// // //   },
// // //   {
// // //     ticketId: "TKT-504",
// // //     subject: "Account problem",
// // //     customerName: "Unknown",
// // //     customerTier: "Unknown"
// // //   }
// // // ]
// // //
// // // Expected result 2:
// // //
// // // [
// // //   {
// // //     ticketId: "TKT-601",
// // //     subject: "Update address",
// // //     customerName: "John",
// // //     customerTier: "BRONZE"
// // //   },
// // //   {
// // //     ticketId: "TKT-602",
// // //     subject: "Invoice request",
// // //     customerName: "Ravi",
// // //     customerTier: "SILVER"
// // //   }
// // // ]
// // //
// // // Expected empty result:
// // // []

// // function createTicketResponsesWithLookup(customers, tickets) {
// //   const customersLookUp = new Map();
// //   const responses = [];

// //   for (const customer of customers) {
// //     customersLookUp.set(customer.id, customer);
// //   }

// //   for (const ticket of tickets) {
// //     const customer = customersLookUp.get(ticket.customerId);

// //     responses.push({
// //       ticketId: ticket.id,
// //       subject: ticket.subject,
// //       customerName: customer?.name ?? "Unknown",
// //       customerTier: customer?.tier ?? "Unknown",
// //     });
// //   }

// //   return responses;
// // }

// // const expectedTicketResponses1 = [
// //   {
// //     ticketId: "TKT-501",
// //     subject: "Payment failed",
// //     customerName: "Meera",
// //     customerTier: "GOLD",
// //   },
// //   {
// //     ticketId: "TKT-502",
// //     subject: "Order not received",
// //     customerName: "Asha",
// //     customerTier: "GOLD",
// //   },
// //   {
// //     ticketId: "TKT-503",
// //     subject: "Refund request",
// //     customerName: "Meera",
// //     customerTier: "GOLD",
// //   },
// //   {
// //     ticketId: "TKT-504",
// //     subject: "Account problem",
// //     customerName: "Unknown",
// //     customerTier: "Unknown",
// //   },
// // ];

// // const expectedTicketResponses2 = [
// //   {
// //     ticketId: "TKT-601",
// //     subject: "Update address",
// //     customerName: "John",
// //     customerTier: "BRONZE",
// //   },
// //   {
// //     ticketId: "TKT-602",
// //     subject: "Invoice request",
// //     customerName: "Ravi",
// //     customerTier: "SILVER",
// //   },
// // ];

// // console.log(
// //   JSON.stringify(
// //     createTicketResponsesWithLookup(customers, supportTickets1),
// //   ) === JSON.stringify(expectedTicketResponses1),
// // );

// // console.log(
// //   JSON.stringify(
// //     createTicketResponsesWithLookup(customers, supportTickets2),
// //   ) === JSON.stringify(expectedTicketResponses2),
// // );

// // console.log(
// //   JSON.stringify(createTicketResponsesWithLookup(customers, [])) ===
// //     JSON.stringify([]),
// // );

// console.log("--- Lookup Performance Experiment ---");

// // --------------------------------------------------
// // LARGE TEST DATA
// // 50 customers
// // --------------------------------------------------

// const largeCustomers = Array.from({ length: 50 }, (_, index) => {
//   const customerNumber = String(index + 1).padStart(3, "0");

//   return {
//     id: `CUS-${customerNumber}`,
//     name: `Customer ${index + 1}`,
//     tier: index % 3 === 0 ? "GOLD" : index % 3 === 1 ? "SILVER" : "BRONZE",
//   };
// });

// // --------------------------------------------------
// // 40 support tickets
// //
// // Multiplication + remainder (%) intentionally spreads
// // the tickets across different customers instead of
// // always selecting customers near the beginning.
// //
// // Every 10th ticket uses a missing customer ID.
// // --------------------------------------------------

// const largeSupportTickets = Array.from({ length: 40 }, (_, index) => {
//   const ticketNumber = String(index + 1).padStart(3, "0");

//   const customerNumber = ((index * 13) % 50) + 1;

//   const customerId =
//     (index + 1) % 10 === 0
//       ? `CUS-MISSING-${index + 1}`
//       : `CUS-${String(customerNumber).padStart(3, "0")}`;

//   return {
//     id: `TKT-${ticketNumber}`,
//     customerId,
//     subject: `Support issue ${index + 1}`,
//   };
// });

// console.log("Customers:", largeCustomers.length);
// console.log("Tickets:", largeSupportTickets.length);

// // --------------------------------------------------
// // METHOD 1
// // REPEATED ARRAY SEARCH
// //
// // For every ticket, .find() searches the customers
// // array again.
// // --------------------------------------------------

// function createTicketResponsesWithRepeatedSearch(customers, tickets) {
//   const responses = [];

//   for (const ticket of tickets) {
//     const customer = customers.find(
//       (customer) => customer.id === ticket.customerId,
//     );

//     responses.push({
//       ticketId: ticket.id,
//       subject: ticket.subject,
//       customerName: customer?.name ?? "Unknown",
//       customerTier: customer?.tier ?? "Unknown",
//     });
//   }

//   return responses;
// }

// // --------------------------------------------------
// // METHOD 2
// // LOOKUP TABLE
// //
// // Build the customer lookup once.
// // Then retrieve customers using Map.get().
// // --------------------------------------------------

// function createTicketResponsesWithLookup(customers, tickets) {
//   const customersLookUp = new Map();
//   const responses = [];

//   for (const customer of customers) {
//     customersLookUp.set(customer.id, customer);
//   }

//   for (const ticket of tickets) {
//     const customer = customersLookUp.get(ticket.customerId);

//     responses.push({
//       ticketId: ticket.id,
//       subject: ticket.subject,
//       customerName: customer?.name ?? "Unknown",
//       customerTier: customer?.tier ?? "Unknown",
//     });
//   }

//   return responses;
// }

// // --------------------------------------------------
// // VERIFY BOTH FUNCTIONS RETURN THE SAME RESULT
// // --------------------------------------------------

// const repeatedSearchResult = createTicketResponsesWithRepeatedSearch(
//   largeCustomers,
//   largeSupportTickets,
// );

// const lookupResult = createTicketResponsesWithLookup(
//   largeCustomers,
//   largeSupportTickets,
// );

// console.log(
//   "Same result:",
//   JSON.stringify(repeatedSearchResult) === JSON.stringify(lookupResult),
// );

// // --------------------------------------------------
// // WARM-UP
// //
// // Run both functions a few times before measuring.
// // This helps Node.js prepare/optimize the code so the
// // benchmark is a little less random.
// // --------------------------------------------------

// const warmUpRuns = 1000;

// for (let i = 0; i < warmUpRuns; i++) {
//   createTicketResponsesWithRepeatedSearch(largeCustomers, largeSupportTickets);

//   createTicketResponsesWithLookup(largeCustomers, largeSupportTickets);
// }

// // --------------------------------------------------
// // BENCHMARK
// //
// // One execution is too fast to compare meaningfully,
// // so execute each method many times.
// // --------------------------------------------------

// const benchmarkRuns = 20000;

// // --------------------
// // METHOD 1 TIMING
// // --------------------

// const repeatedSearchStart = performance.now();

// for (let i = 0; i < benchmarkRuns; i++) {
//   createTicketResponsesWithRepeatedSearch(largeCustomers, largeSupportTickets);
// }

// const repeatedSearchEnd = performance.now();

// const repeatedSearchTime = repeatedSearchEnd - repeatedSearchStart;

// // --------------------
// // METHOD 2 TIMING
// // --------------------

// const lookupStart = performance.now();

// for (let i = 0; i < benchmarkRuns; i++) {
//   createTicketResponsesWithLookup(largeCustomers, largeSupportTickets);
// }

// const lookupEnd = performance.now();

// const lookupTime = lookupEnd - lookupStart;

// // --------------------------------------------------
// // RESULTS
// // --------------------------------------------------

// console.log("--- Performance Results ---");

// console.log(`Repeated .find() method: ${repeatedSearchTime.toFixed(2)} ms`);

// console.log(`Lookup Map method: ${lookupTime.toFixed(2)} ms`);

// const timeDifference = repeatedSearchTime - lookupTime;

// console.log(`Time difference: ${timeDifference.toFixed(2)} ms`);

// const speedRatio = repeatedSearchTime / lookupTime;

// console.log(`Repeated-search / lookup ratio: ${speedRatio.toFixed(2)}x`);

console.log("--- Independent Challenge ---");

const inventoryProducts = [
  {
    id: "PRD-101",
    name: "Keyboard",
    price: 2500,
    category: "ACCESSORIES",
  },
  {
    id: "PRD-102",
    name: "Mouse",
    price: 1200,
    category: "ACCESSORIES",
  },
  {
    id: "PRD-103",
    name: "Monitor",
    price: 18000,
    category: "DISPLAY",
  },
  {
    id: "PRD-104",
    name: "Webcam",
    price: 4500,
    category: "ACCESSORIES",
  },
];

const shipmentItems1 = [
  {
    shipmentId: "SHP-501",
    productId: "PRD-103",
    quantity: 2,
  },
  {
    shipmentId: "SHP-502",
    productId: "PRD-101",
    quantity: 3,
  },
  {
    shipmentId: "SHP-503",
    productId: "PRD-999",
    quantity: 5,
  },
];

const shipmentItems2 = [
  {
    shipmentId: "SHP-601",
    productId: "PRD-102",
    quantity: 4,
  },
  {
    shipmentId: "SHP-602",
    productId: "PRD-104",
    quantity: 1,
  },
];

const shipmentItems3 = [
  {
    shipmentId: "SHP-701",
    productId: "PRD-888",
    quantity: 2,
  },
];

// BUSINESS RULES:
//
// 1. Do not use find() inside the shipment-processing logic.
//
// 2. Each returned object must contain:
//
//    shipmentId
//    productId
//    productName
//    category
//    quantity
//    shipmentValue
//    productFound
//
// 3. When the product exists:
//
//    productName = product.name
//    category = product.category
//    shipmentValue = product.price * quantity
//    productFound = true
//
// 4. When the product does NOT exist:
//
//    productName = "Unknown"
//    category = "Unknown"
//    shipmentValue = 0
//    productFound = false
//
// 5. Preserve the original shipment order.
//
// 6. Return a NEW array.
//
// 7. Do not modify either input array or their objects.
//
// 8. Empty shipmentItems must return [].
//
// Expected result 1:
//
// [
//   {
//     shipmentId: "SHP-501",
//     productId: "PRD-103",
//     productName: "Monitor",
//     category: "DISPLAY",
//     quantity: 2,
//     shipmentValue: 36000,
//     productFound: true
//   },
//   {
//     shipmentId: "SHP-502",
//     productId: "PRD-101",
//     productName: "Keyboard",
//     category: "ACCESSORIES",
//     quantity: 3,
//     shipmentValue: 7500,
//     productFound: true
//   },
//   {
//     shipmentId: "SHP-503",
//     productId: "PRD-999",
//     productName: "Unknown",
//     category: "Unknown",
//     quantity: 5,
//     shipmentValue: 0,
//     productFound: false
//   }
// ]
//
// Expected result 2:
//
// [
//   {
//     shipmentId: "SHP-601",
//     productId: "PRD-102",
//     productName: "Mouse",
//     category: "ACCESSORIES",
//     quantity: 4,
//     shipmentValue: 4800,
//     productFound: true
//   },
//   {
//     shipmentId: "SHP-602",
//     productId: "PRD-104",
//     productName: "Webcam",
//     category: "ACCESSORIES",
//     quantity: 1,
//     shipmentValue: 4500,
//     productFound: true
//   }
// ]
//
// Expected result 3:
//
// [
//   {
//     shipmentId: "SHP-701",
//     productId: "PRD-888",
//     productName: "Unknown",
//     category: "Unknown",
//     quantity: 2,
//     shipmentValue: 0,
//     productFound: false
//   }
// ]
//
// Expected empty result:
// []

function createShipmentReport(products, shipmentItems) {
  const productsLookUp = {};

  for (const product of products) {
    productsLookUp[product.id] = product;
  }

  const shipmentReport = [];
  for (const shipmentItem of shipmentItems) {
    const product = productsLookUp[shipmentItem.productId];

    shipmentReport.push({
      shipmentId: shipmentItem.shipmentId,
      productId: shipmentItem.productId,
      productName: product?.name ?? "Unknown",
      category: product?.category ?? "Unknown",
      quantity: shipmentItem.quantity,
      shipmentValue:
        product !== undefined ? product?.price * shipmentItem.quantity : 0,
      productFound: product !== undefined,
    });
  }

  return shipmentReport;
}

const expectedShipmentReport1 = [
  {
    shipmentId: "SHP-501",
    productId: "PRD-103",
    productName: "Monitor",
    category: "DISPLAY",
    quantity: 2,
    shipmentValue: 36000,
    productFound: true,
  },
  {
    shipmentId: "SHP-502",
    productId: "PRD-101",
    productName: "Keyboard",
    category: "ACCESSORIES",
    quantity: 3,
    shipmentValue: 7500,
    productFound: true,
  },
  {
    shipmentId: "SHP-503",
    productId: "PRD-999",
    productName: "Unknown",
    category: "Unknown",
    quantity: 5,
    shipmentValue: 0,
    productFound: false,
  },
];

const expectedShipmentReport2 = [
  {
    shipmentId: "SHP-601",
    productId: "PRD-102",
    productName: "Mouse",
    category: "ACCESSORIES",
    quantity: 4,
    shipmentValue: 4800,
    productFound: true,
  },
  {
    shipmentId: "SHP-602",
    productId: "PRD-104",
    productName: "Webcam",
    category: "ACCESSORIES",
    quantity: 1,
    shipmentValue: 4500,
    productFound: true,
  },
];

const expectedShipmentReport3 = [
  {
    shipmentId: "SHP-701",
    productId: "PRD-888",
    productName: "Unknown",
    category: "Unknown",
    quantity: 2,
    shipmentValue: 0,
    productFound: false,
  },
];

console.log(
  JSON.stringify(createShipmentReport(inventoryProducts, shipmentItems1)) ===
    JSON.stringify(expectedShipmentReport1),
);

console.log(
  JSON.stringify(createShipmentReport(inventoryProducts, shipmentItems2)) ===
    JSON.stringify(expectedShipmentReport2),
);

console.log(
  JSON.stringify(createShipmentReport(inventoryProducts, shipmentItems3)) ===
    JSON.stringify(expectedShipmentReport3),
);

console.log(
  JSON.stringify(createShipmentReport(inventoryProducts, [])) ===
    JSON.stringify([]),
);
