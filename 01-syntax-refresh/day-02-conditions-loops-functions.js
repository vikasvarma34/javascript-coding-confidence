// const number = 0;

// if (number > 0)
//   console.log("Number is postive");
// else if (number < 0)
//   console.log("Number is negative");
// else
//   console.log("Number is Zero")

// function classifyNumber(number) {

// if (number > 0)
//    return "Number is positive";
// else if (number < 0)
//   return "Number is negative";
// else
//   return "Number is Zero";

// }
  
// console.log(classifyNumber(12));  // positive
// console.log(classifyNumber(-4));  // negative
// console.log(classifyNumber(0));   // zero
  
// function printEvenNumbers(limit) {
//   for (let number = 1; number<=limit; number++){
//     if (number % 2 === 0){
//         console.log(number)
//     }
//   }
// }

// printEvenNumbers(20);

// function printNegativeNumbers(numbers) {
//   for (const number of numbers){
//     if (number < 0){
//         console.log(number);
//     }
//   }
// }

// printNegativeNumbers([8, -3, 0, -11, 7, -1]);

// function getLargerNumber(firstNumber, secondNumber) {
//   if (firstNumber >= secondNumber) {
//     return firstNumber
//   } else {
//     return secondNumber
//   }
// }

// console.log(getLargerNumber(12, 7));   // 12
// console.log(getLargerNumber(-3, -8));  // -3
// console.log(getLargerNumber(5, 5));    // 5

// console.log(add(2, 3));

// function add(a, b) {
//   return a + b;
// }


// const isEven = (number) => number % 2 === 0;

// console.log(isEven(8));  // true
// console.log(isEven(7));  // false
// console.log(isEven(0));  // true

// function countEvenNumbers(limit) {
//   let count = 0;

//   for (let number = 1; number <= limit; number++){
//     if (number % 2 === 0){
//         count++
//     }
//   }

//   return count

// }

// console.log(countEvenNumbers(10)); // 5
// console.log(countEvenNumbers(7));  // 3
// console.log(countEvenNumbers(1));  // 0

// function countEligibleVoters(ages) {
//   let count = 0;
//   for (const age of ages){
//     if (age >= 18){
//         count++
//     }
//   }

//   return count;
// }

// console.log(countEligibleVoters([16, 18, 25, 12, 40])); // 3
// console.log(countEligibleVoters([18, 18, 17]));         // 2
// console.log(countEligibleVoters([]));         
//          // 0

// function sumEvenNumbers(limit) {
//   let total = 0;
//   for (let number = 1; number <= limit; number++){
//     if (number % 2 === 0){
//         total += number
//     }
//   }

//   return total
// }

// console.log(sumEvenNumbers(10)); // 30
// console.log(sumEvenNumbers(7));  // 12
// console.log(sumEvenNumbers(1));  // 0

function countPositiveEvenNumbers(numbers) {
  let count = 0
  for (const number of numbers){
    if (number > 0 && number % 2 === 0){
     count++
    }
  }
  return count;
}

console.log(countPositiveEvenNumbers([2, -4, 7, 8, 0, 10])); // 3
console.log(countPositiveEvenNumbers([-2, -6, 3]));           // 0
console.log(countPositiveEvenNumbers([]));                    // 0