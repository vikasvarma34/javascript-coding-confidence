// // // // console.log("Let's Come On!");

// // // // // ============================================================
// // // // // Week 3 Day 6 — Problem 1: Contains Duplicate
// // // // // ============================================================

// // // // // Business Rules:
// // // // //
// // // // // 1. Return true if any number appears more than once.
// // // // // 2. Return false if every number appears exactly once.
// // // // // 3. Do not mutate the input array.
// // // // // 4. The array may be empty.
// // // // // 5. Negative numbers and zero are valid values.
// // // // // 6. Try to solve this using what we learned this week,
// // // // //    rather than comparing every number with every other number.

// // // // function containsDuplicate(numbers) {
// // // //   return new Set(numbers).size !== numbers.length;
// // // // }

// // // // // ------------------------------------------------------------
// // // // // Test 1 — duplicate exists
// // // // // Expected: true
// // // // // ------------------------------------------------------------

// // // // const test1 = containsDuplicate([1, 2, 3, 1]);

// // // // console.log("Test 1:", test1 === true);

// // // // // ------------------------------------------------------------
// // // // // Test 2 — all values unique
// // // // // Expected: false
// // // // // ------------------------------------------------------------

// // // // const test2 = containsDuplicate([1, 2, 3, 4]);

// // // // console.log("Test 2:", test2 === false);

// // // // // ------------------------------------------------------------
// // // // // Test 3 — duplicate negative number
// // // // // Expected: true
// // // // // ------------------------------------------------------------

// // // // const test3 = containsDuplicate([-1, 0, 5, -1]);

// // // // console.log("Test 3:", test3 === true);

// // // // // ------------------------------------------------------------
// // // // // Test 4 — empty array
// // // // // Expected: false
// // // // // ------------------------------------------------------------

// // // // const test4 = containsDuplicate([]);

// // // // console.log("Test 4:", test4 === false);

// // // // // ------------------------------------------------------------
// // // // // Test 5 — single value
// // // // // Expected: false
// // // // // ------------------------------------------------------------

// // // // const test5 = containsDuplicate([10]);

// // // // console.log("Test 5:", test5 === false);

// // // // console.log("---");

// // // // ============================================================
// // // // Week 3 Day 6 — Problem 2: Valid Anagram
// // // // ============================================================

// // // // Business Rules:
// // // //
// // // // 1. Two strings are anagrams when they contain exactly the
// // // //    same characters with exactly the same frequencies.
// // // //
// // // // 2. Character order does not matter.
// // // //
// // // // 3. Character frequency DOES matter.
// // // //    Example: "aab" and "abb" are NOT anagrams.
// // // //
// // // // 4. Treat uppercase and lowercase as different characters.
// // // //
// // // // 5. Empty strings are valid.
// // // //
// // // // 6. Do not sort the strings for this exercise.
// // // //    Use the patterns practised during Week 3.

// // // // function isAnagram(firstString, secondString) {
// // // //   const firstStringFrequencyMap = new Map();
// // // //   const secondStringFrequencyMap = new Map();

// // // //   for (const character of firstString) {
// // // //     const currentCount = firstStringFrequencyMap.get(character) ?? 0;
// // // //     firstStringFrequencyMap.set(character, currentCount + 1);
// // // //   }

// // // //   for (const character of secondString) {
// // // //     const currentCount = secondStringFrequencyMap.get(character) ?? 0;
// // // //     secondStringFrequencyMap.set(character, currentCount + 1);
// // // //   }

// // // //   if (firstStringFrequencyMap.size !== secondStringFrequencyMap.size) {
// // // //     return false;
// // // //   }

// // // //   for (const [char, value] of firstStringFrequencyMap) {
// // // //     const secondValue = secondStringFrequencyMap.get(char);

// // // //     if (secondValue !== value) {
// // // //       return false;
// // // //     }
// // // //   }

// // // //   return true;
// // // // }

// // // // // ------------------------------------------------------------
// // // // // Test 1
// // // // // "anagram" and "nagaram"
// // // // // Expected: true
// // // // // ------------------------------------------------------------

// // // // console.log("Anagram Test 1:", isAnagram("anagram", "nagaram") === true);

