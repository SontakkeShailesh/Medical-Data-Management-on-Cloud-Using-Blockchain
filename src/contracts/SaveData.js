export const SAVE_DATA_LIST_ADDRESS = "0x280Bb92c357351f3D8c960A4befB1626f0bBDf76"
export const SAVE_DATA_LIST_ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "senders",
    "outputs": [
      {
        "name": "totalMedicalReports",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x982fb9d8"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalMedicalReports",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xe7ee5d52"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "data",
    "outputs": [
      {
        "name": "hashOfOriginalDataString",
        "type": "string"
      },
      {
        "name": "secondTimeEncryptedString",
        "type": "string"
      },
      {
        "name": "sender",
        "type": "address"
      },
      {
        "name": "medReportId",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xf0ba8440"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "secondTimeEncryptedString",
        "type": "string"
      },
      {
        "name": "hashOfOriginalDataString",
        "type": "string"
      },
      {
        "name": "medReportId",
        "type": "string"
      }
    ],
    "name": "saveData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x2320b16b"
  }
]