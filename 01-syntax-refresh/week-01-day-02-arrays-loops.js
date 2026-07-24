// console.log("Let's Come on!!");

// function findLargestNumber(numbers) {
//   if (numbers.length === 0) {
//     return null;
//   }

//   let largestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number > largestNumber) {
//       largestNumber = number;
//     }
//   }

//   return largestNumber;

//   // Write the largest-number logic here.
// }

// const normalNumbers = [14, 7, 32, 19, 25];
// const negativeNumbers = [-18, -4, -27, -9];
// const singleNumber = [45];
// const emptyNumbers = [];

// console.log(findLargestNumber(normalNumbers)); // Expected: 32
// console.log(findLargestNumber(negativeNumbers)); // Expected: -4
// console.log(findLargestNumber(singleNumber)); // Expected: 45
// console.log(findLargestNumber(emptyNumbers)); // Expected: null

// function findSmallestNumber(numbers) {
//   if (numbers.length === 0) {
//     return null;
//   }

//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// }

// const prices = [850, 299, 1200, 475, 199];
// const negativeNumbers = [-8, -31, -2, -14];
// const singleNumber = [75];
// const emptyNumbers = [];

// console.log(findSmallestNumber(prices)); // Expected: 199
// console.log(findSmallestNumber(negativeNumbers)); // Expected: -31
// console.log(findSmallestNumber(singleNumber)); // Expected: 75
// console.log(findSmallestNumber(emptyNumbers)); // Expected: null

// function calculateAverage(numbers) {
//   const numberCount = numbers.length;
//   let totalSum = 0;
//   if (numberCount === 0) {
//     return null;
//   }

//   for (const number of numbers) {
//     totalSum += number;
//   }

//   const average = totalSum / numberCount;

//   return average;
// }

// const ratings = [4, 5, 3, 4, 4];
// const prices = [100, 250, 150];
// const singleValue = [80];
// const emptyValues = [];

// console.log(calculateAverage(ratings)); // Expected: 4
// console.log(calculateAverage(prices)); // Expected: 166.66666666666666
// console.log(calculateAverage(singleValue)); // Expected: 80
// console.log(calculateAverage(emptyValues)); // Expected: null

// function countEvenNumbers(numbers) {
//   let count = 0;

//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       count++;
//     }
//   }

//   return count;
// }

// const mixedNumbers = [3, 8, 12, 5, 7, 20];
// const noEvenNumbers = [1, 3, 5, 7];
// const negativeNumbers = [-4, -3, -2, -1, 0];
// const emptyNumbers = [];

// console.log(countEvenNumbers(mixedNumbers)); // Expected: 3
// console.log(countEvenNumbers(noEvenNumbers)); // Expected: 0
// console.log(countEvenNumbers(negativeNumbers)); // Expected: 3
// console.log(countEvenNumbers(emptyNumbers)); // Expected: 0

// function findProductById(products, productId) {
//   for (const product of products) {
//     if (product.id === productId) {
//       return product;
//     }
//   }

//   return null;
// }

// const products = [
//   { id: 101, name: "Keyboard", price: 1200 },
//   { id: 102, name: "Mouse", price: 650 },
//   { id: 103, name: "Monitor", price: 9000 },
// ];

// console.log(findProductById(products, 102));
// // Expected: { id: 102, name: "Mouse", price: 650 }

// console.log(findProductById(products, 103));
// // Expected: { id: 103, name: "Monitor", price: 9000 }

// console.log(findProductById(products, 999));
// // Expected: null

// console.log(findProductById([], 101));
// // Expected: null

function createIncreasedPrices(prices, increaseAmount) {
  //create a new array - so that original doesnt get disturbed
  const increasedPrices = [];
  for (const price of prices) {
    if (increaseAmount >= 0) {
      increasedPrices.push(price + increaseAmount);
    } else {
      increasedPrices.push(price);
    }
  }

  return increasedPrices;
}

const originalPrices = [100, 250, 400];

const increasedPrices = createIncreasedPrices(originalPrices, 50);

console.log(increasedPrices); // Expected: [150, 300, 450]
console.log(originalPrices); // Expected: [100, 250, 400]

console.log(createIncreasedPrices([], 25)); // Expected: []
console.log(createIncreasedPrices([80], 20)); // Expected: [100]
console.log(createIncreasedPrices([70, 90, 56], -20)); //Expected: [ 70, 90, 56 ]

const negativeResult = createIncreasedPrices(originalPrices, -20);
negativeResult.push(999);

console.log(originalPrices);
