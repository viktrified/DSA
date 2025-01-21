let input = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // output = 49
let input2 = [1, 1]; //output = 1

const highestAmount = (arr) => {
  let output = [];
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      let k = j - i;
      if (arr[i] < arr[j] || arr[i] === arr[j]) {
        output.push(arr[i] * k);
      } else {
        output.push(arr[j] * k);
      }
    }
  }

  let highestNumber = output.sort((a, b) => b - a);
  return highestNumber[0];
};

console.log(highestAmount(input));
