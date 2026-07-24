// //console.log("Let's come on!!");

// // function createGreeting(name) {
// //   const message = `Hello, ${name}!`;

// //   return message;
// // }

// // // console.log(message);

// // const greeting = createGreeting("Chitlu");

// // console.log(greeting);

// const TAX_RATE = 0.05;

// const orderOne = {
//   customerName: "Ravi",
//   isPremium: false,
//   items: [
//     { name: "Keyboard", price: 300, quantity: 2 },
//     { name: "Mouse", price: 200, quantity: 1 },
//   ],
// };

// const orderTwo = {
//   customerName: "Anita",
//   isPremium: true,
//   items: [{ name: "Monitor", price: 500, quantity: 1 }],
// };

// const emptyOrder = {
//   customerName: "Kiran",
//   isPremium: false,
//   items: [],
// };

// function createOrderSummary(order, discountPercent = 0) {
//   const calculateSubtotal = function (items) {
//     let subTotal = 0;

//     for (const item of items) {
//       subTotal = subTotal + item.price * item.quantity;
//     }

//     return subTotal;
//   };

//   const calculateDeliveryFee = (isPremium, discountedSubtotal, itemCount) => {
//     if (itemCount !== 0 && !isPremium && discountedSubtotal < 1000) {
//       return 80;
//     }

//     return 0;
//   };

//   // Write the main calculation logic here
//   const subTotalBeforeTax = calculateSubtotal(order.items);
//   const discountedAmount = calculateDiscountAmount(
//     subTotalBeforeTax,
//     discountPercent,
//   );
//   const subTotalAfterDiscount = subTotalBeforeTax - discountedAmount;
//   const tax = subTotalAfterDiscount * TAX_RATE;
//   const subTotalAfterTax = subTotalAfterDiscount + tax;
//   const itemCount = order.items.length;
//   const deliveryFee = calculateDeliveryFee(
//     order.isPremium,
//     subTotalAfterDiscount,
//     itemCount,
//   );

//   const finalTotal = subTotalAfterTax + deliveryFee;

//   function calculateDiscountAmount(subTotal, percentage = 0) {
//     let validPercentage = percentage;
//     if (percentage < 0) {
//       validPercentage = 0;
//     } else if (percentage > 100) {
//       validPercentage = 100;
//     }

//     return subTotal * (validPercentage / 100);
//   }

//   // Return a new summary object
//   const summaryObject = {
//     customerName: order.customerName,
//     subtotal: subTotalBeforeTax,
//     discountAmount: discountedAmount,
//     tax: tax,
//     deliveryFee: deliveryFee,
//     total: finalTotal,
//   };

//   return summaryObject;
// }

// // console.log(createOrderSummary(orderOne, 10));
// // console.log(createOrderSummary(orderTwo));
// // console.log(createOrderSummary(emptyOrder));

// const quantityTestOrder = {
//   customerName: "Test User",
//   isPremium: false,
//   items: [
//     { name: "Item A", price: 100, quantity: 2 },
//     { name: "Item B", price: 50, quantity: 3 },
//   ],
// };

// // console.log(createOrderSummary(quantityTestOrder));

// console.log(createOrderSummary(orderOne, -10));
// console.log(createOrderSummary(orderOne, 20));
// console.log(createOrderSummary(orderOne, 150));

// function formatFullName(firstName, lastName, middleName = "") {
//   let fullName = firstName;

//   if (middleName !== "") {
//     fullName += " " + middleName;
//   }

//   if (lastName !== "") {
//     fullName += " " + lastName;
//   }

//   return fullName;
// }

// console.log(formatFullName("Ravi", "Kumar"));
// console.log(formatFullName("Anita", "Reddy", "Lakshmi"));
// console.log(formatFullName("Kiran", ""));

// const userOne = {
//   id: 1,
//   email: "ravi@example.com",
// };

// const userTwo = {
//   id: 2,
//   email: "",
// };

// const userThree = {
//   id: 3,
// };

// const userFour = {
//   id: 4,
//   email: null,
// };

// const hasEmail = (user) => Boolean(user.email);

// console.log(hasEmail(userOne)); // true
// console.log(hasEmail(userTwo)); // false
// console.log(hasEmail(userThree)); // false
// console.log(hasEmail(userFour)); // false

const activeAdmin = {
  id: 1,
  role: "admin",
  isActive: true,
};

const activeOwner = {
  id: 2,
  role: "user",
  isActive: true,
};

const activeDifferentUser = {
  id: 3,
  role: "user",
  isActive: true,
};

const inactiveAdmin = {
  id: 4,
  role: "admin",
  isActive: false,
};

const inactiveOwner = {
  id: 2,
  role: "user",
  isActive: false,
};

const task = {
  id: 101,
  ownerId: 2,
  title: "Prepare report",
};

function canEditTask(user, task, elevatedRole = "admin") {
  // Write the permission logic
  return (
    (user.id === task.ownerId || elevatedRole === user.role) && user.isActive
  );
}

console.log(canEditTask(activeAdmin, task)); // true
console.log(canEditTask(activeOwner, task)); // true
console.log(canEditTask(activeDifferentUser, task)); // false
console.log(canEditTask(inactiveAdmin, task)); // false
console.log(canEditTask(activeOwner, task, "manager")); // true
console.log(canEditTask(activeAdmin, task, "manager")); //false
console.log(canEditTask(inactiveOwner, task)); // should be false
