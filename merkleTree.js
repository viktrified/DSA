const { keccak256 } = require("js-sha3");

function hash(transaction) {
  return keccak256(transaction);
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

// Generate proof for a transaction
function generateProof(transactions, targetTransaction) {
  let targetHash = hash(targetTransaction);
  const levels = [];
  let currentLevel = transactions.map(hash);

  while (currentLevel.length > 1) {
    const nextLevel = [];
    const levelProof = [];
    for (let i = 0; i < currentLevel.length; i += 2) {
      const left = currentLevel[i];
      const right = i + 1 < currentLevel.length ? currentLevel[i + 1] : left;

      if (left === targetHash || right === targetHash) {
        levelProof.push({
          hash: left === targetHash ? right : left,
          position: left === targetHash ? "right" : "left",
        });
        targetHash = hash(left + right);
      }

      nextLevel.push(hash(left + right));
    }
    levels.push(levelProof);
    currentLevel = nextLevel;
  }

  return levels.flat();
}

const transactions = [
  "Debby sends 5ETH to Richmund",
  "Ola calls getBalance()",
  "James deploys a Lisk contract",
  "Manji sends 1ETH to Emeka",
];

const hashedLeaves = transactions.map(hash);
const merkleRoot = merkleTree(hashedLeaves);

// Generate proof for a specific transaction
const proof = generateProof(transactions, transactions[0]);

// Verify the transaction
const verifyTransaction = (input, root, proof) => {
  let verificationHash = hash(input);

  for (const { hash, position } of proof) {
    if (position === "left") {
      verificationHash = hash(hash + verificationHash);
    } else if (position === "right") {
      verificationHash = hash(verificationHash + hash);
    } else {
      throw new Error("Invalid position in proof. Must be 'left' or 'right'.");
    }
  }

  return verificationHash === root;
};

console.log(verifyTransaction(transactions[0], merkleRoot, proof)); // Should return true
