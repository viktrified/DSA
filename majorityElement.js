const input = [1, 2, 4, 2, 5, 2, 9];

const mostFrequentElement = (arr) => {
  if (arr.length === 0) {
    return "Input can't be an empty array";
  }

  let maxCount = 0;
  let output = null;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "All input elements must be of type number";
    }

    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      output = arr[i];
    }
  }

  return output;
};
console.log(mostFrequentElement(input));
