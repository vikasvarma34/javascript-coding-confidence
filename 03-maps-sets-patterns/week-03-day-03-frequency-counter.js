const printLog = (value) => {
  console.log(value);
};

// printLog("Let's Come On!");

// // Week 3 Day 3 — Frequency Counter Pattern
// // Exercise 1 — Count characters in a string

// // Business rules:
// //
// // 1. Create and return a Map.
// //
// // 2. Each character in the supplied string should become a key.
// //
// // 3. The value should contain how many times that character appears.
// //
// // 4. Character comparison is case-sensitive.
// //    "A" and "a" are different characters.
// //
// // 5. Spaces are also characters and should be counted.
// //
// // 6. An empty string should return an empty Map.
// //
// // Examples:
// //
// // "banana"
// // b -> 1
// // a -> 3
// // n -> 2
// //
// // "AaA"
// // A -> 2
// // a -> 1

// function countCharacters(text) {
//   const countMap = new Map();

//   for (const character of text.toLowerCase()) {
//     const currentCount = countMap.get(character) ?? 0;
//     countMap.set(character, currentCount + 1);
//   }

//   return countMap;
// }

// // -------------------------
// // Automatic tests
// // -------------------------

// function mapEquals(actualMap, expectedEntries) {
//   return JSON.stringify([...actualMap]) === JSON.stringify(expectedEntries);
// }

// console.log(
//   mapEquals(countCharacters("banana"), [
//     ["b", 1],
//     ["a", 3],
//     ["n", 2],
//   ]),
// ); // true

// console.log(mapEquals(countCharacters("AaA"), [["a", 3]])); // true

// console.log(
//   mapEquals(countCharacters("a a"), [
//     ["a", 2],
//     [" ", 1],
//   ]),
// ); // true

// console.log(mapEquals(countCharacters(""), [])); // true

// printLog("");

// Exercise 2 — Count words in a sentence

// Business rules:
//
// 1. Return a Map containing each word and how many times it occurs.
//
// 2. Word comparison must be case-insensitive.
//    "Order", "ORDER", and "order" are the same word.
//
// 3. Ignore leading and trailing spaces.
//
// 4. There may be multiple spaces between words.
//
// 5. For this exercise, punctuation does NOT need special handling.
//    "order" and "order," may be treated as different words.
//
// 6. An empty or whitespace-only string should return an empty Map.
//
// Expected:
//
// "Order completed order pending ORDER"
// order     -> 3
// completed -> 1
// pending   -> 1

// function countWords(sentence) {
//   const wordsArray = sentence
//     .toLowerCase()
//     .split(" ")
//     .filter((word) => word !== "");

//   const countMap = new Map();

//   for (const word of wordsArray) {
//     const currentCount = countMap.get(word) ?? 0;
//     countMap.set(word, currentCount + 1);
//   }

//   return countMap;
// }

// // -------------------------
// // Automatic tests
// // -------------------------

// function mapEquals(actualMap, expectedEntries) {
//   return JSON.stringify([...actualMap]) === JSON.stringify(expectedEntries);
// }

// console.log(
//   mapEquals(countWords("Order completed order pending ORDER"), [
//     ["order", 3],
//     ["completed", 1],
//     ["pending", 1],
//   ]),
// ); // true

// console.log(
//   mapEquals(countWords("bug feature bug feature bug"), [
//     ["bug", 3],
//     ["feature", 2],
//   ]),
// ); // true

// console.log(
//   mapEquals(countWords("  PAID   paid   Pending  "), [
//     ["paid", 2],
//     ["pending", 1],
//   ]),
// ); // true

// console.log(mapEquals(countWords("     "), [])); // true

// printLog("");

// // Exercise 3 — Count total product quantities

// const orderItems = [
//   { productId: "P-101", quantity: 2 },
//   { productId: "P-102", quantity: 1 },
//   { productId: "P-101", quantity: 4 },
//   { productId: "P-103", quantity: 3 },
//   { productId: "P-102", quantity: 5 },
// ];

// // Business rules:
// //
// // 1. Return a Map.
// //
// // 2. Use productId as the Map key.
// //
// // 3. The Map value should be the TOTAL quantity for that product.
// //
// // 4. If the same product appears multiple times,
// //    add its quantities together.
// //
// // 5. Preserve product IDs exactly as provided.
// //
// // 6. An empty input array should return an empty Map.
// //
// // Expected:
// //
// // P-101 -> 6
// // P-102 -> 6
// // P-103 -> 3

// function countProductQuantities(items) {
//   const countMap = new Map();

//   for (const item of items) {
//     const accumulatedQuantity = countMap.get(item.productId) ?? 0;
//     countMap.set(item.productId, accumulatedQuantity + item.quantity);
//   }

//   return countMap;
// }

// // -------------------------
// // Automatic tests
// // -------------------------

// function mapEquals(actualMap, expectedEntries) {
//   return JSON.stringify([...actualMap]) === JSON.stringify(expectedEntries);
// }

// console.log(
//   mapEquals(countProductQuantities(orderItems), [
//     ["P-101", 6],
//     ["P-102", 6],
//     ["P-103", 3],
//   ]),
// ); // true

// console.log(
//   mapEquals(
//     countProductQuantities([
//       { productId: "A", quantity: 10 },
//       { productId: "B", quantity: 2 },
//       { productId: "A", quantity: 5 },
//     ]),
//     [
//       ["A", 15],
//       ["B", 2],
//     ],
//   ),
// ); // true

// console.log(
//   mapEquals(countProductQuantities([{ productId: "ONLY", quantity: 7 }]), [
//     ["ONLY", 7],
//   ]),
// ); // true

