const { keccak256 } = require("js-sha3");

// Example input data (can be a string, buffer, or other data types)
const input =
  "0x046b1f3f0754477e71b46e35f7071a21e234c1d88b8da9ebd3997043dd6db1c26a9ada56aa9cd3e93d077ad5db6c25cfc38e5534db6bd5b859e691146b9b42d932";

// Compute the Keccak-256 hash (returns a hex string)
const hash = keccak256(input);

console.log("Keccak-256 Hash:", hash);
