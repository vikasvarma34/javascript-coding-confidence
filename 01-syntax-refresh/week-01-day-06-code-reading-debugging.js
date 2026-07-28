// // console.log("Let's come on!!");

// // function getActiveUserNames(users) {
// //   const names = [];

// //   for (const user of users) {
// //     if (user.active) {
// //       names.push(user.name);
// //     }
// //   }

// //   return names;
// // }

// // const users = [
// //   { name: "Asha", active: true },
// //   { name: "Ravi", active: false },
// //   { name: "Meena", active: false },
// // ];

// // console.log(getActiveUserNames(users));
// // console.log(users);

// // function calculateOrderTotal(orders) {
// //   let total = 0;

// //   for (const order of orders) {
// //     if (order.status === "confirmed") {
// //       total += order.amount;
// //     }
// //   }

// //   return total;
// // }

// // const orders = [
// //   { id: 1, status: "confirmed", amount: 100 },
// //   { id: 2, status: "pending", amount: 40 },
// //   { id: 3, status: "confirmed", amount: 60 },
// // ];

// // console.log(calculateOrderTotal(orders));

// // //The expected total is 160, but the function prints 60.

// // Business requirements:
// // - Include only orders whose normalized status is "confirmed".
// // - Count all confirmed orders.
// // - Add their amounts together.
// // - Use 0 when an amount is missing.
// // - Collect unique customer names.
// // - Use "Unknown" for a missing or blank customer name.
// // - Return customerNames as an array.

// // function createConfirmedOrderSummary(orders) {
// //   const summary = {
// //     confirmedCount: 0,
// //     totalAmount: 0,
// //     customerNames: [],
// //   };

// //   for (const order of orders) {
// //     const normalizedStatus = order.status?.trim().toLowerCase();

// //     if (normalizedStatus !== "confirmed") {
// //       continue;
// //     }

// //     summary.confirmedCount += 1;
// //     summary.totalAmount += order.amount || 0;

// //     const customerName = order.customer?.name?.trim() || "Unknown";

// //     if (!summary.customerNames.includes(customerName)) {
// //       summary.customerNames.push(customerName);
// //     }
// //   }

// //   return summary;
// // }

// // const orders = [
// //   {
// //     id: 1,
// //     status: "Confirmed",
// //     amount: 120,
// //     customer: { name: " Asha " },
// //   },
// //   {
// //     id: 2,
// //     status: " CONFIRMED ",
// //     amount: 80,
// //     customer: { name: "   " },
// //   },
// //   {
// //     id: 3,
// //     status: "pending",
// //     amount: 50,
// //     customer: { name: "Ravi" },
// //   },
// //   {
// //     id: 4,
// //     status: "confirmed",
// //     customer: { name: "Asha" },
// //   },
// // ];

// // console.log(createConfirmedOrderSummary(orders));

// // // Requirements:
// // // - Include only completed appointments.
// // // - Ignore appointments with a missing or non-positive fee.
// // // - Count every valid completed appointment.
// // // - Add all valid fees.
// // // - Add each patient name only once.
// // // - Use "Unknown" for a missing or blank patient name.
// // // - Do not modify the original appointments.

// // function createCompletedAppointmentReport(appointments) {
// //   const report = {
// //     appointmentCount: 0,
// //     totalFees: 0,
// //     patientNames: [],
// //   };

// //   for (const appointment of appointments) {
// //     const status = appointment.status?.trim().toLowerCase();

// //     if (status !== "completed") {
// //       continue;
// //     }

// //     if (!appointment.fee || appointment.fee < 0) {
// //       continue;
// //     }

// //     report.appointmentCount++;
// //     report.totalFees += appointment.fee;

// //     const patientName = appointment.patient?.name?.trim() || "Unknown";

// //     if (!report.patientNames.includes(patientName)) {
// //       report.patientNames.push(patientName);
// //     }

// //     // appointment.status = status;
// //   }

// //   return report;
// // }

// // const appointments = [
// //   {
// //     id: 1,
// //     status: " Completed ",
// //     fee: 120,
// //     patient: { name: " Asha " },
// //   },
// //   {
// //     id: 2,
// //     status: "pending",
// //     fee: 80,
// //     patient: { name: "Ravi" },
// //   },
// //   {
// //     id: 3,
// //     status: "COMPLETED",
// //     fee: 150,
// //     patient: { name: "Asha" },
// //   },
// //   {
// //     id: 4,
// //     status: "completed",
// //     fee: 0,
// //     patient: { name: "Meena" },
// //   },
// //   {
// //     id: 5,
// //     status: "completed",
// //     fee: 90,
// //     patient: null,
// //   },
// //   {
// //     id: 6,
// //     status: "completed",
// //     fee: -20,
// //     patient: { name: "Kiran" },
// //   },
// // ];

// // console.log(createCompletedAppointmentReport(appointments));
// // console.log(appointments);

// console.log("-----");

// // Business requirements:
// //
// // 1. Process only orders whose normalized status is "confirmed".
// // 2. confirmedOrderCount counts every confirmed order, even if it has no valid items.
// // 3. An item is valid only when:
// //    - quantity is greater than 0
// //    - unitPrice is 0 or greater
// // 4. totalUnits is the sum of item quantities, not the number of item rows.
// // 5. Calculate each order's subtotal separately:
// //    quantity * unitPrice
// // 6. Discount percentage:
// //    - negative values become 0
// //    - values above 50 become 50
// // 7. Apply the discount to that individual order's subtotal.
// // 8. Add a $10 shipping fee when the discounted subtotal is:
// //    - greater than 0
// //    - less than $100
// // 9. grandTotal is the total of all discounted order totals plus shipping.
// // 10. Normalize customer emails using trim() and toLowerCase().
// // 11. Ignore missing or blank emails.
// // 12. Return each normalized email only once.

