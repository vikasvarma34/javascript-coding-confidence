// const learnerName = "Vikas";
// let completedExamples = 0;
// const isDayOne = true;

// console.log(learnerName);
// console.log(completedExamples);
// console.log(isDayOne);

// completedExamples = completedExamples + 1;

// console.log(`Completed Examples: ${completedExamples}`);

// console.log("----------");

// console.log(typeof learnerName);
// console.log(typeof completedExamples);
// console.log(typeof isDayOne);

// console.log("----------");

// const city = "Kodad"
// const studyMinutes = 60;
// let topic = "constants and variables";

// console.log(`My name is ${learnerName} and I live in ${city}. I will be studying for atleast ${studyMinutes} minutes today and the current topic is ${topic}`);

// let studyTimeMinutes = 60
// console.log(`Before Change the study minutes are ${studyTimeMinutes}`);

// studyTimeMinutes = 75
// console.log(`After Change the study minutes are ${studyTimeMinutes}`);

// console.log(`Before Change the city is ${city}`);

// // city = "Bangalore"

// // console.log(`after Change the city is ${city}`);

// console.log("----------");

// const tempCelsius = 0;
// const tempFahrenheit = (tempCelsius * 9) / 5 + 32;

// console.log((`TempCelsius: ${tempCelsius} and TempFahrenheit: ${tempFahrenheit}`));

// console.log("----------");

// const itemPrice = 32;
// const taxRate = 0.18;

// const taxAmount = itemPrice * taxRate;
// const totalAmount = itemPrice + taxAmount;

// console.log("Item Price: ₹" + itemPrice);
// console.log("Tax Amount: ₹" + taxAmount);
// console.log("Total Amount: ₹"  + totalAmount);

// console.log("----------");

// const firstNumber = 32;
// const secondNumber = 45;

// console.log("First No: " + firstNumber);
// console.log("Second No: " + secondNumber);


// console.log(firstNumber > secondNumber);
// console.log(firstNumber < secondNumber);
// console.log(firstNumber === secondNumber);
// console.log(firstNumber !== secondNumber);

// const isFirstNumberLarger = firstNumber > secondNumber;

// console.log(isFirstNumberLarger);

// // === means equal to 
// // !== means not equal to

// console.log("----------");

// const age = 27;
// const hasIdentification = true;
// const hasPermission = false;

// const canEnter = age >= 18 && hasIdentification;
// const needsHelp = age < 18 || hasPermission;
// const doesNotHavePermission = !hasPermission;

// console.log(`Can enter: ${canEnter}`);
// console.log(`Needs help: ${needsHelp}`);
// console.log(`Does not have permission: ${doesNotHavePermission}`);

// console.log("----------");

// let selectedUser;
// const deletedUser = null;

// console.log(selectedUser);
// console.log(deletedUser)

// console.log(typeof selectedUser);
// console.log(typeof deletedUser);

// console.log("----------");

const productPrice = 110;
let quantity = 0;
const taxRate = 0.13;
const budget = 700;

const subtotal = productPrice * quantity;
const taxAmount = subtotal * taxRate;
const finalTotal = subtotal + taxAmount;
const isQuantityMoreThanZero = quantity > 0;

const isWithinBudget = finalTotal <= budget;
const qualifiesForFreeDelivery = subtotal >= 500;
const canPlaceOrder = isWithinBudget && isQuantityMoreThanZero

if (canPlaceOrder && qualifiesForFreeDelivery) {
  console.log("Order is placed with free delivery");
  console.log(`order total: ${finalTotal}`);
}
else if (canPlaceOrder) {
  console.log("Order is placed without free delivery");
  console.log(`order total: ${finalTotal}`);
}
else {
   console.log("Order cant be placed");
   console.log(`order total: ${finalTotal}`);
}
 