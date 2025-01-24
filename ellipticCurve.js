




// const EC = require("elliptic").ec;
// const { keccak256, toChecksumAddress } = require("ethereumjs-util");

// const ec = new EC("secp256k1");


// function generatePublicKey(privateKey) {
//   const keyPair = ec.keyFromPrivate(privateKey, "hex");
//   const publicKey = keyPair.getPublic().encode("hex");
//   return publicKey;
// }

// const privateKey =
//   "d3083862f91bc01928112d9549803c0d3b2e4209fc9529654dde38ba5132944d";
// let publicKey = generatePublicKey(privateKey);

// console.log("Public Key:", publicKey);


// function generateAddressFromPublicKey(publicKey) {
//   if (!publicKey.startsWith("04")) {
//     throw new Error(
//       'Invalid public key: Ensure it is uncompressed and starts with "04".'
//     );
//   }

//   const publicKeyBuffer = Buffer.from(publicKey.slice(2), "hex");
//   const publicKeyHash = keccak256(publicKeyBuffer);
//   const address = "0x" + publicKeyHash.slice(-20).toString("hex"); // Add "0x" prefix
//   return toChecksumAddress(address);
// }

// let publicKey =
//   "04f9f9a49b96552af3edd0ec7231f29cb530db4c2e6a9e15110cf77ee6469a5c30229228138e0676f1a4a91cb9322aad8e9e095d3feb3d5b1025e8a38e1e77dee3";
// const address = generateAddressFromPublicKey(publicKey);

// console.log("Generated Address:", address);



const crypto = require("crypto");


function generatePrivateKey() {
  const privateKey = crypto.randomBytes(32);

  return privateKey.toString("hex");
}

const privateKey = generatePrivateKey();
console.log("Generated Private Key:", privateKey);
