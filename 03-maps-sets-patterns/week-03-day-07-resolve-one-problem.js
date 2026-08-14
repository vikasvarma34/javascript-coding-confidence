console.log("Let's Come On!");

// Week 3 Day 7 — Re-solve One Problem
// Problem: Two Sum

/*
Business rules:
- You receive an array of numbers and a target.
- Return the indexes of two different numbers whose sum equals the target.
- You may assume exactly one valid pair exists.
- Do not use the same array element twice.
- Return the indexes in an array.
*/

function twoSum(numbers, target) {
  const numbersMap = new Map();
  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];
    const requiredNumber = target - currentNumber;

    if (numbersMap.has(requiredNumber)) {
      return [numbersMap.get(requiredNumber), index];
    }

    numbersMap.set(currentNumber, index);
  }

  return null;
}

console.log(
  "----- Test 1 -----",
  JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]),
);
console.log(twoSum([2, 7, 11, 15], 9));

console.log(
  "----- Test 2 -----",
  JSON.stringify(twoSum([3, 2, 4], 6)) === JSON.stringify([1, 2]),
);

console.log(
  "----- Test 3: duplicate values -----",
  JSON.stringify(twoSum([3, 3], 6)) === JSON.stringify([0, 1]),
);

console.log(
  "----- Test 4 -----",
  JSON.stringify(twoSum([-1, -2, -3, -4, -5], -8)) === JSON.stringify([2, 4]),
);

console.log("----- Test 5: no pair -----", twoSum([1, 2, 3], 10) === null);
console.log(twoSum([1, 2, 3], 10));
