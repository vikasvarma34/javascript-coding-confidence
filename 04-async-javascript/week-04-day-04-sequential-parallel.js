// // // // console.log("Let's Come On!!");

// // // // // ========================================
// // // // // Sequential Async Demonstration
// // // // // ========================================

// // // // function fetchProfile() {
// // // //   return new Promise((resolve) => {
// // // //     setTimeout(() => {
// // // //       console.log("Profile finished");
// // // //       resolve({ name: "Vikas" });
// // // //     }, 1000);
// // // //   });
// // // // }

// // // // function fetchNotifications() {
// // // //   return new Promise((resolve) => {
// // // //     setTimeout(() => {
// // // //       console.log("Notifications finished");
// // // //       resolve(["Payment received", "New message"]);
// // // //     }, 1000);
// // // //   });
// // // // }

// // // // // async function loadDashboard() {
// // // // //   console.time("Dashboard");

// // // // //   const profile = await fetchProfile();
// // // // //   const notifications = await fetchNotifications();

// // // // //   console.timeEnd("Dashboard");

// // // // //   console.log(profile);
// // // // //   console.log(notifications);
// // // // // }

// // // // // ========================================
// // // // // Parallel Async Demonstration
// // // // // ========================================

// // // // async function loadDashboard() {
// // // //   console.time("Dashboard");

// // // //   const [profile, notifications] = await Promise.all([
// // // //     fetchProfile(),
// // // //     fetchNotifications(),
// // // //   ]);

// // // //   console.timeEnd("Dashboard");

// // // //   console.log(profile);
// // // //   console.log(notifications);
// // // // }

// // // // loadDashboard();

// // // // ========================================
// // // // Exercise 1 — Account Overview
// // // // ========================================
// // // //
// // // // Business requirements:
// // // //
// // // // We are building an account overview.
// // // //
// // // // 1. We first need to fetch the account.
// // // // 2. Transaction history needs account.id.
// // // // 3. Reward information also needs account.id.
// // // // 4. Transactions and rewards do NOT depend on each other.
// // // // 5. The function must return:
// // // //
// // // // {
// // // //   accountId: 101,
// // // //   transactionCount: 3,
// // // //   rewardPoints: 850
// // // // }
// // // //
// // // // Important:
// // // // Decide yourself which operations must be sequential
// // // // and which operations can begin together.

// // // function fetchAccount(email) {
// // //   return new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve({
// // //         id: 101,
// // //         email,
// // //       });
// // //     }, 400);
// // //   });
// // // }

// // // function fetchTransactions(accountId) {
// // //   return new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve([
// // //         { id: 1, accountId },
// // //         { id: 2, accountId },
// // //         { id: 3, accountId },
// // //       ]);
// // //     }, 600);
// // //   });
// // // }

// // // function fetchRewards(accountId) {
// // //   return new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve({
// // //         accountId,
// // //         points: 850,
// // //       });
// // //     }, 700);
// // //   });
// // // }

// // // async function buildAccountOverview(email) {
// // //   const account = await fetchAccount(email);

// // //   const [transactions, rewards] = await Promise.all([
// // //     fetchTransactions(account.id),
// // //     fetchRewards(account.id),
// // //   ]);

// // //   return {
// // //     accountId: account.id,
// // //     transactionCount: transactions.length,
// // //     rewardPoints: rewards.points,
// // //   };
// // // }

// // // // ========================================
// // // // Tests
// // // // ========================================

// // // async function runAccountOverviewTests() {
// // //   const startedAt = Date.now();

// // //   const result = await buildAccountOverview("vikas@example.com");

// // //   const duration = Date.now() - startedAt;

// // //   console.log("Test 1:", result.accountId === 101);

// // //   console.log("Test 2:", result.transactionCount === 3);

// // //   console.log("Test 3:", result.rewardPoints === 850);

// // //   // A fully sequential implementation would take
// // //   // roughly 1700ms.
// // //   //
// // //   // The intended execution flow should normally
// // //   // finish comfortably below 1500ms.
// // //   console.log("Test 4:", duration < 1500);

// // //   console.log("Duration:", duration + "ms");
// // // }

// // // runAccountOverviewTests();