// // // // // ------------------------------------------------------------
// // // // // Test 2
// // // // // Expected: false
// // // // // ------------------------------------------------------------

// // // // console.log("Anagram Test 2:", isAnagram("rat", "car") === false);

// // // // // ------------------------------------------------------------
// // // // // Test 3 — frequencies matter
// // // // // Expected: false
// // // // // ------------------------------------------------------------

// // // // console.log("Anagram Test 3:", isAnagram("aab", "abb") === false);

// // // // // ------------------------------------------------------------
// // // // // Test 4 — empty strings
// // // // // Expected: true
// // // // // ------------------------------------------------------------

// // // // console.log("Anagram Test 4:", isAnagram("", "") === true);

// // // // // ------------------------------------------------------------
// // // // // Test 5 — case sensitive
// // // // // Expected: false
// // // // // ------------------------------------------------------------

// // // // console.log("Anagram Test 5:", isAnagram("Listen", "Silent") === false);

// // // console.log("-----");

// // // // ============================================================
// // // // Week 3 Day 6 — Problem 3: Two Sum
// // // // ============================================================

// // // // Business Rules:
// // // //
// // // // 1. Given an array of numbers and a target,
// // // //    return the indexes of two different numbers
// // // //    whose values add up to the target.
// // // //
// // // // 2. Assume exactly one valid answer exists.
// // // //
// // // // 3. You cannot use the same array element twice.
// // // //
// // // // 4. Return the indexes, not the values.
// // // //
// // // // 5. Try to avoid checking every possible pair.
// // // //
// // // // Example:
// // // // numbers = [2, 7, 11, 15]
// // // // target = 9
// // // // Expected: [0, 1]

// // // function twoSum(numbers, target) {
// // //   const numbersMap = new Map();

// // //   for (let index = 0; index < numbers.length; index++) {
// // //     const currentNumber = numbers[index];
// // //     const neededNumber = target - currentNumber;

// // //     if (numbersMap.has(neededNumber)) {
// // //       return [numbersMap.get(neededNumber), index];
// // //     }

// // //     numbersMap.set(currentNumber, index);
// // //   }

// // //   return [];
// // // }

// // // // ------------------------------------------------------------
// // // // Test 1
// // // // Expected: [0, 1]
// // // // ------------------------------------------------------------

// // // console.log(
// // //   "Two Sum Test 1:",
// // //   JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]),
// // // );

// // // // ------------------------------------------------------------
// // // // Test 2
// // // // Expected: [1, 2]
// // // // ------------------------------------------------------------

// // // console.log(
// // //   "Two Sum Test 2:",
// // //   JSON.stringify(twoSum([3, 2, 4], 6)) === JSON.stringify([1, 2]),
// // // );

// // // // ------------------------------------------------------------
// // // // Test 3
// // // // Same value, different indexes
// // // // Expected: [0, 1]
// // // // ------------------------------------------------------------

// // // console.log(
// // //   "Two Sum Test 3:",
// // //   JSON.stringify(twoSum([3, 3], 6)) === JSON.stringify([0, 1]),
// // // );

// // // // ------------------------------------------------------------
// // // // Test 4
// // // // Includes negative numbers
// // // // Expected: [0, 2]
// // // // ------------------------------------------------------------

// // // console.log(
// // //   "Two Sum Test 4:",
// // //   JSON.stringify(twoSum([-3, 4, 3, 90], 0)) === JSON.stringify([0, 2]),
// // // );

// // // // ------------------------------------------------------------
// // // // Test 5
// // // // Expected: [2, 3]
// // // // ------------------------------------------------------------

// // // console.log(
// // //   "Two Sum Test 5:",
// // //   JSON.stringify(twoSum([1, 5, 8, 2], 10)) === JSON.stringify([2, 3]),
// // // );

// // // ============================================================
// // // Extra Practice 1 — Duplicate Request IDs
// // // ============================================================

// // // Business Rules:
// // //
// // // 1. Return true if any request ID appears more than once.
// // // 2. Return false if all request IDs are unique.
// // // 3. Do not mutate the input.
// // // 4. Empty array should return false.

// // function hasDuplicateRequestId(requestIds) {
// //   return new Set(requestIds).size !== requestIds.length;
// // }

