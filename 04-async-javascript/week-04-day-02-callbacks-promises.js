// // // // console.log("Let's Come On!");

// // // // function processPayment(amount, callback) {
// // // //   console.log(`Processing $${amount}`);

// // // //   callback(amount);
// // // // }

// // // // function printSuccess(amount = 0) {
// // // //   console.log("Payment completed: " + amount);
// // // // }

// // // // processPayment(100, printSuccess);

// // // function processPayment(amount, callback) {
// // //   console.log("1. Payment request received");

// // //   setTimeout(function () {
// // //     console.log("2. Payment processing finished");
// // //     callback(amount);
// // //   }, 2000);

// // //   console.log("3. processPayment function reached the end");
// // // }

// // // function notifyCustomer(amount) {
// // //   console.log(`4. Customer notified about $${amount}`);
// // // }

// // // processPayment(100, notifyCustomer);

// // // function processPaymentPromise(amount) {
// // //   return new Promise(function (resolve, reject) {
// // //     console.log("Payment started");

// // //     setTimeout(function () {
// // //       resolve(amount);
// // //     }, 2000);
// // //   });
// // // }

// // // const paymentPromise = processPaymentPromise(100);

// // // paymentPromise.then(function (amount) {
// // //   console.log(`Payment completed: $${amount}`);
// // // });

// // // const pizzaPromise = new Promise(function (resolve) {
// // //   resolve({
// // //     orderId: 101,
// // //     status: "READY",
// // //   });
// // // });

// // // pizzaPromise.then(function (pizza) {
// // //   console.log("Order " + pizza.orderId + " is " + pizza.status);
// // // });

// // function reserveItem(stock) {
// //   return new Promise(function (resolve, reject) {
// //     if (stock > 0) {
// //       resolve("Item reserved");
// //     } else {
// //       reject("Out of stock");
// //     }
// //   });
// // }

// // const itemPromise = reserveItem(0);

// // itemPromise
// //   .then(function (value) {
// //     console.log(value);
// //   })
// //   .catch(function (reason) {
// //     console.log(reason);
// //   });

// // function findUser(userId, callback) {
// //   setTimeout(function () {
// //     const user = {
// //       id: userId,
// //       name: "Vikas",
// //     };

// //     callback(user);
// //   }, 3000);
// // }

// // findUser(12, function (user) {
// //   console.log("User:", user);
// // });

// // function checkOrder(orderId, callback) {
// //   setTimeout(function () {
// //     const result = {
// //       id: orderId,
// //       status: "SHIPPED",
// //     };

// //     callback(result);
// //   }, 1000);
// // }

// function checkOrder(orderId) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve({
//         id: orderId,
//         status: "SHIPPED",
//       });
//     }, 1000);
//   });
// }

// const orderDetails = checkOrder(25);

// orderDetails
//   .then(function (value) {
//     console.log(`Order ${value.id} is ${value.status}`);
//   })
//   .finally(function () {
//     console.log("Testing Finally Block");
//   });

function processRefund(amount) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (amount <= 0) {
        reject("INVALID_AMOUNT");
        return;
      }

      if (amount > 1000) {
        reject("MANUAL_REVIEW_REQUIRED");
        return;
      }

      resolve({
        amount: amount,
        status: "APPROVED",
      });

      console.log("Reached resolve section");
    }, 1000);
  });
}

processRefund(250)
  .then(function (value) {
    console.log(value.status.toLowerCase());
  })
  .catch(function (reason) {
    console.log(reason);
  })
  .finally(() => console.log("Database closed. JK"));

processRefund(0)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (reason) {
    console.log(reason);
  })
  .finally(() => console.log("Database closed. JK"));

processRefund(1500)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (reason) {
    console.log(reason);
  })
  .finally(() => console.log("Database closed. JK"));
