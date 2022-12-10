export const WHITELIST_CONTRACT_ADDRESS = "0x657cE61209B409bA5B946A2436Fbe0eC3147071A";
export const abi =  [
  {
    "type": "constructor",
    "payable": false,
    "inputs": [{ "type": "uint8", "name": "_maxWhitelistedAddresses" }]
  },
  {
    "type": "function",
    "name": "addAddressToWhitelist",
    "constant": false,
    "payable": false,
    "inputs": [],
    "outputs": []
  },
  {
    "type": "function",
    "name": "maxWhitelistedAddresses",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [],
    "outputs": [{ "type": "uint8" }]
  },
  {
    "type": "function",
    "name": "numAddressesWhitelisted",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [],
    "outputs": [{ "type": "uint8" }]
  },
  {
    "type": "function",
    "name": "whitelistedAddresses",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [{ "type": "address" }],
    "outputs": [{ "type": "bool" }]
  }
]