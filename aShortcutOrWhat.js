const fs = require("fs");

// Try to read input
let input;
if (process.stdin.isTTY) {
  // Interactive mode: Ask for input when running locally
  input = require("readline-sync").question("Enter an integer: ").trim();
} else {
  // Non-interactive mode: Read from standard input (for Kattis)
  input = fs.readFileSync(0, "utf-8").trim();
}

// Parse the input as an integer
const n = parseInt(input);

// Apply the formula
const result = 3 * n + 5;

// Output the result
console.log(result);
