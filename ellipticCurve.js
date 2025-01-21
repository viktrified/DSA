const elliptic = require("elliptic");
const EC = elliptic.ec;
const ec = new EC("secp256k1"); // secp256k1 is the curve used by Ethereum

// Private key (as a hex string)
const privateKey =
  "d3083862f91bc01928112d9549803c0d3b2e4209fc9529654dde38ba5132944d";

// Derive the public key from the private key
const keyPair = ec.keyFromPrivate(privateKey);
const publicKey = keyPair.getPublic("hex"); // 'hex' gives the public key as a hex string

console.log("Public Key:", publicKey);
// 0xff55eec7958da1551f5309af4c6df926253fc661;