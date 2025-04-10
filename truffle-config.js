module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Replace with your Ethereum node host if necessary
      port: 7545,
      network_id: "*",   // Match any network id
      gas: 5000000       // Specify the gas limit for transactions
    }
  },
  compilers: {
    solc: {
      version: "0.5.16", // Specify the Solidity compiler version
      settings: {
        optimizer: {
          enabled: true, // Enable the optimizer for smart contracts
          runs: 200      // Number of runs for the optimizer
        },
      }
    }
  }
};
