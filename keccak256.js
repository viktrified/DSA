const { keccak256 } = require("js-sha3");

// Example input data (can be a string, buffer, or other data types)
const input =
  "04f9f9a49b96552af3edd0ec7231f29cb530db4c2e6a9e15110cf77ee6469a5c30229228138e0676f1a4a91cb9322aad8e9e095d3feb3d5b1025e8a38e1e77dee3";

  console.log(input.length)
// Compute the Keccak-256 hash (returns a hex string)
const hash = keccak256(input);

// console.log("Keccak-256 Hash:", hash);