// // console.log(
// //   "Test 1:",
// //   hasDuplicateRequestId(["REQ-1", "REQ-2", "REQ-1"]) === true,
// // );

// // console.log(
// //   "Test 2:",
// //   hasDuplicateRequestId(["REQ-1", "REQ-2", "REQ-3"]) === false,
// // );

// // console.log("Test 3:", hasDuplicateRequestId([]) === false);

// // console.log("Test 4:", hasDuplicateRequestId(["REQ-7"]) === false);

// // ============================================================
// // Extra Practice 2 — Same Product Quantities
// // ============================================================

// // Business Rules:
// //
// // 1. Each array contains product IDs.
// // 2. Return true when both arrays contain exactly the same
// //    product IDs with exactly the same frequencies.
// // 3. Order does NOT matter.
// // 4. Frequency DOES matter.
// // 5. Empty arrays compared with empty arrays should return true.
// //
// // Examples:
// //
// // ["P1", "P2", "P1"] and ["P2", "P1", "P1"] => true
// // ["P1", "P2"] and ["P1", "P1"]             => false

// function haveSameProductQuantities(firstProducts, secondProducts) {
//   const firstProductsMap = new Map();
//   const secondProductsMap = new Map();

//   for (const product of firstProducts) {
//     const currentCount = firstProductsMap.get(product) ?? 0;
//     firstProductsMap.set(product, currentCount + 1);
//   }

//   for (const product of secondProducts) {
//     const currentCount = secondProductsMap.get(product) ?? 0;
//     secondProductsMap.set(product, currentCount + 1);
//   }

//   if (firstProductsMap.size !== secondProductsMap.size) {
//     return false;
//   }

//   for (const [product, value] of firstProductsMap) {
//     const secondProductValue = secondProductsMap.get(product);

//     if (value !== secondProductValue) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(
//   "Test 1:",
//   haveSameProductQuantities(["P1", "P2", "P1"], ["P2", "P1", "P1"]) === true,
// );

// console.log(
//   "Test 2:",
//   haveSameProductQuantities(["P1", "P2"], ["P1", "P1"]) === false,
// );

// console.log(
//   "Test 3:",
//   haveSameProductQuantities(["P1", "P2", "P3"], ["P3", "P2", "P1"]) === true,
// );

// console.log("Test 4:", haveSameProductQuantities([], []) === true);

// console.log(
//   "Test 5:",
//   haveSameProductQuantities(["P5", "P5", "P8"], ["P5", "P8", "P8"]) === false,
// );

console.log("---");

// ============================================================
// Extra Practice 3 — Find Two Prices
// ============================================================

// Business Rules:
//
// 1. Given an array of prices and a target total,
//    return the indexes of two different prices
//    that add up to the target.
//
// 2. Assume exactly one valid answer exists.
//
// 3. Return indexes, not values.
//
// 4. Do not use the same element twice.
//
// 5. Try to solve it using a Map in one pass.
//
// Example:
// prices = [12, 8, 20, 5]
// target = 25
// Expected: [2, 3]

function findTwoPrices(prices, target) {
  const pricesMap = new Map();

  for (let index = 0; index < prices.length; index++) {
    const currentPrice = prices[index];
    const requiredPrice = target - currentPrice;

    if (pricesMap.has(requiredPrice)) {
      return [pricesMap.get(requiredPrice), index];
    }

    pricesMap.set(currentPrice, index);
  }

  return [];
}

console.log(
  "Test 1:",
  JSON.stringify(findTwoPrices([12, 8, 20, 5], 25)) === JSON.stringify([2, 3]),
);

console.log(
  "Test 2:",
  JSON.stringify(findTwoPrices([4, 11, 6, 9], 15)) === JSON.stringify([0, 1]),
);

console.log(
  "Test 3:",
  JSON.stringify(findTwoPrices([7, 7], 14)) === JSON.stringify([0, 1]),
);

console.log(
  "Test 4:",
  JSON.stringify(findTwoPrices([-5, 2, 10, 15], 5)) === JSON.stringify([0, 2]),
);

console.log(
  "Test 5:",
  JSON.stringify(findTwoPrices([3, 1, 8, 12], 20)) === JSON.stringify([2, 3]),
);
