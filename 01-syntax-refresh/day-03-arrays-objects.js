// // const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

// // // Accessing elements in the array
// // console.log(cities); // Output: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
// // console.log(cities[0]); // Output: New York
// // console.log(cities[2]); // Output: Chicago

// // //typeof operator
// // console.log(typeof cities); // Output: object
// // console.log(typeof cities[0]); // Output: string

// // let check = Array.isArray(cities);
// // console.log(check); // Output: true

// // cities[1] = "Dubai";
// // const removedCity = cities.pop();
// // cities.push("Delhi");
// // console.log(removedCity);
// // console.log(cities);

// // for (const city of cities) {
// //   console.log(`Visiting ${city}`);
// // }

// // const usersData = [
// //   { id: 1, name: "Arjun", active: true },
// //   { id: 2, name: "Meera", active: false },
// //   { id: 3, name: "Ravi", active: true },
// //   { id: 4, name: "Sara", active: false },
// // ];

// // function findUserById(users, targetId) {

// //   for (const user of users){
// //     if (user.id === targetId){
// //         return user;
// //     } 
// //   }

// //   return null;
// // }

// // // console.log(findUserById(usersData, 3));
// // // console.log(findUserById(usersData, 1));
// // // console.log(findUserById(usersData, 99));

// // function getActiveUsers(users) {

// //   const activeUsers = [];

// //   for (const user of users){
// //     if (user.active){
// //         activeUsers.push(user)
// //     }
// //   }
// //   return activeUsers;
// // }

// // console.log(getActiveUsers(usersData));


// // console.log(
// //   getActiveUsers([
// //     { id: 5, name: "John", active: false },
// //     { id: 6, name: "Priya", active: false },
// //   ])
// // );

// // console.log(getActiveUsers([]));

// const studentData = {
//   id: 101,
//   name: "Anjali",
//   score: 72,
//   status: "pending",
// };

// function updateStudentField(student, field, newValue) {
//   student[field] = newValue;
//   return student;
// }

// console.log(updateStudentField(studentData, "score", 88));
// console.log(updateStudentField(studentData, "status", "passed"));
// console.log(updateStudentField(studentData, "name", "Anjali Rao"));
// console.log(studentData);

// const anotherStudent = {
//   id: 202,
//   name: "Rahul",
//   score: 65,
//   status: "pending",
// };

// console.log(updateStudentField(anotherStudent, "score", 90));

// const products = [
//   { id: 1, name: "Keyboard", price: 2500, inStock: true },
//   { id: 2, name: "Monitor", price: 12000, inStock: false },
//   { id: 3, name: "Mouse", price: 900, inStock: true },
//   { id: 4, name: "Webcam", price: 3200, inStock: true },
// ];

// function calculateAvailableProductTotal(products) {
//   let productTotal = 0;
//   for (const product of products){
//     if (product.inStock){
//         productTotal += product.price
//     }
//   }

//   return productTotal;
// }

// console.log(calculateAvailableProductTotal(products)); // 6600

// console.log(
//   calculateAvailableProductTotal([
//     { id: 1, name: "Laptop", price: 50000, inStock: false },
//     { id: 2, name: "Phone", price: 30000, inStock: false },
//   ])
// ); // 0

// console.log(calculateAvailableProductTotal([])); // 0

// const accounts = [
//   { id: 1, name: "Arjun", active: true, balance: 1200 },
//   { id: 2, name: "Meera", active: false, balance: 800 },
//   { id: 3, name: "Ravi", active: true, balance: 2500 },
//   { id: 4, name: "Sara", active: false, balance: 1500 },
//   { id: 5, name: "John", active: true, balance: 500 },
// ];

// function createAccountSummary(accounts) {
//  const accountSummary = {
//   totalAccounts: 0,
//   activeAccounts: 0,
//   inactiveAccounts: 0,
//   activeBalanceTotal: 0
//  }

//  for (const account of accounts){
//     accountSummary.totalAccounts++;

//     if (account.active){
//         accountSummary.activeAccounts++;
//         accountSummary.activeBalanceTotal += account.balance;
//     } else {
//         accountSummary.inactiveAccounts++;
//     }
//  }

//  return accountSummary;
// }

// console.log(createAccountSummary(accounts));

// console.log(
//   createAccountSummary([
//     { id: 1, name: "A", active: false, balance: 100 },
//     { id: 2, name: "B", active: false, balance: 200 },
//   ])
// );

// console.log(createAccountSummary([]));

// const customerAccounts = [
//   { id: 1, name: "Arjun", active: true, balance: 1200, internalCode: "A101" },
//   { id: 2, name: "Meera", active: false, balance: 2800, internalCode: "A102" },
//   { id: 3, name: "Ravi", active: true, balance: 3500, internalCode: "A103" },
//   { id: 4, name: "Sara", active: true, balance: 700, internalCode: "A104" },
// ];

// function findHighestBalanceActiveAccount(accounts) {
//     let currentHighestBalanceActiveAccount = null;
//     for (const account of accounts){
//       if (account.active && (currentHighestBalanceActiveAccount === null || account.balance > currentHighestBalanceActiveAccount.balance)){
//         currentHighestBalanceActiveAccount = account;
//       }
//     }

//     return currentHighestBalanceActiveAccount;
// }

// console.log(findHighestBalanceActiveAccount(customerAccounts));
// // Ravi's complete account

// console.log(
//   findHighestBalanceActiveAccount([
//     { id: 1, name: "A", active: false, balance: 9000 },
//     { id: 2, name: "B", active: true, balance: 500 },
//     { id: 3, name: "C", active: true, balance: 800 },
//   ])
// );
// // C's complete account

// console.log(
//   findHighestBalanceActiveAccount([
//     { id: 1, name: "A", active: false, balance: 5000 },
//   ])
// );
// // null

// console.log(findHighestBalanceActiveAccount([]));
// // null

// console.log(
//   findHighestBalanceActiveAccount([
//     { id: 1, name: "A", active: true, balance: -500 },
//     { id: 2, name: "B", active: true, balance: -200 },
//   ])
// );

// function getEligibleAccounts(accounts, minimumBalance) {
//   const eligibleAccounts = []

//   for (const account of accounts){
//     if (account.active && account.balance >= minimumBalance){
//         const validAccount = {
//             id: account.id,
//             name: account.name,
//             balance: account.balance
//         }

//         eligibleAccounts.push(validAccount)
//     }
//   }

//   return eligibleAccounts;
// }

// // console.log(getEligibleAccounts(customerAccounts, 1000));
// // console.log(getEligibleAccounts(customerAccounts, 4000));
// // console.log(getEligibleAccounts([], 1000));

const users = [
  { id: 1, name: "Arjun", active: true },
  { id: 2, name: "Meera", active: false },
];

function getFirstActiveUser(users) {
  for (const user of users) {
    if (user.active) {
      return user;
    }
  }

  return null;
}

const activeUser = getFirstActiveUser(users);

activeUser.name = "Arjun Rao";

console.log(activeUser);
console.log(users[0]);

console.log(activeUser === users[0]);


