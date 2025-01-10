const input = [2, 7, 11, 15];
const input2 = [1, 2, 3, 4, 5];
const input3 = [
  1, 2, 3, 2, 33, 2, 4, 2, 1212, 3, 4, 2, 4, 4, 2, 4, 2, 2, 4, 34, 2, 2, 4, 2,
];
const target = 6;

const twoNumbers = (arr, target) => {
  let output = [];

  if (arr.length === 0) {
    return "Input can't be an empty array";
  }

  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "All input elements must be of type number";
    }

    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        output.push(i, j);
        return output;
      }
    }
  }
};

console.log(twoNumbers(input3, target));
