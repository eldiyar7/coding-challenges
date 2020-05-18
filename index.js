/**
 * Moving Zeros To The End
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 */

const moveZeros = (arr) =>
  arr.filter((i) => i !== 0).concat(arr.filter((i) => i === 0));

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]

/**
 * Write a function named first_non_repeating_letter that takes a string input,
 * and returns the first character that is not repeated anywhere in the string.
 */

const first_non_repeating_letter = (s) => {
  return (
    s.split("").find((char, index) => {
      const res = s.substring(0, index) + s.substring(index + 1, s.length);
      if (!res.toLowerCase().includes(char.toLowerCase())) {
        return char;
      } else {
        return "";
      }
    }) || ""
  );
};

console.log(first_non_repeating_letter("sTreSS")); // returns "T"

/**
 * Write a function that takes an array of numbers (integers for the tests) and a target number.
 * It should find two different items in the array that, when added together, give the target value.
 */

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 2, 3], 4)); // returns [0,2]
