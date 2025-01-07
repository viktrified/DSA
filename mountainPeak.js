let input = [1, 2, 1, 3, 2, 1, 5, 3, 6, 1];

const mountainPeak = (arr) => {
  let output = [];

  for (i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      output.push(arr[i]);
    }
  }
  return output;
};
console.log(mountainPeak(input));