// console.log(mapEquals(countProductQuantities([]), [])); // true

// Exercise 4 — Find the most frequent value

// Business rules:
//
// 1. Accept an array of values.
//
// 2. Count how many times each value occurs.
//
// 3. Return the value with the highest frequency.
//
// 4. If two or more values have the same highest frequency,
//    return whichever appeared FIRST in the input array.
//
// 5. An empty array should return undefined.
//
// Examples:
//
// ["BUG", "FEATURE", "BUG", "SUPPORT", "BUG"]
// returns "BUG"
//
// ["A", "B", "A", "B"]
// both occur twice, but "A" appeared first
// returns "A"

// function findMostFrequentValue(values) {
//   const countMap = new Map();

//   for (const value of values) {
//     const currentCount = countMap.get(value) ?? 0;
//     countMap.set(value, currentCount + 1);
//   }

//   let highFrequencyValue;
//   let highestFrequency = 0;
//   for (const [value, frequency] of countMap) {
//     if (frequency > highestFrequency) {
//       highestFrequency = frequency;
//       highFrequencyValue = value;
//     }
//   }

//   return highFrequencyValue;
// }

// // -------------------------
// // Automatic tests
// // -------------------------

// console.log(
//   findMostFrequentValue(["BUG", "FEATURE", "BUG", "SUPPORT", "BUG"]) === "BUG",
// ); // true

// console.log(findMostFrequentValue(["A", "B", "A", "B"]) === "A"); // true

// console.log(findMostFrequentValue([10, 20, 20, 30, 20, 10]) === 20); // true

// console.log(findMostFrequentValue([]) === undefined); // true

// Exercise 5 — Compare two strings by character frequency

// Business rules:
//
// 1. Return true if both strings contain exactly the same
//    characters with exactly the same frequencies.
//
// 2. Character order does NOT matter.
//
// 3. Comparison should be case-insensitive.
//    "A" and "a" should be treated as the same character.
//
// 4. Spaces count as characters.
//
// 5. Repeated characters must occur the same number of times.
//
// 6. Two empty strings should return true.
//
// 7. If the strings have different lengths, return false.
//
// Examples:
//
// "listen", "silent"
// true
//
// "hello", "helo"
// false
//
// "AaB", "baa"
// true

// function haveSameCharacterFrequency(firstText, secondText) {
//   if (firstText.length !== secondText.length) {
//     return false;
//   }

//   const firstTextCountMap = new Map();
//   const secondTextCountMap = new Map();

//   for (const character of firstText.toLowerCase()) {
//     const currentCount = firstTextCountMap.get(character) ?? 0;
//     firstTextCountMap.set(character, currentCount + 1);
//   }

//   for (const character of secondText.toLowerCase()) {
//     const currentCount = secondTextCountMap.get(character) ?? 0;
//     secondTextCountMap.set(character, currentCount + 1);
//   }

//   for (const [character, value] of firstTextCountMap) {
//     if (secondTextCountMap.get(character) !== value) {
//       return false;
//     }
//   }

//   return true;
// }

// // -------------------------
// // Automatic tests
// // -------------------------

// console.log(haveSameCharacterFrequency("listen", "silent") === true); // true

// console.log(haveSameCharacterFrequency("hello", "helo") === false); // true

// console.log(haveSameCharacterFrequency("AaB", "baa") === true); // true

// console.log(haveSameCharacterFrequency("a b", "ba ") === true); // true

// console.log(haveSameCharacterFrequency("", "") === true); // true

// console.log(haveSameCharacterFrequency("aabb", "abbb") === false); // true

printLog("");

// Week 3 Day 3 — Independent Challenge
// Find the product with the highest total quantity ordered

const purchases = [
  { productId: "P-101", quantity: 2 },
  { productId: "P-102", quantity: 5 },
  { productId: "P-101", quantity: 4 },
  { productId: "P-103", quantity: 3 },
  { productId: "P-102", quantity: 1 },
];

// Business rules:
//
// 1. Return the productId whose TOTAL ordered quantity is highest.
//
// 2. The same product may appear multiple times.
//    Its quantities must be accumulated.
//
// 3. If two products have the same highest total quantity,
//    return whichever product appeared first in the input array.
//
// 4. An empty array should return undefined.
//
// Expected:
// P-101 total = 6
// P-102 total = 6
// P-103 total = 3
//
// P-101 appeared before P-102,
// therefore the result should be "P-101".

function findHighestQuantityProduct(items) {
  const countMap = new Map();

  for (const item of items) {
    const accumlatedTotal = countMap.get(item.productId) ?? 0;
    countMap.set(item.productId, accumlatedTotal + item.quantity);
  }

  let mostRepeatedProductId;
  let highestQuantity = 0;

  for (const [productId, quantity] of countMap) {
    if (quantity > highestQuantity) {
      highestQuantity = quantity;
      mostRepeatedProductId = productId;
    }
  }

  return mostRepeatedProductId;
}

// -------------------------
// Automatic tests
// -------------------------

console.log(findHighestQuantityProduct(purchases) === "P-101"); // true

console.log(
  findHighestQuantityProduct([
    { productId: "A", quantity: 2 },
    { productId: "B", quantity: 10 },
    { productId: "A", quantity: 3 },
  ]) === "B",
); // true

console.log(
  findHighestQuantityProduct([
    { productId: "X", quantity: 5 },
    { productId: "Y", quantity: 5 },
  ]) === "X",
); // true

console.log(findHighestQuantityProduct([]) === undefined); // true
