let input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// output = 6;

const trappedWater = (arr) => {
  let output = [];

  for (i = 0; i < arr.length; i++) {
    let previous = arr[i - 1];
    let next = arr[i + 1];
    let diffN = arr[i] - next;
    let diffP = arr[i] - previous;

    if (arr[i] > previous && arr[i] > next) {
      output.push(diffN);
    } else if (arr[i] < previous && arr[i] > next) {
      output.push(diffN + diffP);
    }
    return output;
  }
};
console.log(trappedWater(input));