// // // // Expected:
// // // // Test 1: true
// // // // Test 2: true
// // // // Test 3: true
// // // // Test 4: true

// // // ========================================
// // // Exercise 2 — Payment Preparation Failure
// // // ========================================
// // //
// // // Business requirements:
// // //
// // // Before processing a payment, the service needs:
// // //
// // // - fraud-check information
// // // - current exchange-rate information
// // //
// // // The two requests are independent.
// // //
// // // Behaviour:
// // //
// // // 1. Start both requests without unnecessarily
// // //    waiting for one before starting the other.
// // //
// // // 2. If BOTH succeed, return:
// // //
// // // {
// // //   success: true,
// // //   riskLevel: "LOW",
// // //   exchangeRate: 1.36
// // // }
// // //
// // // 3. If either request fails, return:
// // //
// // // {
// // //   success: false,
// // //   error: "<the actual error message>"
// // // }
// // //
// // // Do not change the supplied async functions.

// // function fetchFraudCheck(shouldFail = false) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (shouldFail) {
// //         reject(new Error("Fraud service unavailable"));
// //         return;
// //       }

// //       console.log("Fraud check finished");

// //       resolve({
// //         riskLevel: "LOW",
// //       });
// //     }, 400);
// //   });
// // }

// // function fetchExchangeRate(shouldFail = false) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (shouldFail) {
// //         reject(new Error("Exchange-rate service unavailable"));
// //         return;
// //       }

// //       console.log("Exchange rate finished");

// //       resolve({
// //         rate: 1.36,
// //       });
// //     }, 700);
// //   });
// // }

// // async function preparePayment(fraudShouldFail, rateShouldFail) {
// //   try {
// //     const [fraudCheck, exchangeRate] = await Promise.all([
// //       fetchFraudCheck(fraudShouldFail),
// //       fetchExchangeRate(rateShouldFail),
// //     ]);

// //     return {
// //       success: true,
// //       riskLevel: fraudCheck.riskLevel,
// //       exchangeRate: exchangeRate.rate,
// //     };
// //   } catch (error) {
// //     return {
// //       success: false,
// //       error: error.message,
// //     };
// //   }
// // }

// // // ========================================
// // // Tests
// // // ========================================

// // async function runPaymentTests() {
// //   const result1 = await preparePayment(false, false);

// //   console.log(
// //     "Test 1:",
// //     result1.success === true &&
// //       result1.riskLevel === "LOW" &&
// //       result1.exchangeRate === 1.36,
// //   );

// //   console.log("----------------");

// //   const result2 = await preparePayment(true, false);

// //   console.log("Result 2");
// //   console.log(result2);

// //   console.log(
// //     "Test 2:",
// //     result2.success === false && result2.error === "Fraud service unavailable",
// //   );

// //   console.log("----------------");

// //   const result3 = await preparePayment(false, true);

// //   console.log("Result 3");
// //   console.log(result3);

// //   console.log(
// //     "Test 3:",
// //     result3.success === false &&
// //       result3.error === "Exchange-rate service unavailable",
// //   );
// // }

// // runPaymentTests();

// // // Expected:
// // // Test 1: true
// // // Test 2: true
// // // Test 3: true

// console.log("----");

// // ========================================
// // Exercise 3 — Build Order Confirmation
// // ========================================
// //
// // Requirements:
// //
// // - Find the order using orderId.
// // - The order result contains customerId and warehouseId.
// // - Load the customer.
// // - Load the warehouse.
// // - Return:
// //
// // {
// //   orderId: 501,
// //   customerName: "Arun",
// //   warehouseName: "Hyderabad Central"
// // }
// //
// // - Do not perform unnecessary waiting.
// // - If the order cannot be found, return null.
// //
// // Do not change the supplied functions.

// function fetchOrder(orderId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (orderId === 999) {
//         resolve(null);
//         return;
//       }

//       resolve({
//         id: orderId,
//         customerId: 20,
//         warehouseId: 7,
//       });
//     }, 400);
//   });
// }

// function fetchCustomer(customerId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         id: customerId,
//         name: "Arun",
//       });
//     }, 600);
//   });
// }