// function createConfirmedOrderReport(orders) {
//   const report = {
//     confirmedOrderCount: 0,
//     totalUnits: 0,
//     grandTotal: 0,
//     customerEmails: [],
//   };

//   for (const order of orders) {
//     let orderSubtotal = 0;
//     const status = order.status?.trim().toLowerCase();

//     if (status !== "confirmed") {
//       continue;
//     }

//     report.confirmedOrderCount++;

//     for (const item of order.items ?? []) {
//       if (item.quantity <= 0 || item.unitPrice < 0) {
//         continue;
//       }

//       report.totalUnits += item.quantity;
//       orderSubtotal += item.unitPrice * item.quantity;
//     }

//     const discountPercent = Math.max(
//       Math.min(order.discountPercent ?? 0, 50),
//       0,
//     );

//     orderSubtotal -= orderSubtotal * (discountPercent / 100);

//     report.grandTotal += orderSubtotal;
//     if (orderSubtotal > 0 && orderSubtotal < 100) {
//       report.grandTotal += 10;
//     }

//     const rawEmail = order.customer?.email;

//     if (rawEmail) {
//       const normalizedEmail = rawEmail.trim().toLowerCase();
//       if (
//         normalizedEmail === "" ||
//         report.customerEmails.includes(normalizedEmail)
//       ) {
//         continue;
//       }
//       report.customerEmails.push(normalizedEmail);
//     }
//   }

//   report.grandTotal = Number(report.grandTotal.toFixed(2));

//   return report;
// }

// const orders = [
//   {
//     id: 1,
//     status: "Confirmed",
//     discountPercent: 10,
//     customer: { email: " ASHA@example.com " },
//     items: [
//       { productId: 101, quantity: 2, unitPrice: 40 },
//       { productId: 102, quantity: 1, unitPrice: 30 },
//     ],
//   },
//   {
//     id: 2,
//     status: " CONFIRMED ",
//     discountPercent: 20,
//     customer: { email: "ASHA@example.com" },
//     items: [
//       { productId: 103, quantity: 3, unitPrice: 25 },
//       { productId: 104, quantity: 0, unitPrice: 50 },
//       { productId: 105, quantity: 1, unitPrice: -10 },
//     ],
//   },
//   {
//     id: 3,
//     status: "pending",
//     discountPercent: 0,
//     customer: { email: "meena@example.com" },
//     items: [{ productId: 106, quantity: 2, unitPrice: 60 }],
//   },
//   {
//     id: 4,
//     status: "confirmed",
//     discountPercent: -10,
//     customer: { email: "   " },
//     items: [],
//   },
//   {
//     id: 5,
//     status: "confirmed",
//     discountPercent: 60,
//     customer: { email: "ravi@example.com" },
//     items: [{ productId: 107, quantity: 1, unitPrice: 200 }],
//   },
// ];

// console.log("----- ACTUAL REPORT -----");
// console.log(createConfirmedOrderReport(orders));

// /*
// ----- CURRENT OUTPUT -----

// {
//   confirmedOrderCount: 4,
//   totalUnits: 4,
//   grandTotal: 284.17,
//   customerEmails: [
//     "asha@example.com",
//     "asha@example.com",
//     "",
//     "ravi@example.com"
//   ]
// }

// ----- EXPECTED OUTPUT -----

// {
//   confirmedOrderCount: 4,
//   totalUnits: 7,
//   grandTotal: 279,
//   customerEmails: [
//     "asha@example.com",
//     "ravi@example.com"
//   ]
// }
// */

// Requirements:
// - Return only the names of active users.
// - Do not modify the original array or objects.

// function rebuildActiveUserNames(users) {
//   const activeUserNames = [];

//   for (const user of users) {
//     if (user.active) {
//       activeUserNames.push(user.name);
//     }
//   }

//   return activeUserNames;
// }

// const users = [
//   { name: "Asha", active: true },
//   { name: "Ravi", active: false },
//   { name: "Meena", active: true },
// ];

// console.log(rebuildActiveUserNames(users));
// // Expected: ["Asha", "Meena"]

// console.log(users);
// // Expected: original data unchanged

// Requirements:
// - Include only completed appointments.
// - Ignore fees that are 0 or negative.
// - Count valid appointments.
// - Add their fees.
// - Do not modify the original data.

function rebuildCompletedSummary(appointments) {
  const completedSummary = {
    appointmentCount: 0,
    totalFees: 0,
  };

  for (const appointment of appointments) {
    const normalizedStatus =
      appointment?.status?.trim().toLowerCase() ?? "not provided";

    if (normalizedStatus === "completed" && appointment.fee > 0) {
      completedSummary.appointmentCount++;
      completedSummary.totalFees += appointment.fee;
    }
  }

  return completedSummary;
}

const appointments = [
  { status: " Completed ", fee: 120 },
  { status: "pending", fee: 80 },
  { status: "COMPLETED", fee: 150 },
  { status: "completed", fee: 0 },
];

console.log(rebuildCompletedSummary(appointments));
// Expected: { appointmentCount: 2, totalFees: 270 }

console.log(appointments);
// Expected: original data unchanged
