console.log(0);
console.log(1);

let count = 2;

function fibonacci(prev1, prev2) {
  if (count <= 19) {
    let newFibo = prev1 + prev2;
    console.log(newFibo);
    count++;
    fibonacci(newFibo, prev1); // Recursive call with updated values
  } else {
    return;
  }
}

fibonacci(1, 0);


// let prev2 = 0;
// let prev1 = 1;

// console.log(prev2);
// console.log(prev1);

// for (let i = 0; i < 18; i++) {
//   let newFibo = prev1 + prev2;
//   console.log(newFibo);
//   prev2 = prev1;
//   prev1 = newFibo;
// }