// function fetchWarehouse(warehouseId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         id: warehouseId,
//         name: "Hyderabad Central",
//       });
//     }, 800);
//   });
// }

// async function buildOrderConfirmation(orderId) {
//   const order = await fetchOrder(orderId);

//   if (!order) {
//     return null;
//   }

//   try {
//     const [customer, warehouse] = await Promise.all([
//       fetchCustomer(order.customerId),
//       fetchWarehouse(order.warehouseId),
//     ]);

//     return {
//       orderId: order.id,
//       customerName: customer.name,
//       warehouseName: warehouse.name,
//     };
//   } catch (error) {
//     return null;
//   }
// }

// // ========================================
// // Tests
// // ========================================

// async function runOrderConfirmationTests() {
//   const startedAt = Date.now();

//   const result1 = await buildOrderConfirmation(501);

//   const duration = Date.now() - startedAt;

//   console.log("Test 1:", result1.orderId === 501);

//   console.log(
//     "Test 2:",
//     result1.customerName === "Arun" &&
//       result1.warehouseName === "Hyderabad Central",
//   );

//   console.log("Test 3:", duration < 1600);

//   const result2 = await buildOrderConfirmation(999);

//   console.log("Test 4:", result2 === null);

//   console.log("Duration:", duration + "ms");
// }

// runOrderConfirmationTests();

// // Expected:
// // Test 1: true
// // Test 2: true
// // Test 3: true
// // Test 4: true

console.log("----");

// ========================================
// Exercise 4 — Shipment Preparation
// ========================================
//
// Business requirements:
//
// A shipment service receives a shipmentId.
//
// It must:
// - load the shipment;
// - check the inventory for the product;
// - load the delivery address;
// - get a carrier quote.
//
// Rules:
// - The shipment contains productId, addressId, and weight.
// - The carrier quote needs the shipment weight and the delivery zone.
// - If inventory is unavailable, return null.
// - Avoid unnecessary waiting.
// - Return:
//
// {
//   shipmentId: 701,
//   city: "Hyderabad",
//   carrier: "BlueDart",
//   price: 180
// }
//
// Do not change the supplied async functions.

function fetchShipment(shipmentId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: shipmentId,
        productId: 88,
        addressId: 15,
        weight: 2.5,
      });
    }, 300);
  });
}

function checkInventory(productId, available = true) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        productId,
        available,
      });
    }, 700);
  });
}

function fetchDeliveryAddress(addressId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: addressId,
        city: "Hyderabad",
        zone: "SOUTH",
      });
    }, 500);
  });
}

function fetchCarrierQuote(weight, zone) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        carrier: "BlueDart",
        price: 180,
        weight,
        zone,
      });
    }, 400);
  });
}

async function prepareShipment(shipmentId, inventoryAvailable = true) {
  const shipment = await fetchShipment(shipmentId);

  let inventory;
  let deliveryAddress;
  try {
    [inventory, deliveryAddress] = await Promise.all([
      checkInventory(shipment.productId, inventoryAvailable),
      fetchDeliveryAddress(shipment.addressId),
    ]);
  } catch (error) {
    return error;
  }

  if (!inventory.available) {
    return null;
  }

  const carrierQuote = await fetchCarrierQuote(
    shipment.weight,
    deliveryAddress.zone,
  );

  return {
    shipmentId: shipment.id,
    city: deliveryAddress.city,
    carrier: carrierQuote.carrier,
    price: carrierQuote.price,
  };
}

// ========================================
// Tests
// ========================================

async function runShipmentTests() {
  const startedAt = Date.now();

  const result1 = await prepareShipment(701, true);

  const duration = Date.now() - startedAt;

  console.log("Test 1:", result1.shipmentId === 701);

  console.log("Test 2:", result1.city === "Hyderabad");

  console.log(
    "Test 3:",
    result1.carrier === "BlueDart" && result1.price === 180,
  );

  console.log("Test 4:", duration < 1700);

  const result2 = await prepareShipment(702, false);

  console.log("Test 5:", result2 === null);

  console.log("Duration:", duration + "ms");
}

runShipmentTests();

// Expected:
// Test 1: true
// Test 2: true
// Test 3: true
// Test 4: true
// Test 5: true
