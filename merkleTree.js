const { keccak256 } = require("js-sha3");

const hash = (transaction) => {
  return keccak256(transaction);
};

const transactions = [
  "Jerry sends 5ETH to Richmund",
  "Ola stakes token in uniswap",
  "James deploys a Lisk contract",
  "Debby calls setOwner()",
  "Jerry mints an NFT",
];

const merkleTree = (leaves) => {
  if (leaves.length === 0) return null;
  if (leaves.length === 1) return leaves[0];
  if (!Array.isArray(leaves)) return "input must be an array of transactions";
  if (!leaves.every((item) => typeof item === "string"))
    return "all elements in the array must be strings";

  let hashed = leaves.map(hash);
  console.log(hashed);
  while (hashed.length !== 1) {
    let branch = [];

    for (let i = 0; i < hashed.length; i += 2) {
      if (i + 1 < hashed.length) {
        branch.push(hash(hashed[i] + hashed[i + 1]));
      } else {
        branch.push(hash(hashed[i] + hashed[i]));
      }
    }
    hashed = branch;
  }
  return hashed[0];
};
console.log(merkleTree(transactions));

const merkleProof = () => {};
