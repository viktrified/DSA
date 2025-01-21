const crypto = require("crypto");

function hash(transaction) {
  return crypto.createHash("sha256").update(transaction).digest("hex");
}

function merkleTree(leaves) {
  if (leaves.length === 0) return null;

  if (leaves.length === 1) return leaves[0];
  const nextLevel = [];
  for (let i = 0; i < leaves.length; i += 2) {
    const left = leaves[i];
    const right = i + 1 < leaves.length ? leaves[i + 1] : leaves[i];
    const parentHash = hash(left + right);
    nextLevel.push(parentHash);
  }

  return merkleTree(nextLevel);
}

const data = [
  "Debby sends 5ETH to Adam",
  "Ola called getBalance()",
  "James deployed a Lisk contract",
  "Manji sends 1ETH to Emeka",
];
const hashedLeaves = data.map(hash);
const merkleRoot = merkleTree(hashedLeaves);

console.log("Merkle Root:", merkleRoot);
