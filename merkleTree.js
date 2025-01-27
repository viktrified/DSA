const { keccak256 } = require("js-sha3");

const hash = (transaction) => {
  return keccak256(transaction);
};

const transactions = [
  "Jerry sends 5ETH to Richmund",
  "Ola stakes token in uniswap",
  "James deploys a Lisk contract",
  "Debby calls setOwner()",
  "Manji mints an NFT",
];
const root = "589ea9533cff28eb645c4109cd973e2f0156ef4dca80e2e6bcf530e7fd3cda1b";
const find = transactions.indexOf(transactions[4]);

const merkleTree = (leaves) => {
  if (leaves.length === 0) return null;
  if (leaves.length === 1) return leaves[0];
  if (!Array.isArray(leaves)) return "input must be an array of transactions";
  if (!leaves.every((item) => typeof item === "string"))
    return "all elements in the array must be strings";

  let hashed = leaves.map(hash);
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
// console.log(merkleTree(transactions));

const merkleProof = (root, trans, find) => {
  if (typeof root !== "string") return "merkle root must be a string";
  if (!trans.every((item) => typeof item === "string"))
    return "all elements in the array must be strings";
  if (typeof find !== "number")
    return "transaction index you're looking to verify must be a number";
  if (trans.length === 0) return null;
  if (trans.length === 1) return true;

  let proofRoot = merkleTree(trans);
  if (proofRoot === root) {
    console.log(true);
  } else {
    console.log(false);
  }
};
merkleProof(root, transactions, find);
